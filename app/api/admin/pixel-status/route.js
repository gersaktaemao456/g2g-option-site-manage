import { NextResponse } from "next/server";

const repo = "gersaktaemao456/g2g-option-site-manage";
const path = "data/site-config.json";
const branch = "main";
const headers = () => ({
  Authorization: "Bearer " + process.env.GITHUB_TOKEN,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28"
});
function authorized(req) {
  return req.cookies.get("g2g_admin")?.value === "ok";
}
export async function GET(req) {
  if (!authorized(req)) return NextResponse.json({ error: "กรุณาเข้าสู่ระบบ" }, { status: 401 });
  if (!process.env.GITHUB_TOKEN) return NextResponse.json({ error: "ยังไม่ได้ตั้งค่า GITHUB_TOKEN" }, { status: 503 });
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/contents/${path}?ref=${branch}`, {
      headers: headers(),
      cache: "no-store"
    });
    if (!response.ok) throw new Error("อ่านค่าพิกเซลจาก GitHub ไม่สำเร็จ");
    const file = await response.json();
    const config = JSON.parse(Buffer.from(file.content.replace(/\\n/g, ""), "base64").toString("utf8"));
    const metaPixelIdConfigured = Boolean(String(config.metaPixelId || "").trim());
    const tiktokPixelIdConfigured = Boolean(String(config.tiktokPixelId || "").trim());
    const metaAccessTokenConfigured = Boolean(process.env.META_ACCESS_TOKEN || process.env.META_CAPI_ACCESS_TOKEN);
    const tiktokAccessTokenConfigured = Boolean(process.env.TIKTOK_ACCESS_TOKEN || process.env.TIKTOK_EVENTS_API_ACCESS_TOKEN);
    return NextResponse.json({
      meta: {
        pixelIdConfigured: metaPixelIdConfigured,
        accessTokenConfigured: metaAccessTokenConfigured,
        ready: metaPixelIdConfigured && metaAccessTokenConfigured
      },
      tiktok: {
        pixelIdConfigured: tiktokPixelIdConfigured,
        accessTokenConfigured: tiktokAccessTokenConfigured,
        ready: tiktokPixelIdConfigured && tiktokAccessTokenConfigured
      }
    });
  } catch (error) {
    return NextResponse.json({ error: error.message || "ตรวจสอบสถานะ Pixel ไม่สำเร็จ" }, { status: 500 });
  }
}

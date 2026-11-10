import { NextResponse } from "next/server";

const fallback = {
  brand: "G2G OPTION", eyebrow: "OFFICIAL WEBSITE",
  headline: "ก้าวเข้าสู่ประสบการณ์ใหม่", highlight: "ในแบบ G2G OPTION",
  description: "ยินดีต้อนรับสู่ G2G OPTION เลือกช่องทางที่ต้องการและเชื่อมต่อกับเราได้อย่างสะดวก",
  registerUrl: "#", loginUrl: "#", contactUrl: "#",
  registerLabel: "สมัครสมาชิก", loginLabel: "เข้าสู่ระบบ", contactLabel: "ติดต่อเรา",
  metaPixelId: "", tiktokPixelId: ""
};

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return NextResponse.json(fallback);
  try {
    const res = await fetch("https://api.github.com/repos/gersaktaemao456/g2g-option-site-manage/contents/data/site-config.json?ref=main", {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28" },
      cache: "no-store"
    });
    if (!res.ok) return NextResponse.json(fallback);
    const file = await res.json();
    return NextResponse.json(JSON.parse(Buffer.from(file.content, "base64").toString("utf8")));
  } catch {
    return NextResponse.json(fallback);
  }
}
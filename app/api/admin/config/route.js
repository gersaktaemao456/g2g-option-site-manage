import { NextResponse } from "next/server";

const repo = "gersaktaemao456/g2g-option-site-manage";
const path = "data/site-config.json";
const headers = () => ({
  Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28"
});

export async function PUT(request) {
  const password = request.headers.get("x-admin-password");
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "รหัสผ่านไม่ถูกต้อง หรือยังไม่ได้ตั้งค่า ADMIN_PASSWORD" }, { status: 401 });
  }
  if (!process.env.GITHUB_TOKEN) {
    return NextResponse.json({ error: "ยังไม่ได้ตั้งค่า GITHUB_TOKEN ใน Vercel" }, { status: 503 });
  }
  try {
    const config = await request.json();
    const current = await fetch(`https://api.github.com/repos/${repo}/contents/${path}?ref=main`, { headers: headers(), cache: "no-store" });
    if (!current.ok) throw new Error("อ่านไฟล์ตั้งค่าจาก GitHub ไม่สำเร็จ");
    const file = await current.json();
    const content = Buffer.from(JSON.stringify(config, null, 2), "utf8").toString("base64");
    const saved = await fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
      method: "PUT", headers: { ...headers(), "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Update G2G OPTION site settings", content, sha: file.sha, branch: "main" })
    });
    if (!saved.ok) throw new Error("GitHub ปฏิเสธการบันทึก ตรวจสอบสิทธิ์ Contents: Read and write ของ Token");
    return NextResponse.json({ ok: true, message: "บันทึกการตั้งค่าแล้ว" });
  } catch (error) {
    return NextResponse.json({ error: error.message || "บันทึกไม่สำเร็จ" }, { status: 500 });
  }
}
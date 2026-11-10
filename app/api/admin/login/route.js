import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const { password } = await req.json();
    if (!process.env.ADMIN_PASSWORD) return NextResponse.json({error:"ยังไม่ได้ตั้งค่า ADMIN_PASSWORD ใน Vercel"},{status:500});
    if (password !== process.env.ADMIN_PASSWORD) return NextResponse.json({error:"รหัสผ่านไม่ถูกต้อง"},{status:401});
    const res=NextResponse.json({ok:true});
    res.cookies.set("g2g_admin","ok",{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"strict",path:"/",maxAge:28800});
    return res;
  } catch { return NextResponse.json({error:"คำขอไม่ถูกต้อง"},{status:400}); }
}
export async function DELETE() {
 const res=NextResponse.json({ok:true});
 res.cookies.set("g2g_admin","",{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"strict",path:"/",maxAge:0});
 return res;
}
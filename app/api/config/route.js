import {NextResponse} from "next/server";
const fallback={brand:"G2G OPTION",eyebrow:"OFFICIAL WEBSITE",headline:"ก้าวเข้าสู่ประสบการณ์ใหม่",highlight:"ในแบบ G2G OPTION",description:"ยินดีต้อนรับสู่ G2G OPTION",registerLabel:"สมัครสมาชิก",registerUrl:"",loginLabel:"เข้าสู่ระบบ",loginUrl:"",contactLabel:"ติดต่อเรา",contactUrl:"",logoUrl:"",bannerUrl:"",metaPixelId:"",tiktokPixelId:"",lineUrl:"",lineTagId:""};
const publicKeys=Object.keys(fallback);
export async function GET(){
 try{
  const token=process.env.GITHUB_TOKEN;if(!token)return NextResponse.json(fallback);
  const r=await fetch("https://api.github.com/repos/gersaktaemao456/g2g-option-site-manage/contents/data/site-config.json?ref=main",{headers:{Authorization:"Bearer "+token,Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28"},cache:"no-store"});
  if(!r.ok)return NextResponse.json(fallback);
  const file=await r.json();const config=JSON.parse(Buffer.from(file.content.replace(/\\n/g,""),"base64").toString("utf8"));
  const safe={};for(const key of publicKeys)safe[key]=config[key]??fallback[key];
  return NextResponse.json(safe);
 }catch{return NextResponse.json(fallback)}
}
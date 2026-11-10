import { NextResponse } from "next/server";
const repo="gersaktaemao456/g2g-option-site-manage";
const path="data/site-config.json";
const branch="main";
const headers=()=>({Authorization:"Bearer "+process.env.GITHUB_TOKEN,Accept:"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28"});
function authorized(req){return req.cookies.get("g2g_admin")?.value==="ok"}
async function readFile(){return fetch(`https://api.github.com/repos/${repo}/contents/${path}?ref=${branch}`,{headers:headers(),cache:"no-store"})}
export async function GET(req){
 if(!authorized(req)) return NextResponse.json({error:"กรุณาเข้าสู่ระบบ"},{status:401});
 if(!process.env.GITHUB_TOKEN) return NextResponse.json({error:"ยังไม่ได้ตั้งค่า GITHUB_TOKEN"},{status:503});
 try{
  const r=await readFile();if(!r.ok)throw new Error("อ่านค่าจาก GitHub ไม่สำเร็จ ("+r.status+")");
  const f=await r.json();const config=JSON.parse(Buffer.from(f.content.replace(/\\n/g,""),"base64").toString("utf8"));
  return NextResponse.json({config});
 }catch(e){return NextResponse.json({error:e.message||"โหลดการตั้งค่าไม่สำเร็จ"},{status:500})}
}
export async function PUT(req){
 if(!authorized(req)) return NextResponse.json({error:"กรุณาเข้าสู่ระบบ"},{status:401});
 if(!process.env.GITHUB_TOKEN) return NextResponse.json({error:"ยังไม่ได้ตั้งค่า GITHUB_TOKEN"},{status:503});
 try{
  const incoming=await req.json();
  if(!incoming||typeof incoming!=="object"||Array.isArray(incoming))return NextResponse.json({error:"รูปแบบข้อมูลไม่ถูกต้อง"},{status:400});
  const current=await readFile();if(!current.ok)throw new Error("อ่านค่าปัจจุบันจาก GitHub ไม่สำเร็จ");
  const file=await current.json();
  const previous=JSON.parse(Buffer.from(file.content.replace(/\\n/g,""),"base64").toString("utf8"));
  const config={...previous,...incoming};
  const url=`https://api.github.com/repos/${repo}/contents/${path}`;
  const saved=await fetch(url,{method:"PUT",headers:{...headers(),"Content-Type":"application/json"},body:JSON.stringify({message:"Update G2G OPTION settings",content:Buffer.from(JSON.stringify(config,null,2),"utf8").toString("base64"),sha:file.sha,branch})});
  const result=await saved.json();if(!saved.ok)throw new Error(result.message||"GitHub บันทึกไม่สำเร็จ");
  return NextResponse.json({ok:true,message:"บันทึกการตั้งค่าลง GitHub แล้ว"});
 }catch(e){return NextResponse.json({error:e.message||"บันทึกไม่สำเร็จ"},{status:500})}
}
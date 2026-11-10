"use client";

import { useEffect, useState } from "react";

const fields = [
  ["brand", "ชื่อแบรนด์"], ["eyebrow", "ข้อความเล็กเหนือหัวข้อ"],
  ["headline", "หัวข้อหลัก"], ["highlight", "ข้อความเน้นสี"],
  ["description", "คำอธิบาย"], ["registerLabel", "ข้อความปุ่มสมัครสมาชิก"],
  ["registerUrl", "ลิงก์สมัครสมาชิก"], ["loginLabel", "ข้อความปุ่มเข้าสู่ระบบ"],
  ["loginUrl", "ลิงก์เข้าสู่ระบบ"], ["contactLabel", "ข้อความปุ่มติดต่อ"],
  ["contactUrl", "ลิงก์ติดต่อ"], ["metaPixelId", "Meta Pixel ID"],
  ["tiktokPixelId", "TikTok Pixel ID"]
];

export default function AdminPage() {
  const [config, setConfig] = useState({});
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [status, setStatus] = useState("");
  useEffect(() => { fetch("/api/config").then(r => r.json()).then(setConfig).catch(() => {}); }, []);
  function update(key, value) { setConfig(old => ({ ...old, [key]: value })); }
  async function save() {
    setStatus("กำลังบันทึก...");
    const res = await fetch("/api/admin/config", { method: "PUT", headers: { "Content-Type": "application/json", "x-admin-password": password }, body: JSON.stringify(config) });
    const data = await res.json();
    setStatus(res.ok ? "บันทึกสำเร็จ" : (data.error || "บันทึกไม่สำเร็จ"));
  }
  return <main className="admin-shell">
    <a className="back-link" href="/">← กลับหน้าเว็บไซต์</a>
    <div className="admin-card">
      <div className="eyebrow">G2G OPTION / CONTROL PANEL</div>
      <h1>จัดการเว็บไซต์</h1>
      {!unlocked ? <form onSubmit={e => { e.preventDefault(); setUnlocked(true); }} className="login-form">
        <label>รหัสผ่านผู้ดูแลระบบ</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="กรอกรหัสผ่าน" required />
        <button className="btn btn-primary" type="submit">เข้าสู่ระบบจัดการ</button>
      </form> : <>
        <p className="muted">แก้ไขข้อมูลแล้วกดบันทึก ระบบจะจัดเก็บค่าลง GitHub ของโปรเจกต์นี้</p>
        <div className="admin-fields">{fields.map(([key, label]) => <label key={key}>{label}
          {key === "description" ? <textarea rows="3" value={config[key] || ""} onChange={e => update(key, e.target.value)} /> :
          <input value={config[key] || ""} onChange={e => update(key, e.target.value)} />}
        </label>)}</div>
        <button className="btn btn-primary save-btn" onClick={save}>บันทึกการตั้งค่า</button>
        {status && <p className="status">{status}</p>}
      </>}
    </div>
  </main>;
}
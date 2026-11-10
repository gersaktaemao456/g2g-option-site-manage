"use client";

import { useEffect, useRef, useState } from "react";

const defaults = {
  brand: "G2G OPTION", eyebrow: "OFFICIAL WEBSITE",
  headline: "ก้าวเข้าสู่ประสบการณ์ใหม่", highlight: "ในแบบ G2G OPTION",
  description: "ยินดีต้อนรับสู่ G2G OPTION เลือกช่องทางที่ต้องการและเชื่อมต่อกับเราได้อย่างสะดวก",
  registerUrl: "#", loginUrl: "#", contactUrl: "#",
  registerLabel: "สมัครสมาชิก", loginLabel: "เข้าสู่ระบบ", contactLabel: "ติดต่อเรา"
};

export default function Home() {
  const [c, setC] = useState(defaults);
  const audioRef = useRef(null);
  useEffect(() => { fetch("/api/config").then(r => r.json()).then(data => setC({ ...defaults, ...data })).catch(() => {}); }, []);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    const attemptPlay = () => { const result = audio.play(); if (result?.catch) result.catch(() => {}); };
    attemptPlay();
    const startAfterGesture = () => { attemptPlay(); };
    window.addEventListener("pointerdown", startAfterGesture, { once: true, passive: true });
    window.addEventListener("keydown", startAfterGesture, { once: true });
    return () => {
      window.removeEventListener("pointerdown", startAfterGesture);
      window.removeEventListener("keydown", startAfterGesture);
    };
  }, []);
  return <main>\n    <audio ref={audioRef} src="https://image.xcoptech.net/biolink-refactor//59aa01f5-2d5b-4bff-b61e-aeb71d01689c.mp3" autoPlay loop preload="auto" playsInline />
    <div className="ambient" />
    <header className="nav"><div className="container nav-inner">
      <a className="brand" href="/"><span className="brand-mark">G2G</span><span>{c.brand}<small>OFFICIAL</small></span></a>
      <nav><a href="#channels">ช่องทางเข้าใช้งาน</a><a href="#about">เกี่ยวกับเรา</a></nav>
      <a className="btn btn-outline nav-cta" href={c.contactUrl}>{c.contactLabel}</a>
    </div></header>
    <section className="hero container">
      <div className="hero-copy">
        <div className="eyebrow"><i />{c.eyebrow}</div>
        <h1>{c.headline}<br/><em>{c.highlight}</em></h1>
        <p className="lead">{c.description}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={c.registerUrl}>{c.registerLabel}<span>↗</span></a>
          <a className="btn btn-outline" href={c.loginUrl}>{c.loginLabel}</a>
        </div>
        <div className="trust-line"><span><b>01</b> SIMPLE ACCESS</span><span><b>02</b> CONNECT WITH US</span></div>
      </div>
      <div className="visual">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="visual-card">
          <div className="visual-top"><span className="live-dot" /> G2G OPTION <span className="top-tag">OFFICIAL</span></div>
          <div className="monogram">G<span>2</span>G</div>
          <div className="visual-rule" />
          <p>YOUR NEXT EXPERIENCE<br/><strong>STARTS HERE</strong></p>
          <div className="visual-bottom"><span>G2G OPTION</span><span>EST. 2026</span></div>
        </div>
        <div className="float-chip chip-a">✦&nbsp; PREMIUM ACCESS</div>
        <div className="float-chip chip-b"><span className="live-dot" /> OFFICIAL CHANNEL</div>
      </div>
    </section>
    <div className="ticker"><div className="ticker-track"><span>G2G OPTION　✦　OFFICIAL ACCESS　✦　WELCOME　✦　G2G OPTION　✦　OFFICIAL ACCESS　✦　WELCOME　✦　</span><span>G2G OPTION　✦　OFFICIAL ACCESS　✦　WELCOME　✦　G2G OPTION　✦　OFFICIAL ACCESS　✦　WELCOME　✦　</span></div></div>
    <section id="channels" className="container section">
      <div className="section-head"><div className="kicker">QUICK ACCESS</div><h2>เลือกช่องทางที่ต้องการ</h2><p>เข้าถึงช่องทางหลักของ G2G OPTION ได้จากที่นี่</p></div>
      <div className="channel-grid">
        <a className="channel-card featured" href={c.registerUrl}><span className="card-number">01 / JOIN</span><div className="card-icon">↗</div><h3>{c.registerLabel}</h3><p>เริ่มต้นใช้งานผ่านช่องทางสมัครสมาชิก</p><span className="card-link">ไปยังหน้าสมัคร <b>→</b></span></a>
        <a className="channel-card" href={c.loginUrl}><span className="card-number">02 / LOGIN</span><div className="card-icon">⌁</div><h3>{c.loginLabel}</h3><p>สำหรับสมาชิกที่มีบัญชีอยู่แล้ว</p><span className="card-link">เข้าสู่ระบบ <b>→</b></span></a>
        <a className="channel-card" href={c.contactUrl}><span className="card-number">03 / SUPPORT</span><div className="card-icon">◎</div><h3>{c.contactLabel}</h3><p>ติดต่อสอบถามผ่านช่องทางของเรา</p><span className="card-link">ติดต่อทีมงาน <b>→</b></span></a>
      </div>
    </section>
    <section id="about" className="container bottom-banner"><div><div className="kicker">G2G OPTION / OFFICIAL</div><h2>ทุกช่องทางสำคัญ<br/><em>รวมไว้ในที่เดียว</em></h2><p>บันทึกหน้านี้ไว้เพื่อกลับมาใช้งานได้สะดวก</p></div><a className="btn btn-primary" href={c.contactUrl}>{c.contactLabel} <span>↗</span></a></section>
    <footer className="footer"><div className="container footer-inner"><a className="brand" href="/"><span className="brand-mark">G2G</span><span>{c.brand}<small>OFFICIAL</small></span></a><span>© 2026 {c.brand}. All rights reserved.</span><a href="/admin">ADMIN</a></div></footer>
  </main>;
}
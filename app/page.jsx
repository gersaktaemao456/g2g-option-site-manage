"use client";

import { useEffect, useRef, useState } from "react";

const defaults = {
  brand: "G2G OPTION",
  eyebrow: "OFFICIAL WEBSITE",
  headline: "ก้าวเข้าสู่ประสบการณ์ใหม่",
  highlight: "ในแบบ G2G OPTION",
  description: "ยินดีต้อนรับสู่ G2G OPTION เลือกช่องทางที่ต้องการและเชื่อมต่อกับเราได้อย่างสะดวก",
  registerLabel: "สมัครสมาชิก",
  registerUrl: "",
  loginLabel: "เข้าสู่ระบบ",
  loginUrl: "",
  contactLabel: "ติดต่อเรา",
  contactUrl: "",
  logoUrl: "",
  bannerUrl: "",
  lineUrl: ""
};

function safeUrl(value) {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : "";
}

function ActionLink({ href, children, className = "", ...props }) {
  if (!safeUrl(href)) {
    return <span aria-disabled="true" className={className + " td-disabled"}>{children}</span>;
  }
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}

function G2GMascot() {
  return (
    <div className="td-mascot-wrap" role="img" aria-label="มาสคอตแมวขาวน้ำเงินของ G2G OPTION">
      <div className="td-mascot-glow" />
      <svg viewBox="0 0 360 360" className="td-mascot" aria-hidden="true">
        <defs>
          <linearGradient id="g2gCatBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#8fc2ff" />
            <stop offset="100%" stopColor="#1265ed" />
          </linearGradient>
          <linearGradient id="g2gCatWhite" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#dceaff" />
          </linearGradient>
        </defs>
        <ellipse cx="180" cy="320" rx="124" ry="16" fill="#bda66d" opacity=".24" />
        <path d="M82 119 L65 42 L137 79 Z" fill="url(#g2gCatGold)" stroke="#5b91d9" strokeWidth="3" strokeLinejoin="round" />
        <path d="M278 119 L295 42 L223 79 Z" fill="url(#g2gCatGold)" stroke="#5b91d9" strokeWidth="3" strokeLinejoin="round" />
        <path d="M85 106 L78 63 L118 82 Z" fill="#dceaff" />
        <path d="M275 106 L282 63 L242 82 Z" fill="#dceaff" />
        <path d="M81 156 C73 231 82 288 117 307 C145 320 215 320 243 307 C278 288 287 231 279 156 C269 102 224 75 180 75 C136 75 91 102 81 156 Z" fill="url(#g2gCatGold)" stroke="#5b91d9" strokeWidth="3" />
        <path d="M136 192 C138 245 152 284 180 284 C208 284 222 245 224 192 C202 207 158 207 136 192 Z" fill="url(#g2gCatBelly)" />
        <circle cx="138" cy="154" r="12" fill="#102b57" />
        <circle cx="222" cy="154" r="12" fill="#102b57" />
        <circle cx="142" cy="150" r="4" fill="#fff" />
        <circle cx="226" cy="150" r="4" fill="#fff" />
        <path d="M165 176 Q180 184 195 176" fill="none" stroke="#80652f" strokeWidth="3" strokeLinecap="round" />
        <path d="M172 186 Q180 198 188 186 Q180 192 172 186 Z" fill="#ff7e9d" />
        <path d="M75 180 Q40 172 42 187 Q63 188 75 186 M285 180 Q320 172 318 187 Q297 188 285 186 M75 197 Q43 198 45 210 Q64 208 75 202 M285 197 Q317 198 315 210 Q296 208 285 202" fill="none" stroke="#5b91d9" strokeWidth="2" strokeLinecap="round" />
        <path d="M113 276 C98 234 115 207 134 214 C152 220 156 255 145 279 Z" fill="url(#g2gCatGold)" stroke="#5b91d9" strokeWidth="3" />
        <path d="M125 238 C131 251 137 260 145 259 C152 258 150 240 139 229 Z" fill="#dceaff" />
        <circle cx="131" cy="230" r="7" fill="#dceaff" />
        <circle cx="131" cy="230" r="3" fill="#c8a75b" />
        <path d="M239 307 C267 302 288 282 289 258 C291 282 283 305 263 315 Z" fill="#1265ed" />
        <path d="M70 297 C98 316 262 316 290 297 C280 318 246 328 180 328 C114 328 80 318 70 297 Z" fill="#dceaff" opacity=".65" />
        <path d="M112 108 C117 93 129 85 138 83 M248 108 C243 93 231 85 222 83" fill="none" stroke="#5b91d9" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="120" cy="180" r="12" fill="#f5a3a3" opacity=".42" />
        <circle cx="240" cy="180" r="12" fill="#f5a3a3" opacity=".42" />
        <path d="M150 105 Q180 88 210 105" fill="none" stroke="#fff5d9" strokeWidth="5" strokeLinecap="round" opacity=".75" />
      </svg>
      <span className="td-mascot-chip td-chip-left">G2G OPTION</span>
      <span className="td-mascot-chip td-chip-right">BLUE TEAM ✦</span>
    </div>
  );
}

const highlights = [
  { number: "01", title: "เข้าถึงง่าย", text: "รวมช่องทางสำคัญไว้ในหน้าเดียว ใช้งานสะดวกทั้งบนมือถือและคอมพิวเตอร์" },
  { number: "02", title: "เชื่อมต่อสะดวก", text: "เลือกสมัครสมาชิก เข้าสู่ระบบ หรือติดต่อทีมงานผ่านปุ่มที่จัดเตรียมไว้" },
  { number: "03", title: "ดูแลอย่างใส่ใจ", text: "มีช่องทางติดต่อสำหรับสอบถามและรับความช่วยเหลือเมื่อคุณต้องการ" }
];

const privileges = [
  { tag: "เริ่มต้น", title: "สมัครสมาชิก", text: "กดปุ่มสมัครสมาชิกเพื่อไปยังช่องทางที่ตั้งค่าไว้ในระบบหลังบ้าน G2G OPTION" },
  { tag: "สมาชิก", title: "เข้าสู่ระบบ", text: "สำหรับสมาชิกเดิม ใช้ปุ่มเข้าสู่ระบบเพื่อไปยัง URL ที่ผู้ดูแลกำหนดไว้" },
  { tag: "ช่วยเหลือ", title: "ติดต่อเรา", text: "เชื่อมต่อทีมงานผ่านลิงก์ติดต่อที่บันทึกไว้ในระบบหลังบ้าน" },
  { tag: "ทุกอุปกรณ์", title: "ใช้งานได้สะดวก", text: "ออกแบบให้แสดงผลได้อย่างเหมาะสมบนหน้าจอทุกขนาด" }
];

export default function Home() {
  const [c, setC] = useState(defaults);
  const audioRef = useRef(null);

  useEffect(() => {
    let active = true;
    fetch("/api/config", { cache: "no-store" })
      .then((r) => { if (!r.ok) throw new Error("config"); return r.json(); })
      .then((data) => { if (active) setC({ ...defaults, ...data }); })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    const attemptPlay = () => {
      const result = audio.play();
      if (result?.catch) result.catch(() => {});
    };
    attemptPlay();
    const startAfterGesture = () => attemptPlay();
    window.addEventListener("pointerdown", startAfterGesture, { once: true, passive: true });
    window.addEventListener("keydown", startAfterGesture, { once: true });
    return () => {
      window.removeEventListener("pointerdown", startAfterGesture);
      window.removeEventListener("keydown", startAfterGesture);
    };
  }, []);

  const registerUrl = safeUrl(c.registerUrl);
  const loginUrl = safeUrl(c.loginUrl);
  const contactUrl = safeUrl(c.contactUrl);

  return (
    <div className="td-home">
      <audio ref={audioRef} src="https://image.xcoptech.net/biolink-refactor//59aa01f5-2d5b-4bff-b61e-aeb71d01689c.mp3" autoPlay loop preload="auto" playsInline />
      <header className="td-header">
        <div className="td-container td-header-inner">
          <a href="#top" className="td-brand">
            <span className="td-brand-mark">G</span>
            <span><strong>{c.brand}</strong><small>OFFICIAL COMMUNITY</small></span>
          </a>
          <nav className="td-nav" aria-label="เมนูหลัก">
            <a href="#highlights">จุดเด่น</a>
            <a href="#privileges">ช่องทางใช้งาน</a>
          </nav>
          <ActionLink href={contactUrl} className="td-button td-button-light">{c.contactLabel}</ActionLink>
        </div>
      </header>

      <main id="top">
        <section className="td-hero">
          <div className="td-container td-hero-grid">
            <div className="td-hero-copy">
              <p className="td-eyebrow"><i />{c.eyebrow}</p>
              <h1>{c.brand}</h1>
              <h2>{c.headline}<span>{c.highlight}</span></h2>
              <p className="td-lead">{c.description}</p>
              <div className="td-actions">
                <ActionLink href={registerUrl} className="td-button td-button-dark">{c.registerLabel}<b>↗</b></ActionLink>
                <ActionLink href={loginUrl} className="td-button td-button-outline">{c.loginLabel}</ActionLink>
              </div>
              <div className="td-trust"><span>✦ เข้าถึงง่าย</span><span>✦ เชื่อมต่อสะดวก</span><span>✦ ดูแลใส่ใจ</span></div>
            </div>
            <G2GMascot />
          </div>
        </section>

        <section id="highlights" className="td-container td-section">
          <div className="td-section-head">
            <div><p className="td-kicker">WHY {c.brand}</p><h2>ช่องทางที่จำเป็น<br />รวมไว้ให้ใช้งานง่าย</h2></div>
            <p>ออกแบบประสบการณ์ให้เรียบง่าย สบายตา และเข้าถึงเมนูสำคัญได้อย่างรวดเร็ว</p>
          </div>
          <div className="td-highlight-grid">
            {highlights.map((item) => (
              <article className="td-highlight-card" key={item.number}>
                <div className="td-card-top"><span>{item.number}</span><b>✦</b></div>
                <h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="privileges" className="td-privileges">
          <div className="td-container td-section">
            <div className="td-section-head td-section-head-left">
              <div><p className="td-kicker">QUICK ACCESS</p><h2>เลือกช่องทางที่ต้องการ</h2></div>
              <p>ปุ่มทั้งหมดเชื่อมต่อกับ URL ที่ผู้ดูแลตั้งค่าไว้ในหลังบ้าน G2G</p>
            </div>
            <div className="td-privilege-grid">
              {privileges.map((item, index) => (
                <article className="td-privilege-card" key={item.tag}>
                  <span className="td-tag">{item.tag}</span>
                  <div className="td-privilege-icon">{["↗", "⌁", "◎", "✦"][index]}</div>
                  <h3>{item.title}</h3><p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="td-quick-links">
              <ActionLink href={registerUrl} className="td-button td-button-dark">{c.registerLabel} <b>↗</b></ActionLink>
              <ActionLink href={loginUrl} className="td-button td-button-outline">{c.loginLabel}</ActionLink>
              <ActionLink href={contactUrl} className="td-button td-button-light">{c.contactLabel}</ActionLink>
            </div>
          </div>
        </section>

        <section className="td-container td-bottom">
          <div className="td-bottom-inner">
            <p className="td-kicker">WELCOME TO {c.brand}</p>
            <h2>ยินดีต้อนรับสู่<br /><span>{c.brand}</span></h2>
            <p>เลือกช่องทางที่ต้องการ หรือพูดคุยกับทีมงานได้โดยตรง</p>
            <div className="td-actions td-actions-center">
              <ActionLink href={registerUrl} className="td-button td-button-gold">{c.registerLabel}</ActionLink>
              <ActionLink href={contactUrl} className="td-button td-button-glass">{c.contactLabel}</ActionLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="td-footer">
        <div className="td-container td-footer-inner">
          <div className="td-brand td-footer-brand"><span className="td-brand-mark">G</span><span><strong>{c.brand}</strong><small>OFFICIAL COMMUNITY</small></span></div>
          <span>© {new Date().getFullYear()} {c.brand}. All rights reserved.</span>
          <a href="/admin">ADMIN</a>
        </div>
      </footer>

      <div className="td-mobile-bar">
        <ActionLink href={registerUrl} className="td-button td-button-dark">{c.registerLabel}</ActionLink>
        <ActionLink href={contactUrl} className="td-button td-button-gold">{c.contactLabel}</ActionLink>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const defaults = {
  brand: "G2G OPTION",
  eyebrow: "OFFICIAL WEBSITE",
  headline: "ก้าวสู่ความสำเร็จ",
  highlight: "ไปด้วยกัน",
  description: "มั่นใจ ปลอดภัย พร้อมดูแลคุณตลอด 24 ชั่วโมง",
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
    return <span aria-disabled="true" title="ยังไม่ได้ตั้งค่าลิงก์ในระบบหลังบ้าน" className={className + " td-disabled"}>{children}</span>;
  }
  return <a href={safeUrl(href)} className={className} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}

function Crown({ className = "" }) {
  return <svg className={className} viewBox="0 0 120 58" aria-hidden="true">
    <path d="M9 42 18 12 43 31 60 5 77 31 102 12 111 42Z" fill="url(#crownMetal)" stroke="#9fd5ff" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M14 46H106L101 54H19Z" fill="#9ccfff"/>
    <circle cx="18" cy="11" r="4" fill="#fff"/><circle cx="60" cy="5" r="4" fill="#fff"/><circle cx="102" cy="11" r="4" fill="#fff"/>
  </svg>;
}

function G2GMascot() {
  return (
    <div className="td-mascot-wrap" role="img" aria-label="มาสคอตแมว 3D สีขาวน้ำเงิน สวมหูฟัง ถือโทรศัพท์และยกนิ้วโป้ง">
      <div className="td-city-grid" aria-hidden="true" />
      <svg className="td-city-scene" viewBox="0 0 620 570" aria-hidden="true">
        <defs>
          <linearGradient id="citySky" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#061735"/><stop offset=".55" stopColor="#0b3d83"/><stop offset="1" stopColor="#07152f"/></linearGradient>
          <linearGradient id="cityGlass" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#237ddc" stopOpacity=".8"/><stop offset="1" stopColor="#06132c" stopOpacity=".95"/></linearGradient>
          <linearGradient id="coinMetal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff"/><stop offset=".35" stopColor="#9bbbdc"/><stop offset=".65" stopColor="#f6fbff"/><stop offset="1" stopColor="#6685aa"/></linearGradient>
        </defs>
        <ellipse cx="310" cy="505" rx="255" ry="40" fill="#168bff" opacity=".15"/>
        <path d="M0 430 0 270 45 270 45 220 90 220 90 300 130 300 130 190 190 190 190 270 230 270 230 155 285 155 285 280 330 280 330 215 380 215 380 275 420 275 420 175 475 175 475 260 520 260 520 205 575 205 575 430Z" fill="url(#cityGlass)" stroke="#3a9cff" strokeOpacity=".48"/>
        <path d="M0 430H620M35 300H72M140 230H177M242 195H272M350 250H375M435 210H462M535 240H560" stroke="#5bc4ff" strokeWidth="3" opacity=".65"/>
        {Array.from({length: 34},(_,i)=><path key={i} d={`M${28+(i%9)*66} ${310+Math.floor(i/9)*28}h18`} stroke="#72caff" strokeWidth="3" opacity=".55"/>)}
        <path d="M0 470Q150 430 310 470T620 465" fill="none" stroke="#19a9ff" strokeWidth="2" opacity=".8"/>
        <circle cx="76" cy="120" r="3" fill="#fff"/><circle cx="525" cy="92" r="3" fill="#fff"/><circle cx="462" cy="140" r="2" fill="#79d9ff"/>
        <g transform="translate(62 328) rotate(-18)"><circle r="42" fill="url(#coinMetal)" stroke="#e8f5ff" strokeWidth="5"/><circle r="32" fill="none" stroke="#547da8" strokeWidth="2"/><path d="M-12-15h24M-12 0h24M-12 15h24" stroke="#547da8" strokeWidth="4" strokeLinecap="round"/></g>
        <g transform="translate(530 350) rotate(15)"><circle r="34" fill="url(#coinMetal)" stroke="#dceeff" strokeWidth="4"/><circle r="25" fill="none" stroke="#547da8" strokeWidth="2"/><path d="M-9-12h18M-9 0h18M-9 12h18" stroke="#547da8" strokeWidth="3" strokeLinecap="round"/></g>
      </svg>
      <div className="td-mascot-aura" />
      <svg className="td-mascot" viewBox="0 0 470 520" aria-hidden="true">
        <defs>
          <linearGradient id="catFur" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff"/><stop offset=".48" stopColor="#dceeff"/><stop offset="1" stopColor="#79aee9"/></linearGradient>
          <linearGradient id="catShadow" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#8ab8ed"/><stop offset=".55" stopColor="#276dc0"/><stop offset="1" stopColor="#092f71"/></linearGradient>
          <linearGradient id="catSuit" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff"/><stop offset=".45" stopColor="#b9dcff"/><stop offset="1" stopColor="#377fce"/></linearGradient>
          <linearGradient id="phoneMetal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff"/><stop offset=".45" stopColor="#83b9ed"/><stop offset="1" stopColor="#174b91"/></linearGradient>
          <linearGradient id="crownMetal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff"/><stop offset=".5" stopColor="#9fcfff"/><stop offset="1" stopColor="#347bc9"/></linearGradient>
          <filter id="catSoft"><feGaussianBlur stdDeviation="9"/></filter>
        </defs>
        <ellipse cx="235" cy="492" rx="148" ry="19" fill="#00102a" opacity=".55" filter="url(#catSoft)"/>
        {/* tail */}
        <path d="M330 420q105 20 92-74-4-32-29-36 38 56-34 70l-48-2" fill="none" stroke="url(#catShadow)" strokeWidth="27" strokeLinecap="round"/>
        {/* body suit */}
        <path d="M126 305q-15 37-22 116l24 67q105 39 211-1l18-69q-8-82-31-116-86-54-200 3Z" fill="url(#catSuit)" stroke="#e8f5ff" strokeWidth="5"/>
        <path d="M167 320q-12 72 4 157l64 24 62-24q16-86-3-157-60-32-127 0Z" fill="url(#catShadow)" opacity=".96"/>
        <path d="m203 330 32 40 31-40-12 137h-40Z" fill="#eff8ff" opacity=".9"/>
        <path d="M142 362q-24 41-12 91l40 10q18-53 4-92Z" fill="#eff8ff" stroke="#80b6eb" strokeWidth="4"/>
        <path d="M302 358q27 42 18 92l-39 12q-18-50-4-94Z" fill="#d9edff" stroke="#80b6eb" strokeWidth="4"/>
        {/* left arm holding phone */}
        <path d="M139 348q-35 23-44 76l-8 30q-2 20 19 23 18 2 25-20l25-69Z" fill="url(#catFur)" stroke="#9dc7ed" strokeWidth="5"/>
        <g transform="translate(45 356) rotate(-9)">
          <rect x="0" y="0" width="88" height="137" rx="17" fill="url(#phoneMetal)" stroke="#e8f6ff" strokeWidth="5"/>
          <rect x="8" y="9" width="72" height="118" rx="11" fill="#071a39"/>
          <rect x="15" y="18" width="58" height="91" rx="7" fill="#0e4b91" stroke="#55b8ff"/>
          <path d="M25 76 44 38 63 76Z" fill="#8fd0ff" opacity=".8"/>
          <text x="44" y="91" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">G2G</text>
          <circle cx="44" cy="117" r="3" fill="#e9f6ff"/>
        </g>
        {/* right arm and thumbs up */}
        <path d="M323 347q39 5 49 39l26 45q9 20-10 31-18 11-31-8l-39-53Z" fill="url(#catFur)" stroke="#9dc7ed" strokeWidth="5"/>
        <path d="M376 429q-2-21 9-36l8-29q4-16 18-13 15 4 10 20l-5 17q23-7 31 7 7 13-5 24 8 14-5 25 2 19-17 23l-25-1q-20-5-19-37Z" fill="url(#catFur)" stroke="#9dc7ed" strokeWidth="5" strokeLinejoin="round"/>
        {/* neck and head */}
        <path d="M192 275h87v64q-42 42-87 0Z" fill="url(#catFur)" stroke="#9dc7ed" strokeWidth="4"/>
        <path d="m121 122-12-91q-2-18 15-9l77 60M337 122l12-91q2-18-15-9l-77 60" fill="url(#catFur)" stroke="#a8cbed" strokeWidth="6" strokeLinejoin="round"/>
        <path d="m131 91-4-42 48 38M327 91l4-42-48 38" fill="#75a9dc"/>
        <path d="M102 145q0-102 127-102t127 102v72q0 98-127 98T102 217Z" fill="url(#catFur)" stroke="#b5d7f5" strokeWidth="6"/>
        {/* headphones */}
        <path d="M89 184v-47q0-120 140-120t140 120v48" fill="none" stroke="#102e5d" strokeWidth="24" strokeLinecap="round"/>
        <path d="M89 181v-45q0-105 140-105t140 105v46" fill="none" stroke="#4b9df1" strokeWidth="12" strokeLinecap="round"/>
        <rect x="72" y="157" width="42" height="91" rx="19" fill="url(#catShadow)" stroke="#d7edff" strokeWidth="5"/>
        <rect x="344" y="157" width="42" height="91" rx="19" fill="url(#catShadow)" stroke="#d7edff" strokeWidth="5"/>
        <circle cx="93" cy="201" r="11" fill="#8dd5ff"/><circle cx="365" cy="201" r="11" fill="#8dd5ff"/>
        {/* face */}
        <path d="M149 199q17-20 38 0M283 199q17-20 38 0" fill="none" stroke="#244c7b" strokeWidth="8" strokeLinecap="round"/>
        <ellipse cx="185" cy="211" rx="13" ry="19" fill="#102d56"/><ellipse cx="284" cy="211" rx="13" ry="19" fill="#102d56"/>
        <ellipse cx="189" cy="205" rx="4" ry="6" fill="#fff"/><ellipse cx="288" cy="205" rx="4" ry="6" fill="#fff"/>
        <path d="M225 234q10-9 20 0-10 14-20 0Z" fill="#4e83bd"/>
        <path d="M235 245q-8 16-23 8M235 245q8 16 23 8" fill="none" stroke="#456d9a" strokeWidth="4" strokeLinecap="round"/>
        <ellipse cx="151" cy="240" rx="17" ry="9" fill="#ff9cb8" opacity=".35"/><ellipse cx="319" cy="240" rx="17" ry="9" fill="#ff9cb8" opacity=".35"/>
        <path d="M133 271q102 55 204 0" fill="none" stroke="#fff" strokeWidth="8" opacity=".55"/>
        <path d="M177 300q58 27 116 0" fill="none" stroke="#5ba8f4" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="235" cy="320" r="9" fill="#e8f7ff" stroke="#6da7df" strokeWidth="3"/>
      </svg>
      <div className="td-mascot-caption"><span>G2G OPTION</span><small>YOUR SUCCESS PARTNER</small></div>
      <div className="td-floating-badge td-float-one">✦ PREMIUM SERVICE</div>
      <div className="td-floating-badge td-float-two">24/7 SUPPORT</div>
    </div>
  );
}

const benefits = [
  { icon: "◈", title: "ปลอดภัยระดับสากล", text: "ใส่ใจมาตรฐานและความปลอดภัยในทุกขั้นตอน" },
  { icon: "⚡", title: "รวดเร็วทันใจ", text: "เข้าถึงช่องทางสำคัญได้ง่าย สะดวกทุกอุปกรณ์" },
  { icon: "✦", title: "ดูแลใกล้ชิดตลอด 24 ชม.", text: "ทีมงานพร้อมให้คำแนะนำและช่วยเหลือ" }
];

const footerHighlights = [
  { icon: "◈", title: "มาตรฐานระดับสากล", text: "เชื่อถือได้" },
  { icon: "⚡", title: "บริการรวดเร็ว", text: "ไม่ติดขัด" },
  { icon: "✦", title: "ทีมงานมืออาชีพ", text: "ดูแล 24 ชั่วโมง" },
  { icon: "∞", title: "ร่วมสร้างความสำเร็จ", text: "ไปด้วยกัน" }
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
          <a href="#top" className="td-brand" aria-label="G2G OPTION หน้าหลัก">
            <span className="td-logo-lockup"><Crown className="td-logo-crown" /><span className="td-brand-mark">G2G</span></span>
            <span><strong>{c.brand}</strong><small>OFFICIAL COMMUNITY</small></span>
          </a>
          <nav className="td-nav" aria-label="เมนูหลัก">
            <a href="#top">หน้าหลัก</a>
            <ActionLink href={registerUrl}>{c.registerLabel}</ActionLink>
            <ActionLink href={loginUrl}>{c.loginLabel}</ActionLink>
            <ActionLink href={contactUrl}>{c.contactLabel}</ActionLink>
          </nav>
          <ActionLink href={contactUrl} className="td-button td-button-contact">ติดต่อเรา <span>↗</span></ActionLink>
        </div>
      </header>

      <main id="top">
        <section className="td-hero">
          <div className="td-container td-hero-grid">
            <G2GMascot />
            <div className="td-hero-copy">
              <p className="td-eyebrow"><i />{c.eyebrow}</p>
              <div className="td-hero-brand"><Crown className="td-hero-crown" /><h1>{c.brand}</h1></div>
              <p className="td-hero-tagline">{c.headline} <span>{c.highlight}</span></p>
              <p className="td-lead">{c.description}</p>
              <div className="td-benefit-list">
                {benefits.map((item) => <div className="td-benefit" key={item.title}><span>{item.icon}</span><div><strong>{item.title}</strong><small>{item.text}</small></div></div>)}
              </div>
              <div className="td-actions">
                <ActionLink href={registerUrl} className="td-button td-button-neon">{c.registerLabel}<b>↗</b></ActionLink>
                <ActionLink href={loginUrl} className="td-button td-button-navy">{c.loginLabel}<b>↗</b></ActionLink>
                <ActionLink href={contactUrl} className="td-button td-button-silver">{c.contactLabel}<b>↗</b></ActionLink>
              </div>
            </div>
          </div>
        </section>

        <section className="td-footer-highlights" aria-label="จุดเด่นของ G2G OPTION">
          <div className="td-container td-footer-grid">
            {footerHighlights.map((item) => <article className="td-footer-feature" key={item.title}><span className="td-footer-icon">{item.icon}</span><div><strong>{item.title}</strong><small>{item.text}</small></div></article>)}
          </div>
        </section>
      </main>
      <footer className="td-footer">
        <div className="td-container td-footer-inner">
          <div className="td-brand td-footer-brand"><span className="td-brand-mark">G2G</span><span><strong>{c.brand}</strong><small>OFFICIAL COMMUNITY</small></span></div>
          <span>© {new Date().getFullYear()} {c.brand}. All rights reserved.</span>
          <a href="/admin">ADMIN</a>
        </div>
      </footer>
      <div className="td-mobile-bar">
        <ActionLink href={registerUrl} className="td-button td-button-neon">{c.registerLabel}</ActionLink>
        <ActionLink href={loginUrl} className="td-button td-button-navy">{c.loginLabel}</ActionLink>
        <ActionLink href={contactUrl} className="td-button td-button-silver">{c.contactLabel}</ActionLink>
      </div>
    </div>
  );
}

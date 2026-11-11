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
    <defs><linearGradient id="crownMetal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffffff"/><stop offset=".5" stopColor="#9fcfff"/><stop offset="1" stopColor="#347bc9"/></linearGradient></defs>
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
      <img className="td-mascot" src="https://files.catbox.moe/mz76ot.png" alt="มาสคอตแมว G2G OPTION สวมหูฟัง ถือโทรศัพท์และยกนิ้วโป้ง" />
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const metaId = String(c.metaPixelId || "").trim();
    if (metaId) {
      if (!window.fbq) {
        const fbq = function () { fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments); };
        fbq.queue = []; fbq.loaded = true; fbq.version = "2.0"; window.fbq = fbq;
        const script = document.createElement("script"); script.async = true; script.src = "https://connect.facebook.net/en_US/fbevents.js";
        document.head.appendChild(script);
      }
      if (!window.__g2gMetaPixelIds) window.__g2gMetaPixelIds = {};
      if (!window.__g2gMetaPixelIds[metaId]) {
        window.__g2gMetaPixelIds[metaId] = true;
        window.fbq("init", metaId);
        window.fbq("track", "PageView");
      }
    }
    const tikTokId = String(c.tiktokPixelId || "").trim();
    if (tikTokId) {
      if (!window.ttq) {
        const ttq = window.ttq = [];
        ttq.methods = ["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
        ttq.setAndDefer = function (t, e) { t[e] = function () { t.push([e].concat(Array.prototype.slice.call(arguments, 0))); }; };
        for (let i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
        ttq.load = function (id) {
          const script = document.createElement("script"); script.type = "text/javascript"; script.async = true;
          script.src = "https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=" + id + "&lib=ttq";
          const first = document.getElementsByTagName("script")[0]; first.parentNode.insertBefore(script, first);
        };
      }
      if (!window.__g2gTikTokPixelIds) window.__g2gTikTokPixelIds = {};
      if (!window.__g2gTikTokPixelIds[tikTokId]) {
        window.__g2gTikTokPixelIds[tikTokId] = true;
        window.ttq.load(tikTokId);
        window.ttq.page();
      }
    }
  }, [c.metaPixelId, c.tiktokPixelId]);

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
              <p className="td-hero-tagline">ก้าวสู่ความสำเร็จ <span>ไปด้วยกัน</span></p>
              <p className="td-lead">มั่นใจ ปลอดภัย พร้อมดูแลคุณตลอด 24 ชั่วโมง</p>
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

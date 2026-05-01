"use client";

import { useState } from "react";
import Image from "next/image";

const translations = {
  ja: {
    nav: { about: "About", menu: "Menu", gallery: "Gallery", contact: "Contact" },
    hero: { subtitle: "DAIKANYAMA ENCOUNTER" },
    about: {
      tag: "Concept",
      title: <>酒と人が交差する、<br />代官山の隠れ家。</>,
      p1: "「ToriiAt（トリイアト）」は、代官山の路地裏に静かに佇む、人との「出会い」を大切にするコミュニティ・バーです。",
      p2: "琥珀色の光に包まれたカウンターで、上質な酒と共に、新しい物語の始まりを。"
    },
    menu: {
      title: "MENU",
      subtitle: "Selection of Encounters",
      cats: ["シグネチャーカクテル", "スタンダードカクテル", "特別料理"],
      items: [
        ["Amber Twilight", "Japanese Craft Gin, Earl Grey, Honey, Lemon. 琥珀色の黄昏を一杯に。"],
        ["Daikanyama Mist", "Sake, Matcha, Elderflower, Tonic. 代官山の朝霧のような清涼感。"],
        ["Premium Martini", "The king of cocktails. クラフトジンを使用した極上の一杯。"],
        ["Smoked Moscow Mule", "燻製シロップと自家製ジンジャーエールの刺激。"],
        ["Smoked Mix Nuts", "桜チップでじっくりと燻した香り高いナッツ。"],
        ["The Encounter Curry", "スパイスが織りなす人との出会いのような複雑な味わい。"]
      ]
    },
    gallery: { title: "Latest Encounters", subtitle: "Moments in Amber", view: "詳細を見る" },
    contact: { title: "Reservation", desc: "隠れ家のため、詳細はご予約時に。お気軽にお問い合わせください。" }
  },
  en: {
    nav: { about: "About", menu: "Menu", gallery: "Gallery", contact: "Contact" },
    hero: { subtitle: "DAIKANYAMA ENCOUNTER" },
    about: {
      tag: "Concept",
      title: <>A Daikanyama hideaway <br />where sake and people meet.</>,
      p1: "ToriiAt is a community bar quietly tucked away in the backstreets of Daikanyama, cherishing every 'encounter' between people.",
      p2: "In a space enveloped in amber light, begin a new story with premium spirits."
    },
    menu: {
      title: "MENU",
      subtitle: "Selection of Encounters",
      cats: ["Signature Cocktails", "Standard Cocktails", "Special Food"],
      items: [
        ["Amber Twilight", "Japanese Craft Gin, Earl Grey, Honey, Lemon. A golden encounter."],
        ["Daikanyama Mist", "Sake, Matcha, Elderflower, Tonic. Refreshing as morning mist."],
        ["Premium Martini", "The king of cocktails. A masterpiece crafted with Japanese gin."],
        ["Smoked Moscow Mule", "A kick of home-made ginger ale and smoked syrup."],
        ["Smoked Mix Nuts", "Carefully smoked in-house with cherry wood chips."],
        ["The Encounter Curry", "A complex beef curry as intricate as human connections."]
      ]
    },
    gallery: { title: "Latest Encounters", subtitle: "Moments in Amber", view: "View Detail" },
    contact: { title: "Reservation", desc: "As a hideaway, location details will be provided upon reservation." }
  }
};

export default function Home() {
  const [lang, setLang] = useState("ja");
  const t = translations[lang];

  const menuData = [
    { category: t.menu.cats[0], items: [
      { name: t.menu.items[0][0], price: 1800, desc: t.menu.items[0][1] },
      { name: t.menu.items[1][0], price: 1900, desc: t.menu.items[1][1] }
    ]},
    { category: t.menu.cats[1], items: [
      { name: t.menu.items[2][0], price: 1600, desc: t.menu.items[2][1] },
      { name: t.menu.items[3][0], price: 1500, desc: t.menu.items[3][1] }
    ]},
    { category: t.menu.cats[2], items: [
      { name: t.menu.items[4][0], price: 800, desc: t.menu.items[4][1] },
      { name: t.menu.items[5][0], price: 1800, desc: t.menu.items[5][1] }
    ]}
  ];

  return (
    <main>
      {/* Navigation */}
      <nav className="nav-bar glass">
        <div className="container nav-content">
          <div className="text-2xl font-ja tracking-widest amber-glow">ToriiAt</div>
          <div className="flex items-center gap-10">
            <div className="nav-links space-x-8 text-sm uppercase tracking-widest opacity-80">
              <a href="#about" className="hover:text-accent-amber">{t.nav.about}</a>
              <a href="#menu" className="hover:text-accent-amber">{t.nav.menu}</a>
              <a href="#gallery" className="hover:text-accent-amber">{t.nav.gallery}</a>
              <a href="#contact" className="hover:text-accent-amber">{t.nav.contact}</a>
            </div>
            {/* Language Switcher */}
            <div className="flex gap-2 text-[10px] tracking-widest font-bold">
              <button 
                onClick={() => setLang("ja")} 
                className={`cursor-pointer ${lang === "ja" ? "text-accent-amber" : "opacity-30"}`}
              >JP</button>
              <span className="opacity-20">/</span>
              <button 
                onClick={() => setLang("en")} 
                className={`cursor-pointer ${lang === "en" ? "text-accent-amber" : "opacity-30"}`}
              >EN</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/hero-bg.png" alt="ToriiAt Interior" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-black-fade"></div>
          <div className="absolute inset-0 bg-gradient-hero"></div>
          <div className="absolute inset-0 bg-radial-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center animate-up">
          <h1 className="hero-title text-9xl mb-6 amber-glow font-ja tracking-tighter">ToriiAt</h1>
          <p className="text-2xl tracking-[0.4em] text-secondary uppercase">{t.hero.subtitle}</p>
          <div className="mt-12">
            <a href="#menu" className="btn-premium">{lang === "ja" ? "Explore Menu" : "Explore Menu"}</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="grid-2col flex gap-20 items-center">
            <div className="animate-up" style={{ flex: 1 }}>
              <span className="text-accent-amber tracking-widest text-sm uppercase mb-4 block">{t.about.tag}</span>
              <h2 className={`text-5xl mb-10 font-ja leading-tight ${lang === "en" ? "font-outfit tracking-normal" : ""}`}>
                {t.about.title}
              </h2>
              <div className="text-secondary space-y-6 text-lg leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden glass animate-up" style={{ flex: 1, aspectRatio: '4/5', animationDelay: '0.2s' }}>
              <Image src="/mockup.png" alt="Bar Vibe" fill className="object-cover opacity-90 hover:scale-110 transition duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section-padding bg-[#080808]">
        <div className="container">
          <div className="text-center mb-24 animate-up">
            <h2 className="text-6xl mb-4 font-ja amber-glow">{t.menu.title}</h2>
            <p className="text-secondary tracking-[0.2em] uppercase">{t.menu.subtitle}</p>
          </div>
          
          <div className="menu-grid">
            {menuData.map((cat, i) => (
              <div key={i} className="glass p-10 rounded-2xl animate-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <h3 className="text-accent-amber text-2xl mb-10 border-b border-white/10 pb-4 font-ja tracking-widest">{cat.category}</h3>
                <div className="space-y-10">
                  {cat.items.map((item, j) => (
                    <div key={j} className="menu-item">
                      <div className="menu-header">
                        <span className="text-xl font-ja">{item.name}</span>
                        <span className="menu-price">¥{item.price.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-secondary font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding container">
        <div className="text-center mb-24 animate-up">
          <h2 className="text-5xl mb-4 font-ja">{t.gallery.title}</h2>
          <p className="text-secondary tracking-[0.2em] uppercase">{t.gallery.subtitle}</p>
        </div>
        
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="gallery-item glass animate-up" style={{ animationDelay: `${num * 0.1}s` }}>
              <Image src={`/g${num}.png`} alt={`Moment ${num}`} fill />
              <div className="gallery-overlay">
                <span className="text-xs tracking-widest uppercase text-white font-bold">{t.gallery.view}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="section-padding border-t border-white/5">
        <div className="container text-center">
          <div className="mb-16">
            <h2 className="text-4xl mb-6 font-ja">{t.contact.title}</h2>
            <p className="text-secondary">{t.contact.desc}</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20">
            <a href="https://www.instagram.com/toriiat_daikanyama/" target="_blank" rel="noopener noreferrer" className="btn-premium">Instagram DM</a>
            <a href="#" className="btn-premium">Tabelog Booking</a>
          </div>
          
          <div className="text-xs text-white/20 tracking-widest uppercase">
            © 2026 ToriiAt DAIKANYAMA. Crafted for Excellence by Alnair LLC.
          </div>
        </div>
      </footer>
    </main>
  );
}

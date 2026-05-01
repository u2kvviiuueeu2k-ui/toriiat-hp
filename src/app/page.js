import Image from "next/image";

export default function Home() {
  const menu = [
    {
      category: "Signature Cocktails",
      items: [
        { name: "Amber Twilight", price: 1800, desc: "Japanese Craft Gin, Earl Grey, Honey, Lemon. 琥珀色の黄昏を一杯に。" },
        { name: "Daikanyama Mist", price: 1900, desc: "Sake, Matcha, Elderflower, Tonic. 代官山の朝霧のような清涼感。" }
      ]
    },
    {
      category: "Standard Cocktails",
      items: [
        { name: "Premium Martini", price: 1600, desc: "The king of cocktails. クラフトジンを使用した極上の一杯。" },
        { name: "Smoked Moscow Mule", price: 1500, desc: "燻製シロップと自家製ジンジャーエールの刺激。" }
      ]
    },
    {
      category: "Special Food",
      items: [
        { name: "Smoked Mix Nuts", price: 800, desc: "桜チップでじっくりと燻した香り高いナッツ。" },
        { name: "The Encounter Curry", price: 1800, desc: "スパイスが織りなす人との出会いのような複雑な味わい。" }
      ]
    }
  ];

  return (
    <main>
      {/* Navigation */}
      <nav className="nav-bar glass">
        <div className="container nav-content">
          <div className="text-2xl font-ja tracking-widest amber-glow">TORIIAT</div>
          <div className="nav-links space-x-8 text-sm uppercase tracking-widest opacity-80">
            <a href="#about" className="hover:text-accent-amber">About</a>
            <a href="#menu" className="hover:text-accent-amber">Menu</a>
            <a href="#contact" className="hover:text-accent-amber">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt="TORIIAT Interior"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]"></div>
        </div>
        
        <div className="relative z-10 text-center animate-up">
          <h1 className="hero-title text-8xl md:text-9xl mb-6 text-gradient font-ja tracking-tighter">TORIIAT</h1>
          <p className="text-xl md:text-2xl tracking-[0.4em] text-secondary uppercase">Daikanyama Encounter</p>
          <div className="mt-12">
            <a href="#menu" className="btn-premium">Explore Menu</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="grid-2col grid md:grid-cols-2 gap-20 items-center">
            <div className="animate-up">
              <span className="text-accent-amber tracking-widest text-sm uppercase mb-4 block">Concept</span>
              <h2 className="text-5xl mb-10 font-ja leading-tight">酒と人が交差する、<br />代官山の隠れ家。</h2>
              <div className="text-secondary space-y-6 text-lg leading-relaxed">
                <p>
                  「TORIIAT（トリアット）」は、代官山の路地裏に静かに佇む、<br />
                  人との「出会い」を大切にするコミュニティ・バーです。
                </p>
                <p>
                  琥珀色の光に包まれたカウンターで、<br />
                  上質な酒と共に、新しい物語の始まりを。
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass animate-up" style={{ animationDelay: '0.2s' }}>
              <Image src="/mockup.png" alt="Bar Vibe" fill className="object-cover opacity-90 hover:scale-110 transition duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section-padding bg-[#080808]">
        <div className="container">
          <div className="text-center mb-24 animate-up">
            <h2 className="text-6xl mb-4 font-ja amber-glow">MENU</h2>
            <p className="text-secondary tracking-[0.2em] uppercase">Selection of Encounters</p>
          </div>
          
          <div className="menu-grid">
            {menu.map((cat, i) => (
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

      {/* Contact Section */}
      <footer id="contact" className="section-padding border-t border-white/5">
        <div className="container text-center">
          <div className="mb-16">
            <h2 className="text-4xl mb-6 font-ja">Reservation</h2>
            <p className="text-secondary">隠れ家のため、詳細はご予約時に。お気軽にお問い合わせください。</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20">
            <a href="#" className="btn-premium">Instagram DM</a>
            <a href="#" className="btn-premium">Tabelog Booking</a>
          </div>
          
          <div className="text-xs text-white/20 tracking-widest uppercase">
            © 2026 TORIIAT DAIKANYAMA. Crafted for Excellence by Alnair LLC.
          </div>
        </div>
      </footer>
    </main>
  );
}

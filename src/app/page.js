import Image from "next/image";

export default function Home() {
  const menu = [
    {
      category: "Signature Cocktails",
      items: [
        { name: "Amber Twilight", price: 1800, desc: "Japanese Craft Gin, Earl Grey, Honey, Lemon." },
        { name: "Daikanyama Mist", price: 1900, desc: "Sake, Matcha, Elderflower, Tonic." }
      ]
    },
    {
      category: "Standard Cocktails",
      items: [
        { name: "Martini", price: 1600, desc: "The king of cocktails. Extra dry." },
        { name: "Moscow Mule", price: 1500, desc: "Home-made spicy ginger ale." }
      ]
    },
    {
      category: "Food",
      items: [
        { name: "Smoked Mix Nuts", price: 800, desc: "In-house smoked with cherry wood." },
        { name: "The Encounter Curry", price: 1800, desc: "Rich and spicy beef curry." }
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="TORIIAT Interior"
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08080880] to-[#080808]"></div>
        </div>
        
        <div className="relative z-10 text-center animate-fade-in">
          <h1 className="text-7xl md:text-9xl mb-4 amber-glow tracking-widest font-ja">TORIIAT</h1>
          <p className="text-xl md:text-2xl tracking-[0.3em] text-secondary">DAIKANYAMA | ENCOUNTER</p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[1px] h-20 bg-amber-glow bg-accent-amber"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl mb-8 border-l-4 border-accent-amber pl-6 font-ja">酒と人、出会いの交差点</h2>
            <p className="text-secondary leading-relaxed mb-6">
              代官山の静かな路地裏に佇む「TORIIAT（トリアット）」。<br />
              ここは、上質な酒と共に、新しい人との出会いや気づきを楽しむための場所です。
            </p>
            <p className="text-secondary leading-relaxed">
              琥珀色の光に包まれた空間で、今夜だけの特別な物語を。
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden glass">
            <Image src="/mockup.png" alt="Bar Vibe" fill className="object-cover opacity-80" />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="bg-[#0c0c0c] section-padding">
        <div className="container">
          <h2 className="text-center text-5xl mb-16 font-ja amber-glow">MENU</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {menu.map((cat, i) => (
              <div key={i} className="glass p-8 rounded-xl">
                <h3 className="text-accent-amber text-2xl mb-6 border-b border-white/10 pb-4">{cat.category}</h3>
                <ul className="space-y-6">
                  {cat.items.map((item, j) => (
                    <li key={j}>
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-lg font-ja">{item.name}</span>
                        <span className="text-accent-gold">¥{item.price.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-secondary">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="section-padding border-t border-white/5">
        <div className="container text-center">
          <p className="text-2xl mb-8 font-ja tracking-widest">TORIIAT Daikanyama</p>
          <p className="text-secondary mb-4">東京都渋谷区代官山町（隠れ家のため詳細はご予約時に）</p>
          <div className="flex justify-center gap-8 mt-12">
            <a href="#" className="text-accent-amber hover:opacity-70 transition">Instagram</a>
            <a href="#" className="text-accent-amber hover:opacity-70 transition">Tabelog</a>
            <a href="#" className="glass px-8 py-3 rounded-full text-sm hover:bg-white/10 transition">RESERVATION</a>
          </div>
          <p className="mt-20 text-xs text-white/20">© 2026 TORIIAT DAIKANYAMA. Managed by Alnair LLC.</p>
        </div>
      </footer>

      <style jsx global>{`
        .amber-glow { text-shadow: 0 0 20px rgba(255, 159, 28, 0.4); }
      `}</style>
    </main>
  );
}

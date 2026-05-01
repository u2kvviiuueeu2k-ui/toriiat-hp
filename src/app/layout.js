import { Outfit, Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const shippori = Shippori_Mincho_B1({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "TORIIAT Daikanyama | 琥珀色の出会い、代官山の隠れ家バー",
  description: "代官山に佇む、酒と人との出会いを大切にするバー「TORIIAT（トリアット）」。琥珀色の光に包まれた上質な空間で、心に残るひとときを。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${outfit.variable} ${shippori.variable}`}>
      <body>{children}</body>
    </html>
  );
}

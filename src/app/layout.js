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
  title: "ToriiAt Daikanyama | The Encounter Bar",
  description: "代官山の路地裏に佇む、人との出会いを大切にするコミュニティ・バー「ToriiAt（トリイアト）」。琥珀色の光と上質な酒に包まれる至福のひとときを。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${outfit.variable} ${shippori.variable}`}>
      <body>{children}</body>
    </html>
  );
}

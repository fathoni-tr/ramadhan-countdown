import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Audiowide, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Ramadhan Countdown",
  description: "Hitung mundur menuju Ramadhan 1448H pada 17 Februari 2027.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Ramadhan Countdown",
    description: "Hitung mundur menuju Ramadhan 1448H pada 17 Februari 2027.",
    type: "website",
  },
};

const themeScript = `try{var t=localStorage.getItem('theme')||'system';document.documentElement.dataset.theme=t==='system'?(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'):t}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${plex.variable} ${audiowide.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

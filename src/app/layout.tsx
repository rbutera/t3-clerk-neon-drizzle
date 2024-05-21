import "~/styles/globals.css";

import { Lora, Quattrocento } from "next/font/google";

import TopNav from "./_components/TopNav";

export const metadata = {
  title: "Gallery",
  description: "Practice for RSVP app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const lora = Lora({ weight: "variable", style: ["italic"] });
const quattrocento = Quattrocento({ weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.className} ${quattrocento.className}`}>
      <body>
        <TopNav />
        <>{children}</>
      </body>
    </html>
  );
}

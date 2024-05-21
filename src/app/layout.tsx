import { Lora, Quattrocento } from "next/font/google";
import "~/styles/globals.css";

import TopNav from "./_components/TopNav";

export const metadata = {
  title: "Gallery",
  description: "Practice for RSVP app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const lora = Lora({
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-lora",
});
const quattrocento = Quattrocento({
  weight: ["400", "700"],
  variable: "--font-quattrocento",
});

function MainBody({ children }: { children: React.ReactNode }) {
  return <main className="container w-full p-4">{children}</main>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${quattrocento.variable}`}>
      <body>
        <TopNav />
        <MainBody>{children}</MainBody>
      </body>
    </html>
  );
}

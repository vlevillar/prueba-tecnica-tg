import { Providers } from "./providers";
import "./globals.css";
import { Roboto } from "next/font/google";
import AppBar from "@/components/AppBar";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bgPrimary">
        <main className={roboto.className}>
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}

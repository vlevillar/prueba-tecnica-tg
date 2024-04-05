import { Providers } from './providers'
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className=''>
      <body className='bg-[#010316]'>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
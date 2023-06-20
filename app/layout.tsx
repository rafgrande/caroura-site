// These styles apply to every route in the application
import Footer from './components/footer';
import Header from './components/header';
import '@fortawesome/fontawesome-svg-core/styles.css'

import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Caroura',
  description: 'Compra e vendas de carro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B7ECYKS6V7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-B7ECYKS6V7');
        `}
      </Script>
      <body className='flex flex-col min-h-screen'>
        <Header/>
        <main className='grow'>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}

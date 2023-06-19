// These styles apply to every route in the application
import Footer from './components/footer';
import Header from './components/header';
import '@fortawesome/fontawesome-svg-core/styles.css'

import './globals.css';

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

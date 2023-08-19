import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Techies Meetups',
  description: 'All the techmeetups that you need',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" className={inter.className}>
       <body>
        <Header/>
        <main className='m-9'>
          {children}
        </main>
        <Footer/>
        </body> 
       
       
    </html>

  )
}

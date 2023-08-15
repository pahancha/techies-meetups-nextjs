import './styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

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
    <div className={inter.className}>
    <Head>
      <link />
    </Head>
    <header>This is the header</header>
      <main>This is the body</main>
    <footer>This is the footer</footer>
  </div>
  )
}


import Link from 'next/link';
import type { ReactNode } from 'react' ;
import "./globals.css" ;
import { Inter } from 'next/font/google'
import type { Metadata } from 'next' ;

export const metadata: Metadata = {
  title: {
    default: 'Next.js Training',
    template: '%s | Next.js Training',
  },
  description: 'A Next.js training project',
  openGraph : {
    siteName: 'Next.js Training',
  }
} 


const inter = Inter({ subsets: ['latin'], weight:["400","500","600","700"], display:"swap" });

export default function RootLayout({children}: {children: ReactNode}){
  return (

    <html lang="en">
      <head>
      
        <title>NExt js Training</title>
      </head>
      <body className={inter.className}>
        <header style={{padding:12, background:"#f5f5f5"}}>
          Header
          <nav style={{display:"flex", gap:12}}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/dashboard">DashBoard</Link>
            <Link href="/products">Products</Link>
          </nav>
        </header>
        {children}
        <footer  style={{padding:12, background:"#f5f5f5"}}>Footer</footer>
      </body>
    </html>
  )
}
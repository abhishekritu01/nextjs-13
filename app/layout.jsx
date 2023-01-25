import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <nav>
          <ul>
            <li><Link href='/'> Home</Link></li>
            <li> <Link href='/posts'>Post</Link></li>
            <li> <Link href='/about'>About</Link></li>
            <li> <Link href='/swrpost'>SWR_POST</Link></li>
              
          </ul>
        </nav>

        {children}</body>
    </html>
  )
}

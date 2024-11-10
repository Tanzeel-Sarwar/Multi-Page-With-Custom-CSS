import Link from 'next/link'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>
        <nav className="container">
          <Link href="/" className="logo">
            My Website
          </Link>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">{children}</main>
      <footer>
        <div className="container">© 2023 My Website. All rights reserved.</div>
      </footer>
    </div>
  )
}
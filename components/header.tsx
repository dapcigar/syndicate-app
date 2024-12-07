"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"

export function Header() {
  const pathname = usePathname()
  
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Syndicate
        </Link>
        
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link 
              href="/dashboard"
              className={pathname === '/dashboard' ? 'text-primary' : ''}
            >
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link 
              href="/groups"
              className={pathname === '/groups' ? 'text-primary' : ''}
            >
              Groups
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
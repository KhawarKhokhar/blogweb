"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Instagram, Twitter, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted border-t py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* 1. Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">My Blog</h2>
          <p className="text-muted-foreground">
            Sharing tutorials, insights, and guides on Next.js, React, Tailwind CSS, and modern web development.
          </p>
          <div className="flex gap-4 mt-2">
            <Link href="#" className="text-muted-foreground hover:text-primary transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition">
              <Github size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition">
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-primary transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition">About</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* 3. Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
          <p className="text-muted-foreground">
            Get the latest blog posts and updates delivered directly to your inbox.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 text-center text-sm text-muted-foreground border-t pt-6">
        &copy; {new Date().getFullYear()} My Blog. All rights reserved.
      </div>
    </footer>
  )
}

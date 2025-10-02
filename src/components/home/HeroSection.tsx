"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-36 px-6 bg-gradient-to-b from-background to-muted">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        Welcome to <span className="text-primary">My Blog</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Sharing tutorials, guides, and insights on web development, Next.js, and more.
      </p>

      {/* CTA Buttons */}
      <div className="mt-8 flex gap-4">
        <Button asChild size="lg">
          <Link href="/blog">Read Blog</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/about">About Me</Link>
        </Button>
      </div>
    </section>
  )
}

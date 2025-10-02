"use client"

import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 text-center">
      <h2 className="text-3xl font-bold">Join the Community</h2>
      <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
        Hundreds of developers already learn and share here. Don’t miss out!
      </p>
      <Link
        href="/blog"
        className="mt-6 inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
      >
        Explore the Blog →
      </Link>
    </section>
  )
}

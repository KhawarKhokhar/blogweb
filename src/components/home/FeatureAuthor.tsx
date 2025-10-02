"use client"

import Image from "next/image"

export default function FeaturedAuthor() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center">
      <Image
        src="/author.jpg"
        alt="Author"
        width={120}
        height={120}
        className="mx-auto rounded-full mb-6"
      />
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-muted-foreground mt-4">
        Hi, I’m Khawar 👋 A web developer passionate about building with Next.js, React, and Tailwind.
        On this blog, I share tutorials, resources, and personal learnings from my coding journey.
      </p>
    </section>
  )
}

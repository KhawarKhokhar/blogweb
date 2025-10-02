"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Newsletter() {
  return (
    <section className="py-32 bg-muted px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="text-muted-foreground mt-2">
          Subscribe to get the latest blog posts directly in your inbox.
        </p>
        <form className="mt-6 flex gap-2 justify-center">
          <Input type="email" placeholder="Enter your email" className="max-w-sm" />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  )
}

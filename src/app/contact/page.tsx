"use client"

import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="w-full py-32 px-6 text-center bg-gradient-to-b from-background to-muted">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions, feedback, or want to collaborate? Reach out using the form below or via our contact details.
        </p>
      </section>

      {/* 2. Contact Form Section */}
      <section className="py-24 px-6 max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-semibold text-center mb-8">Send a Message</h2>
        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full border rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </section>

      {/* 3. Contact Info Section */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">contact@myblog.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+1 234 567 890</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">New York, USA</p>
          </div>
        </div>
      </section>

      {/* 4. Call-to-Action Section */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Subscribe to our newsletter to get the latest blog posts and updates directly in your inbox.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="w-full border rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </section>
    </main>
  )
}

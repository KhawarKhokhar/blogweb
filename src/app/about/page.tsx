import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-background to-muted">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          About <span className="text-primary">Me</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Get to know who I am, what I do, and why I love sharing my journey through this blog.
        </p>
      </section>

      {/* Bio Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <Image
          src="/images/author.jpg" // place your image in /public/images/author.jpg
          alt="Author"
          width={150}
          height={150}
          className="mx-auto rounded-full mb-6 border-4 border-gray-200 shadow-lg"
        />
        <h2 className="text-3xl font-bold">Hi, I’m Khawar 👋</h2>
        <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
          I’m a passionate web developer who loves building with{" "}
          <span className="font-semibold text-foreground">Next.js, React, and Tailwind CSS</span>.
          This blog is my space to share tutorials, tips, and insights about modern web development.
          My goal is to help developers of all levels grow their skills and stay up-to-date with the latest technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-muted">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold">What I Work With</h2>
          <p className="text-muted-foreground mt-4 mb-12">
            A few of the technologies and tools I enjoy using:
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Next.js & React",
              "TypeScript & JavaScript",
              "Tailwind CSS & shadcn/ui",
              "Node.js & Express",
              "MongoDB & PostgreSQL",
              "Git & GitHub",
            ].map((skill) => (
              <div
                key={skill}
                className="p-6 border rounded-lg bg-background shadow-sm hover:shadow-md transition"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold">Let’s Connect</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Have questions, ideas, or just want to say hi? I’d love to hear from you.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href="/contact">Contact Me</a>
        </Button>
      </section>
    </main>
  )
}

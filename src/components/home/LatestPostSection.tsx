"use client"

import Image from "next/image"

export default function LatestPosts() {
 const posts = [
  { 
    id: 1, 
    title: "Getting Started with Next.js", 
    excerpt: "A step-by-step guide to your first Next.js app.", 
    image: "/images/1.jpg" // ✅ leading slash
  },
  { 
    id: 2, 
    title: "Understanding React Server Components", 
    excerpt: "What RSC means for the future of web dev.", 
    image: "/images/2.jpg"
  },
  { 
    id: 3, 
    title: "Styling with Tailwind & shadcn/ui", 
    excerpt: "How to quickly build beautiful UIs.", 
    image: "/images/3.jpg"
  },
]


  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Posts</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="overflow-hidden border rounded-lg shadow-sm hover:shadow-md transition"
          >
            {/* Post Image */}
            <div className="relative w-full h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Post Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-muted-foreground mt-2">{post.excerpt}</p>
              <a 
                href={`/blog/${post.id}`} 
                className="text-primary mt-4 inline-block hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

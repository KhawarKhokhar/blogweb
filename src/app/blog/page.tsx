"use client"
import Link from "next/link"
import Image from "next/image"

export default function BlogList() {
 const posts = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        slug: "getting-started-with-nextjs",
        image: "/images/1.jpg",
        content: `
Next.js is a powerful React framework that enables server-side rendering, static site generation, and more. 
In this post, we'll guide you step by step to set up your first Next.js project, create pages, and understand routing. 
You'll also learn about Next.js features like Image Optimization and API Routes.
    `,
    },
    {
        id: 2,
        title: "Understanding React Server Components",
        slug: "understanding-react-server-components",
        image: "/images/2.jpg",
        content: `
React Server Components (RSC) allow you to render components on the server without sending unnecessary JavaScript to the client. 
This reduces bundle size and improves performance. Learn how RSC works and when to use them in modern React applications.
    `,
    },
    {
        id: 3,
        title: "Styling with Tailwind CSS & shadcn/ui",
        slug: "styling-with-tailwind-shadcn-ui",
        image: "/images/3.jpg",
        content: `
Tailwind CSS is a utility-first CSS framework that helps you build modern, responsive UIs quickly. 
Combined with shadcn/ui, you can create reusable components with minimal effort. 
In this guide, we cover essential tips, responsive design, and customizing components for your projects.
    `,
    },
    {
        id: 4,
        title: "Building a Responsive Navbar",
        slug: "building-a-responsive-navbar",
        image: "/images/4.jpg",
        content: `
A good navigation bar is crucial for any website. In this post, we teach you how to build a fully responsive navbar using Tailwind CSS and React. 
We'll cover mobile menus, dropdowns, and accessibility considerations to make your navbar professional and functional.
    `,
    },
    {
        id: 5,
        title: "Deploying Next.js Apps to Vercel",
        slug: "deploying-nextjs-to-vercel",
        image: "/images/5.jpg",
        content: `
Deploying a Next.js app has never been easier thanks to Vercel. 
We walk through connecting your repository, configuring environment variables, and deploying your app to production. 
You'll also learn how to use preview deployments for testing changes before going live.
    `,
    },
    {
        id: 6,
        title: "Optimizing Images in Next.js",
        slug: "optimizing-images-nextjs",
        image: "/images/6.jpg",
        content: `
Optimizing images is key to improving website performance. Next.js provides the Image component for automatic resizing, lazy loading, and modern formats. 
In this post, we'll explain how to use next/image effectively, handle remote images, and boost your page speed.
    `,
    },
]

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Posts</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <div className="overflow-hidden border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer">
              <div className="relative w-full h-48">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-muted-foreground mt-2">{post.slug}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

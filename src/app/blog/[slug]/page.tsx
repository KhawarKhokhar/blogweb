import { notFound } from "next/navigation"
import Image from "next/image"

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
export default function BlogDetail({ params }: { params: { slug: string } }) {
    const post = posts.find(p => p.slug === params.slug)
    if (!post) return notFound()

    return (
        <main className="max-w-3xl mx-auto py-24 px-6">
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <div className="relative w-full h-64 mb-8">
                <Image src={post.image} alt={post.title} fill className="object-cover rounded-lg" />
            </div>
            <p className="text-lg leading-relaxed whitespace-pre-line">{post.content}</p>
        </main>
    )
}

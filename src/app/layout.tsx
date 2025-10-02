import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import "./globals.css"

export const metadata = {
  title: "My Blog",
  description: "Next.js + Tailwind Blog Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar will be on top of all pages */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Footer will be on bottom of all pages */}
        <Footer />
      </body>
    </html>
  )
}

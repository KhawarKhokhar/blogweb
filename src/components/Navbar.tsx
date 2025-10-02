"use client"

import Link from "next/link"
import { cva } from "class-variance-authority"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

// Smaller trigger styling
export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 px-4 py-2 text-sm font-medium rounded-md bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring"
)

export default function Navbar() {
  return (
    <div className="w-full flex justify-center py-4">
      <NavigationMenu>
        <NavigationMenuList className="gap-3">
          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Blog Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/blog">Blog</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* About */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Contact */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/contact">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Optional viewport for animation */}
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  )
}

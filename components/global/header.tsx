"use client";

import Logo from "@/components/global/logo";
import { Button } from "@/components/ui/button";
import { padding } from "@/lib/constants";
import { navLinks } from "@/lib/links";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Menu, ShoppingCart, Twitter } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary/99 sticky top-0 z-100! border-b border-dashed border-white/20">
      <div
        className={cn(
          "mx-auto flex h-[90px] max-w-480 items-center justify-between text-white shadow-2xl md:py-10",
          padding,
        )}
      >
        <div className="relative flex w-full items-center sm:gap-6 md:flex-row-reverse">
          <nav>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="md:hidden"
                >
                  <Menu color="white" className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="bg-primary/97 text-popover w-85 border-dashed border-white/20 px-6"
              >
                <SheetHeader className="mt-24">
                  {navLinks.map((link) => (
                    <div
                      key={link.label}
                      className="space-y-1 border-b border-dashed border-white/20 pb-4"
                    >
                      <SheetTitle className="hover:text-accent-strong mt-6 text-[13px] leading-[25px] font-bold tracking-[2px] uppercase transition-colors">
                        <Link
                          href={link.href}
                          className="flex items-center gap-2"
                          onClick={() => setOpen(false)}
                        >
                          {link.icon}
                          <span>{link.label}</span>
                        </Link>
                      </SheetTitle>
                      <SheetDescription className="text-xs">
                        {link.description}
                      </SheetDescription>
                    </div>
                  ))}
                </SheetHeader>
                <SheetFooter className="flex items-center gap-8 border-t border-dashed border-white/20 pb-8">
                  <div className="flex items-center gap-6">
                    <Facebook className="h-5 w-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150" />
                    <Twitter className="h-5 w-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150" />
                    <Instagram className="h-5 w-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150" />
                  </div>
                  <span className="text-muted-foreground text-xs">
                    &copy; 2025 Audiophile
                  </span>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <ul className="hidden gap-4 md:absolute md:top-1/2 md:left-1/2 md:ml-4 md:flex md:-translate-x-1/2 md:-translate-y-1/2 md:items-center lg:ml-0 lg:gap-8">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href}>
                  <li className="hover:text-accent-strong text-[13px] leading-[25px] font-bold tracking-[2px] uppercase transition-colors">
                    {link.label}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <div className="flex w-full items-center justify-center sm:justify-start">
            <Logo />
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <ShoppingCart color="white" className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}

export default Header;

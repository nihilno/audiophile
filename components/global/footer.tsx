import { padding } from "@/lib/constants";
import { navLinks } from "@/lib/links";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

function Footer() {
  return (
    <div
      className={cn(
        "bg-primary mt-auto flex flex-col items-center py-16 text-center text-white md:items-start md:text-left",
        padding,
      )}
    >
      <div>
        <Logo />
        <nav className="my-14 md:my-7">
          <ul className="flex flex-col items-center gap-4 md:flex-row">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <li className="hover:text-accent-strong text-[13px] leading-[25px] font-bold tracking-[2px] uppercase transition-colors">
                  {link.label}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <p className="max-w-[37ch] tracking-wide opacity-70 md:max-w-[76ch]">
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="mt-12 flex flex-col items-center gap-8 md:mt-16 md:w-full md:flex-row md:justify-between">
        <div className="flex items-center gap-6">
          <Facebook className="h-5 w-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150" />
          <Twitter className="h-5 w-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150" />
          <Instagram className="h-5 w-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-150" />
        </div>
        <span className="text-muted-foreground text-xs">
          &copy; 2025 Audiophile
        </span>
      </div>
    </div>
  );
}

export default Footer;

import { Ear, Headphones, Home, Speaker } from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    description: "Start browsing",
    href: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    label: "Headphones",
    description: "Find your perfect sound",
    href: "/headphones",
    icon: <Headphones className="h-4 w-4" />,
  },
  {
    label: "Speakers",
    description: "Powerful audio options",
    href: "/speakers",
    icon: <Speaker className="h-4 w-4" />,
  },
  {
    label: "Earphones",
    description: "Compact & stylish",
    href: "/earphones",
    icon: <Ear className="h-4 w-4" />,
  },
];

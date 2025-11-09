"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { label: "Work", href: "/projects" },
  { label: "Music", href: "/music" },
  { label: "About", href: "/about" },
  { label: "Labs", href: "/labs" },
  { label: "Contact", href: "/contact" },
];

const MainNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-1 md:space-x-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} className="relative">
            <motion.span
              className={`block px-3 py-2 text-sm font-medium transition-colors md:px-4 md:text-base ${
                isActive
                  ? "text-accent"
                  : "text-gray-300 hover:text-accent-light"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.span>
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNav;


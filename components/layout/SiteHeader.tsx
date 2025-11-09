"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MainNav from "./MainNav";

const SiteHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b border-muted-dark/50 transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-xl" : "bg-bg"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-6">
        {/* Logo / Wordmark */}
        <Link href="/">
          <motion.div
            className="text-xl font-bold tracking-tight text-gray-100 md:text-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="glow-text">STALLINGS</span>
          </motion.div>
        </Link>

        {/* Navigation */}
        <MainNav />
      </div>
    </motion.header>
  );
};

export default SiteHeader;


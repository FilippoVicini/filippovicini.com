"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>

      <div className="top-0 z-10 h-16 pt-6">
        <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1 items-center">
                    <a
                      href="/"
                      className="text-lg font-semibold text-zinc-800 cursor-pointer"
                    >
                      Filippo Vicini
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


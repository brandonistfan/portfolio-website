"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-10 border-b border-blue-700/30 bg-gradient-to-r from-blue-900/80 to-blue-800/80 p-4 text-white backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-blue-300/30 bg-blue-400/20">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="font-mono text-lg text-blue-200">
            Brandon Istfan
          </span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-2">
            <li>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="text-blue-100 hover:bg-blue-700/50 hover:text-white"
              >
                About
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("experience")}
                className="text-blue-100 hover:bg-blue-700/50 hover:text-white"
              >
                Experience
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("projects")}
                className="text-blue-100 hover:bg-blue-700/50 hover:text-white"
              >
                Projects
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className="text-blue-100 hover:bg-blue-700/50 hover:text-white"
              >
                Contact
              </Button>
            </li>
          </ul>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-blue-100 hover:bg-blue-700/50 hover:text-white md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 md:hidden">
          <ul className="flex flex-col space-y-2">
            <li>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="w-full justify-start text-blue-100 hover:bg-blue-700/50 hover:text-white"
              >
                About
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("experience")}
                className="w-full justify-start text-blue-100 hover:bg-blue-700/50 hover:text-white"
              >
                Experience
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("projects")}
                className="w-full justify-start text-blue-100 hover:bg-blue-700/50 hover:text-white"
              >
                Projects
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className="w-full justify-start text-blue-100 hover:bg-blue-700/50 hover:text-white"
              >
                Contact
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

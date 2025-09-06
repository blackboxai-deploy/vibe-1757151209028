"use client"

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/threats", label: "Threats" },
    { href: "/prevention", label: "Prevention" },
    { href: "/quiz", label: "Quiz" },
    { href: "/resources", label: "Resources" },
    { href: "/emergency", label: "Emergency" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white rounded"></div>
            </div>
            <span className="text-xl font-bold">CyberSafe Community</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-slate-800">
                  <div className="w-6 h-6 flex flex-col justify-center items-center">
                    <span className="block w-5 h-0.5 bg-current mb-1"></span>
                    <span className="block w-5 h-0.5 bg-current mb-1"></span>
                    <span className="block w-5 h-0.5 bg-current"></span>
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-slate-900 text-white">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2 px-4 rounded"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
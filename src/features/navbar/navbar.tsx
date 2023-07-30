"use client";

import Logo from "@/components/logo";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Cart from "../cart";
import Navbarmenus from "../navbarmenus";

const Navbar = () => {
  return (
    <div className="z-50 w-full h-[5.5rem]">
      <header className="fixed top-0 z-50 w-full bg-headerBg">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center gap-8 lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Logo size="16" fill="#222222" />
            </Link>
            <div className="hidden lg:block">
              <Navbarmenus />
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-6">
              <MagnifyingGlassIcon className="text-fontPrimary h-6 w-6" />
            </div>
            <Cart />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

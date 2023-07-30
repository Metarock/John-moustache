"use client";

import Logo from "@/components/logo";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Cart from "../cart";
import Navbarmenus from "../navbarmenus";
import { useMiniCartStore } from "@/store/useMiniCartStore";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/helpers";

const Navbar = () => {
  const products = useMiniCartStore((state) => state.product);

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
            <AnimatePresence>
              {products.length > 0 && (
                <motion.div
                  initial="hidden"
                  animate={products.length > 0 ? "show" : "hidden"}
                  exit="hidden"
                  variants={{
                    hidden: { width: 0, transition: { duration: 0.125 } },
                    show: { width: "auto" },
                  }}
                  transition={{ duration: 0.25 }}
                  className={cn(
                    "overflow-hidden",
                    products.length > 0 ? "" : "hidden"
                  )}
                >
                  <motion.div
                    initial="hidden"
                    animate={products.length > 0 ? "show" : "hidden"}
                    exit="hidden"
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: window.innerWidth >= 1024 ? "-6rem" : "6rem",
                        transition: { duration: 0.125 },
                      },
                      show: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <Cart />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

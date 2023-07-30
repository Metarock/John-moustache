"use client";

import Logo from "@/components/logo";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Cart from "../cart";
import Navbarmenus from "../navbarmenus";
import { useMiniCartStore } from "@/store/useMiniCartStore";
import { AnimatePresence, motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@/utils/helpers";
import { useState } from "react";

const mockmenus = [
  { name: "Men", href: "#" },
  { name: "Women", href: "#" },
  { name: "Kids", href: "#" },
  { name: "All Products", href: "#" },
];

const MobileMenu = () => {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <div className="relative h-6">
      <Dialog.Root modal={false} open={openMobile} onOpenChange={setOpenMobile}>
        <Dialog.Trigger className="absolute top-0 right-0 text-gray-600 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset transition-colors ease-in-out duration-200 focus-visible:ring-indigo-500">
          <span className="sr-only">Open main menu</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <motion.line
              x1={4}
              x2={20}
              y1={6}
              y2={6}
              animate={
                openMobile
                  ? { rotate: 45, translateY: 6 }
                  : { rotate: 0, translateY: 0 }
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              transition={{ type: "tween", duration: 0.2 }}
            />
            <motion.line
              x1={4}
              x2={20}
              y1={12}
              y2={12}
              animate={openMobile ? { opacity: 0 } : { opacity: 1 }}
              strokeLinecap="round"
              strokeLinejoin="round"
              transition={{ type: "tween", duration: 0.15 }}
            />
            <motion.line
              x1={4}
              x2={20}
              y1={18}
              y2={18}
              animate={
                openMobile
                  ? { rotate: -45, translateY: -6 }
                  : { rotate: 0, translateY: 0 }
              }
              strokeLinecap="round"
              strokeLinejoin="round"
              transition={{ type: "tween", duration: 0.2 }}
            />
          </motion.svg>
        </Dialog.Trigger>
        <AnimatePresence>
          {openMobile && (
            <Dialog.Portal forceMount>
              <Dialog.Content
                asChild
                forceMount
                className="fixed inset-0 z-[49] w-screen"
              >
                <motion.div
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{
                    hidden: {
                      height: 0,
                      transition: { duration: 0.125 },
                    },
                    show: { height: "auto" },
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <nav
                    className="h-full pt-[5.5rem] bg-headerBg"
                    aria-label="Global"
                  >
                    <div className="box-border flex flex-col h-full">
                      <div className="overflow-y-auto grow">
                        <div className="p-2 mx-auto max-w-8xl sm:px-4">
                          {mockmenus.map((menu) => (
                            <Link
                              key={menu.name}
                              href={menu.href}
                              onClick={() => setOpenMobile(false)}
                              className="block text-lg px-3 py-2 font-medium rounded-md text-fontPrimary"
                            >
                              {menu.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </nav>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </div>
  );
};

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
            <div className="flex ml-10 lg:ml-0 lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

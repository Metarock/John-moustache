import Link from "next/link";
import React from "react";

const mockmenus = [
  { name: "Men", href: "#" },
  { name: "Women", href: "#" },
  { name: "Kids", href: "#" },
  { name: "All Products", href: "#" },
];

const Navbarmenus = () => {
  return (
    <div>
      <ul className="relative flex items-center">
        {mockmenus.map((menu, index) => (
          <li key={index}>
            <Link
              id={menu.name}
              href={menu.href}
              className="relative block z-10 px-4 py-2 font-medium text-fontPrimary"
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbarmenus;

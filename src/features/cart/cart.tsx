"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/dropdowns/popover";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import teeShirtImage from "@public/images/classic-tee.jpg";
import Image from "next/image";
import { getCurrencyFormat } from "@/utils/helpers";
import { useMiniCartStore } from "@/store/useMiniCartStore";
import Link from "next/link";

const mockData = [
  {
    id: 1,
    productName: "Classic Tee",
    price: 75,
    sizeOption: { id: 1, label: "S" },
    image: teeShirtImage,
  },
  {
    id: 2,
    productName: "Classic Tee",
    price: 75,
    sizeOption: { id: 3, label: "L" },
    image: teeShirtImage,
  },
  {
    id: 3,
    productName: "Classic Tee",
    price: 75,
    sizeOption: { id: 3, label: "L" },
    image: teeShirtImage,
  },
  {
    id: 4,
    productName: "Classic Tee",
    price: 75,
    sizeOption: { id: 3, label: "L" },
    image: teeShirtImage,
  },
  {
    id: 5,
    productName: "Classic Tee",
    price: 75,
    sizeOption: { id: 3, label: "L" },
    image: teeShirtImage,
  },
];

const Cart = () => {
  const products = useMiniCartStore((state) => state.product);
  const totalQuantity = products.reduce(
    (totalQuantity, product) => totalQuantity + (product.quantity || 0),
    0
  );
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex gap-1 ml-4 px-4 py-2 rounded-full bg-white focus:outline-none hover:bg-indigo-50 focus:bg-indigo-50 transition-colors duration-200 ease-in-out">
          <div className="relative">
            <ShoppingCartIcon className="h-6 w-6 text-fontPrimary" />
            <span className="absolute flex justify-center items-center px-1 -top-1.5 -right-2 min-w-[1rem] text-xs rounded-full bg-indigo-100 text-fontPrimary tabular-nums">
              {totalQuantity}
            </span>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={5}
        align="end"
        alignOffset={-64}
        className=" w-[calc(100vw-1px)] sm:w-80 border-lightGreyBorder bg-white m"
      >
        <h2 className="text-2xl font-black text-fontPrimary leading-none">
          My Cart
        </h2>

        <div className="flex flex-col gap-4 mt-4">
          {products.map((product, index) => (
            <div key={index} className="flex">
              <div className="relative">
                <Image
                  src={product.image}
                  height={80}
                  width={64}
                  className="w-16 h-20 rounded-lg"
                  alt={product.productName}
                  unoptimized
                />
              </div>
              <div className="flex-col justify-center flex-1 mb-1">
                <h3 className="text-lg font-semibold text-fontPrimary leading-none">
                  {product.productName}
                </h3>
                <p>
                  {product.quantity} x {getCurrencyFormat(product.price)}
                </p>
                <p className="text-indigo-600">
                  Size: {product.sizeOption.label}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="#"
          className="flex items-center justify-center w-full p-2 mt-4 rounded-md  hover:bg-gray-100 disabled:bg-indigo-200 text-fontPrimary border border-darkGreyBorder font-semibold transition-colors duration-200 ease-in-out"
        >
          View Cart
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default Cart;

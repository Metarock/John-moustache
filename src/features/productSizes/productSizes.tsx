"use client";
import { ProductSizeOps } from "@/types";
import React, { useState } from "react";
import * as Radio from "@radix-ui/react-radio-group";
import { cn } from "@/utils/helpers";
import { AnimatePresence, motion } from "framer-motion";
import teeShirtImage from "@public/images/classic-tee.jpg";
import { useMiniCartStore } from "@/store/useMiniCartStore";

interface Props {
  sizes: ProductSizeOps[];
}

const ProductSizes = ({ sizes }: Props) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [error, setError] = useState("");
  const addProductToCart = useMiniCartStore((state) => state.addProduct);

  function handleAddProduct() {
    if (!selectedSize) {
      setError("Please select a preferred size.");
      return;
    }

    const sizeOption = {
      id: selectedSize === "S" ? 1 : selectedSize === "M" ? 2 : 3,
      label: selectedSize,
    };

    const addProduct = {
      productName: "Classic Tee",
      price: 75,
      sizeOption: sizeOption,
      image: teeShirtImage,
    };
    addProductToCart(addProduct);
    setError("");
  }

  return (
    <>
      <div className="mt-6">
        <h3 className="text-sm text-fontSecondary">
          Sizes <span className="text-requiredColor">*</span>
        </h3>

        <AnimatePresence>
          {error && (
            <motion.span
              initial="hidden"
              animate={error ? "show" : "hidden"}
              exit="hidden"
              variants={{
                hidden: { width: 0, transition: { duration: 0.125 } },
                show: { width: "auto" },
              }}
              transition={{ duration: 0.25 }}
              className={cn(
                "overflow-hidden",
                error ? "" : "hidden",
                "text-red-500 text-sm"
              )}
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>

        <Radio.Root
          className="mt-2"
          value={selectedSize}
          onValueChange={setSelectedSize}
        >
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-3">
            {sizes.map((size) => (
              <Radio.Item
                key={size.id}
                value={size.label}
                className={cn(
                  selectedSize === size.label
                    ? "border border-darkGreyBorder"
                    : "border-2",
                  "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                )}
              >
                {size.label}
              </Radio.Item>
            ))}
          </div>
        </Radio.Root>
      </div>
      <div className="mt-10">
        <button
          onClick={handleAddProduct}
          className="flex max-w-xs flex-1 uppercase items-center justify-center rounded-md border border-darkGreyBorder text-fontPrimary px-8 py-3 text-base font-medium hover:bg-gray-100 disabled:bg-gray-100 disabled:text-fontSecondary disabled:border-lightGreyBorder focus:outline-none focus:ring-2 focus:ring-darkGreyBorder focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full transition-colors ease-in-out duration-200"
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default ProductSizes;

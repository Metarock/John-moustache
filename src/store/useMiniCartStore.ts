import { CartProduct } from "@/types";
import { create } from "zustand";

export const useMiniCartStore = create<{
  product: CartProduct[];
  addProduct: (addProd: CartProduct) => void;
}>()((set) => ({
  product: [],
  addProduct: (addProd) =>
    set((state) => ({ product: updateMiniCartData(state.product, addProd) })),
}));

// Helper function to update the mini cart data
function updateMiniCartData(
  existingProducts: CartProduct[],
  selectedProduct: CartProduct
): CartProduct[] {
  const existingProductIndex = existingProducts.findIndex(
    (item) =>
      item.productName === selectedProduct.productName &&
      item.sizeOption.id === selectedProduct.sizeOption.id
  );

  if (existingProductIndex !== -1) {
    // If the product with the same productName and sizeOption already exists in mini cart, update the quantity
    existingProducts[existingProductIndex].quantity =
      (existingProducts[existingProductIndex].quantity || 1) + 1;
    return [...existingProducts];
  } else {
    // If the product with the same productName and sizeOption doesn't exist, add it to the mini cart
    return [...existingProducts, { ...selectedProduct, quantity: 1 }];
  }
}

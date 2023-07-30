export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  sizeOptions: ProductSizeOps[];
}

export interface ProductSizeOps {
  id: number;
  label: string;
}

interface CartProduct {
  productName: string;
  price: number;
  sizeOption: { id: number; label: string };
  image: StaticImageData;
  quantity?: number;
}

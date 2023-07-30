import ProductSizes from "@/features/productSizes";
import { Product } from "@/types";
import { getCurrencyFormat } from "@/utils/helpers";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getProduct(): Promise<Product> {
  const res = await fetch(
    "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product",
    { next: { revalidate: 15 } }
  );
  if (!res.ok) notFound();

  return res.json();
}

export default async function Home() {
  const product = await getProduct();

  return (
    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 bg-white px-4 md:px-6 lg:px-8 py-6 lg:py-8 rounded-2xl">
      <div className="flex flex-col-reverse">
        <div className="aspect-h-1 aspect-w-1 w-full">
          <Image
            src={product.imageURL}
            alt={product.title}
            className="h-full w-full object-cover object-center sm:rounded-lg"
            width={64}
            height={64}
            unoptimized
          />
        </div>
      </div>
      <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <h1 className="text-3xl font-bold tracking-tight text-fontPrimary">
          {product.title}
        </h1>

        <div className="mt-3 ">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight p-1 text-fontPrimary border border-lightGreyBorder border-x-0 ">
            {getCurrencyFormat(product.price)}
          </p>
        </div>

        <div className="mt-6">
          <h3 className="sr-only">Description</h3>
          <div
            className="space-y-6 text-base text-fontSecondary"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>

        <ProductSizes sizes={product.sizeOptions} />
      </div>
    </div>
  );
}

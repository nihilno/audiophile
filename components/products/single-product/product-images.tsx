import { Product } from "@/lib/types";
import Image from "next/image";

function ProductImages({ product }: { product: Product }) {
  const {
    gallery: { first, second, third },
  } = product;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-[0.7fr_1fr]">
      <div className="bg-product-bg relative h-44 overflow-hidden rounded-md sm:col-start-1 sm:row-start-1 lg:h-60 xl:h-72">
        <Image
          src={first}
          alt="Gallery Image"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, (max-width: 1280px) 33vw, 33vw
      "
        />
      </div>
      <div className="bg-product-bg relative h-44 overflow-hidden rounded-md sm:col-start-1 sm:row-start-2 lg:h-60 xl:h-72">
        <Image
          src={second}
          alt="Gallery Image"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, (max-width: 1280px) 33vw, 33vw
      "
        />
      </div>
      <div className="bg-product-bg relative h-92 overflow-hidden rounded-md sm:col-start-2 sm:row-span-2 sm:row-start-1 lg:h-124 xl:h-148">
        <Image
          src={third}
          alt="Gallery Image"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, (max-width: 1280px) 33vw, 33vw
      "
        />
      </div>
    </div>
  );
}

export default ProductImages;

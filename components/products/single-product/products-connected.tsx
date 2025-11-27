import { Button } from "@/components/ui/button";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function ProductsConnected({ product }: { product: Product }) {
  return (
    <div className="mt-24 mb-48 md:mt-32">
      <h2 className="mb-8 text-center text-[24px] leading-9 font-bold tracking-[0.86px] uppercase md:mb-12 md:text-[32px] md:tracking-[1.14px]">
        You may also like
      </h2>
      <div
        className={cn(
          "flex flex-col items-center gap-12 md:flex-row md:justify-between md:gap-10",
        )}
      >
        {product.others.map((product) => (
          <ConnectedProduct key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsConnected;

function ConnectedProduct({
  product,
}: {
  product: { slug: string; name: string; image: string };
}) {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="bg-product-bg relative h-30 w-full max-w-[350px] cursor-pointer overflow-hidden rounded-md shadow-md md:h-80 md:max-w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-center text-[24px] leading-9 font-bold tracking-[1.71px] uppercase">
        {product.name}
      </h3>
      <Link href={product.slug}>
        <Button className="bg-accent-strong h-12 rounded-none px-8 text-[13px] font-bold tracking-[1px] uppercase transition-all duration-300 hover:scale-107 hover:shadow-[0_4px_20px_#dc143c]">
          See Product
        </Button>
      </Link>
    </div>
  );
}

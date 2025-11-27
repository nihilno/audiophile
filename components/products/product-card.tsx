import { Button } from "@/components/ui/button";
import { ProductCardProp } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ item }: { item: ProductCardProp }) {
  return (
    <div className="grid grid-cols-1 items-center gap-y-10 md:grid-cols-2 md:gap-x-8 lg:gap-x-16 xl:gap-32">
      <div
        className={cn(
          item.id === 2 ? "md:order-2" : "",
          "bg-product-bg relative h-[352px] rounded-md shadow-sm md:h-100 lg:h-120 xl:h-140",
        )}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className="mx-auto max-w-100 object-cover"
        />
      </div>

      <article className="flex flex-col items-center gap-5 text-center sm:gap-6 md:left-10 md:items-start md:text-left">
        <h4 className="text-accent-light text-[14px] font-thin">NEW PRODUCT</h4>
        <h1 className="max-w-[12ch] text-[28px] leading-10 font-bold tracking-[1px] uppercase sm:text-[40px] sm:tracking-[1.43px]">
          {item.title}
        </h1>
        <p className="max-w-[38ch] tracking-wide opacity-70 sm:max-w-[60ch]">
          {item.description}
        </p>
        <Link href={`products/${item.slug}`}>
          <Button className="bg-accent-strong mt-4 h-12 rounded-none px-8 text-[13px] font-bold tracking-[1px] uppercase transition-all duration-300 hover:shadow-[0_4px_20px_#dc143c]">
            See Product
          </Button>
        </Link>
      </article>
    </div>
  );
}

export default ProductCard;

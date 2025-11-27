"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ProductShowcase({ product }: { product: Product }) {
  const [amount, setAmount] = useState(1);

  function handleAmount(value: number) {
    const newValue = amount + value;
    if (newValue < 1) return;
    setAmount(newValue);
  }

  return (
    <div
      key={product.id}
      className="mt-6 grid grid-cols-1 items-center gap-y-10 md:grid-cols-2 md:gap-x-8 lg:gap-x-16 xl:gap-32"
    >
      <div className="bg-product-bg relative h-[327px] rounded-md shadow-sm md:h-120">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className="mx-auto max-w-100 object-cover"
        />
      </div>

      <article className="flex flex-col items-center gap-5 text-center sm:gap-6 md:left-10 md:items-start md:text-left">
        {product.new && (
          <h4 className="text-accent-light text-[14px] font-thin">
            NEW PRODUCT
          </h4>
        )}
        <h1 className="max-w-[12ch] text-[28px] leading-10 font-bold tracking-[1px] uppercase sm:text-[40px] sm:tracking-[1.43px]">
          {product.name}
        </h1>
        <p className="max-w-[37ch] tracking-wide opacity-70 sm:max-w-[60ch]">
          {product.description}
        </p>
        <h3 className="my-2 text-[22px] font-bold tracking-[1.29px]">
          {formatPrice(Number(product.price))}
        </h3>
        <form className="mt-4 flex items-center justify-center gap-4">
          <div className="bg-product-bg relative max-w-30">
            <Input
              type="text"
              placeholder="1"
              className="h-12 rounded-none border-0 px-8 text-center text-[13px] font-bold tracking-[1px] shadow-none"
              value={amount}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value > 0) {
                  setAmount(value);
                }
              }}
            />
            <Button
              type="button"
              onClick={() => handleAmount(-1)}
              variant="ghost"
              className="absolute top-1/2 left-1 -translate-y-1/2 scale-90"
            >
              <Minus className="scale-80 opacity-50" />
            </Button>
            <Button
              type="button"
              onClick={() => handleAmount(1)}
              variant="ghost"
              className="absolute top-1/2 right-1 -translate-y-1/2 scale-90"
            >
              <Plus className="scale-80 opacity-50" />
            </Button>
          </div>
          <Button
            type="button"
            className="bg-accent-strong h-12 rounded-none px-8 text-[13px] font-bold tracking-[1px] uppercase transition-all duration-300 hover:shadow-[0_4px_20px_#dc143c]"
          >
            Add to cart
          </Button>
        </form>
      </article>
    </div>
  );
}

export default ProductShowcase;

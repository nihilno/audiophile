"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import { padding, SHIPPING } from "@/lib/constants";
import { cn, formatPrice } from "@/lib/utils";
import Image from "next/image";

function CheckoutSummary() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = Math.round(total * 0.05);
  const grandTotal = total + SHIPPING + vat;

  return (
    <div
      className={cn(
        "mt-8 mb-24 md:mt-16",
        padding,
        "lg:mt-0 lg:pl-0 xl:pl-0 2xl:pl-0",
      )}
    >
      <div className="space-y-8 rounded-md bg-white px-6 py-8 shadow-md">
        <h2 className="border-b border-dashed pb-2 text-[18px] font-bold tracking-[1.29px] uppercase">
          Summary
        </h2>

        <div className="space-y-5 border-b border-dashed pb-3.5">
          {cart.map((item) => (
            <div key={item.id} className="grid grid-cols-[64px_1fr] gap-x-4">
              <div className="bg-product-bg relative h-16 w-16 rounded-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="overflow-hidden rounded-md object-cover"
                />
              </div>
              <div className="flex justify-between py-1.5">
                <div className="flex flex-col">
                  <p className="line-clamp-1 pr-2 font-bold">{item.name}</p>
                  <p className="text-[14px] font-bold opacity-50">
                    {formatPrice(item.price)}
                  </p>
                </div>
                <span className="text-[15px] font-bold opacity-50">
                  x{item.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 border-b border-dashed pb-2">
          <div className="flex items-center justify-between">
            <p className="font-medium uppercase opacity-45">Total</p>
            <p className="text-[18px] font-bold">{formatPrice(total)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium uppercase opacity-45">Shipping</p>
            <p className="text-[18px] font-bold">{formatPrice(SHIPPING)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium uppercase opacity-45">Vat (Included)</p>
            <p className="text-[18px] font-bold">{formatPrice(vat)}</p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="font-medium uppercase opacity-45">Grand Total</p>
            <p className="text-accent-strong text-[18px] font-bold">
              {formatPrice(grandTotal)}
            </p>
          </div>
        </div>
        <Button
          type="submit"
          className="bg-accent-strong mt-2 h-12 w-full rounded-none px-8 text-[13px] font-bold tracking-[1px] uppercase transition-all duration-300 hover:shadow-[0_4px_20px_#dc143c]"
        >
          Continue & Pay
        </Button>
      </div>
    </div>
  );
}

export default CheckoutSummary;

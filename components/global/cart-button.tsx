import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const notEmpty = true;

function CartButton() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(1);

  function handleAmount(value: number) {
    const newValue = amount + value;
    if (newValue < 1) return;
    setAmount(newValue);
  }

  return notEmpty ? (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="relative hover:opacity-80"
        >
          <div>
            <ShoppingCart color="white" className="h-6 w-6" />
            <span className="bg-accent-strong absolute top-0 right-0 z-10 grid h-4 w-4 place-items-center rounded-full text-xs">
              3
            </span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="relative z-110! w-82 space-y-8 rounded-md bg-white px-6 py-8 shadow-md sm:w-100"
        align="end"
        sideOffset={35}
      >
        <div className="flex items-center justify-between border-b border-dashed pb-2">
          <h2 className="text-[18px] font-bold tracking-[1.29px] uppercase">
            Cart (3)
          </h2>
          <Button
            variant="ghost"
            className="p-0 text-[15px] leading-[25px] text-black/50 capitalize underline"
          >
            Remove all
          </Button>
        </div>

        <div className="space-y-5 border-b border-dashed pb-3.5">
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="grid grid-cols-[64px_1fr] gap-x-4">
              <div className="bg-product-bg h-16 w-16 rounded-md"></div>
              <div className="flex items-center justify-between py-1.5">
                <div className="flex flex-col">
                  <p className="font-bold">XX 99 MK II</p>
                  <p className="text-[14px] font-bold opacity-50">
                    {formatPrice(2999)}
                  </p>
                </div>
                <div className="bg-product-bg relative max-w-22">
                  <Input
                    type="text"
                    placeholder="1"
                    className="h-9 rounded-none border-0 text-center text-[13px] font-bold tracking-[1px] shadow-none"
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
                    className="absolute top-1/2 left-0 -translate-y-1/2 scale-90"
                  >
                    <Minus className="scale-80 opacity-50" />
                  </Button>
                  <Button
                    type="button"
                    onClick={() => handleAmount(1)}
                    variant="ghost"
                    className="absolute top-1/2 right-0 -translate-y-1/2 scale-90"
                  >
                    <Plus className="scale-80 opacity-50" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 border-b border-dashed pb-2">
          <div className="flex items-center justify-between">
            <p className="font-medium uppercase opacity-45">Total</p>
            <p className="text-[18px] font-bold">{formatPrice(5369)}</p>
          </div>
        </div>
        <Link href="/checkout">
          <Button
            type="submit"
            className="bg-accent-strong mt-2 h-12 w-full rounded-none px-8 text-[13px] font-bold tracking-[1px] uppercase transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            Checkout
          </Button>
        </Link>
      </PopoverContent>
    </Popover>
  ) : (
    <Link href="/checkout" className="relative">
      <Button variant="ghost" size="icon" asChild className="hover:opacity-80">
        <div>
          <ShoppingCart color="white" className="h-6 w-6" />
          <span className="bg-accent-strong absolute top-0 right-0 z-10 grid h-4 w-4 place-items-center rounded-full text-xs">
            3
          </span>
        </div>
      </Button>
    </Link>
  );
}

export default CartButton;

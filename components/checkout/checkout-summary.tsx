import { Button } from "@/components/ui/button";
import { cartLength, padding } from "@/lib/constants";
import { cn, formatPrice } from "@/lib/utils";

function CheckoutSummary() {
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
          {Array.from({ length: cartLength }, (_, index) => (
            <div key={index} className="grid grid-cols-[64px_1fr] gap-x-4">
              <div className="bg-product-bg h-16 w-16 rounded-md"></div>
              <div className="flex justify-between py-1.5">
                <div className="flex flex-col">
                  <p className="font-bold">XX 99 MK II</p>
                  <p className="text-[14px] font-bold opacity-50">
                    {formatPrice(2999)}
                  </p>
                </div>
                <span className="text-[15px] font-bold opacity-50">x1</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 border-b border-dashed pb-2">
          <div className="flex items-center justify-between">
            <p className="font-medium uppercase opacity-45">Total</p>
            <p className="text-[18px] font-bold">{formatPrice(5369)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium uppercase opacity-45">Shipping</p>
            <p className="text-[18px] font-bold">{formatPrice(50)}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-medium uppercase opacity-45">Vat (Included)</p>
            <p className="text-[18px] font-bold">{formatPrice(1079)}</p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="font-medium uppercase opacity-45">Grand Total</p>
            <p className="text-accent-strong text-[18px] font-bold">
              {formatPrice(5446)}
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

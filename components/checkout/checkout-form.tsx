"use client";

import CheckoutFields from "@/components/checkout/checkout-fields";
import CheckoutSummary from "@/components/checkout/checkout-summary";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Form } from "@/components/ui/form";
import { cartLength } from "@/lib/constants";
import { CheckoutFormData, CheckoutSchema } from "@/lib/schemas";
import { formatPrice } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

function CheckoutForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zip: "",
      city: "",
      country: "",
      paymentMethod: "e-money",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });

  function onSubmit(formData: CheckoutFormData) {
    console.log(formData);
    form.reset();
    setIsSuccess(true);
  }

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-1 lg:mt-8 lg:mb-16 lg:grid-cols-[1.65fr_1fr] lg:gap-x-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CheckoutFields form={form} />
        <CheckoutSummary />
        {isSuccess && <OrderSuccess onClose={() => setIsSuccess(false)} />}
      </form>
    </Form>
  );
}

export default CheckoutForm;

export function OrderSuccess({ onClose }: { onClose: () => void }) {
  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent className="p-8 sm:py-12">
        <AlertDialogHeader className="flex flex-col text-left">
          <BadgeCheck className="h-16 w-16" color="#dc143c" />
          <AlertDialogTitle className="mt-5 mb-2 text-[24px] leading-7 font-bold tracking-[0.86px] sm:text-[32px] sm:leading-9 sm:tracking-[1.14px]">
            THANK YOU <br /> FOR YOUR ORDER
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[15px] leading-[25px] font-medium text-black/50">
            You will receive an email confirmation shortly.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="grid grid-cols-1 sm:mt-8 sm:grid-cols-[1.4fr_1fr] sm:overflow-hidden sm:rounded-md">
          <div className="bg-product-bg mt-6 space-y-4 rounded-t-md px-8 py-4 text-center sm:mt-0 sm:rounded-none">
            {Array.from(
              { length: cartLength },
              (_, index) =>
                index === 0 && (
                  <div
                    key={index}
                    className="grid grid-cols-[32px_1fr] gap-x-6 border-b border-dashed border-black/20 pb-1.5"
                  >
                    <div className="h-8 w-8 place-self-center rounded-md bg-red-200"></div>
                    <div className="flex justify-between py-2.5 text-left">
                      <div className="flex flex-col">
                        <p className="font-bold">XX 99 MK II</p>
                        <p className="text-[14px] font-bold opacity-50">
                          {formatPrice(2999)}
                        </p>
                      </div>
                      <span className="text-[15px] font-bold opacity-50">
                        x1
                      </span>
                    </div>
                  </div>
                ),
            )}

            <span className="text-[12px] font-bold text-black/50">
              and {cartLength - 1} other item(s)
            </span>
          </div>
          <div className="bg-primary flex flex-col space-y-2 rounded-b-md px-8 py-4 text-white sm:justify-center sm:rounded-none">
            <h3 className="font-thin uppercase opacity-50">Grand Total</h3>
            <h3 className="text-[18px] font-bold">{formatPrice(5446)}</h3>
          </div>
        </div>

        <AlertDialogFooter>
          <Link href="/">
            <Button className="bg-accent-strong mt-6 h-12 w-full rounded-none px-8 text-[13px] font-bold tracking-[1px] uppercase sm:mt-10">
              Back to Home
            </Button>
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

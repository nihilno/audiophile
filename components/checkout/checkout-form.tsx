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
import { useCart } from "@/contexts/cart-context";
import { SHIPPING } from "@/lib/constants";
import { CheckoutFormData, CheckoutSchema } from "@/lib/schemas";
import { formatPrice } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { BadgeCheck, Home, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

function CheckoutForm() {
  const { cart } = useCart();
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

  if (!cart || cart.length === 0)
    return (
      <div className="flex h-[70dvh] flex-col items-center justify-center text-center">
        <ShoppingCart className="mb-6 h-12 w-12 text-gray-400" />
        <h2 className="mb-4 text-2xl font-semibold">Your cart is empty</h2>
        <p className="max-w-md opacity-60">
          Looks like you haven’t added any items yet. Browse our products and
          add them to your cart to proceed to checkout.
        </p>

        <Link href="/" className="mt-6">
          <Button
            variant="secondary"
            size="lg"
            className="bg-primary text-white"
          >
            <Home /> <span>Go Shopping</span>
          </Button>
        </Link>
      </div>
    );

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
  const { cart, removeAll } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = Math.round(total * 0.05);
  const grandTotal = total + SHIPPING + vat;

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
            {cart.slice(0, 1).map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[32px_1fr] gap-x-6 border-b border-dashed border-black/20 pb-1.5"
              >
                <div className="relative h-12 w-12 place-self-center rounded-md bg-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="overflow-hidden rounded-md object-cover"
                  />
                </div>
                <div className="flex justify-between py-2.5 text-left">
                  <div className="flex flex-col">
                    <p className="line-clamp-1 font-bold">{item.name}</p>
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

            {cart.length > 1 && (
              <span className="text-[12px] font-bold text-black/50">
                and {cart.length - 1} other item(s)
              </span>
            )}
          </div>

          <div className="bg-primary flex flex-col space-y-2 rounded-b-md px-8 py-4 text-white sm:justify-center sm:rounded-none">
            <h3 className="font-thin uppercase opacity-50">Grand Total</h3>
            <h3 className="text-[18px] font-bold">{formatPrice(grandTotal)}</h3>
          </div>
        </div>

        <AlertDialogFooter>
          <Button
            onClick={() => {
              router.push("/");
              setTimeout(() => removeAll(), 50);
            }}
            className="bg-accent-strong mt-6 h-12 w-full rounded-none px-8 text-[13px] font-bold tracking-[1px] uppercase sm:mt-10"
          >
            Back to Home
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

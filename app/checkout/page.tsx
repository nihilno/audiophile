import CheckoutForm from "@/components/checkout/checkout-form";
import GoBackButton from "@/components/global/go-back-button";
import { padding } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function Checkout() {
  return (
    <section>
      <div className="mx-auto max-w-480">
        <div className={cn("mt-4 lg:mt-16", padding)}>
          <GoBackButton />
        </div>
        <CheckoutForm />
      </div>
    </section>
  );
}

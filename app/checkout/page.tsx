import CheckoutForm from "@/components/checkout/checkout-form";
import CheckoutSummary from "@/components/checkout/checkout-summary";
import GoBackButton from "@/components/global/go-back-button";
import { padding } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Checkout() {
  return (
    <section>
      <div className="mx-auto max-w-480">
        <div className={cn("mt-4 lg:mt-16", padding)}>
          <GoBackButton />
        </div>
        <form className="grid grid-cols-1 lg:mt-8 lg:mb-16 lg:grid-cols-[1.65fr_1fr] lg:gap-x-4">
          <CheckoutForm />
          <CheckoutSummary />
        </form>
      </div>
    </section>
  );
}

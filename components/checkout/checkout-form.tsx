import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { padding } from "@/lib/constants";
import { cn } from "@/lib/utils";

function CheckoutForm() {
  return (
    <div className={cn("mt-8", padding, "lg:mt-0 lg:pr-0 xl:pr-0 2xl:pr-0")}>
      <div className="space-y-12 rounded-md bg-white px-6 py-8 shadow-md">
        <h2 className="mb-8 text-[28px] font-bold tracking-[1px] uppercase md:text-[32px] md:leading-9 md:tracking-[1.14px]">
          Checkout
        </h2>

        <div>
          <h5 className="text-accent-strong mb-4 text-sm leading-[25px] font-bold tracking-[0.93px] uppercase">
            Billing Details
          </h5>
          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div className="space-y-1.5">
              <Label
                htmlFor="name"
                className="text-[12px] font-bold tracking-[-0.21px]"
              >
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="h-14 pr-2 pl-4 text-[14px] font-bold"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="email"
                className="text-[12px] font-bold tracking-[-0.21px]"
              >
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@mail.com"
                className="h-14 pr-2 pl-4 text-[14px] font-bold"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="phone"
                className="text-[12px] font-bold tracking-[-0.21px]"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                type="text"
                placeholder="+1 202-555-0136"
                className="h-14 pr-2 pl-4 text-[14px] font-bold"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="text-accent-strong mb-4 text-sm leading-[25px] font-bold tracking-[0.93px] uppercase">
            Shipping Info
          </h5>
          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div className="col-span-2 space-y-1.5">
              <Label
                htmlFor="address"
                className="text-[12px] font-bold tracking-[-0.21px]"
              >
                Your Address
              </Label>
              <Input
                id="address"
                type="text"
                placeholder="1137 Williams Avenue"
                className="h-14 pr-2 pl-4 text-[14px] font-bold"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="zip"
                className="text-[12px] font-bold tracking-[-0.21px]"
              >
                ZIP Code
              </Label>
              <Input
                id="zip"
                type="text"
                placeholder="10001"
                className="h-14 pr-2 pl-4 text-[14px] font-bold"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="city"
                className="text-[12px] font-bold tracking-[-0.21px]"
              >
                City
              </Label>
              <Input
                id="city"
                type="text"
                placeholder="New York"
                className="h-14 pr-2 pl-4 text-[14px] font-bold"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="country"
                className="text-[12px] font-bold tracking-[-0.21px]"
              >
                Country
              </Label>
              <Input
                id="country"
                type="text"
                placeholder="United States"
                className="h-14 pr-2 pl-4 text-[14px] font-bold"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="text-accent-strong mb-4 text-sm leading-[25px] font-bold tracking-[0.93px] uppercase">
            Payment Details
          </h5>
          <RadioGroup
            className="grid grid-cols-1 space-y-1.5 sm:grid-cols-2"
            defaultValue="e-money"
          >
            <Label
              htmlFor="payment"
              className="place-self-start text-[12px] font-bold tracking-[-0.21px]"
            >
              Payment Method
            </Label>
            <div className="space-y-3" id="payment">
              <div className="border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive has-[button[data-state=checked]]:border-accent-strong/50 flex h-14 items-center gap-4 rounded-md border pl-4 shadow-xs transition-[color,box-shadow] outline-none file:border-0 focus-visible:ring-[3px]">
                <RadioGroupItem
                  id="e-money"
                  value="e-money"
                  className="h-5 w-5 cursor-pointer"
                />
                <Label
                  htmlFor="e-money"
                  className="h-full w-full cursor-pointer text-[14px] font-bold tracking-[0.25px]"
                >
                  e-Money
                </Label>
              </div>
              <div className="border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive has-[button[data-state=checked]]:border-accent-strong/50 flex h-14 items-center gap-4 rounded-md border px-4 shadow-xs transition-[color,box-shadow] outline-none file:border-0 focus-visible:ring-[3px]">
                <RadioGroupItem
                  id="cash-on-delivery"
                  value="cash-on-delivery"
                  className="h-5 w-5 cursor-pointer"
                />
                <Label
                  htmlFor="cash-on-delivery"
                  className="h-full w-full cursor-pointer text-[14px] font-bold tracking-[0.25px]"
                >
                  Cash on Delivery
                </Label>
              </div>
            </div>
          </RadioGroup>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div className="space-y-1.5">
              <Label
                htmlFor="e-money-number"
                className="text-[12px] font-bold tracking-[-0.21px]"
              >
                e-Money Number
              </Label>
              <Input
                id="e-money-number"
                type="text"
                placeholder="1238521993"
                className="h-14 pr-2 pl-4 text-[14px] font-bold"
              />
            </div>
            <div className="space-y-1.5">
              <Label
                htmlFor="e-money-pin"
                className="text-[12px] font-bold tracking-[-0.21px]"
              >
                e-Money PIN
              </Label>
              <Input
                id="e-money-pin"
                type="text"
                placeholder="6891"
                className="h-14 pr-2 pl-4 text-[14px] font-bold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;

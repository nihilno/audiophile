import { Input } from "@/components/ui/input";
import { padding } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { CheckoutFieldsProps } from "@/lib/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

function CheckoutFields({ form }: CheckoutFieldsProps) {
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
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[12px] font-bold tracking-[-0.21px]">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        className="h-14 pr-2 pl-4 text-[14px] font-bold"
                        minLength={1}
                        maxLength={32}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1.5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[12px] font-bold tracking-[-0.21px]">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="johndoe@mail.com"
                        className="h-14 pr-2 pl-4 text-[14px] font-bold"
                        maxLength={64}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1.5">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[12px] font-bold tracking-[-0.21px]">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="+1 202-555-0136"
                        className="h-14 pr-2 pl-4 text-[14px] font-bold"
                        minLength={1}
                        maxLength={16}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="text-accent-strong mb-4 text-sm leading-[25px] font-bold tracking-[0.93px] uppercase">
            Shipping Info
          </h5>
          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div className="space-y-1.5">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[12px] font-bold tracking-[-0.21px]">
                      Your Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="1137 Williams Avenue"
                        className="h-14 pr-2 pl-4 text-[14px] font-bold"
                        minLength={1}
                        maxLength={120}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1.5">
              <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[12px] font-bold tracking-[-0.21px]">
                      ZIP Code
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="10001"
                        className="h-14 pr-2 pl-4 text-[14px] font-bold"
                        minLength={1}
                        maxLength={11}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1.5">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[12px] font-bold tracking-[-0.21px]">
                      City
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="New York"
                        className="h-14 pr-2 pl-4 text-[14px] font-bold"
                        minLength={1}
                        maxLength={64}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1.5">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[12px] font-bold tracking-[-0.21px]">
                      Country
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="United States"
                        className="h-14 pr-2 pl-4 text-[14px] font-bold"
                        minLength={1}
                        maxLength={64}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="text-accent-strong mb-4 text-sm leading-[25px] font-bold tracking-[0.93px] uppercase">
            Payment Details
          </h5>
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className="grid grid-cols-1 space-y-1.5 sm:grid-cols-2">
                <FormLabel className="place-self-start text-[12px] font-bold tracking-[-0.21px]">
                  Payment Method
                </FormLabel>

                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormItem className="flex h-14 items-center gap-4 rounded-md border pl-4 shadow-xs transition">
                      <FormControl>
                        <RadioGroupItem
                          id="e-money"
                          value="e-money"
                          className="h-5 w-5 cursor-pointer"
                        />
                      </FormControl>
                      <FormLabel
                        htmlFor="e-money"
                        className="h-full w-full cursor-pointer text-[14px] font-bold tracking-[0.25px]"
                      >
                        e-Money
                      </FormLabel>
                    </FormItem>

                    <FormItem className="flex h-14 items-center gap-4 rounded-md border px-4 shadow-xs transition">
                      <FormControl>
                        <RadioGroupItem
                          id="cash-on-delivery"
                          value="cash-on-delivery"
                          className="h-5 w-5 cursor-pointer"
                        />
                      </FormControl>
                      <FormLabel
                        htmlFor="cash-on-delivery"
                        className="h-full w-full cursor-pointer text-[14px] font-bold tracking-[0.25px]"
                      >
                        Cash on Delivery
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <div className="space-y-1.5">
              <FormField
                control={form.control}
                name="eMoneyNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[12px] font-bold tracking-[-0.21px]">
                      e-Money Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="1238521993"
                        className="h-14 pr-2 pl-4 text-[14px] font-bold"
                        minLength={1}
                        maxLength={10}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-1.5">
              <FormField
                control={form.control}
                name="eMoneyPin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[12px] font-bold tracking-[-0.21px]">
                      e-Money PIN
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="6891"
                        className="h-14 pr-2 pl-4 text-[14px] font-bold"
                        minLength={4}
                        maxLength={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutFields;

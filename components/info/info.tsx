import { padding } from "@/lib/constants";
import { cn } from "@/lib/utils";
import InfoImage from "@/public/images/info/image-best-gear.jpg";
import Image from "next/image";

function Info() {
  return (
    <div className={cn("", padding)}>
      <div className="my-32 grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:items-center lg:gap-x-8">
        <div className="relative h-75 overflow-hidden rounded-md border lg:order-2 lg:h-[588px]">
          <Image
            src={InfoImage}
            alt="Info"
            fill
            className="object-cover"
            placeholder="blur"
          />
        </div>
        <article className="flex flex-col items-center gap-10 text-center lg:items-start lg:text-left">
          <h2 className="mt-2 max-w-[18ch] text-[28px] leading-10 font-bold tracking-[1px] uppercase sm:text-[40px] sm:leading-11 md:max-w-[20ch] lg:max-w-[18ch]">
            Bringing you the <span className="text-accent-strong">best</span>{" "}
            audio gear
          </h2>
          <p className="px-2 tracking-wide opacity-70 sm:max-w-[65ch] lg:px-0">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Info;

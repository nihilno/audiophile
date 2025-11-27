import { Button } from "@/components/ui/button";
import HeroImage from "@/public/images/hero/Hero.png";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-primary">
      <div className="relative mx-auto w-full max-w-480 text-white">
        <div className="bg-primary relative h-120 w-full overflow-hidden md:h-155">
          <Image
            src={HeroImage}
            alt="Hero"
            fill
            className="-translate-y-10 scale-125 object-contain transition-transform duration-500 ease-in-out md:translate-x-30 md:scale-100 md:object-[70%_40%] lg:-translate-y-15 lg:scale-125"
            priority
            quality={75}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (min-width: 1025px) 1200px"
          />
        </div>

        <article className="bg-primary/60 absolute inset-0 z-10">
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 text-center sm:gap-6 md:left-10 md:translate-x-0 md:items-start md:text-left lg:left-16 xl:left-32 2xl:left-64">
            <h4 className="text-[14px] font-thin opacity-50">NEW PRODUCT</h4>
            <h1 className="text-[36px] leading-10 font-bold tracking-[1.29px] uppercase md:text-[56px] md:leading-[58px] md:tracking-[2px]">
              XX99 Mark II <br /> Headphones
            </h1>
            <p className="max-w-[30ch] tracking-wide opacity-70 md:max-w-[40ch]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link href="products/xx99-mark-two-headphones">
              <Button className="bg-accent-strong hover:bg-accent-st mt-4 h-12 rounded-none px-8 text-[13px] font-bold tracking-[1px] uppercase transition-all duration-300 hover:scale-107 hover:shadow-[0_4px_20px_#dc143c]">
                See Product
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Hero;

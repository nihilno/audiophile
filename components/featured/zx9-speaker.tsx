import { Button } from "@/components/ui/button";
import FeaturedSpeakerImage from "@/public/images/featured/image-category-page-preview.png";
import PatterCirclesImage from "@/public/images/global/pattern-circles.svg";
import Image from "next/image";
import Link from "next/link";

function Zx9Speaker() {
  return (
    <div className="bg-accent-light relative h-150 overflow-hidden rounded-md md:h-180 xl:h-140">
      <div className="absolute inset-0 z-20 mx-auto max-w-100">
        <Image
          src={FeaturedSpeakerImage}
          alt="ZX9 Speaker"
          fill
          className="-translate-y-35 scale-50 object-contain transition-transform ease-in-out md:-translate-y-50 md:scale-65 xl:-translate-x-75 xl:translate-y-15 xl:scale-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
        />
      </div>
      <div className="absolute inset-0 z-10 aspect-square">
        <Image
          src={PatterCirclesImage}
          alt="Circle pattern"
          fill
          className="svg-white relative scale-170 object-contain transition-transform ease-in-out md:-translate-y-50 md:scale-120 xl:-translate-x-73 xl:-translate-y-55 xl:scale-90"
          sizes="(max-width: 768px) 150px, (max-width: 1280px) 200px, 250px"
        />
      </div>

      <article className="relative z-20 flex h-full items-end justify-center pb-12 text-white xl:items-center xl:justify-end xl:pr-24 xl:pb-0">
        <div className="flex flex-col items-center gap-4 text-center xl:items-start xl:text-left">
          <h1 className="text-[36px] leading-10 font-bold tracking-[1.29px] uppercase md:text-[56px] md:leading-[58px] md:tracking-[2px]">
            ZX9 <br /> Speaker
          </h1>
          <p className="max-w-[32ch] tracking-wide opacity-70 md:max-w-[40ch]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="products/zx9-speaker">
            <Button
              variant="secondary"
              className="mt-4 h-12 rounded-none px-8 text-[13px] tracking-[1px] uppercase transition-all duration-300 hover:scale-110"
            >
              See Product
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default Zx9Speaker;

import { StaticImageData } from "next/image";

export type ProductCardProp = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
};

import { StaticImageData } from "next/image";

export type ProductCardProp = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: StaticImageData;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: string;
  category: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludeItem[];
  gallery: Gallery;
  others: OtherProduct[];
};

export type IncludeItem = {
  quantity: number;
  item: string;
};

export type Gallery = {
  first: string;
  second: string;
  third: string;
};

export type OtherProduct = {
  slug: string;
  name: string;
  image: string;
};

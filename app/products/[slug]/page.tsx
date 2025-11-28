import SingleProduct from "@/components/products/single-product/single-product";
import { padding } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: title,
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className={cn("", padding)}>
      <SingleProduct slug={slug} />
    </div>
  );
}

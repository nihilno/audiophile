import SingleProduct from "@/components/products/single-product/single-product";
import { padding } from "@/lib/constants";
import { cn } from "@/lib/utils";

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

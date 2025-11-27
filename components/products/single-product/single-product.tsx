import { Button } from "@/components/ui/button";
import productsData from "@/public/data.json";
import { AlertCircle, Home } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductFeatures from "./product-features";
import ProductImages from "./product-images";
import ProductShowcase from "./product-showcase";
import ProductsConnected from "./products-connected";

function SingleProduct({ slug }: { slug: string }) {
  const products = productsData;
  if (!products) notFound();

  const product = products.find((p) => p.slug === slug);
  if (!product)
    return (
      <div className="flex h-[75dvh] flex-col items-center justify-center rounded-md border border-dashed border-black/20 text-center">
        <AlertCircle className="mb-4 h-12 w-12 text-gray-400" />
        <h2 className="mb-2 text-2xl font-semibold">No Product Found</h2>
        <p className="max-w-md text-gray-500">
          We couldn&apos;t find any sound products matching your search or
          filters. Please try adjusting your criteria or check back later.
        </p>
        <Link href="/" className="mt-6">
          <Button size="lg">
            <Home /> <span>Go Home</span>
          </Button>
        </Link>
      </div>
    );

  return (
    <div>
      <ProductShowcase product={product} />
      <ProductFeatures product={product} />
      <ProductImages product={product} />
      <ProductsConnected product={product} />
    </div>
  );
}

export default SingleProduct;

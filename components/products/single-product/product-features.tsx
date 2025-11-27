import { Product } from "@/lib/types";

function ProductFeatures({ product }: { product: Product }) {
  return (
    <div>
      <article className="mt-20 mb-20 grid grid-cols-1 space-y-20 lg:mt-32 lg:mb-10 lg:grid-cols-2">
        <div className="space-y-8">
          <h2 className="text-[24px] leading-9 font-bold tracking-[0.86px] uppercase">
            Features
          </h2>
          {product.features.split("\n\n").map((feature, index) => (
            <p key={index} className="tracking-wide opacity-70 lg:max-w-[72ch]">
              {feature}
            </p>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:h-fit lg:grid-cols-1 lg:justify-self-center">
          <h2 className="text-[24px] leading-9 font-bold tracking-[0.86px] uppercase">
            In the box
          </h2>
          <ul className="space-y-1 opacity-60">
            {product.includes.map((item) => (
              <li key={item.item} className="flex items-center font-medium">
                <span className="text-accent-strong min-w-10 font-bold">
                  {item.quantity}
                </span>
                <span className="capitalize">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}

export default ProductFeatures;

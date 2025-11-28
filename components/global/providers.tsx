import { CartProvider } from "@/contexts/cart-context";

function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

export default Providers;

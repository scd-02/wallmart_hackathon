import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import Navbar from "@/components/custom/Navbar";
import ProductGrid from "@/components/custom/ProductGrid";
import { dressProducts, iphoneProducts, trendingProducts } from "@/demo/demoData";
import { addProductData } from "@/lib/actions/product.action";

export default function Home() {

  return (
    <>
      <Navbar />
      <main className="">
        <Header />
        <ProductGrid title="Trending Products" products={trendingProducts}/>
        <ProductGrid title="iPhone 12 Pro Max" products={iphoneProducts} />
        <ProductGrid title="Dresses" products={dressProducts} />
      </main>
      <Footer />
    </>
  );
}

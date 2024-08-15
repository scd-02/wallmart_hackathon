import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import Navbar from "@/components/custom/Navbar";
import ProductGrid from "@/components/custom/ProductGrid";
import { dressProducts, iphoneProducts, trendingProducts } from "@/demo/demoData";
import { addProductData } from "@/lib/actions/product.action";

import {getAllProductData, getProductDataByURL} from "@/lib/actions/product.action"

export default async function Home() {

  const allProducts = await getAllProductData();
  // const iphoneProducts = await getProductDataByURL("Straight-Talk-Apple-iPhone-13-128GB-Midnight-Prepaid-Smartphone-Locked-to-Straight-Talk/454408250")

  return (
    <>
      <Navbar />
      <main className="">
        <Header />
        <ProductGrid title="Trending Products" products={allProducts}/>
        <ProductGrid title="iPhone 12 Pro Max" products={iphoneProducts} />
        <ProductGrid title="Dresses" products={dressProducts} />
      </main>
      <Footer />
    </>
  );
}

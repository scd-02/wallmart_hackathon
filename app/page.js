import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import Navbar from "@/components/custom/Navbar";
import ProductGrid from "@/components/custom/ProductGrid";
import ProductImagineGrid from "@/components/custom/ProductImagineGrid";
import { dressProducts, iphoneProducts, trendingProducts } from "@/demo/demoData";
import { addProductData } from "@/lib/actions/product.action";

import {getAllProductData, getProductDataByURL, getProductDataById} from "@/lib/actions/product.action"

export default async function Home() {

  const allProducts = await getAllProductData();
  const iphoneProducts = JSON.stringify(await getProductDataById('66beda251c581daf9da0d4bb'));
  const hanesProducts = JSON.stringify(await getProductDataById('66beda251c581daf9da0d4bc'));
  
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <Header />
        <ProductGrid title="Trending Products" products={allProducts}/>
        <hr className="my-4" />
        <h2 className="text-2xl font-bold text-center">Top Generated Products</h2>
          <ProductImagineGrid title="Apple - Iphone 13" products={[iphoneProducts]} />
          <ProductImagineGrid title="Hanes Collection" products={[hanesProducts]} />
      </main>
      <Footer />
    </>
  );
}

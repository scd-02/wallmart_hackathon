import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header";
import Navbar from "@/components/custom/Navbar";
import ProductDetails from "@/components/custom/ProductDetails";
import {getExtensionDataById} from "@/lib/actions/extension.action"
import mongoose from "mongoose";

export default async function Home() {
    const product = await getExtensionDataById('')
    return (
        <>
            <Navbar />
            <main className="">
                <ProductDetails product={product} />
            </main>
            <Footer />
        </>
    );
}

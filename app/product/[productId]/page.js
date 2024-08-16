import Image from "next/image";
import {getProductDataById} from '@/lib/actions/product.action';

export default async function ProductPage(params){
    const { params: { productId } } = params;
    console.log(productId);
    const product = await getProductDataById(productId);
    return (
        <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row-reverse relative items-start">
            {/* Main Product Image */}
            <div className="w-full md:w-1/2 flex justify-center items-center bottom-[10%] left-0 fixed">
            <Image
                src= {`${product.productImageURL[0]}`}
                alt="Main Product"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
            />
            </div>

            {/* Product Information */}
            <div className="w-full md:w-1/2 md:pl-10">
            <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600">{product.brand}</p>
                <a href={"https://walmart.com/ip/"+product.productURL} target="_blank" className="text-blue-500 hover:underline">View on Walmart</a>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{product.productName?.substring(0, 100) + "..."}</h2>
            <p className="mt-4 text-gray-600">
                {product.productDescription}
            </p>
            <p className="mt-4 text-xl font-semibold text-gray-800">$39.99</p>
            <hr className="my-6" />
            <h3 className="text-xl font-semibold text-gray-800 ">Generated Images</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
                {product.generatedURL.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={index}
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md"
                />
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}

"use client";

import { products } from "@/lib/products";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Cart({params}) {
  const {id}=params
  // console.log(typeof(id));
  const router=useRouter()

  const findProduct=products.find(product=>product.id===parseInt(id))
  // console.log(findProduct);
  // Sample product data

  const handleOrder=()=>{
    toast.success("Order successfully added to cart");
    router.push('/cart');
  }
  
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="  h-full overflow-x-hidden  flex justify-center items-center  container mx-auto p-4 ">
        <div className="  flex flex-col md:flex-row">
          <div className="w-[90%] mx-auto md:w-full h-[450px] flex flex-col items-center justify-center p-20 gap-12 bg-gradient-to-b from-yellow-300 to-yellow-900 rounded-lg relative">
            <motion.div className="" whileHover={{ scale: 1.1 }}>
              <Image
                src={findProduct.imageUrl}
                alt="image"
                width={392}
                height={392}
                className="rounded-lg"
              />
            </motion.div>
            {/*sizes*/}
            <div className="flex items-center justify-center gap-4">
              {findProduct.sizes.map((s) => (
                <span
                  key={s.size}
                  className={`text-white ${s.bg} rounded-full w-10 h-10 flex items-center justify-center cursor-pointer`}
                >
                  {s.size}
                </span>
              ))}
            </div>
            <div className="flex gap-4 p-45 items-center justify-center bg-gradient-to-b from-yellow-300 to-black text-gray-300 mb-2 ">
              <h2 className="text-sm lg:text-lg font-bold shadow-md  p-3">
                {findProduct.name}
              </h2>
              <p className="text-sm md:text-lg shadow-md -800  bg-blue-700 p-3 md:p-1 rounded-lg">
                ${findProduct.price}
              </p>

              <div className="mt-4">
                <button
                onClick={handleOrder}
                  
                  className="bg-blue-500 hover:bg-blue-700 outline-none border-none text-white font-bold flex justify-center items-center rounded-full h-14 w-14 absolute top-[46px] right-[48px]"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

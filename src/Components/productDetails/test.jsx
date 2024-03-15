import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { StarRate } from "../StarRate";

export function ProductDetails() {
    const { id } = useParams();
    const {data, isError, isLoading } = useFetch(`https://v2.api.noroff.dev/online-shop/${id}`);
    console.log(id.data)




    if (isLoading) {
        return <div>Loading....</div>;
    }

    if (isError) {
        return <div>Error!</div>;
    }

    return (
    <div class="bg-white dark:bg-gray-800 py-8 border border-gray-600 flex just">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                    <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img class="w-full h-full object-cover border rounded border-gray-600" src={data.image?.url} alt="" />
                    </div>
                </div>
                <div className="md:flex-1 px-4">
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data.title}</h2>
                    <div>
                        {data && data.tags && data.tags.map((tag, index) => (
                        <div key={index} className="inline-block border border-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</div>
                        ))}
                    </div>
                    <div className="flex mb-4 mt-3 items-center">
                        <p>Rating:</p>
                        {data.rating ? <StarRate rating={data.rating} /> : <StarRate /> }
                    </div>
                    <div>
                        <p className="mt-4">{data.description}</p>
                        <div className="flex my-5">
                                {data.discountedPrice && data.discountedPrice !== data.price && (
                                    <>
                                        <h3 className="mb-3 text-gray-700 dark:text-gray-400 line-through">$ {data.price}</h3>
                                        <h3 className="mb-3 ms-4  text-red-600 dark:text-gray-400">ON SALE ${data.discountedPrice}</h3>
                                    </>
                                )}
                                {(!data.discountedPrice || data.discountedPrice === data.price) && (
                                    <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-400">$ {data.price}</h3>
                                )}
                        </div>
                        <div class="flex flex-col md:flex-row items-center">
                            <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full mt-3">Add to cart</button>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>

            </div>
            </div>

        </div>
        


    );
}

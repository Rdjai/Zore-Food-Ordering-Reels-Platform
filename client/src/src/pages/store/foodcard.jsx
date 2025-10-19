import { Button } from '@/components/ui/button'
import React from 'react'

const FoodCard = ({ key, data }) => {
    console.log("food card data", data);
    return (
        <div
            className="p-4 bg-white shadow-card rounded-xl border hover:shadow-md transition"
        >
            <img
                src={data.image}
                alt="food"
                className="w-full  object-cover rounded-lg"
            />

            <div className="flex items-center text-center justify-around">
                <h3 className="mt-3 font-heading font-medium text-lg text-red-600">{data.name}</h3>

            </div>
            <div className="flex items-center text-center justify-center font-mono">
                <p>⭐️⭐️⭐️⭐️⭐️</p>
                <p>(250)</p>
            </div>
            <p className='text-center p-2 font-bold'>{data.description}</p>
            <div className="flex flex-col-2 gap-2">
                <p className="w-full border border-stone-900 text-center rounded-[18px] py-2 hover:bg-stone-900 hover:text-white transition-colors duration-300">
                    ₹{data.price}
                </p>


                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg">
                    order
                </Button>
            </div>
        </div>
    )
}

export default FoodCard

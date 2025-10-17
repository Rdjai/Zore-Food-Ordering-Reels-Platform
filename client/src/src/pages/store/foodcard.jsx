import { Button } from '@/components/ui/button'
import CButton from '@/src/component/buttone'
import React from 'react'

const FoodCard = () => {
    return (
        <div
            className="p-4 bg-white shadow-card rounded-xl border hover:shadow-md transition"
        >
            <img
                src="https://media.istockphoto.com/id/495204032/photo/fresh-tasty-burger.jpg?s=612x612&w=0&k=20&c=k6X_gSHlo-WdKsqTnfBjoEbjdhrlz6RNhUs23ivpIxk="
                alt="food"
                className="w-full  object-cover rounded-lg"
            />

            <div className="flex items-center text-center justify-around">
                <h3 className="mt-3 font-heading font-medium text-lg text-red-600">Aloo veg tikki burger3</h3>

            </div>
            <div className="flex items-center text-center justify-center font-mono">
                <p>⭐️⭐️⭐️⭐️⭐️</p>
                <p>(250)</p>
            </div>
            <p className='text-center p-2 font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe molestiae ipsa reiciendis.</p>
            <div className="flex flex-col-2 gap-2">
                <p className="w-full border border-stone-900 text-center rounded-[18px] py-2 hover:bg-stone-900 hover:text-white transition-colors duration-300">
                    ₹ 252
                </p>


                <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg">
                    order
                </Button>
            </div>
        </div>
    )
}

export default FoodCard

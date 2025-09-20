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
                className="w-full h-40 object-cover rounded-lg"
            />

            <div className="flex items-center text-center justify-around">
                <h3 className="mt-3 font-heading font-medium text-lg">Delicious Food</h3>
                <p className="text-sm text-gray-500 border rounded-2xl ">₹{200 + 50}</p>

            </div>
            <Button className="w-full bg-primary hover:bg-primary-dark text-white rounded-lg">
                order
            </Button>
        </div>
    )
}

export default FoodCard

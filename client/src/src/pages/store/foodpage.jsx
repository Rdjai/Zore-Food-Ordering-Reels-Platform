import CButton from '@/src/component/buttone'
import React from 'react'
import Sidebar from './Sidebar'
import FoodCard from './foodcard'

const FoodPage = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        className="p-4 bg-white shadow-card rounded-xl border hover:shadow-md transition"
                    >
                        <img
                            src="https://media.istockphoto.com/id/495204032/photo/fresh-tasty-burger.jpg?s=612x612&w=0&k=20&c=k6X_gSHlo-WdKsqTnfBjoEbjdhrlz6RNhUs23ivpIxk="
                            alt="food"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h3 className="mt-3 font-heading font-medium text-lg">Delicious Food {item}</h3>
                        <p className="text-sm text-gray-500">₹{200 + item * 50}</p>
                    </div>
                ))}
                <FoodCard />
            </main>
        </div>
    )
}

export default FoodPage

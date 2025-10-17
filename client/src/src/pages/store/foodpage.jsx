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

                    <FoodCard key={item} />
                ))}
            </main>
        </div>
    )
}

export default FoodPage

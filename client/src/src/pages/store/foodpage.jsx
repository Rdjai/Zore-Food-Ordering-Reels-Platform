import React, { useEffect, useState } from 'react'

import Sidebar from './Sidebar'
import FoodCard from './foodcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFoodItems } from '../../redux/features/food/foodSlice'

const FoodPage = () => {
    const [category, setCategory] = useState(null);
    const dispatch = useDispatch();
    const { foodItems, loading, error } = useSelector((state) => state.food);

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    }

    useEffect(() => {
        dispatch(fetchFoodItems());
    }, [dispatch]);

    if (loading) return <div className="flex h-[63vh]">
        <div className="m-auto text-center">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
            <p className="mt-4 text-xl font-semibold">Loading...</p>
        </div>
    </div>
    if (error) return <div className="flex h-[63vh] ">
        <div className="m-auto text-center">
            <p className="mt-4 text-xl font-semibold text-red-600">Error: {error}</p>
        </div>
    </div>

    const filterdFoodItems = category
        ? foodItems.filter((item) => item.category === category)
        : foodItems;

    return (
        <div className="flex h-screen overflow-hidden ">
            <Sidebar category={foodItems} selectCategory={handleCategoryChange} />
            <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-scroll ">
                {filterdFoodItems.map((food) => (
                    <FoodCard key={food._id} data={food} />
                ))

                }
            </main>
        </div>
    )
}

export default FoodPage

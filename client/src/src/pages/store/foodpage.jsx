import React, { useEffect, useState } from 'react'

import Sidebar from './Sidebar'
import FoodCard from './foodcard'
import { getAppFood } from '../../api/api'


const FoodPage = () => {
    const [foodData, setfoodData] = useState([])

    useEffect(() => {
        const fetchFoodData = async () => {
            const data = await getAppFood();
            console.log("Fetched food data:", data);
            setfoodData(data);
        };
        fetchFoodData();
    }, [])
    console.log("usestate data", foodData);

    return (
        <div className="flex h-screen overflow-hidden ">
            <Sidebar />
            <main className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-scroll ">
                {foodData.map((food) => (
                    <FoodCard key={food._id} data={food} />
                ))

                }
            </main>
        </div>
    )
}

export default FoodPage

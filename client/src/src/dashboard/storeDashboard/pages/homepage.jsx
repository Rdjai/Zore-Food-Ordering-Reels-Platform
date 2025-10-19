import DashboardCard from '@/src/component/dashboardCard'
import React from 'react'
const products = [
    {
        id: 1,
        name: "Total Sales",
        sales: 1000,
        growth: "+10%"
    },
    {
        id: 2,
        name: "pending order",
        sales: 15,
        growth: "+15%"
    },
    {
        id: 3,
        name: "Delivered orders",
        sales: 200,
        growth: "+20%"
    },
    {
        id: 4,
        name: "Total Earnings",
        sales: 2500,
        growth: "+25%"
    },

]
const StoreHome = () => {
    return (
        < div className="p-4 h-screen m-auto" >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
                {products.map((item, index) => (
                    <div
                        key={item.id ?? index}
                        className="bg-white shadow-md rounded-lg p-6 w-70  h-[150px] flex flex-col justify-between m-4 md:w-60 lg:w-70 sm:w-60"
                    >
                        <h2 className="text-xl font-semibold">{item.name}</h2>

                        {/* sales value — show with $ when id === 4 */}
                        <p className="text-3xl font-bold">
                            {item.id === 4 ? `$${item.sales}` : item.sales}
                        </p>

                        <p className="text-green-500 text-sm">+5% from last month</p>
                    </div>
                ))}
            </div>
        </div >

    )
}

export default StoreHome

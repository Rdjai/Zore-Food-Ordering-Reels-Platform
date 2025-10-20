import { Button } from '@/components/ui/button'
import React from 'react'

const StoreOrders = () => {
    const recentOrders = [
        { id: 1, item: 'Pizza', quantity: 2, price: 20.0 },
        { id: 2, item: 'Burger', quantity: 1, price: 10.0 },
        { id: 3, item: 'Pasta', quantity: 3, price: 30.0 },
        { id: 3, item: 'Pasta', quantity: 3, price: 30.0 },
        { id: 3, item: 'Pasta', quantity: 3, price: 30.0 },
        { id: 3, item: 'Pasta', quantity: 3, price: 30.0 },
        { id: 3, item: 'Pasta', quantity: 3, price: 30.0 },
        { id: 3, item: 'Pasta', quantity: 3, price: 30.0 },
        { id: 3, item: 'Pasta', quantity: 3, price: 30.0 },
        { id: 3, item: 'Pasta', quantity: 3, price: 30.0 },
        { id: 3, item: 'Pasta', quantity: 3, price: 30.0 },
        { id: 3, item: 'Pasta', quantity: 3, price: 30.0 },


    ]
    return (

        <div className='' >
            <div className='text-2xl font-bold w-[83vw] h-[35px]  items-center  bg-red-300 m-4 pl-5 rounded-[12px] text-red-600 '>
                <p> Store Orders Page</p>
            </div>

            <div className="flex bg-white w-[83vw] h-[60px] m-4 rounded-2xl text-center items-center ">
                <div className="m-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300">Load More Orders</div>
            </div>
            {/* Your orders content goes here */}
            <div className='w-[83vw] h-[80vh] bg-white mt-2 m-4  rounded-[12px] shadow-lg p-5 overflow-scroll no-scrollbar'>
                <p className='text-gray-600'>This is where the store orders will be displayed.</p>
                {
                    recentOrders.map((order) => (
                        <div key={order.id} className="border-b border-gray-200 py-4 flex justify-between">
                            <p className="text-lg font-semibold">Order #{order.id}</p>
                            <p>Item: {order.item}</p>
                            <p>Quantity: {order.quantity}</p>
                            <p>Price: ${order.price.toFixed(2)}</p>
                            <button className='bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300'>Diclain</button>
                            <button className='bg-green-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300'>Accept</button>

                        </div>
                    ))
                }
            </div>

        </div>

    )
}

export default StoreOrders

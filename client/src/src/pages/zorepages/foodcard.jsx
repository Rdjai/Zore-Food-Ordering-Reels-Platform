import { Button } from '@/components/ui/button'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const FoodCard = ({ key, data }) => {
    const dispact = useDispatch();
    const handleAddToCart = (data) => {
        dispact({
            type: 'cart/addToCart',
            payload: data,
        });
    }
    const { cartItems } = useSelector((state) => state.cart);
    const isInCart = cartItems.some((items) => items._id === data._id);
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


                <Button className={`w-full rounded-lg text-white transition ${isInCart
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-red-600 hover:bg-red-700"
                    }`}
                    onClick={() => handleAddToCart(data)}
                >

                    {isInCart ? "Added" : "Add to Cart"}

                </Button>
            </div>
        </div>
    )
}

export default FoodCard

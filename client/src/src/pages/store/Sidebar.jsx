import React from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
    return (
        <aside className="my-6 w-64 h-screen bg-white border-r border-gray-200 p-5 shadow-sm hidden sm:block ">
            <h2 className="text-xl font-heading mb-6 text-red-600 font-extrabold">
                #Filters
            </h2>

            <div className="mb-6">
                <h3 className="font-medium mb-3 text-neutral-dark">Categories</h3>
                <ul className="space-y-2">
                    {["Pizza", "Burger", "Biryani", "Chinese", "Desserts"].map((item) => (
                        <li key={item} className="flex items-center space-x-2">
                            <Checkbox id={item} />
                            <label htmlFor={item} className="text-sm cursor-pointer">
                                {item}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="font-medium mb-3 text-neutral-dark">Price Range</h3>
                <Slider defaultValue={[500]} max={1000} step={50} className="w-full" />
                <p className="text-xs mt-2 text-gray-500">Up to ₹1000</p>
            </div>

            <div className="mb-6">
                <h3 className="font-medium mb-3 text-neutral-dark">Ratings</h3>
                <ul className="space-y-2">
                    {["4★ & above", "3★ & above", "2★ & above"].map((rating) => (
                        <li key={rating} className="flex items-center space-x-2">
                            <Checkbox id={rating} />
                            <label htmlFor={rating} className="text-sm cursor-pointer">
                                {rating}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h3 className="font-medium mb-3 text-neutral-dark">Type</h3>
                <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                        <Checkbox id="veg" />
                        <label htmlFor="veg" className="text-sm cursor-pointer">Veg</label>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Checkbox id="nonveg" />
                        <label htmlFor="nonveg" className="text-sm cursor-pointer">Non-Veg</label>
                    </li>
                </ul>
            </div>

            <Button className="w-full bg-primary hover:bg-primary-dark text-white rounded-lg">
                Apply Filters
            </Button>
        </aside>
    )
}

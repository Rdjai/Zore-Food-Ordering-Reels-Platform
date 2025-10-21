import React from 'react'
import logo from '../../../../assets/img/logo.png'
import { CiGift } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="flex  w-screen h-[8vh] text-center justify-between  mr-8 border-zinc-300 border-b-1">

            <Link to='/' className="w-[15vw] items-center  justify-center flex border-zinc-300 border-r-1">
                <img src={logo} alt="logo" className=" font-bold text-white  h-[6vh] items-center m-auto " />
            </Link>
            <div className="flex justify-between w-[85vw]">
                <div className="flex h-[6vh] text-center items-center m-auto sm: invisible md:visible">
                    <input type="text" placeholder="Search..." className="border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none" />
                    <button className="bg-red-600 text-white rounded-r-full px-4 py-2 hover:bg-red-700 focus:outline-none">Search</button>
                </div>
                <div className="flex justify-between text-center items-center mr-9">
                    <CiGift size={28} />
                    <IoMdNotificationsOutline size={28} />
                    <CiCirclePlus size={28} />
                </div>
                <div className="flex items-center mr-8">
                    <div className='row text-start m-0 p-0'>
                        <div className="mr-4 text-red-600 font-medium">Rdj Store</div>
                        <div className="mr-4 text-red-600 font-extralight m-0 p-0 items-start">Business</div>

                    </div>
                    <img src="https://media.licdn.com/dms/image/v2/D5603AQHqcxwrHzx_Sw/profile-displayphoto-shrink_400_400/B56ZRVpXhyHoAo-/0/1736603696316?e=1762387200&v=beta&t=6V56jsmXW6ecX8McgIFznvGl5xe9rT_9Q_7bw8E8tU8" alt="Profile" className="w-10 h-10 rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar

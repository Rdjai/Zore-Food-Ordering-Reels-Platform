import React from 'react'
import {
    FaTachometerAlt,
    FaCog,
    FaHandsHelping,

} from "react-icons/fa";
import { FaUserGear, FaUserGroup } from "react-icons/fa6";

import { MdOutlineSecurity } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { LuMessageSquareDot } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import { TbFileInvoice } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { SiInductiveautomation } from "react-icons/si";
import { SiShortcut } from "react-icons/si";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GiCook } from "react-icons/gi";


const SidebarMenu2 = [
    {
        name: 'General',
        menu: [
            { name: 'Dashboard', icon: <FaTachometerAlt />, link: '/store/dashboard' },
            { name: 'Orders', icon: <GiCook />, link: 'store/dashboard/orders' },
            { name: 'Payment', icon: <RiMoneyRupeeCircleLine />, link: 'store/dashboard/payout' },
            // { name: 'Users', icon: <FaUserGroup />, link: '/user/dashboard/products' },
            { name: 'message', icon: <LuMessageSquareDot />, link: '/user/dashboard/products' },
            { name: 'Add Items', icon: <AiOutlineProduct />, link: '/store/dashboard/addItems' },
            { name: 'Publish reel', icon: <SiShortcut />, link: '/store/dashboard/reelupload' },
        ]


    },
    {
        name: 'Tools',
        menu: [
            { name: 'Product', icon: <FiShoppingBag />, link: '/store/dashboard/products' },
            { name: 'Invoice', icon: <TbFileInvoice />, link: '/store/dashboard/transaction' },
            { name: 'Analytics', icon: <BsGraphUpArrow />, link: '/user/dashboard/settings/account' },
            { name: 'Automation', icon: <SiInductiveautomation />, link: '/user/dashboard/settings/account' },
        ]

    },
    {
        name: 'Support',
        menu: [
            { name: 'Profile', icon: <FaUserGear />, link: '/user/dashboard/settings/profile' },
            { name: 'Account', icon: <FaCog />, link: '/user/dashboard/settings/account' },
            { name: 'Security', icon: <MdOutlineSecurity />, link: '/user/dashboard/settings/security' },
            { name: 'Help', icon: <FaHandsHelping />, link: '/user/dashboard/settings/notifications' },
        ]
    }

]
const StoreSidebar = () => {
    return (
        <div className="row border-zinc-300 border-r-1 ">
            <div className="flex flex-col h-[92vh] w-[15vw] bg-white shadow-lg p-4 border-zinc-300 border-r-1 overflow-scroll no-scrollbar">
                {SidebarMenu2.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">{section.name}</h3>
                        <ul>
                            {section.menu.map((item, idx) => (
                                <li key={idx} className="mb-4">
                                    <Link to={item.link} className="flex items-center text-gray-700 hover:text-red-600">
                                        <span className="text-lg mr-3">{item.icon}</span>
                                        <span>{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StoreSidebar

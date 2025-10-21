import React from "react";
import {
    FaTachometerAlt,
    FaUsers,
    FaStore,
    FaHandsHelping,
    FaCog,
    FaBell,
    FaUserShield,
    FaUserTie,
    FaCogs,
    FaServer,
    FaChartLine,
    FaMotorcycle,
    FaUserPlus,
    FaMapMarkedAlt,
    FaClipboardList,
    FaBan,
} from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";

import { MdOutlineSecurity, MdOutlineSupportAgent, MdDeliveryDining } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import {
    TbFileInvoice,
    TbReportAnalytics,
    TbDatabaseCog,
} from "react-icons/tb";
import { SiInductiveautomation, SiShortcut } from "react-icons/si";
import { AiOutlineProduct, AiOutlineSchedule } from "react-icons/ai";
import { BsGraphUpArrow, BsFillPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiPathDistance } from "react-icons/gi";

const SidebarMenu2 = [
    {
        name: "Dashboard",
        menu: [
            { name: "Overview", icon: <FaTachometerAlt />, link: "/admin" },
            { name: "Analytics", icon: <BsGraphUpArrow />, link: "/admin/dashboard/analytics" },
            { name: "Revenue Report", icon: <FaChartLine />, link: "/admin/dashboard/revenue" },
        ],
    },
    {
        name: "Business Management",
        menu: [
            { name: "Stores", icon: <FaStore />, link: "/admin/dashboard/stores" },
            { name: "Store Requests", icon: <FaUserTie />, link: "/admin/dashboard/store-requests" },
            { name: "Orders", icon: <MdDeliveryDining />, link: "/admin/dashboard/orders" },
            { name: "Products", icon: <AiOutlineProduct />, link: "/admin/dashboard/products" },
            { name: "Offers & Discounts", icon: <CiDiscount1 />, link: "/admin/dashboard/offers" },
            { name: "Payouts", icon: <GiTakeMyMoney />, link: "/admin/dashboard/payouts" },
            { name: "Transactions", icon: <TbFileInvoice />, link: "/admin/dashboard/transactions" },
        ],
    },
    {
        name: "Riders",
        menu: [
            { name: "Overview", icon: <FaMotorcycle />, link: "/admin/dashboard/rider-overview" },
            { name: "All Riders", icon: <FaMotorcycle />, link: "/admin/dashboard/riders" },
            { name: "Rider Requests", icon: <FaUserPlus />, link: "/admin/dashboard/rider-requests" },
            { name: "Assignments / Deliveries", icon: <FaClipboardList />, link: "/admin/dashboard/rider-assignments" },
            { name: "Live Tracking", icon: <FaMapMarkedAlt />, link: "/admin/dashboard/rider-tracking" },
            { name: "Rider Payouts", icon: <GiTakeMyMoney />, link: "/admin/dashboard/rider-payouts" },
            { name: "Vehicles", icon: <GiPathDistance />, link: "/admin/dashboard/rider-vehicles" },
            { name: "Shift Schedules", icon: <AiOutlineSchedule />, link: "/admin/dashboard/rider-schedules" },
            { name: "Performance Reports", icon: <TbReportAnalytics />, link: "/admin/dashboard/rider-performance" },
            { name: "Suspend / Ban Rider", icon: <FaBan />, link: "/admin/dashboard/rider-suspensions" },
        ],
    },
    {
        name: "User Management",
        menu: [
            { name: "All Users", icon: <FaUsers />, link: "/admin/dashboard/users" },
            { name: "Store Owners", icon: <FaUserTie />, link: "/admin/dashboard/store-owners" },
            { name: "Banned Accounts", icon: <FaUserShield />, link: "/admin/dashboard/banned" },
            { name: "User Reports", icon: <TbReportAnalytics />, link: "/admin/dashboard/user-reports" },
        ],
    },
    {
        name: "Content Control",
        menu: [
            { name: "Reels", icon: <SiShortcut />, link: "/admin/dashboard/reels" },
            { name: "Reviews", icon: <FaHandsHelping />, link: "/admin/dashboard/reviews" },
            { name: "Reported Content", icon: <MdOutlineSupportAgent />, link: "/admin/dashboard/reported" },
            { name: "App Banners / Ads", icon: <FaBell />, link: "/admin/dashboard/banners" },
        ],
    },
    {
        name: "Finance & Billing",
        menu: [
            { name: "Transactions", icon: <TbFileInvoice />, link: "/admin/dashboard/transactions" },
            { name: "Payments", icon: <RiMoneyRupeeCircleLine />, link: "/admin/dashboard/payments" },
            { name: "Subscriptions", icon: <FaCogs />, link: "/admin/dashboard/subscriptions" },
        ],
    },
    {
        name: "System & Settings",
        menu: [
            { name: "System Settings", icon: <FaCog />, link: "/admin/dashboard/settings" },
            { name: "Automation", icon: <SiInductiveautomation />, link: "/admin/dashboard/automation" },
            { name: "Database Management", icon: <TbDatabaseCog />, link: "/admin/dashboard/database" },
            { name: "Security", icon: <MdOutlineSecurity />, link: "/admin/dashboard/security" },
            { name: "Audit Logs", icon: <FaServer />, link: "/admin/dashboard/logs" },
        ],
    },
    {
        name: "Support & Communication",
        menu: [
            { name: "Help Center", icon: <FaHandsHelping />, link: "/admin/dashboard/help" },
            { name: "Announcements", icon: <FaBell />, link: "/admin/dashboard/announcements" },
            { name: "Tickets", icon: <MdOutlineSupportAgent />, link: "/admin/dashboard/tickets" },
        ],
    },
];

const AdminSidebar = () => {
    return (
        <div className="row border-zinc-300 border-r-1">
            <div className="flex flex-col h-[92vh] w-[15vw] bg-white shadow-lg p-4 border-zinc-300 border-r-1 overflow-scroll no-scrollbar">
                {SidebarMenu2.map((section, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-gray-500 text-sm font-semibold mb-4 uppercase">
                            {section.name}
                        </h3>
                        <ul>
                            {section.menu.map((item, idx) => (
                                <li key={idx} className="mb-4">
                                    <Link
                                        to={item.link}
                                        className="flex items-center text-gray-700 hover:text-red-600 transition-all"
                                    >
                                        <span className="text-lg mr-3">{item.icon}</span>
                                        <span className="text-sm font-medium">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Fixed Logout Button */}
                <div className="mt-auto border-t pt-4">
                    <Link
                        to="/logout"
                        className="flex items-center text-red-600 font-semibold hover:opacity-80"
                    >
                        <FaUserShield className="text-lg mr-3" />
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;

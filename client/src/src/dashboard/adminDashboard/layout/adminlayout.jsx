import React from 'react'
import AdminNavbar from '../component/adminNavbar'
import AdminSidebar from '../component/adminsidebar'
import { Outlet } from 'react-router-dom'

const Adminlayout = () => {
    return (
        <div className=" h-screen w-screen overflow-hidden">
            <AdminNavbar />
            <div className="flex bg-gray-100">
                <div className="hidden md:block bg-white h-[92vh] w-[15vw]">
                    <AdminSidebar />
                </div>
                <Outlet />
            </div>

        </div>
    )
}

export default Adminlayout

import { Outlet } from 'react-router-dom'
import StoreNavbar from '../component/storeNavbar'
import StoreSidebar from '../component/sidebar'
const StoreLayout = () => {
    return (
        <div className=" h-screen w-screen overflow-hidden">
            <StoreNavbar />
            <div className="flex bg-gray-100">
                <div className="hidden md:block bg-white h-[92vh] w-[15vw]">
                    <StoreSidebar />
                </div>
                <Outlet />
            </div>

        </div>
    )
}

export default StoreLayout

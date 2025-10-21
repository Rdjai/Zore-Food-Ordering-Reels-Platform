import React from "react";
import { FaTag, FaEdit, FaTrash, FaPlusCircle } from "react-icons/fa";

const AdminOffersPage = () => {
    // Dummy offer data
    const offers = [
        {
            id: "#OF1001",
            title: "Diwali Special 20% Off",
            store: "Rdj Store",
            product: "All Products",
            discount: "20%",
            startDate: "2025-10-20",
            endDate: "2025-11-05",
            status: "Active",
        },
        {
            id: "#OF1002",
            title: "Weekend Biryani Offer",
            store: "Kashyap Kitchen",
            product: "Veg Biryani",
            discount: "15%",
            startDate: "2025-10-25",
            endDate: "2025-10-27",
            status: "Upcoming",
        },
        {
            id: "#OF1003",
            title: "Zore Café Sweet Treat",
            store: "Zore Café",
            product: "Gulab Jamun",
            discount: "10%",
            startDate: "2025-10-15",
            endDate: "2025-10-22",
            status: "Expired",
        },
    ];

    const handleEditOffer = (id) => {
        console.log("Edit offer:", id);
        // TODO: open edit modal or navigate to edit page
    };

    const handleDeleteOffer = (id) => {
        console.log("Delete offer:", id);
        // TODO: call backend API to delete
    };

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Offers & Discounts</h1>
                <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                    <FaPlusCircle /> Add New Offer
                </button>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Offer ID</th>
                            <th className="py-2">Title</th>
                            <th className="py-2">Store</th>
                            <th className="py-2">Product</th>
                            <th className="py-2">Discount</th>
                            <th className="py-2">Start Date</th>
                            <th className="py-2">End Date</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offers.map((offer) => (
                            <tr
                                key={offer.id}
                                className="border-b text-gray-700 hover:bg-gray-50 transition-all"
                            >
                                <td className="py-2 flex items-center gap-2">
                                    <FaTag className="text-blue-500" /> {offer.id}
                                </td>
                                <td className="py-2">{offer.title}</td>
                                <td className="py-2">{offer.store}</td>
                                <td className="py-2">{offer.product}</td>
                                <td className="py-2">{offer.discount}</td>
                                <td className="py-2">{offer.startDate}</td>
                                <td className="py-2">{offer.endDate}</td>
                                <td className={`py-2 font-medium ${offer.status === "Active" ? "text-green-600" :
                                    offer.status === "Upcoming" ? "text-orange-500" :
                                        "text-red-600"
                                    }`}>
                                    {offer.status}
                                </td>
                                <td className="py-2 flex items-center gap-3">
                                    <button
                                        onClick={() => handleEditOffer(offer.id)}
                                        className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                                    >
                                        <FaEdit /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteOffer(offer.id)}
                                        className="text-red-500 hover:text-red-700 flex items-center gap-1"
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminOffersPage;

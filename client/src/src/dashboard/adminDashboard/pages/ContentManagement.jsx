import React, { useState } from "react";

const ContentManagement = () => {
    const [activeTab, setActiveTab] = useState("reels");

    // Mock Data
    const reels = [
        { id: 1, creator: "Rahul Sharma", title: "Delicious Pasta Recipe", likes: 120, status: "Pending" },
        { id: 2, creator: "Sneha Verma", title: "Street Food Tour", likes: 250, status: "Approved" },
    ];

    const reviews = [
        { id: 1, user: "Ravi Kumar", store: "Pizza Hub", rating: 5, comment: "Amazing food!", status: "Visible" },
        { id: 2, user: "Anjali Singh", store: "Burger Point", rating: 2, comment: "Cold food.", status: "Hidden" },
    ];

    const reports = [
        { id: 1, contentType: "Reel", reportedBy: "Rahul Sharma", reason: "Inappropriate language", date: "2025-10-20" },
        { id: 2, contentType: "Review", reportedBy: "Sneha Verma", reason: "Spam comment", date: "2025-10-21" },
    ];

    const banners = [
        { id: 1, title: "Diwali Offer", location: "Home Screen", active: true },
        { id: 2, title: "50% Off on Pizza", location: "Deals Page", active: false },
    ];

    // Handlers
    const handleApprove = (id) => alert(`Approved item ID ${id}`);
    const handleReject = (id) => alert(`Rejected item ID ${id}`);
    const handleDelete = (id) => alert(`Deleted item ID ${id}`);
    const handleToggle = (id) => alert(`Toggled banner ID ${id}`);

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Content Management</h1>

            {/* Tabs */}
            <div className="flex space-x-4 border-b border-gray-200 mb-6">
                {["reels", "reviews", "reported", "ads"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 font-semibold ${activeTab === tab ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-500"
                            }`}
                    >
                        {tab === "reels"
                            ? "Reels"
                            : tab === "reviews"
                                ? "Reviews"
                                : tab === "reported"
                                    ? "Reported Content"
                                    : "App Banners / Ads"}
                    </button>
                ))}
            </div>

            {/* --- REELS --- */}
            {activeTab === "reels" && (
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-bold mb-4">Reels Management</h2>
                    <table className="w-full text-left border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3">Creator</th>
                                <th className="p-3">Title</th>
                                <th className="p-3">Likes</th>
                                <th className="p-3">Status</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reels.map((reel) => (
                                <tr key={reel.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">{reel.creator}</td>
                                    <td className="p-3">{reel.title}</td>
                                    <td className="p-3">{reel.likes}</td>
                                    <td
                                        className={`p-3 font-semibold ${reel.status === "Approved" ? "text-green-600" : "text-yellow-500"
                                            }`}
                                    >
                                        {reel.status}
                                    </td>
                                    <td className="p-3 text-right space-x-2">
                                        <button
                                            onClick={() => handleApprove(reel.id)}
                                            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                                        >
                                            Approve
                                        </button>
                                        <button
                                            onClick={() => handleReject(reel.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                        >
                                            Reject
                                        </button>
                                        <button
                                            onClick={() => handleDelete(reel.id)}
                                            className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* --- REVIEWS --- */}
            {activeTab === "reviews" && (
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-bold mb-4">User Reviews</h2>
                    <table className="w-full text-left border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3">User</th>
                                <th className="p-3">Store</th>
                                <th className="p-3">Rating</th>
                                <th className="p-3">Comment</th>
                                <th className="p-3">Status</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((review) => (
                                <tr key={review.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">{review.user}</td>
                                    <td className="p-3">{review.store}</td>
                                    <td className="p-3">{review.rating}⭐</td>
                                    <td className="p-3">{review.comment}</td>
                                    <td
                                        className={`p-3 font-semibold ${review.status === "Visible" ? "text-green-600" : "text-red-500"
                                            }`}
                                    >
                                        {review.status}
                                    </td>
                                    <td className="p-3 text-right space-x-2">
                                        <button
                                            onClick={() => handleApprove(review.id)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                                        >
                                            Show
                                        </button>
                                        <button
                                            onClick={() => handleReject(review.id)}
                                            className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                                        >
                                            Hide
                                        </button>
                                        <button
                                            onClick={() => handleDelete(review.id)}
                                            className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-400"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* --- REPORTED CONTENT --- */}
            {activeTab === "reported" && (
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-bold mb-4">Reported Content</h2>
                    <table className="w-full text-left border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3">Type</th>
                                <th className="p-3">Reported By</th>
                                <th className="p-3">Reason</th>
                                <th className="p-3">Date</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((r) => (
                                <tr key={r.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">{r.contentType}</td>
                                    <td className="p-3">{r.reportedBy}</td>
                                    <td className="p-3">{r.reason}</td>
                                    <td className="p-3">{r.date}</td>
                                    <td className="p-3 text-right space-x-2">
                                        <button
                                            onClick={() => handleApprove(r.id)}
                                            className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                                        >
                                            Resolve
                                        </button>
                                        <button
                                            onClick={() => handleDelete(r.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                        >
                                            Remove Content
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* --- APP BANNERS / ADS --- */}
            {activeTab === "ads" && (
                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-bold mb-4">App Banners / Ads</h2>

                    <button
                        onClick={() => alert("Add New Banner")}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
                    >
                        + Add New Banner
                    </button>

                    <table className="w-full text-left border">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3">Title</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Status</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {banners.map((banner) => (
                                <tr key={banner.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">{banner.title}</td>
                                    <td className="p-3">{banner.location}</td>
                                    <td className={`p-3 ${banner.active ? "text-green-600" : "text-red-500"}`}>
                                        {banner.active ? "Active" : "Inactive"}
                                    </td>
                                    <td className="p-3 text-right space-x-2">
                                        <button
                                            onClick={() => handleToggle(banner.id)}
                                            className={`${banner.active
                                                    ? "bg-yellow-500 hover:bg-yellow-600"
                                                    : "bg-green-500 hover:bg-green-600"
                                                } text-white px-3 py-1 rounded-md`}
                                        >
                                            {banner.active ? "Deactivate" : "Activate"}
                                        </button>
                                        <button
                                            onClick={() => alert("Edit Banner")}
                                            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(banner.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ContentManagement;

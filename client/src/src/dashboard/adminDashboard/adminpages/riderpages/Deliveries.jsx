import React from "react";

const RiderAssignmentsPage = () => {
    const assignments = [
        { id: "#A1001", rider: "Rider One", order: "Pizza Margherita", store: "Rdj Store", status: "Delivered" },
        { id: "#A1002", rider: "Rider Two", order: "Veg Biryani", store: "Kashyap Kitchen", status: "Pending" },
    ];

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll">
            <h1 className="text-2xl font-bold mb-6">Assignments / Deliveries</h1>
            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Assignment ID</th>
                            <th className="py-2">Rider</th>
                            <th className="py-2">Order</th>
                            <th className="py-2">Store</th>
                            <th className="py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map((a) => (
                            <tr key={a.id} className="border-b hover:bg-gray-50 transition-all text-gray-700">
                                <td className="py-2">{a.id}</td>
                                <td className="py-2">{a.rider}</td>
                                <td className="py-2">{a.order}</td>
                                <td className="py-2">{a.store}</td>
                                <td className={`py-2 font-medium ${a.status === "Delivered" ? "text-green-600" : "text-orange-500"}`}>{a.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RiderAssignmentsPage;

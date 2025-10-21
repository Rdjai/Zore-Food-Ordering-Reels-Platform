import React from "react";
import { FaMotorcycle } from "react-icons/fa";

const AllRidersPage = () => {
    const riders = [
        { id: "#R1001", name: "Rider One", phone: "9876543210", status: "Active" },
        { id: "#R1002", name: "Rider Two", phone: "9123456780", status: "Inactive" },
    ];

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll">
            <h1 className="text-2xl font-bold mb-6">All Riders</h1>
            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Rider ID</th>
                            <th className="py-2">Name</th>
                            <th className="py-2">Phone</th>
                            <th className="py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {riders.map((rider) => (
                            <tr key={rider.id} className="border-b hover:bg-gray-50 transition-all text-gray-700">
                                <td className="py-2 flex items-center gap-2"><FaMotorcycle className="text-blue-500" /> {rider.id}</td>
                                <td className="py-2">{rider.name}</td>
                                <td className="py-2">{rider.phone}</td>
                                <td className={`py-2 font-medium ${rider.status === "Active" ? "text-green-600" : "text-red-600"}`}>{rider.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllRidersPage;

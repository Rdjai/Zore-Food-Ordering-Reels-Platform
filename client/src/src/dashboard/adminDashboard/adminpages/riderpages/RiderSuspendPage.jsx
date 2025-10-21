import React from "react";
import { FaBan, FaCheckCircle } from "react-icons/fa";

const RiderSuspendPage = () => {
    const riders = [
        { id: "#R1001", name: "Rider One", status: "Active" },
        { id: "#R1002", name: "Rider Two", status: "Active" },
    ];

    const handleSuspend = (id) => console.log("Suspend:", id);
    const handleActivate = (id) => console.log("Activate:", id);

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll">
            <h1 className="text-2xl font-bold mb-6">Suspend / Ban Rider</h1>
            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Rider ID</th>
                            <th className="py-2">Name</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {riders.map((rider) => (
                            <tr key={rider.id} className="border-b hover:bg-gray-50 transition-all text-gray-700">
                                <td className="py-2">{rider.id}</td>
                                <td className="py-2">{rider.name}</td>
                                <td className="py-2">{rider.status}</td>
                                <td className="py-2 flex items-center gap-2">
                                    {rider.status === "Active" ? (
                                        <button onClick={() => handleSuspend(rider.id)} className="flex items-center gap-1 text-red-600 hover:text-red-800"><FaBan /> Suspend</button>
                                    ) : (
                                        <button onClick={() => handleActivate(rider.id)} className="flex items-center gap-1 text-green-600 hover:text-green-800"><FaCheckCircle /> Activate</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RiderSuspendPage;

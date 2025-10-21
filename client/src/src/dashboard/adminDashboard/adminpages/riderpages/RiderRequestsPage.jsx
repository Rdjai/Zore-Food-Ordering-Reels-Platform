import React from "react";
import { FaUserCheck, FaUserTimes } from "react-icons/fa";

const RiderRequestsPage = () => {
    const requests = [
        { id: "#RR1001", name: "Rider Three", phone: "9012345678", status: "Pending" },
    ];

    const handleApprove = (id) => console.log("Approve:", id);
    const handleReject = (id) => console.log("Reject:", id);

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll">
            <h1 className="text-2xl font-bold mb-6">Rider Registration Requests</h1>
            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Request ID</th>
                            <th className="py-2">Name</th>
                            <th className="py-2">Phone</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req) => (
                            <tr key={req.id} className="border-b hover:bg-gray-50 transition-all text-gray-700">
                                <td className="py-2">{req.id}</td>
                                <td className="py-2">{req.name}</td>
                                <td className="py-2">{req.phone}</td>
                                <td className="py-2 flex items-center gap-2">
                                    <button onClick={() => handleApprove(req.id)} className="flex items-center gap-1 text-green-600 hover:text-green-800"><FaUserCheck /> Approve</button>
                                    <button onClick={() => handleReject(req.id)} className="flex items-center gap-1 text-red-600 hover:text-red-800"><FaUserTimes /> Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RiderRequestsPage;

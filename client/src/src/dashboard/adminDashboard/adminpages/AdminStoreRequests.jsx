import React from "react";
import { FaStore, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const AdminStoreRequests = () => {
    // Dummy store request data
    const requests = [
        { id: "#SR001", name: "Rdj Tandoor", owner: "Rahul Kumar", email: "rahul@example.com", revenue: "—", status: "Pending" },
        { id: "#SR002", name: "Spicy Kitchen", owner: "Sandeep Yadav", email: "sandeep@example.com", revenue: "—", status: "Pending" },
        { id: "#SR003", name: "Zore Bites", owner: "Vikas Singh", email: "vikas@example.com", revenue: "—", status: "Pending" },
    ];

    const handleApprove = (id) => {
        console.log("Approved store request:", id);
        // TODO: call backend API to approve
    };

    const handleReject = (id) => {
        console.log("Rejected store request:", id);
        // TODO: call backend API to reject
    };

    return (
        <div className="p-6 bg-gray-50 w-screen h-screen overflow-scroll">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Store Requests</h1>

            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Request ID</th>
                            <th className="py-2">Store Name</th>
                            <th className="py-2">Owner</th>
                            <th className="py-2">Email</th>
                            <th className="py-2">Status</th>
                            <th className="py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req) => (
                            <tr key={req.id} className="border-b text-gray-700 hover:bg-gray-50 transition-all">
                                <td className="py-2">{req.id}</td>
                                <td className="py-2 flex items-center gap-2">
                                    <FaStore className="text-blue-500" /> {req.name}
                                </td>
                                <td className="py-2">{req.owner}</td>
                                <td className="py-2">{req.email}</td>
                                <td className="py-2 text-orange-500 font-medium">{req.status}</td>
                                <td className="py-2 flex items-center gap-3">
                                    <button
                                        onClick={() => handleApprove(req.id)}
                                        className="flex items-center gap-1 text-green-600 hover:text-green-800"
                                    >
                                        <FaCheckCircle /> Approve
                                    </button>
                                    <button
                                        onClick={() => handleReject(req.id)}
                                        className="flex items-center gap-1 text-red-600 hover:text-red-800"
                                    >
                                        <FaTimesCircle /> Reject
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

export default AdminStoreRequests;

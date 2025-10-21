import React from "react";

const RiderPerformanceReportsPage = () => {
    const reports = [
        { rider: "Rider One", deliveries: 120, rating: 4.8, lateDeliveries: 3 },
        { rider: "Rider Two", deliveries: 95, rating: 4.5, lateDeliveries: 7 },
    ];

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll">
            <h1 className="text-2xl font-bold mb-6">Performance Reports</h1>
            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Rider</th>
                            <th className="py-2">Deliveries</th>
                            <th className="py-2">Rating</th>
                            <th className="py-2">Late Deliveries</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((r, idx) => (
                            <tr key={idx} className="border-b hover:bg-gray-50 transition-all text-gray-700">
                                <td className="py-2">{r.rider}</td>
                                <td className="py-2">{r.deliveries}</td>
                                <td className="py-2">{r.rating}</td>
                                <td className="py-2">{r.lateDeliveries}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RiderPerformanceReportsPage;

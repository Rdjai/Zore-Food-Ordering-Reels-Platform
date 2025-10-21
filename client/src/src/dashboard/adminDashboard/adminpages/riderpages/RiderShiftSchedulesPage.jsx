import React from "react";

const RiderShiftSchedulesPage = () => {
    const schedules = [
        { rider: "Rider One", shift: "Morning", time: "8:00 AM - 2:00 PM" },
        { rider: "Rider Two", shift: "Evening", time: "2:00 PM - 8:00 PM" },
    ];

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll">
            <h1 className="text-2xl font-bold mb-6">Shift Schedules</h1>
            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Rider</th>
                            <th className="py-2">Shift</th>
                            <th className="py-2">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map((s, idx) => (
                            <tr key={idx} className="border-b hover:bg-gray-50 transition-all text-gray-700">
                                <td className="py-2">{s.rider}</td>
                                <td className="py-2">{s.shift}</td>
                                <td className="py-2">{s.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RiderShiftSchedulesPage;

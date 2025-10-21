import React from "react";

const RiderVehiclesPage = () => {
    const vehicles = [
        { rider: "Rider One", vehicle: "Bike", model: "Honda Activa", plate: "MH12AB1234" },
        { rider: "Rider Two", vehicle: "Scooter", model: "TVS Jupiter", plate: "MH14CD5678" },
    ];

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll">
            <h1 className="text-2xl font-bold mb-6">Vehicles</h1>
            <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-gray-600 border-b">
                            <th className="py-2">Rider</th>
                            <th className="py-2">Vehicle Type</th>
                            <th className="py-2">Model</th>
                            <th className="py-2">Plate Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.map((v, idx) => (
                            <tr key={idx} className="border-b hover:bg-gray-50 transition-all text-gray-700">
                                <td className="py-2">{v.rider}</td>
                                <td className="py-2">{v.vehicle}</td>
                                <td className="py-2">{v.model}</td>
                                <td className="py-2">{v.plate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RiderVehiclesPage;

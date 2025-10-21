import React from "react";
import { FaMotorcycle, FaUserCheck, FaUserTimes, FaBan, FaCheckCircle } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

const RiderManagementPage = () => {
    // Sample data
    const allRiders = [
        { id: "#R1001", name: "Rider One", phone: "9876543210", status: "Active" },
        { id: "#R1002", name: "Rider Two", phone: "9123456780", status: "Inactive" },
    ];

    const riderRequests = [
        { id: "#RR1001", name: "Rider Three", phone: "9012345678" },
    ];

    const assignments = [
        { id: "#A1001", rider: "Rider One", order: "Pizza Margherita", store: "Rdj Store", status: "Delivered" },
    ];

    const payouts = [
        { id: "#RP1001", rider: "Rider One", amount: "₹1,200", method: "UPI", status: "Pending" },
    ];

    const vehicles = [
        { rider: "Rider One", vehicle: "Bike", model: "Honda Activa", plate: "MH12AB1234" },
    ];

    const shifts = [
        { rider: "Rider One", shift: "Morning", time: "8:00 AM - 2:00 PM" },
    ];

    const performance = [
        { rider: "Rider One", deliveries: 120, rating: 4.8, lateDeliveries: 3 },
    ];

    // Action handlers
    const handleApprove = (id) => console.log("Approve:", id);
    const handleReject = (id) => console.log("Reject:", id);
    const handlePay = (id) => console.log("Pay:", id);
    const handleSuspend = (id) => console.log("Suspend:", id);
    const handleActivate = (id) => console.log("Activate:", id);

    return (
        <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll space-y-8">
            {/* All Riders */}
            <section>
                <h2 className="text-2xl font-bold mb-4">All Riders</h2>
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
                            {allRiders.map((rider) => (
                                <tr key={rider.id} className="border-b hover:bg-gray-50 text-gray-700">
                                    <td className="py-2 flex items-center gap-2"><FaMotorcycle className="text-blue-500" /> {rider.id}</td>
                                    <td className="py-2">{rider.name}</td>
                                    <td className="py-2">{rider.phone}</td>
                                    <td className={`py-2 font-medium ${rider.status === "Active" ? "text-green-600" : "text-red-600"}`}>{rider.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Rider Requests */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Rider Requests</h2>
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
                            {riderRequests.map((req) => (
                                <tr key={req.id} className="border-b hover:bg-gray-50 text-gray-700">
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
            </section>

            {/* Assignments / Deliveries */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Assignments / Deliveries</h2>
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
                                <tr key={a.id} className="border-b hover:bg-gray-50 text-gray-700">
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
            </section>

            {/* Live Tracking */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Live Tracking</h2>
                <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full h-[60vh] flex items-center justify-center">
                    <span className="text-gray-400 text-lg">Map / Live tracking placeholder</span>
                </div>
            </section>

            {/* Rider Payouts */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Rider Payouts</h2>
                <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-gray-600 border-b">
                                <th className="py-2">Payout ID</th>
                                <th className="py-2">Rider</th>
                                <th className="py-2">Amount</th>
                                <th className="py-2">Method</th>
                                <th className="py-2">Status</th>
                                <th className="py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payouts.map((p) => (
                                <tr key={p.id} className="border-b hover:bg-gray-50 text-gray-700">
                                    <td className="py-2">{p.id}</td>
                                    <td className="py-2">{p.rider}</td>
                                    <td className="py-2">{p.amount}</td>
                                    <td className="py-2">{p.method}</td>
                                    <td className={`py-2 font-medium ${p.status === "Pending" ? "text-orange-500" : "text-green-600"}`}>{p.status}</td>
                                    <td className="py-2 flex items-center gap-2">
                                        {p.status === "Pending" && <button onClick={() => handlePay(p.id)} className="text-green-600 hover:text-green-800">Pay</button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Vehicles */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Vehicles</h2>
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
                                <tr key={idx} className="border-b hover:bg-gray-50 text-gray-700">
                                    <td className="py-2">{v.rider}</td>
                                    <td className="py-2">{v.vehicle}</td>
                                    <td className="py-2">{v.model}</td>
                                    <td className="py-2">{v.plate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Shift Schedules */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Shift Schedules</h2>
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
                            {shifts.map((s, idx) => (
                                <tr key={idx} className="border-b hover:bg-gray-50 text-gray-700">
                                    <td className="py-2">{s.rider}</td>
                                    <td className="py-2">{s.shift}</td>
                                    <td className="py-2">{s.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Performance Reports */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Performance Reports</h2>
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
                            {performance.map((r, idx) => (
                                <tr key={idx} className="border-b hover:bg-gray-50 text-gray-700">
                                    <td className="py-2">{r.rider}</td>
                                    <td className="py-2">{r.deliveries}</td>
                                    <td className="py-2">{r.rating}</td>
                                    <td className="py-2">{r.lateDeliveries}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Suspend / Ban Rider */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Suspend / Ban Rider</h2>
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
                            {allRiders.map((rider) => (
                                <tr key={rider.id} className="border-b hover:bg-gray-50 text-gray-700">
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
            </section>
        </div>
    );
};

export default RiderManagementPage;

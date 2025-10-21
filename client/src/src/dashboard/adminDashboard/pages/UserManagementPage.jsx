import React, { useState } from "react";

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState("all");

  const users = [
    { id: 1, name: "Rahul Sharma", email: "rahul@example.com", role: "User", status: "Active" },
    { id: 2, name: "Sneha Verma", email: "sneha@example.com", role: "Store Owner", status: "Active" },
    { id: 3, name: "Ravi Kumar", email: "ravi@example.com", role: "User", status: "Banned" },
  ];

  const reports = [
    { id: 1, user: "Rahul Sharma", issue: "Fake review reported", date: "2025-10-20" },
    { id: 2, user: "Sneha Verma", issue: "Spam content", date: "2025-10-21" },
  ];

  const handleBan = (id) => alert(`User ID ${id} banned`);
  const handleUnban = (id) => alert(`User ID ${id} unbanned`);
  const handleDelete = (id) => alert(`User ID ${id} deleted`);

  return (
    <div className="p-6 bg-gray-50 h-screen w-screen overflow-scroll">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Management</h1>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200 mb-6">
        {["all", "store", "banned", "reports"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-semibold ${activeTab === tab ? "border-b-4 border-blue-600 text-blue-600" : "text-gray-500"
              }`}
          >
            {tab === "all"
              ? "All Users"
              : tab === "store"
                ? "Store Owners"
                : tab === "banned"
                  ? "Banned Accounts"
                  : "User Reports"}
          </button>
        ))}
      </div>

      {/* All Users */}
      {activeTab === "all" && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">All Users</h2>
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  <td className={`p-3 font-semibold ${user.status === "Banned" ? "text-red-500" : "text-green-600"}`}>
                    {user.status}
                  </td>
                  <td className="p-3 text-right space-x-2">
                    {user.status === "Active" ? (
                      <button
                        onClick={() => handleBan(user.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                      >
                        Ban
                      </button>
                    ) : (
                      <button
                        onClick={() => handleUnban(user.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                      >
                        Unban
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(user.id)}
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

      {/* Store Owners */}
      {activeTab === "store" && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Store Owners</h2>
          {users.filter((u) => u.role === "Store Owner").length === 0 ? (
            <p>No store owners found.</p>
          ) : (
            <table className="w-full text-left border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((u) => u.role === "Store Owner")
                  .map((owner) => (
                    <tr key={owner.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{owner.name}</td>
                      <td className="p-3">{owner.email}</td>
                      <td className="p-3 text-green-600">{owner.status}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Banned Accounts */}
      {activeTab === "banned" && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Banned Accounts</h2>
          {users.filter((u) => u.status === "Banned").length === 0 ? (
            <p>No banned users.</p>
          ) : (
            <table className="w-full text-left border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((u) => u.status === "Banned")
                  .map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">
                        <button
                          onClick={() => handleUnban(user.id)}
                          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                        >
                          Unban
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* User Reports */}
      {activeTab === "reports" && (
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">User Reports</h2>
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3">User</th>
                <th className="p-3">Issue</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{report.user}</td>
                  <td className="p-3">{report.issue}</td>
                  <td className="p-3">{report.date}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => alert("Report Resolved")}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                    >
                      Resolve
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

export default UserManagement;

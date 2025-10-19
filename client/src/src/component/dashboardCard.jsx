import React from 'react'

const DashboardCard = ({ key, item }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 m-4 w-70  h-[150px] col" key={key}>
            <h2 className="text-xl font-semibold mb-4">{item.name}</h2>
            {item.id == 4 ? <p className="text-3xl font-bold">${item.sales}</p> : <p className="text-3xl font-bold">{item.sales}</p>}
            <p className="text-green-500 mt-2">+5% from last month</p>
        </div>
    )
}

export default DashboardCard

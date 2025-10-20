import { useState } from 'react'
import Chart from 'react-apexcharts'
import { VscGraph } from "react-icons/vsc";
import { FaDollarSign } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";

const products = [
    {
        id: 1,
        name: "Total Sales",
        sales: 1000,
        growth: "+10%"
    },
    {
        id: 2,
        name: "pending order",
        sales: 15,
        growth: "+15%"
    },
    {
        id: 3,
        name: "Delivered orders",
        sales: 200,
        growth: "+20%"
    },
    {
        id: 4,
        name: "Total Earnings",
        sales: 2500,
        growth: "+25%"
    },

]
const StoreHome = () => {
    const [chartData] = useState({
        options: {
            chart: {
                id: "1",
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            },
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            },
        ],
    });
    const [recentOrder, setrecentOrder] = useState([
        {
            orderId: '001',
            customerName: 'John Doe',
            date: '2024-06-01',
            amount: '$150.00',
            status: 'Completed'
        },
        {
            orderId: '002',
            customerName: 'Jane Smith',
            date: '2024-06-02',
            amount: '$200.00',
            status: 'Pending'
        },
        {
            orderId: '003',
            customerName: 'Mike Johnson',
            date: '2024-06-03',
            amount: '$350.00',
            status: 'Completed'
        },
        {
            orderId: '004',
            customerName: 'Emily Davis',
            date: '2024-06-04',
            amount: '$400.00',
            status: 'Cancelled'
        },
        {
            orderId: '005',
            customerName: 'David Wilson',
            date: '2024-06-05',
            amount: '$250.00',
            status: 'Completed'
        },
        {
            orderId: '005',
            customerName: 'David Wilson',
            date: '2024-06-05',
            amount: '$250.00',
            status: 'Completed'
        },
        {
            orderId: '005',
            customerName: 'David Wilson',
            date: '2024-06-05',
            amount: '$250.00',
            status: 'Completed'
        },
        {
            orderId: '005',
            customerName: 'David Wilson',
            date: '2024-06-05',
            amount: '$250.00',
            status: 'Completed'
        },
        {
            orderId: '005',
            customerName: 'David Wilson',
            date: '2024-06-05',
            amount: '$250.00',
            status: 'Completed'
        },
        {
            orderId: '005',
            customerName: 'David Wilson',
            date: '2024-06-05',
            amount: '$250.00',
            status: 'Completed'
        },
    ])
    const [recentPayment, setrecentPayment] = useState([
        {
            paymentId: 'P001',
            customerName: 'John Doe',
            date: '2024-06-01',
            amount: '$150.00',
            method: 'Credit Card'
        },
        {
            paymentId: 'P002',
            customerName: 'Jane Smith',
            date: '2024-06-02',
            amount: '$200.00',
            method: 'PayPal'
        },
        {
            paymentId: 'P002',
            customerName: 'Jane Smith',
            date: '2024-06-02',
            amount: '$200.00',
            method: 'PayPal'
        },
        {
            paymentId: 'P002',
            customerName: 'Jane Smith',
            date: '2024-06-02',
            amount: '$200.00',
            method: 'PayPal'
        },
        {
            paymentId: 'P002',
            customerName: 'Jane Smith',
            date: '2024-06-02',
            amount: '$200.00',
            method: 'PayPal'
        },
        {
            paymentId: 'P002',
            customerName: 'Jane Smith',
            date: '2024-06-02',
            amount: '$200.00',
            method: 'PayPal'
        },
        {
            paymentId: 'P002',
            customerName: 'Jane Smith',
            date: '2024-06-02',
            amount: '$200.00',
            method: 'PayPal'
        },
        {
            paymentId: 'P003',
            customerName: 'Mike Johnson',
            date: '2024-06-03',
            amount: '$350.00',
            method: 'Debit Card'
        }
    ])

    const series = [44, 55, 41, 17, 15];
    const options = {
        labels: ["Pizz", "Burger", "Chhole bhature", "Drinks", "Dessert"],
    };

    return (
        < div className="p-4 h-screen m-auto overflow-scroll no-scrollbar" >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {products.map((item, index) => (
                    <div
                        key={item.id ?? index}
                        className="bg-white shadow-md rounded-xl p-5 h-[150px] flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
                    >
                        <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>

                        <p className="text-3xl font-bold text-gray-900">
                            {item.id === 4 ? `$${item.sales}` : item.sales}
                        </p>

                        <p className="text-green-500 text-sm">+5% from last month</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
                <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-md">
                    <div className="flex items-center w-full mb-2">
                        <VscGraph size={22} className="mr-2 ml-1 text-gray-600" />
                        <h3 className="font-medium text-gray-700">Sales Overview</h3>
                    </div>

                    <div className="flex items-center mb-4 w-full">
                        <FaDollarSign size={20} className="mr-2 ml-1 text-green-600" />
                        <h3 className="text-2xl font-semibold text-gray-800">1846</h3>
                    </div>

                    <div className="w-full flex justify-center">
                        <Chart
                            options={chartData.options}
                            series={chartData.series}
                            type="bar"
                            width={500} height={320}
                        />
                    </div>
                </div>

                {/* Product Sell Overview */}
                <div className="bg-white rounded-2xl p-4 flex flex-col items-center shadow-md">
                    <div className="flex items-center w-full mb-2">
                        <AiOutlineProduct size={22} className="mr-2 ml-1 text-gray-600" />
                        <h3 className="font-medium text-gray-700">Product Sell Overview</h3>
                    </div>

                    <div className="w-full flex justify-center">
                        <Chart
                            options={options}
                            series={series}
                            type="donut"
                            width={480} height={300}
                        />
                    </div>
                </div>
            </div>


            {/* // recent orders component and recent payment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                {/* Recent Orders */}
                <div className="bg-white rounded-2xl p-4 h-[320px] overflow-y-auto no-scrollbar shadow-md">
                    <div className="flex items-center mb-3">
                        <VscGraph size={22} className="mr-2 text-gray-600" />
                        <h3 className="font-medium text-gray-800">Recent Orders</h3>
                    </div>

                    <div className="divide-y">
                        {recentOrder.map((order, index) => (
                            <div key={index} className="flex justify-between items-center py-2 text-sm">
                                <p className="font-semibold text-gray-700">{order.orderId}</p>
                                <p className="text-gray-600">{order.customerName}</p>
                                <p className="text-gray-500">{order.date}</p>
                                <p className="text-gray-800">{order.amount}</p>
                                <p
                                    className={
                                        order.status === 'Completed'
                                            ? 'text-green-600 font-medium'
                                            : order.status === 'Pending'
                                                ? 'text-yellow-500 font-medium'
                                                : 'text-red-500 font-medium'
                                    }
                                >
                                    {order.status}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Payments */}
                <div className="bg-white rounded-2xl p-4 h-[320px] overflow-y-auto no-scrollbar shadow-md">
                    <div className="flex items-center mb-3">
                        <VscGraph size={22} className="mr-2 text-gray-600" />
                        <h3 className="font-medium text-gray-800">Recent Payments</h3>
                    </div>

                    <div className="divide-y">
                        {recentPayment.map((payment, index) => (
                            <div key={index} className="flex justify-between items-center py-2 text-sm">
                                <p className="font-semibold text-gray-700">{payment.paymentId}</p>
                                <p className="text-gray-600">{payment.customerName}</p>
                                <p className="text-gray-500">{payment.date}</p>
                                <p className="text-gray-800">{payment.amount}</p>
                                <p className="text-gray-600">{payment.method}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                {/* footer */}
                <div className="bg-gray-200 p-4 text-center mb-10">
                    <p className="text-gray-600">&copy; 2024 Store Dashboard. All rights reserved.</p>
                </div>
            </div>
        </div >

    )
}

export default StoreHome

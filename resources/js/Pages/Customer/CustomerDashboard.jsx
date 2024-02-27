import CustAuthenticatedLayout from '@/Layouts/CustAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Header from './Header/Header';


export default function Dashboard({ auth, custOrder }) {
    const user_id = auth.user.id;
    const user_name = auth.user.customer_username;
    const columns = [
        {
            "title": "order_status",
            "name": "Status"
        },
        {
            "title": "total_amount",
            "name": "Total amount"
        },
        {
            "title": "created_at",
            "name": "Date"
        },
    ]

    const custData = custOrder.filter((custOrder) => custOrder.customer_id == user_id && custOrder.order_status !='Completed');

    const roll = custData.length;

    const dt = custData.map((custOrder, i) => 
        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                #{custOrder.order_id}
            </th>

            {columns.map((columns) =>
                <td key={columns.title} className="px-6 py-4">
                    {custOrder[columns.title]}
                </td>
            )}

            <td className="px-6 py-4 text-right">
            <a href={route('customer.order.view', custOrder.order_id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
            </td>
        </tr>
    );
    
    return (
        <>
        <CustAuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{user_name}'s Dashboard</h2>}
        >
            <Head title="Customer Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Header></Header>
                        <div className="p-6 text-gray-900">
                            {roll > 0 && 
                            <>
                            <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Pending order</h3>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <table>
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Order_id</th>
                                            {columns.map((columns) =>
                                                
                                                <th key={columns.title} scope="col" className="px-6 py-3">{columns.name}</th>
                                            )}
                                            <th scope="col"   className="px-6 py-3">View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dt}
                                    </tbody>
                                </table>
                            </div>
                            </>
                            }
                            {roll <= 0 && 
                                <>
                                    <h3 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>No pending order</h3>
                                    <h1 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Order Your Meal Now!</h1>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </CustAuthenticatedLayout>
        </>
    );
}





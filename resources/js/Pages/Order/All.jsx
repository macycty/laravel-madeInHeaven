import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Table from '@/Components/Table.jsx';


const columns = [
    'customer_id',
    'total_amount',
    'order_status',
]

export default function All({ auth, order }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Orders</h2>}
        >
            <Head title="Orders" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Table items={order} columns={columns} primary="No." action="order.edit"></Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

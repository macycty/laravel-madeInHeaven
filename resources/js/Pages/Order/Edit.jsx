import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdateOrderForm from '@/Pages/Order/Partials/UpdateOrderForm';

export default function All({ auth, order }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Orders #{order.id}</h2>}
        >
             <Head title={"Order #" + order.id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <UpdateOrderForm order={order} className="max-w-7xl"></UpdateOrderForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Table from '@/Components/Table.jsx';

const columns = [
    'menu_name',
    'price',
    'ingredients',
    'menu_status',
]

export default function All({ auth, menu }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Menus</h2>}
        >
            <Head title="Menus" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Table items={menu} columns={columns} primary="No." action="Menu.edit"></Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

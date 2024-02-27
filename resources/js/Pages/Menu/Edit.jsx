import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdateMenuForm from '@/Pages/Menu/Partials/UpdateMenuForm';


export default function All({ auth, menu }) {
    return (
        
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Menu #{menu.id}</h2>}
        >
            <Head title={"Menu #" + menu.id} /> 
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <UpdateMenuForm menu={menu} className="max-w-7xl"></UpdateMenuForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

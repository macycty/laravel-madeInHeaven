import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';


export default function InsertMenuForm({ menu, className = '' }) {

    const {data, setData, patch,errors, processing, recentlySuccessful} =  useForm({
        menu_status: menu.menu_status,
        price: menu.price,
    });

    const submit = (e) =>{
        e.preventDefault();
        patch(route('Menu.create', menu.id), {
            preserveScroll: true
        });
    }

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Add New Menu Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    View and change any information associated with this menu
                </p>
            </header>

            
            <form onSubmit={submit} className="mt-6 space-y-6">

                <div>
                    <InputLabel htmlFor="menu_id" value="Menu ID" />
                    <TextInput
                        id="menu_id"
                        className="mt-1 block w-full"
                        value={data.menu_id}
                        disabled 
                    />
                    <InputError message={errors.status} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="menu_name" value="Menu Name" />
                    <TextInput
                        id="menu_name"
                        className="mt-1 block w-full"
                        value={data.price}
                        disabled 
                    />
                    <InputError message={errors.status} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="price" value="price" />
                    <TextInput
                        id="price"
                        className="mt-1 block w-full"
                        value={data.price}
                        disabled 
                    />
                    <InputError message={errors.status} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="price" value="price" />
                    <TextInput
                        id="price"
                        className="mt-1 block w-full"
                        value={data.price}
                        disabled 
                    />
                    <InputError message={errors.status} className="mt-2" />
                </div>






                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save Changes</PrimaryButton>
                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>

            
        </section>
    );
}
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';


export default function UpdateOrderForm({ order }) {
    console.log(order);
    const {data, setData, patch,errors, processing, recentlySuccessful} =  useForm({
        order_status: order.order_status,
    });

    const submit = (e) =>{
        e.preventDefault();
        patch(route('order.update', order.id), {
            preserveScroll: true
        });
    }

    const statusOptions = [
        'Ordered', 'Prepping', 'Cooking', 'Checking', 'Ready', 'Completed'
    ]

    return (
        <section className={`space-y-6 `}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Order Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    View and change any information associated with this order
                </p>
            </header>

            <div><b><u>Order Details<br/></u>Customer ID: {order.customer_id}</b><br/>Order ID: {order.order_id}</div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                    <tr>
                        <th scope="col" className="px-6 py-3">Item</th>
                        <th scope="col" className="px-6 py-3">Qty</th>
                        <th scope="col" className="px-6 py-3">Sub-Total</th>
                    </tr>
                </thead>
                <tbody>
                    {order.order_details.map((order_detail, i) =>
                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{order_detail.menu_detail.menu_name}</td>
                            <td className="px-6 py-4">{order_detail.no_of_servings}</td>
                            <td className="px-6 py-4 text-right">£{order_detail.amount}</td>
                        </tr>
                    )}
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" colSpan={2}>Total</td>
                        <td className="px-6 py-4 text-right font-medium text-gray-900 whitespace-nowrap dark:text-white" colSpan={1}>£{order.total_amount}</td>
                    </tr>
                </tbody>
            </table>
            
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="order_status" value="order_status" />
        
                    <SelectInput
                        id="order_status"
                        className="mt-1 block w-full"
                        options={statusOptions}
                        value={data.order_status}
                        onChange={(e) => setData('order_status', e.target.value)}
                    />
                    <InputError className="mt-2" message={errors.status} />
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
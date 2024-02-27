import { useEffect } from 'react';
import CustGuestLayout from '@/Layouts/CustGuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        customer_first_name: '',
        customer_middle_name: '',
        customer_last_name: '',
        customer_email: '',
        password: '',
        password_confirmation: '',
        account_status: 'Active',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('customer.register'));
    };

    return (
        <CustGuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="customer_first_name" value="First Name" />

                    <TextInput
                        id="customer_first_name"
                        name="customer_first_name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="customer_first_name"
                        isFocused={true}
                        onChange={(e) => setData('customer_first_name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                
                <div>
                    <InputLabel htmlFor="customer_middle_name" value="Middle Name" />

                    <TextInput
                        id="customer_middle_name"
                        name="customer_middle_name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="customer_middle_name"
                        isFocused={true}
                        onChange={(e) => setData('customer_middle_name', e.target.value)}
                        
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="customer_last_name" value="Last Name" />

                    <TextInput
                        id="customer_last_name"
                        name="customer_last_name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="customer_last_name"
                        isFocused={true}
                        onChange={(e) => setData('customer_last_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>



                <div className="mt-4">
                    <InputLabel htmlFor="customer_email" value="Email" />

                    <TextInput
                        id="customer_email"
                        type="email"
                        name="customer_email"
                        value={data.customer_email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('customer_email', e.target.value)}
                        required
                    />

                    <InputError message={errors.customer_email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('customer.login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </CustGuestLayout>
    );
}

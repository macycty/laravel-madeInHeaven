import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        
        customer_username: user.customer_username,
        customer_first_name: user.customer_first_name,
        customer_middle_name: user.customer_middle_name,
        customer_last_name: user.customer_last_name,
        customer_email: user.customer_email,
        customer_phone_number: user.customer_phone_number,
        // profile_image
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('customer.profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="customer_username" value="Username" />

                    <TextInput
                        id="customer_username"
                        className="mt-1 block w-full"
                        value={data.customer_username}
                        onChange={(e) => setData('customer_username', e.target.value)}
                        required
                        isFocused
                        autoComplete="customer_username"
                    />

                    <InputError className="mt-2" message={errors.customer_username} />
                </div>

                <div>
                    <InputLabel htmlFor="customer_first_name" value="First Name" />

                    <TextInput
                        id="customer_first_name"
                        className="mt-1 block w-full"
                        value={data.customer_first_name}
                        onChange={(e) => setData('customer_first_name', e.target.value)}
                        required
                        isFocused
                        autoComplete="customer_first_name"
                    />

                    <InputError className="mt-2" message={errors.customer_first_name} />
                </div>

                <div>
                    <InputLabel htmlFor="customer_middle_name" value="Middle Name" />

                    <TextInput
                        id="customer_middle_name"
                        className="mt-1 block w-full"
                        value={data.customer_middle_name}
                        onChange={(e) => setData('customer_middle_name', e.target.value)}
                        isFocused
                        autoComplete="customer_middle_name"
                    />

                    <InputError className="mt-2" message={errors.customer_middle_name} />
                </div>

                <div>
                    <InputLabel htmlFor="customer_last_name" value="Last Name" />

                    <TextInput
                        id="customer_last_name"
                        className="mt-1 block w-full"
                        value={data.customer_last_name}
                        onChange={(e) => setData('customer_last_name', e.target.value)}
                        required
                        isFocused
                        autoComplete="customer_last_name"
                    />

                    <InputError className="mt-2" message={errors.customer_last_name} />
                </div>

                <div>
                    <InputLabel htmlFor="customer_email" value="Email" />

                    <TextInput
                        id="customer_email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.customer_email}
                        onChange={(e) => setData('customer_email', e.target.value)}
                        required
                        autoComplete="customer_email"
                    />

                    <InputError className="mt-2" message={errors.customer_email} />
                </div>

                <div>
                    <InputLabel htmlFor="customer_phone_number" value="Contact Number" />

                    <TextInput
                        id="customer_phone_number"
                        className="mt-1 block w-full"
                        value={data.customer_phone_number}
                        onChange={(e) => setData('customer_phone_number', e.target.value)}
                        required
                        isFocused
                        autoComplete="customer_phone_number"
                    />

                    <InputError className="mt-2" message={errors.customer_phone_number} />
                </div>

                {/* profile_image */}
                {/* <div>
                    <InputLabel htmlFor="customer_phone_number" value="Contact Number" />

                    <TextInput
                        id="customer_phone_number"
                        className="mt-1 block w-full"
                        value={data.customer_phone_number}
                        onChange={(e) => setData('customer_phone_number', e.target.value)}
                        required
                        isFocused
                        autoComplete="customer_phone_number"
                    />

                    <InputError className="mt-2" message={errors.customer_phone_number} />
                </div> */}


                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

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

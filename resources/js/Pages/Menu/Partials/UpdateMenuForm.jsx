import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage,  } from '@inertiajs/react';
import {useRef, useState} from 'react';
import folder from '/resources/assets/folder.png';



export default function UpdateMenuForm({ menu, className = '' }) {
    const {data, setData, patch,errors, processing, recentlySuccessful} =  useForm({
        menu_id : menu.menu_id,
        menu_name : menu.menu_name,
        price : menu.price,
        menu_type_id : menu.menu_type_id,
        menu_image : menu.menu_image,
        ingredients : menu.ingredients,
        menu_status : menu.menu_status,
    });

    const [image, setImage] = useState(menu.menu_image);
    
    
    const submit = (e) =>{

        e.preventDefault();
        patch(route('Menu.update', menu.id), {
            preserveScroll: true
        });
    }

    const statusOptions = [
        'Available', 'Sold Out', 
    ]

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const imgname = file.name;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () =>{
                const canvas = document.createElement("canvas");
                const maxSize = Math.max(img.width, img.height);
                canvas.width = maxSize;
                canvas.height = maxSize;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(
                    img,
                    (maxSize - img.width)/2,
                    (maxSize - img.height)/2,
                );
                canvas.toBlob(
                    (blob) => {
                        const newFile = new File([blob], imgname, {
                            type: 'image/png',
                            lastModified: Date.now(),
                        });
                        
                        const newReader = new FileReader();
                        newReader.readAsDataURL(newFile);
                        newReader.onloadend = () => {
                            const img = new Image();
                            img.src = newReader.result;
                            img.onload = () =>{
                                setImage(newReader.result);
                                setData('menu_image', newReader.result);
                            };  
                        };  
                        
                    },
                    'image/jpeg',
                    0.5
                );
            
            };  

            
            
        };
    };




    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Menu Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    View and change any information associated with this menu
                </p>
                

            </header>

            
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="menu_id" value="Item ID" />

                    <TextInput
                        id="menu_id"
                        className="mt-1 block w-full"
                        value={data.menu_id}
                        onChange={(e) => setData('menu_id', e.target.value)}
                        disabled
                    />
                    <InputError message={errors.status} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="menu_name" value="Item Name" />

                    <TextInput
                        id="menu_name"
                        className="mt-1 block w-full"
                        value={data.menu_name}
                        onChange={(e) => setData('menu_name', e.target.value)}
                    />
                    <InputError message={errors.status} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="price" value="Price" />

                    <TextInput
                        id="price"
                        className="mt-1 block w-full"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                    />
                    <InputError message={errors.status} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="menu_type_id" value="Item Type" />

                    <TextInput
                        id="menu_type_id"
                        className="mt-1 block w-full"
                        value={data.menu_type_id}
                        onChange={(e) => setData('menu_type_id', e.target.value)}
                    />
                    <InputError message={errors.status} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="menu_image" value="Item Image (.png file type only)" />
                    {/* //////////////// */}
                    <div>
                        {image ? <img src={image} alt='' width="300" height="300"/> : <img src={folder} alt='' width="300" height="300"/> }
                    </div>
                    <input
                        id="menu_image"
                        className="mt-1 block w-full"
                        type='file' 
                        onChange={handleImageChange}
                    
                    />
                    {/* //////////////// */}
                    <InputError message={errors.status} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="ingredients" value="Ingredients" />

                    <TextInput
                        id="ingredients"
                        className="mt-1 block w-full"
                        value={data.ingredients}
                        onChange={(e) => setData('ingredients', e.target.value)}
                    />
                    <InputError message={errors.status} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="menu_status" value="Item Status" />
        
                    <SelectInput
                        id="menu_status"
                        className="mt-1 block w-full"
                        options={statusOptions}
                        value={data.menu_status}
                        onChange={(e) => setData('menu_status', e.target.value)}
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
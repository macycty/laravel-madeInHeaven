import {Head } from '@inertiajs/react';

import FooterOverlay from './Footer/FooterOverlay';
import MenuItem from './MenuItem/MenuItem';
import AboutUs from './AboutUS/AboutUs';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';


export default function HomePage(menu) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar></Navbar>
            <Header></Header>
            <div className='bg'>
                <AboutUs></AboutUs>
            </div>
            <div className='bg-gold' style={{padding: '5.5rem 0rem' }}>
                <MenuItem menu={menu} ></MenuItem>
            </div>
            <div className='footer'>
                <FooterOverlay></FooterOverlay>
            </div>
        </>
    );
}

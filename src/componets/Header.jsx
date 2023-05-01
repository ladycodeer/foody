import React from 'react'
import Logo from "../img/logo.png"

const Header = () => {
    return (
        <Header className='fixed z-50 w-screen bg-slate-300  p-6 px-16'>
            {/* Desktop & Tablet */}
            <div className='hidden md:flex w-full h-full '>
                <div className='flex items-center gap-2'>
                    <img src={Logo} className=' w-8 object-cover ' alt="logo" />
                    <p className='text-headingColor text-xl font-bold'>Foody</p>
                </div>
                <ul className='flex items-center gap-8 ml-auto '>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Add to char </li>
                    <li>Profile</li>

                </ul>

            </div>



            {/* mobile */}
            <div className='flex md:hidden h-full '></div>


        </Header>
    )
}

export default Header;
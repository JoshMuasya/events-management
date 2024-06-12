'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import Menu from './Menu'

const Navbar = () => {
    return (
        <nav className='fixed top-10 left-0 z-20 flex flex-row justify-around items-center align-middle w-full'>
            {/* Logo */}
            <Link
                href=''
                className='flex flex-row justify-center items-center align-middle'>
                <div>
                    <Image
                        src='/nav-logo-dark.svg'
                        height={50}
                        width={50}
                        alt='Logo'
                    />
                </div>
                <h1 className='text-3xl text-white pl-5'>
                    Digimatic
                </h1>
            </Link>

            {/* Menu */}
            {/* Link 1 */}
            <div className='text-card hover:text-primary hover:font-bold font-medium text-lg hover:text-xl transition duration-500 ease-in-out'>
                <Link
                    href=''
                >
                    Home
                </Link>
            </div>

            {/* Link 2 */}
            <div className='text-card hover:text-primary hover:font-bold font-medium text-lg hover:text-xl transition duration-500 ease-in-out'>
                <Link
                    href=''
                >
                    About Us
                </Link>
            </div>

            {/* Link 3 */}
            <div className='text-card hover:text-primary hover:font-bold font-medium text-lg hover:text-xl transition duration-500 ease-in-out'>
                <Link
                    href=''
                >
                    Services
                </Link>
            </div>

            {/* Link 4 */}
            <div className='text-card hover:text-primary hover:font-bold font-medium text-lg hover:text-xl transition duration-500 ease-in-out'>
                <Link
                    href=''
                >
                    Portfolio
                </Link>
            </div>

            {/* Contact Button */}
            <div>
                <Link
                    href=''
                    className={buttonVariants({ variant: "default" })}>Contact Us
                </Link>
            </div>
        </nav>
    )
}

export default Navbar

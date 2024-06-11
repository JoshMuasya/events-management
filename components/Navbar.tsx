'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import Menu from './Menu'

const Navbar = () => {
    return (
        <div className='fixed top-10 left-20 z-20 flex flex-row justify-around items-center align-middle w-full'>
            {/* Logo */}
            <div className='flex flex-row justify-center items-center align-middle'>
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
            </div>

            {/* Menu */}
            <div>
                <Menu />
            </div>

            {/* Contact Button */}
            <div>
                <Link 
                href=''
                className={buttonVariants({ variant: "default" })}>Contact Us
                </Link>
            </div>
        </div>
    )
}

export default Navbar

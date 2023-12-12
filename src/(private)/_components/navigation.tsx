"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export const ListItem = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <li className='mt-2 pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-dark-green border-white md:hover:text-dark-green md:hover:bg-transparent'>
            {children}
        </li>
    )
}

export const Navbar = () => {
    const [navBar, setNavBar] = useState(false);

    return (
        <div>
            <nav className="w-full fixed top-0 right-0 left-0 z-10 bg-dark-blue">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-2 md:block">
                            <Link
                                href="/"
                            >
                                <Image
                                    src="/1.jpg"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className='rounded-full'
                                />
                            </Link>

                            <div className="md:hidden">

                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavBar(!navBar)}
                                >
                                    {navBar ? (
                                        <IoMdClose
                                            size={30}
                                        />
                                    ) : (
                                        <GiHamburgerMenu
                                            size={30}
                                        />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`
                        flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navBar ? 'p-12 md:p-0 block' : 'hidden'
                    }`}>
                        <ul className='h-screen md:h-auto items-center justify-center md:flex '>
                            <ListItem>
                                <Link href="#gallery" passHref onClick={() => setNavBar(!navBar)}>
                                    SAMPLE
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link href="#commissions" passHref onClick={() => setNavBar(!navBar)}>
                                    SAMPLE
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link href="#about" passHref onClick={() => setNavBar(!navBar)}>
                                    SAMPLE
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link href="#about" passHref onClick={() => setNavBar(!navBar)}>
                                    SAMPLE
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link href="#projects" passHref onClick={() => setNavBar(!navBar)}>
                                    SAMPLE
                                </Link>
                            </ListItem>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export const Footer = () => {

    return (
        <footer className='flex bg-dark-green items-center justify-center w-full py-2 flex gap-8'>
            <Image
                src="/1.jpg"
                alt="logo"
                width={50}
                height={50}
                className='rounded-full'
            />

            <p className='text-center text-white'><span className="underline"><Link href="#about" passHref className="decoration-none"> &#9400; Your name</Link></span> - 2023</p>
        </footer>
    )
}
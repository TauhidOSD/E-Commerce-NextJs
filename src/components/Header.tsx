
"use client"
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

interface NavItem {
    label: string;
    href: string;

}

interface HeaderProps {
    brand?: ReactNode;
    brandHref?: string;
    navItems?: NavItem[];
    showCart?: boolean;
}

const Header = ({
    brand = "NextGen Store",
    brandHref = "/",
    navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/terms", label: "Terms" },
        { href: "/privacy", label: "Privacy" },
        { href: "/contact", label: "Contact" },
    ],
    showCart = true,

}: HeaderProps) => {

    const [mobileMenuOpen, SetMobileMenuOpen] = useState(false);
    const [cartOpen, setCartopen] = useState(false);

    const handleNavClick = () => SetMobileMenuOpen(false)

    return (
        <>
            <header className='bg-white-300/80 w-full border-b border-gray-200 backdrop-blur-sm sticky top-0 z-50'>
                <div className='max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8'>
                    <Link href={brandHref} className='text-xl font-bold text-gray-900'>{brand}</Link>

                    {
                        navItems.length > 0 && (
                            <nav className='hidden sm:flex gap-6'>
                                {navItems.map((item) => (
                                    <Link href={item.href} className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 " key={item.href}>{item.label}</Link>


                                ))}


                            </nav>
                        )
                    }

                    <div>
                        {
                            showCart && (
                  <button className=' relative p-2 text-gray-600 hover:text-gray-900 transition-colors'><FiShoppingCart className='w-6 h-6'/></button>
                            )
                        }
                    </div>


                </div>
            </header>
        </>
    );
};

export default Header;
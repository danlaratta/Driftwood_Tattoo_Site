'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// const navClassName = isMobileMenuOpen 
	// 	? 'w-full fixed z-10 bg-black' : isScrolled
	// 	? 'w-full fixed z-10 bg-black' : 'w-full absolute z-10 bg-transparent';

	const navClassName = isMobileMenuOpen || isScrolled ? 'w-full fixed z-10 bg-black transition-colors duration-500'
    : 'w-full fixed z-10 bg-transparent';

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 100);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={navClassName}>
			<div className='w-8/12 mx-auto px-4 sm:px-6 lg:px-8 py-3'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex-shrink-0'>
						<Link href='/' className='text-white font-bold text-xl'>
							<Image src='/logo.svg' alt='Logo' width={200} height={100} />
						</Link>
					</div>

					<div className='hidden md:block'>
						<div className='ml-4 flex items-center space-x-4'>
							<Link href='/' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
								Home
							</Link>

							<Link href='/about' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
								About
							</Link>

							<Link href='/artists' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
								Artists
							</Link>

							<Link href='/piercers' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
								Piercers
							</Link>

                            <Link href='/aftercare' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
								Aftercare
							</Link>

							<Link href='/contact' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
								Contact
							</Link>
						</div>
					</div>

					<div className='md:hidden flex items-center'>
						<button
							className='text-gray-300 hover:text-white focus:outline-none'
							onClick={toggleMobileMenu}
						>
							{isMobileMenuOpen ? (
								<IoClose className='h-6 w-6' />
							) : (
								<IoMenu className='h-6 w-6' />
							)}
						</button>
					</div>
				</div>
			</div>

			{isMobileMenuOpen && (
				<div className='md:hidden bg-black absolute top-16 left-0 w-full flex justify-center'>
					<div className='w-2/12 flex-col justify-start px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                    	<Link href='/' className='block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
							Home
						</Link>

						<Link href='/about' className='block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
							About
						</Link>

						<Link href='/artists' className='block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
							Artists
						</Link>

						<Link href='/piercers' className='block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
							Piercers
						</Link>

						<Link href='/aftercare' className='block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
							Aftercare
						</Link>

						<Link href='/contact' className='block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
							Contact
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

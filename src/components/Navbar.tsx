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


	const navContainer = isScrolled
		? 'w-full fixed z-10 bg-black transition-colors duration-500'
		: isMobileMenuOpen
		? 'w-full fixed z-10 bg-black'
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
		<nav className={navContainer}>
			<div className='w-8/12 mx-auto px-4 sm:px-6 lg:px-8 py-3'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex-shrink-0'>
						<Link href='/' className='text-white font-bold text-xl'>
							<Image
								src='/logo.svg'
								alt='Logo'
								width={isScrolled ? 200 : 250}
								height={isScrolled ? 100 : 150}
							/>
						</Link>
					</div>

					<div className='hidden md:block'>
						<div className='ml-4 flex items-center space-x-4'>
							<Link
								href='/'
								className='text-white hover:text-gold px-3 py-2 rounded-md text-md font-medium'
							>
								Home
							</Link>

							<Link
								href='/artists'
								className='text-white hover:text-gold px-3 py-2 rounded-md text-md font-medium'
							>
								Artists
							</Link>

							<Link
								href='/piercers'
								className='text-white hover:text-gold px-3 py-2 rounded-md text-md font-medium'
							>
								Piercers
							</Link>

							<Link
								href='/aftercare'
								className='text-white hover:text-gold px-3 py-2 rounded-md text-md font-medium'
							>
								Aftercare
							</Link>

							<Link
								href='/porfolio'
								className='text-white hover:text-gold px-3 py-2 rounded-md text-md font-medium'
							>
								Porfolio
							</Link>

							<Link
								href='/contact'
								className='text-white hover:text-gold px-3 py-2 rounded-md text-md font-medium'
							>
								Contact
							</Link>
						</div>
					</div>

					<div className='md:hidden flex items-center'>
						<button
							className='text-white hover:text-gold focus:outline-none'
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
				<div className='md:hidden bg-black transition-colors duration-500 absolute top-16 left-0 w-full flex justify-center'>
					<div className='w-2/12 flex-col justify-start px-2 pt-2 pb-3 space-y-1 sm:px-3'>
						<Link
							href='/'
							className='block text-white  hover:text-gold px-3 py-2 rounded-md text-md font-medium'
						>
							Home
						</Link>

						<Link
							href='/artists'
							className='block text-white px-3 py-2 rounded-md text-md font-medium'
						>
							Artists
						</Link>

						<Link
							href='/piercers'
							className='block text-white px-3 py-2 rounded-md text-md font-medium'
						>
							Piercers
						</Link>

						<Link
							href='/aftercare'
							className='block text-white px-3 py-2 rounded-md text-md font-medium'
						>
							Aftercare
						</Link>

						<Link
								href='/porfolio'
								className='text-white hover:text-gold px-3 py-2 rounded-md text-md font-medium'
							>
								Porfolio
							</Link>

						<Link
							href='/contact'
							className='block text-white px-3 py-2 rounded-md text-md font-medium'
						>
							Contact
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

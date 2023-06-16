import Link from 'next/link';

const Hero = () => {
	return (
		<div
			className='w-full h-screen relative bg-cover bg-center bg-no-repeat flex justify-center'
			style={{ backgroundImage: "url('/hero-bg.jpg')" }}
		>
			<div className='w-full h-screen flex justify-center items-center absolute bg-black/60'>
				<div className='w-full flex flex-col items-center space-y-8'>
					<h1 className='text-white text-6xl font-bold text-center leading-40'>
						Where Tattoo Ideas Come <br />  To Life
					</h1>
					<Link href='/contact' className='text-white text-2xl bg-transparent border-2 border-white hover:bg-gold hover:border-gold rounded px-4 py-2'>
						Book Now
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;

"use client";
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

type LinkCardProps = {
    img: string;
    link: string;
    text: string;
}

const LinkCards = ({img, link, text}:LinkCardProps ) => {
    const controls = useAnimation();

    const handleHoverStart = () => {
        controls.start({ height: '100%' });
    };

    const handleHoverEnd = () => {
        controls.start({ height: '10%' });
    };

    return (
        <div className="relative">
            <Link href={link} >
                <motion.div
                    className="relative"
                    onHoverStart={handleHoverStart}
                    onHoverEnd={handleHoverEnd}
                >
                    <Image src={img} alt={`${text} link image`} width={350} height={450} />

                    <motion.div
                    initial={{ height: '10%' }}
                    animate={controls}
                    transition={{ duration: 0.3 }}
                    className="w-full flex justify-center items-center absolute bottom-0 bg-black/60"
                    >
                        <span className="text-white">
                            {text}
                        </span>
                    </motion.div>
                </motion.div>
            </Link>
        </div>
    );
}

export default LinkCards;
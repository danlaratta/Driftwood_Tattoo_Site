import Link from 'next/link';
import Image from 'next/image';

type LinkCardProps = {
    img: string;
    link: string;
    text: string;
}

const LinkCards = ({img, link, text}:LinkCardProps ) => {
    return (
        <div className="">
            <Link href={link}>
                <Image src={img} alt={`${text} link image`} />

                <span className="">
                    {text}
                </span>
            </Link>
        </div>
    );
}

export default LinkCards;
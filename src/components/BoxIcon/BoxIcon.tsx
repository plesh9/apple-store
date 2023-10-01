"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface IBoxIcon {
    icon: string,
    alt: string,
    className?: string
    width?: number,
    height?: number,
}

export const BoxIcon: FC<IBoxIcon> = ({ icon, alt, className, width, height }) => {
    return (
        <Link href='/' className={`${className || ''} box-icon`}>
            <Image
                src={icon}
                alt={alt}
                width={width}
                height={height}
            />
        </Link>
    );
};

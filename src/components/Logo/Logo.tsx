"use client"
import Link from 'next/link';
import { FC } from 'react';
import { HeaderIcon } from '../Icons/HeaderIcon';

interface ILogo {
    className?: string
}

export const Logo: FC<ILogo> = ({ className }) => {
    return (
        <Link href='/' className={`${className || ''} logo`}>
            <HeaderIcon />
        </Link>
    );
};

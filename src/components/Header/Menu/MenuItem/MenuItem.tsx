"use client"
import { FC } from 'react';
import Link from 'next/link';
import { ArrowBottomIcon } from '@/components/Icons/ArrowIcons';
import { IMenuItem } from '../Menu';

export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
    return (
        <li className='menu__item'>
            <Link
                href={item.href}
                className={`menu__link ${item.active ? "menu__link-active" : ''} ${item.dropdown ? "menu__link-arrow" : ''} `}
            >
                {item.title}
                {item.dropdown ? <ArrowBottomIcon /> : ''}
            </Link>
        </li>
    );
};

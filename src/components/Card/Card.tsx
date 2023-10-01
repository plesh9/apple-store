"use client"
import Image from 'next/image';
import { FC } from 'react';
import { LinkButton } from '../Buttons/Buttons';
import { IProduct } from '@/types';
import Link from 'next/link';

interface ICard {
    item: IProduct
    className?: string
    path: string
}

export const Card: FC<ICard> = ({ item, className, path }) => {

    return (
        <li className={`${className || ''} card`}>
            <Link href={`/products/${path}/${item.id}`} className='card__box'>
                <span className='card__title'>{item.name}</span>
                <span className='card__price'>From {item.price}</span>
            </Link>
            <Link className='card__image' href={`/products/${path}/${item.id}`}>
                <Image
                    src={item.img}
                    width={264}
                    height={344}
                    alt={item.name}
                    className='card__image'
                />
            </Link>
            <div className='card__footer'>
                <LinkButton className='card__button' href={`/products/${path}/${item.id}`}>Details</LinkButton>
            </div>
        </li>
    );
};

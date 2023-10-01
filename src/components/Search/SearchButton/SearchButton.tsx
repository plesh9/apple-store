"use client"
import Image from 'next/image';
import { FC } from 'react';
import SeachIcon from '@/assets/images/icons/search.svg'

export const SearchButton: FC = () => {
    return (
        <button className='search__button'>
            <Image
                src={SeachIcon}
                alt={"search-icon"}
            />
        </button>
    );
};

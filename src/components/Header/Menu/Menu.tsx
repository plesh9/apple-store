"use client"
import { FC } from 'react';
import { MenuItem } from './MenuItem/MenuItem';

export interface IMenuItem {
    title: string,
    href: string,
    active?: boolean,
    dropdown?: boolean,
}

export const Menu: FC = () => {

  const menuList: IMenuItem[] = [
    { title: 'Homesss', href: '/'  },
    { title: 'Products', href: '/', dropdown: true },
    { title: 'Entertainment', href: '/' },
    { title: 'Support', href: '/' },
]

    return (
        <div className='header__menu menu'>
            <nav className='menu__body'>
                <ul className='menu__list'>
                    {menuList.map((item, index) => <MenuItem key={index} item={item} />)}
                </ul>
            </nav>
        </div>
    );
};

import Image from 'next/image';
import BurgerIcon from "@/assets/images/icons/burger.svg"
import { FC } from 'react';

export const PanelBurger: FC = () => {
    return (
        <button className='header__icon box-icon' type='button'>
            <Image
                src={BurgerIcon}
                alt='burger-icon'
                width={21}
                height={21}
            />
        </button>
    );
};

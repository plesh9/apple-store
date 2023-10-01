import Image from 'next/image';
import { FC } from 'react';
import LangImg from '@/assets/images/icons/lang.svg'
import { ArrowBottomIcon } from '../Icons/ArrowIcons';

interface LangProps {
    className?: string
}

export const Lang: FC<LangProps> = ({ className }) => {
    return (
        <button className={`lang ${className || ''}`}>
            <Image
                src={LangImg}
                alt='lang'
                width={16}
                height={16}
            />
            <span className="lang__value">USA, English</span>
            <ArrowBottomIcon />
        </button>
    );
};

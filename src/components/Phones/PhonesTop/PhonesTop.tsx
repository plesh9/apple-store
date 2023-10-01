import { FC } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/Icons/ArrowIcons';

export const PhonesTop: FC = () => {
    return (
        <div className="phones__top">
            <h2 className="phones__title title">Get Your <span className='title-bold'>iPhone</span></h2>
            <Link className='phones__all' href='/'>
                See All
                <ArrowRightIcon />
            </Link>
        </div>
    );
};

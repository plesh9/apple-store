"use client"
import { FC, useEffect, useState } from 'react';
import { useTabletQuery } from '@/utils/hooks/media-hooks';
import { PreviewContent } from './PreviewContent/PreviewContent';
import { PreviewImg } from './PreviewImg/PreviewImg';

export const Preview: FC = () => {
    const tablet = useTabletQuery()

    const [showTablet, setShowTablet] = useState(true);
    useEffect(() => {
        setShowTablet(tablet);
    }, [tablet])

    return (
        <section className='preview'>
            <div className='preview__container'>
                <PreviewContent />
                {!showTablet && <PreviewImg />}
            </div>
        </section>
    );
};

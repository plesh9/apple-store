"use client"
import { FC } from 'react';
import { useTabletQuery } from '@/utils/hooks/media-hooks';
import { PreviewContent } from './PreviewContent/PreviewContent';
import { PreviewImg } from './PreviewImg/PreviewImg';

export const Preview: FC = () => {
    const tablet = useTabletQuery()

    return (
        <section className='preview'>
            <div className='preview__container'>
                <PreviewContent />
                {!tablet && <PreviewImg />}
            </div>
        </section>
    );
};

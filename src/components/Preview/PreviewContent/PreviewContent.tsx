"use client"
import { FC, useEffect, useState } from 'react';
import { LinkButton } from '@/components/Buttons/Buttons';
import { useTabletQuery } from '@/utils/hooks/media-hooks';
import { PreviewImg } from '../PreviewImg/PreviewImg';
import { PreviewTitle } from './PreviewTitle/PreviewTitle';

export const PreviewContent: FC = () => {
    const tablet = useTabletQuery()

    const [showTablet, setShowTablet] = useState(false);
    useEffect(() => {
        setShowTablet(tablet);
    }, [tablet])

    return (
        <div className="preview__content">
            <PreviewTitle />
            <div className="preview__text">
                <p>
                    With Vision Pro, you have an infinite canvas that transforms how you use the apps you love.
                    Arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a
                    reality — all while staying present in the world around you
                </p>
            </div>
            {showTablet && <PreviewImg />}
            <LinkButton href='/' className='preview__button'>Pre-order Now</LinkButton>
        </div>
    );
};

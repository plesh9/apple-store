"use client"
import { Lang } from '@/components/Lang/Lang';
import { useTabletQuery } from '@/utils/hooks/media-hooks';
import { FC } from 'react';
import { FooterBottomLinks } from './components/FooterBottomLinks/FooterBottomLinks';

export const FooterBottom: FC = () => {
    const tablet = useTabletQuery()
    return (
        <div className="footer__bottom footer-bottom">
            <div className="footer-bottom__container">
                <span className="footer-bottom__copyright">Copyright © 2023 Apple Inc. All rights reserved.</span>
                {!tablet ? <FooterBottomLinks /> : ''}
                <Lang className='footer-bottom__lang' />
            </div>
        </div>
    );
};

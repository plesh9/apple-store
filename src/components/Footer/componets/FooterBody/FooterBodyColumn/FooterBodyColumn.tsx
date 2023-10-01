"use client"
import { useMobileQuery } from '@/utils/hooks/media-hooks';
import { FC, useEffect, useState } from 'react';
import { IFooterBodyItem } from '../data';
import { FooterBodyAccordion } from './FooterBodyAccordion/FooterBodyAccordion';
import { FooterBodyBlock } from './FooterBodyBlock/FooterBodyBlock';

interface FooterBodyColumnProps {
    columns: IFooterBodyItem[]
}

export const FooterBodyColumn: FC<FooterBodyColumnProps> = ({ columns }) => {
    const mobile = useMobileQuery()

    const [showMobile, setShowMobile] = useState(false);
    useEffect(() => {
        setShowMobile(mobile);
    }, [mobile]);

    return (
        <div className="footer-body__column">
            {!showMobile ? <>{columns.map((column, index) => <FooterBodyBlock column={column} key={index} />)}</> : ''}
            {showMobile ? <>{columns.map((column, index) => <FooterBodyAccordion column={column} key={index} />)}</> : ''}
        </div>
    );
};

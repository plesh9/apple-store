"use client"
import { useMobileQuery, useTabletQuery } from '@/utils/hooks/media-hooks';
import { Accordion } from '@szhsin/react-accordion';
import { FC } from 'react';
import { IFooterBodyItem } from '../data';
import { FooterBodyAccordion } from './FooterBodyAccordion/FooterBodyAccordion';
import { FooterBodyBlock } from './FooterBodyBlock/FooterBodyBlock';

interface FooterBodyColumnProps {
    columns: IFooterBodyItem[]
}

export const FooterBodyColumn: FC<FooterBodyColumnProps> = ({ columns }) => {
    const mobile = useMobileQuery()

    return (
        <div className="footer-body__column">
            {!mobile ? <>{columns.map((column, index) => <FooterBodyBlock column={column} key={index} />)}</> : ''}
            {mobile ? <>{columns.map((column, index) => <FooterBodyAccordion column={column} key={index} />)}</> : ''}
        </div>
    );
};

import { FC } from 'react';
import { FooterTopItem } from './FooterTopItem/FooterTopItem';

export interface IFooterTopLink {
    title: string
    url: string
}

export const FooterTop: FC = () => {

    const links: IFooterTopLink[] = [
        { title: 'Newsroom', url: '/' },
        { title: 'Apple Leadership', url: '/' },
        { title: 'Career Opportunities', url: '/' },
        { title: 'Investor', url: '/' },
        { title: 'Ethic & Compliance', url: '/' },
        { title: 'Events', url: '/' },
        { title: 'Contact Apple', url: '/' },
    ]

    return (
        <div className='footer__top footer-top'>
            <div className="footer-top__container">
                <ul className='footer-top__list'>
                    {links.map((link, index) => <FooterTopItem key={index} item={link} />)}
                </ul>
            </div>
        </div>
    );
};

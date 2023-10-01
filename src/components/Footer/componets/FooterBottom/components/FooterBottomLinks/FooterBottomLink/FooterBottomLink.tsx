import Link from 'next/link';
import { FC } from 'react';
import { IFooterBottomLink } from '../FooterBottomLinks';

interface FooterBottomLinkProps {
    link: IFooterBottomLink
}

export const FooterBottomLink: FC<FooterBottomLinkProps> = ({ link }) => {
    return (
        <li className='footer-bottom__item'>
            <Link className='footer-bottom__link' href={link.url}>{link.title}</Link>
        </li>
    );
};

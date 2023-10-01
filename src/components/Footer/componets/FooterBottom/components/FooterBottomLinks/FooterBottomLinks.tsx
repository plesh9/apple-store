import { FC } from 'react';
import { FooterBottomLink } from './FooterBottomLink/FooterBottomLink';

export interface IFooterBottomLink {
  title: string
  url: string
}

export const FooterBottomLinks: FC = () => {

  const links: IFooterBottomLink[] = [
    { title: 'Privacy Policy', url: '/' },
    { title: 'Terms of Use', url: '/' },
    { title: 'Sales and Refunds', url: '/' },
    { title: 'Legal', url: '/' },
    { title: 'Ethic & Compliance', url: '/' },
    { title: 'Site Map', url: '/' },
  ]

  return (
    <ul className='footer-bottom__list'>
      {links.map((link, index) => <FooterBottomLink link={link} key={index} />)}
    </ul>
  );
};

import Link from 'next/link';
import { FC } from 'react';
import { IFooterBodyLink } from '../../../data';

interface FooterBodyItemProps {
  item: IFooterBodyLink
}

export const FooterBodyItem: FC<FooterBodyItemProps> = ({ item }) => {
  return (
    <li className='footer-body__item'>
      <Link className='footer-body__link' href={item.url}>{item.title}</Link>
    </li>
  );
};

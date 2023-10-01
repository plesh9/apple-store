import { FC } from 'react';
import { IFooterBodyItem } from '../../data';
import { FooterBodyItem } from './FooterBodyItem/FooterBodyItem';

interface FooterBodyListProps {
    column: IFooterBodyItem
  }

export const FooterBodyList: FC<FooterBodyListProps> = ({ column }) => {
  return (
    <ul className='footer-body__list'>
    {column.data.map((item, index) => <FooterBodyItem item={item} key={index} />)}
  </ul>
  );
};

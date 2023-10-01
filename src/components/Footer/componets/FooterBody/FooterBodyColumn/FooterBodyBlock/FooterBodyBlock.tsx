import { FC } from 'react';
import { IFooterBodyItem } from '../../data';
import { FooterBodyList } from '../FooterBodyList/FooterBodyList';

interface FooterBodyListProps {
  column: IFooterBodyItem
}

export const FooterBodyBlock: FC<FooterBodyListProps> = ({ column }) => {
  return (
    <div className='footer-body__block'>
      <span className='footer-body__title'>{column.title}</span>
      <FooterBodyList column={column} />
    </div>
  );
};

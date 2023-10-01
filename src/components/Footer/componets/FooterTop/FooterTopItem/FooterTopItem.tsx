import { SecondaryLinkButton } from '@/components/Buttons/Buttons';
import { FC } from 'react';
import { IFooterTopLink } from '../FooterTop';

interface FooterTopItemProps {
  item: IFooterTopLink
}

export const FooterTopItem: FC<FooterTopItemProps> = ({ item }) => {
  return (
    <li className='footer-top__item'>
      <SecondaryLinkButton className='footer-top__link' href={item.url}>{item.title}</SecondaryLinkButton>
    </li>
  );
};

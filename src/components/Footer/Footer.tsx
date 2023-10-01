import { FC } from 'react';
import { FooterBody } from './componets/FooterBody/FooterBody';
import { FooterBottom } from './componets/FooterBottom/FooterBottom';
import { FooterTop } from './componets/FooterTop/FooterTop';

export const Footer: FC = () => {
  return (
    <footer className='footer'>
      <FooterTop />
      <FooterBody />
      <FooterBottom />
    </footer>
  );
};

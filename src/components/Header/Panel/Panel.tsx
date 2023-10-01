"use client"
import { FC, useEffect, useState } from 'react';
import { Search } from '@/components/Search/Search';
import { BoxIcon } from '@/components/BoxIcon/BoxIcon';
import BagIcon from "@/assets/images/icons/bag.svg"
import PersonIcon from "@/assets/images/icons/person.svg"
import { useTabletQuery } from '@/utils/hooks/media-hooks';
import { PanelBurger } from './PanelBurger/PanelBurger';

export const Panel: FC = () => {
  const tablet = useTabletQuery()

  const [showTablet, setShowTablet] = useState(true);
  useEffect(() => {
    setShowTablet(tablet);
  },[tablet])

  return (
    <div className='header__panel'>
      <Search className='header__search' />
      <BoxIcon className='header__icon' icon={BagIcon} alt='bag-icon' />
      <BoxIcon className='header__icon' icon={PersonIcon} alt='person-icon' />
      {showTablet ? <PanelBurger /> : null}
    </div>
  );
};


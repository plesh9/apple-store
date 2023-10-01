"use client"
import { FC, useEffect, useState } from 'react';
import { Menu } from './Menu/Menu';
import { Logo } from '../Logo/Logo';
import { Panel } from './Panel/Panel';
import { useTabletQuery } from '@/utils/hooks/media-hooks';

export const Header: FC = () => {
  const tablet = useTabletQuery()

  const [showTablet, setShowTablet] = useState(true);
  useEffect(() => {
      setShowTablet(tablet);
  }, [tablet]);

  const [headerActive, setHeaderActive] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 0) {
      setHeaderActive(true)
    }
    else if (scrolled <= 0) {
      setHeaderActive(false)
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return

    window.addEventListener('scroll', toggleVisible);
    toggleVisible()

    return () => {
      document.documentElement.classList.remove('header-active')
      window.removeEventListener('scroll', toggleVisible)
    };
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    if (headerActive) {
      document.documentElement.classList.add('header-active')
    } else {
      document.documentElement.classList.remove('header-active')
    }
  }, [headerActive])

  return (
    <header className='header'>
      <div className='header__container'>
        {!showTablet && <Menu />}
        <Logo className='header__logo' />
        <Panel />
      </div>
    </header>
  );
};
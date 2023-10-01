"use client"
import { SecondaryButton } from '@/components/Buttons/Buttons';
import { FC, MouseEventHandler } from 'react';

interface IDevicesFilter {
  title: string
  active: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const DevicesFilter: FC<IDevicesFilter> = ({ title, active, onClick }) => {
  return (
    <li><SecondaryButton className={`devices__filter ${active ? 'devices__filter-active' : ''}`} onClick={onClick}>{title}</SecondaryButton></li>
  );
};
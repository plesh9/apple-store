"use client"
import { ITrailer } from '@/types';
import { useMediaQuery } from '@/utils/hooks/media-hooks';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import { TrailerCardElements } from './TrailerCardElements/TrailerCardElements';

interface TrailerCardProps {
  trailer: ITrailer,
  activeTrailer: string | null
  handleClickTrailer: any
}

export const TrailerCard: FC<TrailerCardProps> = ({ trailer, activeTrailer, handleClickTrailer }) => {
  const pc = useMediaQuery("(min-width: 62em)")
  const cardRef = useRef<HTMLLIElement | null>(null)
  const [isActive, setIsActive] = useState(cardRef.current?.id === activeTrailer)

  useEffect(() => {
    setIsActive(cardRef.current?.id === activeTrailer)
  }, [activeTrailer, cardRef.current]);

  const [showDesctop, SetShowDesctop] = useState(true);
  useEffect(() => {
    SetShowDesctop(pc);
  }, [pc]);

  return (
    <li
      className={`trailer-card ${isActive ? 'trailer-card-active' : ''}`}
      onClick={() => handleClickTrailer(`trailer-${trailer.id}`)}
      id={`trailer-${trailer.id}`}
      ref={cardRef}
    >
      <Image
        className='trailer-card__image'
        src={trailer.img}
        alt={trailer.title}
        priority={true}
      />
      <div className='trailer-card__box'>
        <span className='trailer-card__title'>{trailer.title}</span>
        {!showDesctop || isActive ? <span className='trailer-card__subtitle'>Trailer</span> : ''}
      </div>
      {!showDesctop || isActive ? <TrailerCardElements url={trailer.url} /> : ''}
    </li>
  );
};

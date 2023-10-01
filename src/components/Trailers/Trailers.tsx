"use client"
import { ITrailer } from '@/types';
import { FC, useState } from 'react';
import { TrailerCard } from './TrailerCard/TrailerCard';

interface ITrailersProps {
  trailers: ITrailer[]
}

export const Trailers: FC<ITrailersProps> = ({ trailers }) => {
  const [activeTrailer, setActiveTrailer] = useState<string>("trailer-3")

  const handleClickTrailer = (activeTrailer: string) => {
    setActiveTrailer(activeTrailer)
  }

  return (
    <section className='trailers'>
      <div className="trailers__container">
        <ul className="trailers__list">
          {trailers.map(trailer => <TrailerCard key={trailer.id} trailer={trailer} activeTrailer={activeTrailer} handleClickTrailer={handleClickTrailer} />)}
        </ul>
      </div>
    </section>
  );
};

"use client"
import { FC } from 'react';
import { LinkButton } from '@/components/Buttons/Buttons';
import YoutubeIcon from "@/assets/images/icons/youtube.svg"
import Image from 'next/image';

interface TrailerCardElementsProps {
    url: string
}

export const TrailerCardElements: FC<TrailerCardElementsProps> = ({ url }) => {
    return (
        <>
            <a href={url} target='_blunk' className='trailer-card__link'>
                <Image
                    src={YoutubeIcon}
                    width={65}
                    height={65}
                    alt='youtube-icon'
                />
            </a>
            <div className='trailer-card__footer'>
                <LinkButton className='trailer-card__btn' href={url} target='_blunk'>Stream Now</LinkButton>
            </div>
        </>
    );
};

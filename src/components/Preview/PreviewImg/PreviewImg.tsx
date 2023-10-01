import Image from 'next/image';
import { FC } from 'react';
import PreviewImgage from "@/assets/images/preview-img.png"

export const PreviewImg: FC = () => {
    return (
        <div className='preview__img'>
            <Image
                src={PreviewImgage}
                width={620}
                height={896}
                alt='preview-imgage'
            />
        </div>
    );
};

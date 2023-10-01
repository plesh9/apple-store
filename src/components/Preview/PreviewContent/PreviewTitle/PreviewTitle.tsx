"use client"
import { FC } from 'react';
import Image from 'next/image';
import PreviewIconRight from "@/assets/images/preview-icon-1.png"
import PreviewIconLeft from "@/assets/images/preview-icon-2.png"

export const PreviewTitle: FC = () => {
    return (
        <h1 className="preview__title title title-bold">
            <span>
                Elevating Life
                <Image
                    src={PreviewIconRight}
                    alt="preview-icon"
                />
            </span>
            <span> to Pro-Level Precision </span>
            <span>
                <Image
                    src={PreviewIconLeft}
                    alt="preview-icon"
                />
                with Vision Pro
            </span>
        </h1>
    );
};

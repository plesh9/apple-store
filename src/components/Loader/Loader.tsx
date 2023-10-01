"use client"
import { FC } from 'react';
import { Triangle } from 'react-loader-spinner';

export const Loader: FC = () => {
    return (
        <div className='loader'>
            <div>
                <Triangle
                    height="60"
                    width="60"
                    color="#181818"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    visible={true}
                />
            </div>
        </div>
    );
};

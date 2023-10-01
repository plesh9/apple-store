"use client"
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux-hooks';
import { setDevices } from '@/store/features/products-slise';
import { IProduct } from '@/types';
import { FC, useEffect } from 'react';
import { ProductsList } from '../Products/ProductsList/ProductsList';
import { DevicesTop } from './DevicesTop/DevicesTop';

interface ProductsPageProps {
    devices: IProduct[];
}

export const Devices: FC<ProductsPageProps> = ({ devices }) => {
    const currentDevices = useAppSelector(state => state.products.devices)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setDevices({ devices }))
    }, [devices])

    return (
        <section className='devices'>
            <div className="devices__container">
                <DevicesTop devices={devices} />
                <ProductsList products={currentDevices} path='devices' className='devices__list' />
            </div>
        </section>
    );
};

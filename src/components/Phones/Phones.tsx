import { IProduct } from '@/types';
import { FC } from 'react';
import { ProductsList } from '../Products/ProductsList/ProductsList';
import { PhonesTop } from './PhonesTop/PhonesTop';

interface ProductsPageProps {
    phones: IProduct[];
}

export const Phones: FC<ProductsPageProps> = ({ phones }) => {
    return (
        <section className='phones'>
            <div className="phones__container">
                <PhonesTop />
                <ProductsList products={phones} path='phones' className='phones__list' />
            </div>
        </section>
    );
};

import { IProduct } from '@/types';
import Image from 'next/image';
import { FC } from 'react';

interface ProductProps {
    product: IProduct
}

export const Product: FC<ProductProps> = ({ product }) => {
    return (
        <section className='product'>
            <div className="product__container">
                <div className="product__image">
                    <Image
                        src={product.img}
                        width={434}
                        height={494}
                        alt={product.name}
                    />
                </div>
                <div className="product__info">
                    <h1 className="product__title title">{product.name}</h1>
                    <p className='product__description'>{product.description}</p>
                </div>
            </div>
        </section>
    );
};

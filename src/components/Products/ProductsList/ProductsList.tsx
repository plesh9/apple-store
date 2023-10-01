import { Card } from '@/components/Card/Card';
import { IProduct } from '@/types';
import { FC } from 'react';

interface ProductsListProps {
  products: IProduct[];
  path: string;
  className?: string;
}

export const ProductsList: FC<ProductsListProps> = ({ products, path, className }) => {

  return (
    <ul className={`${className || ''} products__list`}>
      {products.map(product => <Card key={product.id} item={product} path={path} className='product__item' />)}
    </ul>
  );
};

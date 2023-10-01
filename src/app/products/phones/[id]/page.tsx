import { productApi } from '@/utils/api/product-api';
import { Product } from '@/components/Products/Product/Product';

export const fetchPhone = async (id: string) => {
    const phone = await productApi.getCurrentPhone(id)
    return phone
}

const Phone = async ({ params }: { params: { id: string } }) => {
    const phone = await fetchPhone(params.id)

    return (
        <Product product={phone} />
    );
};

export default Phone;
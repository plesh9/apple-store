import { productApi } from '@/utils/api/product-api';
import { Product } from '@/components/Products/Product/Product';

export const fetchPhone = async (id: string) => {
    const device = await productApi.getCurrentDevice(id)
    return device
}

const Device = async ({ params }: { params: { id: string } }) => {
    const device = await fetchPhone(params.id)

    return (
        <Product product={device} />
    );
};

export default Device;
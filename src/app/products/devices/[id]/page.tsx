import { productApi } from '@/utils/api/product-api';
import { Product } from '@/components/Products/Product/Product';

const fetchPhone = async (id: string) => {
    try {
        const device = await productApi.getCurrentDevice(id)
        return device
    } catch (err) {
        throw new Error("Error")
    }
}

const Device = async ({ params }: { params: { id: string } }) => {
    const device = await fetchPhone(params.id ?? "1")

    return (
        <Product product={device} />
    );
};

export default Device;
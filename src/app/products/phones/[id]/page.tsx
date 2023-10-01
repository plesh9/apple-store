import { productApi } from '@/utils/api/product-api';
import { Product } from '@/components/Products/Product/Product';

const fetchPhone = async (id: string) => {
    try {
        const phone = await productApi.getCurrentPhone(id)
        return phone
    } catch (err) {
        throw new Error("Error")
    }
}

const Phone = async ({ params }: { params: { id: string } }) => {
    const phone = await fetchPhone(params.id ?? "1")

    return (
        <Product product={phone} />
    );
};

export default Phone;
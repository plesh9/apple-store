import { Preview } from '@/components/Preview/Preview';
import { productApi } from '@/utils/api/product-api';
import { Phones } from '@/components/Phones/Phones';
import { Devices } from '@/components/Devices/Devices';
import { Trailers } from '@/components/Trailers/Trailers';
import { trailersApi } from '@/utils/api/trailers-api';

const fetchData = async () => {
  try {
    const phones = await productApi.getPhones()
    const devices = await productApi.getDevices()
    const trailers = await trailersApi.getTrailers()

    return { phones, devices, trailers }
  } catch (err) {
    console.error(err);
    return { phones: [], devices: [], trailers: [] };
  }
};

const Home = async () => {
  const { phones, devices, trailers } = await fetchData()

  return (
    <>
      <Preview />
      <Phones phones={phones} />
      <Devices devices={devices} />
      <Trailers trailers={trailers} />
    </>
  )
}

export default Home;

import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux-hooks';
import { fetchFilterDevices, setActiveFilter } from '@/store/features/products-slise';
import { FilterEnum, IProduct } from '@/types';
import { FC, useEffect } from 'react';
import { DevicesFilter } from './DevicesFilter/DevicesFilter';

interface IDevicesTop {
    devices: IProduct[];
}

export const DevicesTop: FC<IDevicesTop> = ({ devices }) => {
    const { filters, activeFilter } = useAppSelector(state => state.products)
    const dispatch = useAppDispatch();

    const handleFilterChange = (activeFilter: FilterEnum) => {
        dispatch(setActiveFilter({ activeFilter }))
    };

    useEffect(() => {
        dispatch(fetchFilterDevices({ activeFilter }));
    }, [activeFilter])

    return (
        <div className="devices__top">
            <h2 className="devices__title title">Explore in <span className='title-bold'>Products</span></h2>
            <ul className="devices__filters">
                {filters.map((filter, i) => (
                    <DevicesFilter
                        key={i}
                        title={filter}
                        active={filter === activeFilter}
                        onClick={() => handleFilterChange(filter)}
                    />
                ))}
            </ul>
        </div>
    );
};



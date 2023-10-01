import { productApi } from '../../utils/api/product-api';
import { FilterEnum, IProduct } from '../../types';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface phonesInitialState {
    devices: IProduct[],
    filters: FilterEnum[],
    activeFilter: FilterEnum
}

const initialState: phonesInitialState = {
    devices: [],
    filters: [
        FilterEnum.all, FilterEnum.phones, FilterEnum.tablets, FilterEnum.laptops, FilterEnum.wearables, FilterEnum.audio, FilterEnum.tv, FilterEnum.entertainment
    ],
    activeFilter: FilterEnum.all
}

export const fetchFilterDevices = createAsyncThunk('products/fetchFilterDevices', async ({ activeFilter }: { activeFilter: FilterEnum }) => {
    const devices = await productApi.getDevices(activeFilter);
    return { devices }
});

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setDevices(state, action: PayloadAction<{ devices: IProduct[] }>) {
            state.devices = action.payload.devices
        },

        setActiveFilter(state, action: PayloadAction<{ activeFilter: FilterEnum }>) {
            state.activeFilter = action.payload.activeFilter
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilterDevices.fulfilled, (state, action) => {
                state.devices = action.payload.devices;
            });
    },
})

export const { setDevices, setActiveFilter } = slice.actions;
export default slice.reducer;

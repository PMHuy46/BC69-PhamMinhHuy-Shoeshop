import { createSlice } from "@reduxjs/toolkit";
import data from '../../BtShoe/data.json'

const initialState = {
    data: data,
    productDetail: undefined,
    cartShoe: []
}
export const { reducer: btShoeReducer, actions: btShoeActions } = createSlice({
    name: 'btShoe',
    initialState,
    reducers: {
        handleDetail: (state, { payload }) => {
            state.productDetail = payload
        },
        addToCart: (state, { payload }) => {
            const index = state.cartShoe.findIndex((item) => item.id === payload.id)
            if (index === -1) {
                state.cartShoe.push({ ...payload, cartQuantity: 1 })
            } else {
                state.cartShoe[index].cartQuantity += 1
            }
        },
        changeCartQuantity: ({ cartShoe }, { payload: { id, quantity } }) => {
            const index = cartShoe.findIndex(item => item.id === id)
            cartShoe[index].cartQuantity += quantity
            console.log(id)
        },
        deleteShoe: (state, { payload }) => {
            state.cartShoe = state.cartShoe.filter(item => item.id != payload)
        }

    }
})
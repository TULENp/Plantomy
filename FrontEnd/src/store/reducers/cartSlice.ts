
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../types";

interface cartState {
    cartItems: TProduct[],
    prodQuantity: string,
    totalSum: number,
    isLoading: boolean,
    error: string,
}

const initialState: cartState = {
    cartItems: [],
    prodQuantity: '',
    totalSum: 0,
    isLoading: true,
    error: ""
}

//checking the declension of the word depending on the number of products
function calculateProdQuantity(cartItems: TProduct[]) {
    let prodWord: string = "товаров";
    const lastNumber: number = cartItems.length % 100;
    const lastDigit: number = lastNumber % 10;

    if (lastNumber > 10 && lastNumber < 20) {
        prodWord = "товаров"
    }
    else if (lastDigit === 1) {
        prodWord = "товар"
    }
    else if (lastDigit > 1 && lastDigit < 5) {
        prodWord = "товара"
    }
    else {
        prodWord = "товаров"
    }

    return cartItems.length + ' ' + prodWord;
}

//calculate the total amount of products
function calculateTotalSum(cartItems: TProduct[]) {
    return cartItems.reduce((partialSum, item) => partialSum + item.price, 0);
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        CartFetching(state) {
            state.isLoading = true;
        },
        CartFetchingSuccess(state, action: PayloadAction<{ goods: TProduct[], totalCost: number }>) {
            state.isLoading = false;
            state.cartItems = action.payload.goods;
            state.prodQuantity = calculateProdQuantity(action.payload.goods);
            state.totalSum = action.payload.totalCost;
        },
        CartFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const CartReducer = cartSlice.reducer;
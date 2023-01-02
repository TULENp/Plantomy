
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProduct } from "../../types";

interface cartState {
    cartItems: TProduct[],
    prodQuantity: string,
    totalSum: number,
    isLoading: boolean,
    error: string,
    miniLoader: boolean
}

const initialState: cartState = {
    cartItems: [],
    prodQuantity: '',
    totalSum: 0,
    isLoading: true,
    miniLoader: false,
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

function calculateTotalSum(cartItems: TProduct[]) {
    //calculate the total amount of products
    return cartItems.reduce((partialSum, item) => partialSum + item.price, 0);
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        CartFetching(state) {
            state.isLoading = true;
        },
        CartLoading(state) {
            state.miniLoader = true;
        },
        CartFetchingSuccess(state, action: PayloadAction<TProduct[]>) {
            state.isLoading = false;
            state.miniLoader = false;
            state.cartItems = action.payload;
            state.prodQuantity = calculateProdQuantity(action.payload);
            state.totalSum = calculateTotalSum(action.payload);
        },
        CartFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.miniLoader = false;
            state.error = action.payload;
        }
    }
})

export const CartReducer = cartSlice.reducer;
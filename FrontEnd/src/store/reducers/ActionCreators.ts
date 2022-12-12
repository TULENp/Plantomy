
import { createAction } from "@reduxjs/toolkit";
import { TProduct, TUserAccount } from "../../types";
import { data } from "../../zDataExamples/Data";
import { AppDispatch } from "../store";
import { productSlice } from "./productSlice";
import axios from 'axios';
import { useAppSelector } from "../../components/hooks/redux";

// const axios = require("axios").default;

export const GetProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.ProductsFetching())
        const response = data;
        // await axios.get<TProduct[]>('/api/goods/getAll');
        // console.log(response);
        dispatch(productSlice.actions.ProductsFetchingSuccess(response))
    }
    catch (e) {
        if (e instanceof Error) {
            dispatch(productSlice.actions.ProductsFetchingError(e.message))
        }
        else {
            dispatch(productSlice.actions.ProductsFetchingError("Неизвестная ошибка"))
        }
    }
}

export const Register = async ({ userLogin, userPassword }: TUserAccount) => {
    try {
        await axios.post<TUserAccount>('/api/auth/register', {
            login: userLogin,
            hash: userPassword
        });
    }
    catch (e) {
        console.log('my own error');
    }
}


import axios from "axios";
import { TProduct } from "../../types";
import { data } from "../../zDataExamples/Data";
import { AppDispatch } from "../store";
import { productSlice } from "./productSlice";

export const GetAllProducts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.ProductsFetching())
        const response = await axios.get<TProduct[]>('/api/goods/getAll');
        dispatch(productSlice.actions.ProductsFetchingSuccess(response.data))
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

//TODO add error handlers and response status check to all requests
export async function GetProduct(id: number) {
    return await axios.get<TProduct[]>(`/api/goods?id=${id}`)
        .then(response => response.data);
}

export async function UserSignIn(userLogin: string, userPassword: string) {
    await axios.post('/api/auth/login',
        {
            login: userLogin,
            hash: userPassword
        })
        .then(response => {
            localStorage.setItem('token', response.data.token);
        });
}

export async function UserRegister(userLogin: string, userPassword: string) {
    await axios.post('/api/auth/register',
        {
            login: userLogin,
            hash: userPassword
        });
}

export async function SwitchFav(id: number) {
    const token = localStorage.getItem('token');
    if (token) {
        axios(
            {
                method: 'post',
                url: '/api/fav/switchfav',
                data: {
                    productId: id,
                },
                headers: {
                    Authorization: token
                }
            }
        )
    }
}
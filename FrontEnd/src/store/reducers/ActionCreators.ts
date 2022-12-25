
import axios from "axios";
import { TChars, TProduct } from "../../types";
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
    const response = await axios.get<TProduct[]>(`/api/goods?id=${id}`)
    // .then(response => response.data)
    return response.data;
}

export async function UserSignIn(userLogin: string, userPassword: string): Promise<number> {
    let result = 200;

    await axios.post('/api/auth/login',
        {
            login: userLogin,
            hash: userPassword
        })
        .then(response => {
            localStorage.setItem('token', response.data.token);
            window.location.reload();
        })
        .catch(error => result = error.response.status);

    return result;
}

export async function UserRegister(userLogin: string, userPassword: string): Promise<number> {
    let result = 200;
    await axios.post('/api/auth/register',
        {
            login: userLogin,
            hash: userPassword
        })
        .catch(error => result = error.response.status);
    return result;

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
    //TODO else statement with save into localStorage
}

export function GetPollResult(chars: TChars) {
    let prods: TProduct[] = [];
    if (chars) {
        return axios.post<TProduct[]>('/api/goods/getByFilter',
            {
                brief: chars
            })
            .then(response => prods = response.data);
    }
    return prods;
}
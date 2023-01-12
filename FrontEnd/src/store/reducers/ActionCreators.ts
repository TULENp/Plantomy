
import axios from "axios";
import { useAppSelector } from "../../hooks/redux";
import { TFilter, TOrder, TProduct, TUser } from "../../types";
import { AppDispatch } from "../store";
import { cartSlice } from "./cartSlice";
import { favoritesSlice } from "./favoritesSlice";
import { ordersSlice } from "./OrdersSlice";
import { pollResultSlice } from "./pollResultSlice";
import { productSlice } from "./productSlice";
import { userSlice } from "./UserSlice";

//TODO handle auth error
//TODO add error handlers and response status check to all requests

//* Authorization requests

export async function Register(userLogin: string, userPassword: string): Promise<number> {
    let result = 200;
    await axios.post('/api/auth/register',
        {
            login: userLogin,
            hash: userPassword
        })
        .catch(error => result = error.response.status);

    return result;
}

export async function SignIn(userLogin: string, userPassword: string): Promise<number> {
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

//* User requests

export const GetUserInfo = () => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem('token');

    if (token) {
        dispatch(userSlice.actions.UserFetching());

        await axios.get<TUser>('/api/user/userInfo',
            {
                headers: {
                    Authorization: token
                }
            })
            .then(response => dispatch(userSlice.actions.UserFetchingSuccess(response.data)))
            //TODO mb change error.message to error.response.message
            .catch(error => dispatch(userSlice.actions.UserFetchingError(error.message)));
    }
}

//* Products requests

export const GetAllProducts = () => async (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.ProductsFetching());

    await axios.get<TProduct[]>('/api/goods/getAll')
        .then(response => dispatch(productSlice.actions.ProductsFetchingSuccess(response.data)))
        .catch(error => dispatch(productSlice.actions.ProductsFetchingError(error.message)))
}

export const GetAllProductsAuth = () => async (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.ProductsFetching());

    await axios.get<TProduct[]>('/api/goods/getAllAuth',
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(response => dispatch(productSlice.actions.ProductsFetchingSuccess(response.data)))
        .catch(error => dispatch(productSlice.actions.ProductsFetchingError(error.message)))
}

export async function GetProduct(id: number) {
    return await axios.get('/api/goods?id=' + id)
        .then(response => response.data)
}

//* Poll requests

export const GetPollResult = () => async (dispatch: AppDispatch) => {
    const chars = JSON.parse(localStorage.getItem('chars') || 'null');

    if (chars) {
        dispatch(pollResultSlice.actions.PollResultResultFetching());
        //TODO error.message always null
        axios.post<TProduct[]>('/api/goods/getByFilter',
            {
                brief: chars
            })
            .then(response => dispatch(pollResultSlice.actions.PollResultFetchingSuccess(response.data)))
            .catch(error => dispatch(pollResultSlice.actions.PollResultFetchingSuccess(error.message)))
    }
}

//* Favorites requests

export const GetFavorites = () => async (dispatch: AppDispatch) => {
    dispatch(favoritesSlice.actions.FavoritesFetching());
    await axios.get<TProduct[]>('/api/fav/showfav',
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(response => dispatch(favoritesSlice.actions.FavoritesFetchingSuccess(response.data)))
        //TODO mb change error.message to error.response.message
        .catch(error => dispatch(favoritesSlice.actions.FavoritesFetchingError(error.message)));
}

export async function SwitchFavorite(id: number) {
    let result = 200;

    await axios.post('/api/fav/switchfav',
        {
            productId: id
        },
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .catch(error => result = error.response.status)

    return result;
}

//* Cart requests

export const GetCart = () => async (dispatch: AppDispatch) => {
    dispatch(cartSlice.actions.CartFetching());
    await axios.get<TProduct[]>('/api/cart/getCart',
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(response => dispatch(cartSlice.actions.CartFetchingSuccess(response.data)))
        //TODO mb change error.message to error.response.message
        .catch(error => dispatch(cartSlice.actions.CartFetchingError(error.message)));
}

export async function AddToCart(id: number) {
    let result = 200;

    await axios.post('/api/cart/addtoCart',
        {
            productId: id
        },
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .catch(error => result = error.response.status);

    return result;
}

export async function RemoveFromCart(id: number) {
    let result = 200;
    await axios.post('/api/cart/dropfromCart',
        {
            productId: id
        },
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .catch(error => result = error.response.status);

    return result;
}

export async function IncCartItem(id: number) {
    let result = 200;

    await axios.post('/api/cart/incGoods',
        {
            productId: id
        },
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .catch(error => result = error.response.status);

    return result;
}

export async function DecCartItem(id: number) {
    let result = 200;

    await axios.post('/api/cart/decGoods',
        {
            productId: id
        },
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .catch(error => result = error.response.status);

    return result;
}

//* Order requests

export const GetAllOrders = () => async (dispatch: AppDispatch) => {
    dispatch(ordersSlice.actions.OrdersFetching());

    await axios.get<TOrder[]>('/api/order/getOrders',
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(response => dispatch(ordersSlice.actions.OrdersFetchingSuccess(response.data)))
        //TODO mb change error.message to error.response.message
        .catch(error => dispatch(ordersSlice.actions.OrdersFetchingError(error.message)));
}

export async function GetOrder(id: number) {
    const token = localStorage.getItem('token');
    let result;
    if (token) {
        result = await axios.post('/api/order/getProductsInOrder',
            {
                orderId: id
            },
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then(response => response.data);
    }
    return result;
}

export async function AddOrder() {
    let result = 200;

    await axios.post('/api/order/addOrder',
        {
            address: 'test_address'
        },
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .catch(error => result = error.response.status);

    return result;
}

//* Filter requests

export const GetFilteredProducts = (filter: TFilter) => async (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.ProductsFetching());

    const token = localStorage.getItem('token');
    if (token) {
        await axios.post<TProduct[]>('/api/goods/getFilteredProductsAuth',
            {
                search: filter.search,
                cost: {
                    min: filter.cost.min,
                    max: filter.cost.max
                },
                type: filter.type,
                sort: filter.sort,
                category: filter.category
            },
            {
                headers: {
                    Authorization: token
                }
            })
            .then(response => dispatch(productSlice.actions.ProductsFetchingSuccess(response.data)))
            .catch(error => dispatch(productSlice.actions.ProductsFetchingError(error.message)))
    }
    else {
        await axios.post<TProduct[]>('/api/goods/getFilteredProducts',
            {
                search: filter.search,
                cost: {
                    min: filter.cost.min,
                    max: filter.cost.max
                },
                type: filter.type,
                sort: filter.sort,
                category: filter.category
            })
            .then(response => dispatch(productSlice.actions.ProductsFetchingSuccess(response.data)))
            .catch(error => dispatch(productSlice.actions.ProductsFetchingError(error.message)))
    }
}
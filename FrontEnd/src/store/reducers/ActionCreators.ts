
import axios from "axios";
import { TFilter, TOrder, TProduct, TUser } from "../../types";
import { AppDispatch } from "../store";
import { cartSlice } from "./cartSlice";
import { favoritesSlice } from "./favoritesSlice";
import { ordersSlice } from "./ordersSlice";
import { pollResultSlice } from "./pollResultSlice";
import { productSlice } from "./productSlice";
import { userSlice } from "./userSlice";

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
            .catch(error => dispatch(userSlice.actions.UserFetchingError(error.message)));
    }
}

export const ChangeUserInfo = (userInfo: TUser) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem('token');

    if (token) {
        dispatch(userSlice.actions.UserFetching());

        await axios.post<TUser>('/api/user/changeUserInfo',
            {
                info: userInfo
            },
            {
                headers: {
                    Authorization: token
                }
            })
            .then(() => dispatch(GetUserInfo()))
            .catch(error => dispatch(userSlice.actions.UserFetchingError(error.message)));
    }
}

//* Products requests

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

// same as GetFilteredProducts() but with miniLoading only
// DIRTY HACK
export const UpdateProducts = (filter: TFilter) => async (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.MiniLoading());

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

export async function GetProduct(id: number) {
    const token = localStorage.getItem('token');
    if (token) {
        return await axios.get('/api/goods/getProductAuth?id=' + id,
            {
                headers: {
                    Authorization: token
                }
            })
            .then(response => response.data)
            .catch(error => error.response.status)
    }
    else {
        return await axios.get('/api/goods/getProduct?id=' + id)
            .then(response => response.data)
            .catch(error => error.response.status)
    }
}

export async function GetAccessories(id: number) {
    const token = localStorage.getItem('token');

    let result: TProduct[] = [];

    if (token) {
        await axios.get('/api/goods/getRelatedAuth?id=' + id,
            {
                headers: {
                    Authorization: token
                }
            })
            .then(response => {
                result = response.data
            })
    }
    else {
        await axios.get('/api/goods/getRelated?id=' + id)
            .then(response => {
                result = response.data
            })
    }

    return result;
}

//* Poll requests

export const GetPollResult = () => async (dispatch: AppDispatch) => {
    const chars = JSON.parse(localStorage.getItem('chars') || 'null');

    if (chars) {
        const token = localStorage.getItem('token');
        if (token) {
            //TODO error.message always null
            axios.post<TProduct[]>('/api/goods/getByFilterAuth',
                {
                    brief: chars
                },
                {
                    headers: {
                        Authorization: token
                    }
                })
                .then(response => dispatch(pollResultSlice.actions.PollResultFetchingSuccess(response.data)))
                .catch(error => dispatch(pollResultSlice.actions.PollResultFetchingSuccess(error.message)))
        }
        else {
            axios.post<TProduct[]>('/api/goods/getByFilter',
                {
                    brief: chars
                })
                .then(response => dispatch(pollResultSlice.actions.PollResultFetchingSuccess(response.data)))
                .catch(error => dispatch(pollResultSlice.actions.PollResultFetchingSuccess(error.message)))
        }
    }
}

//* Favorites requests

export const GetFavorites = () => async (dispatch: AppDispatch) => {
    await axios.get<TProduct[]>('/api/fav/showFav',
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(response => dispatch(favoritesSlice.actions.FavoritesFetchingSuccess(response.data)))
        //TODO mb change error.message to error.response.message
        .catch(error => {
            if (error.response.status === 401) {
                dispatch(favoritesSlice.actions.FavoritesFetchingError("Пожалуйста, авторизуйтесь"));
            }
            else {
                dispatch(favoritesSlice.actions.FavoritesFetchingError(error.message));
            }
        });
}

export const SwitchFavorite = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.MiniLoading());
    dispatch(favoritesSlice.actions.FavoritesFetching());

    let result = 200;

    await axios.post('/api/fav/switchFav',
        {
            productId: id
        },
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .catch(error => {
            result = error.response.status;
            dispatch(productSlice.actions.StopMiniLoading());
        });

    return result;
}

//* Cart requests

export const GetCart = () => async (dispatch: AppDispatch) => {
    type TCart = {
        goods: TProduct[],
        totalCost: number
    }

    await axios.get<TCart>('/api/cart/getCart',
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(response => dispatch(cartSlice.actions.CartFetchingSuccess(response.data)))
        .catch(error => {
            if (error.response.status === 401) {
                dispatch(cartSlice.actions.CartFetchingError("Пожалуйста, авторизуйтесь"));
            }
            else {
                dispatch(cartSlice.actions.CartFetchingError(error.message));
            }
        });
}

export const AddToCart = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.MiniLoading());
    // dispatch(cartSlice.actions.CartFetching());

    let result = 200;
    await axios.post('/api/cart/addToCart',
        {
            productId: id
        },
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .catch(error => {
            result = error.response.status;
            dispatch(productSlice.actions.StopMiniLoading());
        });

    return result;
}

export const RemoveFromCart = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.MiniLoading());
    dispatch(cartSlice.actions.CartFetching());

    let result = 200;
    await axios.post('/api/cart/dropFromCart',
        {
            productId: id
        },
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .catch(error => {
            result = error.response.status;
            dispatch(productSlice.actions.StopMiniLoading());
        });

    return result;
}

export const IncCartItem = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.MiniLoading());
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
        .catch(error => {
            result = error.response.status;
            dispatch(productSlice.actions.StopMiniLoading());
        });

    return result;
}

export const DecCartItem = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(productSlice.actions.MiniLoading());
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
        .catch(error => {
            result = error.response.status;
            dispatch(productSlice.actions.StopMiniLoading());
        });

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
            .then(response => response.data)
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

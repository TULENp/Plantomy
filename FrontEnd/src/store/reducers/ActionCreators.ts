
import { data } from "../../zDataExamples/Data";
import { AppDispatch } from "../store";
import { productSlice } from "./productSlice";

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
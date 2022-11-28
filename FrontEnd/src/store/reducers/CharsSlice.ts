
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TChars } from "../../types";


const initialState: { chars: TChars } =
{
    chars: {
        watering: 1,
        lighting: 1,
        temperature: 1,
        humidity: 1,
        fertilization: 1,
        size: 1,
        preferences: 1,
        cost: 1
    }

}

export const CharsSlice = createSlice({
    name: 'chars',
    initialState,
    reducers: {
        changeChars(state, action: PayloadAction<TChars>) {
            state.chars = action.payload;
        },
    }
})

export const CharsReducer = CharsSlice.reducer;
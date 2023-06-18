import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./CarSlice";

const formSlice = createSlice({
    name: 'form',
    initialState: { // means the real state
        name: '',
        cost: 0
    },
    reducers: { // means what happens when state changes [to help in re-render]
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    },
    extraReducers(builder) {
        builder.addCase(addCar, (state, action) => {
            state.name = ''
            state.cost = 0
        })
    }
})

export const { changeName, changeCost } = formSlice.actions
export const FormReducer = formSlice.reducer;

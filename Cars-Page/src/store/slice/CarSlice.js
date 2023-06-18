import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        // Assumption
        // action.payload = {id:nanoid, name:'abcde', cost: '12345'}
        addCar(state, action) {
            state.data.push(
                {
                    id: nanoid(),
                    name: action.payload.name,
                    cost: action.payload.cost
                }
            )
        },
        // Assumption
        // action.payload = id of the car we want to remove
        deleteCar(state, action) {
            const removeById = state.data.filter(car => {
                return car.id !== action.payload
            })
            state.data = removeById
        }
    }
})

export const { changeSearchTerm, addCar, deleteCar } = carsSlice.actions
export const CarsReducer = carsSlice.reducer
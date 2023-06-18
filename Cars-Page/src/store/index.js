import { configureStore } from '@reduxjs/toolkit'
import { changeName, changeCost, FormReducer } from './slice/FormSlice'
import { addCar, deleteCar, changeSearchTerm, CarsReducer } from './slice/CarSlice'

const store = configureStore({
    reducer: {
        form: FormReducer,
        cars: CarsReducer,
    }
})

export {
    store,
    changeName, changeCost,
    addCar, deleteCar, changeSearchTerm
}
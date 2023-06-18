import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store"

export default function CarSearch() {
    const { searchTerm } = useSelector((state) => {
        return state.cars
    })

    const dispatch = useDispatch();

    const handleSearchTerm = (event) => {
        console.log(dispatch(changeSearchTerm(event.target.value)));
    }

    return (
        <div className="carSearch">
            <form action="">
                <div className="carSearch-form">
                    <label htmlFor="search">Search</label>
                    <input onChange={handleSearchTerm} value={searchTerm} type="text" name='search' />
                </div>
            </form>
        </div>
    )
}
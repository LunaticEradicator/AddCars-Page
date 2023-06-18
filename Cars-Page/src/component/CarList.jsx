import { useDispatch, useSelector } from "react-redux"
import { deleteCar } from "../store"

export default function CarList() {
    const dispatch = useDispatch();

    // FOR SHOWING ALL CARLIST AND FOR SEARCH

    const { carsList, name } = useSelector(({ form, cars: { data, searchTerm } }) => { // destructuring  carsList, name
        // return data ---instead
        const filterSearch = data.filter((car) => {
            // car.name === searchTerm value
            return car.name.toLowerCase().includes(searchTerm.toLowerCase()) // filter out value if we type in search 
        });

        return {
            carsList: filterSearch,  // to filter item for search
            name: form.name          //  to make test bold when creating item
        }
    })

    const handleDelete = (car) => {
        dispatch(deleteCar(car.id))
    }

    const renderCarsList = carsList.map(car => {
        // DECIDE IF THE NAME SHOULD BE BOLD
        const boldText = name && car.name.toLowerCase().includes(name.toLowerCase())
        const styles = boldText ? { color: 'red' } : { color: 'black' }

        return (
            <div style={styles} className="car" key={car.id}>
                <p >{car.name} - {car.cost}</p>
                <button onClick={() => handleDelete(car)}>Delete</button>
            </div>
        )
    })

    return (
        <div className="carList">
            {renderCarsList}
        </div>
    )
}
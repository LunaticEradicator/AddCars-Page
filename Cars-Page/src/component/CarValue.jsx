import { useSelector } from "react-redux"

export default function CarValue() {
    // Derived State
    // TO GET FILTERED 

    const carCost = useSelector(({ cars: { data, searchTerm } }) => {
        const filterCost = data.filter(car => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        })

        return filterCost.reduce((acc, car) => {
            return acc + car.cost
        }, 0)
    })

    return (
        <div className="carValue">
            <h2>{carCost}</h2>
        </div>
    )
}
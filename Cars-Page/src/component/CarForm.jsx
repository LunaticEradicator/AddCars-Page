import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeCost } from '../store';
import { addCar } from '../store';

// cars means the big state name
// data means the carList which to be mapped

export default function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    });

    // const carDetails = useSelector(state => {
    //     console.log(state.cars.data)
    // })

    const handleName = (event) => {
        console.log(dispatch(changeName(event.target.value)))
    }

    const handleCost = (event) => {
        const parsedValue = parseInt(event.target.value) || 0
        console.log(dispatch(changeCost(parsedValue)))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({
            name: name,
            cost: cost,
        }))
    }

    return (
        <div className='carForm'>
            <h1>Add Car</h1>
            <form onSubmit={handleSubmit} action="">
                <div className='carForm-form'>
                    <div className='carForm-form-details'>
                        <div className="form-name-div">
                            <label htmlFor="name">Enter Name</label>
                            <input onChange={handleName} value={name} type="text" name="name" autoComplete='off' />
                        </div>
                        <div className="form-cost-div">
                            <label htmlFor="cost">Enter Cost</label >
                            <input onChange={handleCost} value={cost || ''} type="number" name="cost" autoComplete='off' />
                        </div>
                    </div>
                    <div className='form-submitButton-div'>
                        <button className='form-submitButton'>Submit</button>
                    </div>
                    {/* <h1>{carDetails}</h1> */}
                </div>
            </form>

        </div>
    )
}
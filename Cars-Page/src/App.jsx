// import { useState } from 'react'

import CarForm from './component/carForm'
import CarList from './component/carList'
import CarSearch from './component/carSearch'
import CarValue from './component/carValue'

import './style.css'

function App() {
  return (
    <div className='app'>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}

export default App

import React, { useContext } from 'react'
import CarContext from '../../context/carContext'
import reducer from '../../context/reducer'

const CarControls = () => {
    //controls here
    const { selectedAppMenu }  = useContext(CarContext)
    return(
        <div>
            <div>car controls here 123 : { selectedAppMenu }</div>
        </div>
    )
}

export default CarControls
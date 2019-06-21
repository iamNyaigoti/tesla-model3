import React, { useContext } from 'react'
import CarContext from '../../../context/carContext'

const DriveStatus = () => {
    const { driveStatus } = useContext(CarContext)
    return(
        <div className="vehicle__Status-middle">
            {driveStatus}
        </div>
    )
}

export default DriveStatus
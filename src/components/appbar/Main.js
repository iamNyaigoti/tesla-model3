import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCar, 
  faFan, 
  faCaretSquareUp, 
  faVolumeUp, 
  faMusic, 
  faAngleLeft, 
  faAngleRight, 
  faChair,
  faWater,
  faBacon
 } from '@fortawesome/free-solid-svg-icons'

 import CarContext from '../../context/carContext'

const Main = () => {
    const { changeMenu } = useContext(CarContext)

    return(
        <div className="d-flex justify-content-around">
          <div className="main__Control-icon" >
            <FontAwesomeIcon icon={ faCar } onClick={()=>changeMenu('carStatus')} />
          </div>
          <div className="main__Control-icon" >
            <FontAwesomeIcon icon={ faCaretSquareUp } />
          </div>
          <div className="main__Control-icon" >
            <FontAwesomeIcon icon={ faMusic } onClick={()=>changeMenu('music')} />
          </div>
          <div className="main__Control-icon" >
            <FontAwesomeIcon icon={ faChair } />
          </div>
          <div className="main__Control-icon" >
            <FontAwesomeIcon icon={ faFan } />
          </div>
          <div className="main__Control-icon" >
            <FontAwesomeIcon className="mr-4" icon={ faAngleLeft } />
              <span>70 <sup>&#176;</sup></span>
            <FontAwesomeIcon className="ml-4" icon={ faAngleRight } />
          </div>
          <div className="main__Control-icon" >
            <FontAwesomeIcon icon={ faChair } />
          </div>
          <div className="main__Control-icon" >
            <FontAwesomeIcon icon={ faWater } />
          </div>
          <div className="main__Control-icon" >
            <FontAwesomeIcon icon={ faBacon } />
          </div>
          <div className="main__Control-icon" >
            <FontAwesomeIcon className="mr-4" icon={ faAngleLeft } />
            <FontAwesomeIcon icon={ faVolumeUp } />
            <FontAwesomeIcon className="ml-4" icon={ faAngleRight } />
          </div>
        </div>
    )
}

export default Main
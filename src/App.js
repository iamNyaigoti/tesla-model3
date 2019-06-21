import React, { useReducer } from 'react'
import { SELECT_MENU, SELECT_DRIVE_STATUS, TOGGLE_AUTOPILOT } from './context/types'

import CarContext from './context/carContext'
import reducer from './context/reducer'

import DashStatus from './components/instrumentation/top/DashStatus'
import DriveStatus from './components/instrumentation/middle/DriveStatus'
import DriveInfo from './components/instrumentation/bottom/DriveInfo'
import CarControls from './components/mainView/CarControls'
import AppControls from './components/appbar/Main'

import carIcon from './assets/images/car-top.svg'
import './App.css'


function App() {
  const initialState = {
    driveStatus: 'R',
    selectedAppMenu: 'carStatus',
    autoPilot: false,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const changeMenu = (payload) => {
      dispatch({
          type: SELECT_MENU,
          payload
      })
  }
  const changeDriveStatus = (payload) => {
      dispatch({
          type: SELECT_DRIVE_STATUS,
          payload
      })
  }
  const toogleAutoPilot = (payload) => {
      dispatch({
          type: TOGGLE_AUTOPILOT,
          payload
      })
  }


  return (
    <CarContext.Provider 
      value={{
        selectedAppMenu: state.selectedAppMenu,
        driveStatus: state.driveStatus,
        autoPilot: state.autoPilot,
        changeMenu,
        toogleAutoPilot,
        changeDriveStatus,
      }}
    >
      <div className="d-flex App">
        <div className="infotainment-left" >
          <div className="vehicle__status-left">
              <DashStatus />
              <DriveStatus />
              <DriveInfo />
          </div>
          <div className="vehicle_Main-controls">
            <div className="vehicle_Main-controls-top d-flex justify-content-between pt-3 pb-3">
              <div>
                <div>trunk</div>
                <div className="main-car-icon-div">
                  <img src={carIcon} alt="" className="main-car-icon" />
                </div>
                <div>boot</div>
              </div>
              <div className="speed-limit-info">limit 30</div>
            </div>
          </div>
          <div>
            <div>1234</div>
          </div>
        </div>
        <div className="infotainment-right">
          <CarControls />
        </div>
      </div>
      <div className="bottom-controls">
        <AppControls />
      </div>
      </CarContext.Provider>
  );
}

export default App;

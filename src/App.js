import React, { useState } from 'react';

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(55);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  const increaseTemperature = () => {
    if (temperatureValue === 100) return;

    const newTemperature = temperatureValue + 5;

    if (newTemperature >= 70) { 
      setTemperatureColor('hot')
    }

    setTemperatureValue(newTemperature);
  }

  const decreaseTemperature = () => {
    if (temperatureValue === 0) return;

    const newTemperature = temperatureValue - 5;

    if (newTemperature < 70) { 
      setTemperatureColor('cold')
    }
    setTemperatureValue(newTemperature);
  }
  return (
    <div className='app-container'>
        <div className='temperature-display-container'>
            <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}˚F</div>
        </div>
        <div className="button-container">
          <button onClick={()=> increaseTemperature() }>+</button>
          <button onClick={()=> decreaseTemperature()}>-</button>
        </div>
    </div> 
  )
}

export default App;
import React from 'react'
import Weather from './Components/Weather'
const App = () => {
  return (
    <div className='App'>
      <div className="titleapp">
        <h1>Weather-App</h1>
        <p>Search for your city's Weather.</p>
      </div>
      <div>
        <Weather />
      </div>
    </div>
  )
}
export default App;
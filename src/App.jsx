import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainSearch from './components/MainSearch'
import axios from 'axios'
import SearchAppBar from './components/SearchAppBar'


function App() {
  const [forecast,setForecast]=useState({
    city:"city",
    temp:"temperature",
    discription:"discription"
  })

  async function onForecast(place){
    console.log(place);
    try {
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=f887461f53c1f62656c9a8edc62c0e76&units=metric`)
      
      setForecast({
        city:response.data.name,
        temp:response.data.main.temp,
        discription:response.data.weather[0].main

      })
      
    } catch (error) {
      console.log(error)
      
    }
    
  }
  // axios.get('https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=f887461f53c1f62656c9a8edc62c0e76&units=metric')
  //   .then((data)=>console.log(data.data))
  //   .catch((err)=>console.log(err))
  
  return (
    <>
    <Header />
    <div className="content">
    <SearchAppBar     onFind={onForecast}
  />
    <MainSearch
     city={forecast.city} temp={forecast.temp} discription={forecast.discription} />
    </div>

    </>
  )
}

export default App

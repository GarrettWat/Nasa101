import React, { useState, useEffect } from 'react'
import apiKey from '../const'

function Apod() {
  const [apod, setApod] = useState([])
  const fetchData = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    const data = await response.json()
    setApod(data)
    console.log(apod)
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='flex-col justify-center	py-8 text-center '>
      <h1 className='pb-8'>Photo Taker: {apod.copyright}</h1>
      <h1 className='pb-8'>Photo Title: {apod.title}</h1>
      <h1 className='pb-8'>Photo Date: {apod.date}</h1>
      <h1 className='pb-8'>Photo Explanation: {apod.explanation}</h1>
      <img className='mx-auto' src={apod.url} alt={apod.title} />
    </div>
  )
}

export default Apod
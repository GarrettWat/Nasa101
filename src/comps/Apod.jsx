import React, { useState, useEffect } from 'react'


function Apod() {
  const [quotes, setQuotes] = useState([])
  const fetchData = async () => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=CO0SWa7NKPqJyvfFaPJNpCwxaaAgncD6Rm0INnRq`)
    const data = await response.json()
    setQuotes(data)
    console.log(quotes)
  }
  return (
    <div>Apod
        <button onClick={fetchData}>
        Click me
        </button>
    </div>
  )
}

export default Apod
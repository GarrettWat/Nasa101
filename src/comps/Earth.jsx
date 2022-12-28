import React, { useState, useEffect } from 'react'

function Earth() {
    const [earth, setEarth] = useState([])
    const [lon, setLon] = useState([])
    const [lat, setLat] = useState([])
    const [date, setDate] = useState([])
    const fetchData = async () => {
        const response = await fetch(`https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=2014-02-01&dim=0.10&api_key=CO
0SWa7NKPqJyvfFaPJNpCwxaaAgncD6Rm0INnRq`)
        const data = await response.json()
        setEarth(data)
        console.log(earth)
    }
    useEffect(() => {
        fetchData();
    } , []); 
    // Test in center of screen
    return (
        <div className="flex-col py-20 text-center">
            <div className='mx-auto'>
                <h1 className=' text-6xl'>Earth Image Generator</h1>
                <h1 className='my-5'>Currently being developed. Please check back later.</h1>
            </div>
        </div>
    )
}

export default Earth
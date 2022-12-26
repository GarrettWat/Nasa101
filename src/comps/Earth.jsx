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
    return (
        <div>
            <header id="top" class="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l">
  <nav id="site-menu" class="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-t-4 border-red-900">
    <div class="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
      <a href="#" class="no-underline py-1"><h1 class="font-bold text-lg tracking-widest">LOGO</h1></a>
      <button id="menuBtn" class="hamburger block sm:hidden focus:outline-none" type="button" onclick="navToggle();">
        <span class="hamburger__top-bun"></span><span class="hamburger__bottom-bun"></span>
      </button>
    </div>
    <div id="menu" class="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
      <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2" href="https://ttntm.me/blog/tailwind-responsive-menu/" target="_blank">About</a>
      <a class="text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2" href="#bottom">Features</a>
    </div>
  </nav>
</header>
<main class="content">
  <div class="min-h-screen text-center py-24">
    <h2 class="text-xl font-bold text-red-900">Menu is sticky for mobile viewports; otherwise just scroll down to make the menu sticky.</h2>
    <h3 class="py-8">Detailed how to: <a href="https://ttntm.me/blog/tailwind-responsive-menu/" target="_blank" class="underline">https://ttntm.me/blog/tailwind-responsive-menu/</a></h3>
  </div>
  <div class="flex flex-col w-2/3 mx-auto mb-24 tracking-wide">
    <h2 class="my-3">No, motherfucker</h2>
    <p class="my-3">Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass. 
    </p>
    <h2 class="my-3">We happy?</h2>
    <p class="my-3">Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass. 
    </p>
    <h2 class="my-3">Are you ready for the truth?</h2>
    <p class="my-3">Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. 
    </p>
    <div class="w-full sm:w-2/3 h-px bg-grey-light mx-auto my-12"></div>
    <a href="#top" id="bottom" class="inline-block max-w-xs self-center text-center text-red-900 hover:text-white no-underline border rounded-full border-red-900 hover:border-red-900 hover:bg-red-900 px-12 py-2">Go to Top</a>
  </div>
</main>
        </div>
        
    )
}

export default Earth
import React from 'react'



function Home() {
  return (
// Header text cetner of screen
    <div className="flex-col py-20 text-center">
      <div className='mx-auto'>
        <h1 className=' text-6xl'>All Things Nasa</h1>
        {/* <button className=" btn btn-outline my-5">Start Here</button> */}
        <h1 className='my-5'>Currently Developing: <strong>Earth Image Generator</strong></h1>
        <iframe className='mx-auto' width="560" height="315" src="https://www.youtube.com/embed/21X5lGlDOfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
    </div>
  )
}

export default Home
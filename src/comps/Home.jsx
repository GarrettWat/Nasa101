import React from 'react'

function Home() {
  return (
    <div className='flex bg-orange-300 justify-between items-center'>
        <a href='/' className=' flex  text-3xl mr-4'>🎮</a>
        <ul className='flex items center pr-60'>
            <li className='mr-4'>Price Checker</li>
            <li>How it works</li>
        </ul>
    </div>
  )
}

export default Home
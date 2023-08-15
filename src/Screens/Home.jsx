import React from 'react'
import NavBar from './Components/NavBar'

const Home = () => {
  return (
    <div className='flex flex-col text-white h-screen w-full'>
        <NavBar page={"home"}/>
        <div className='flex flex-col h-screen w-full justify-center items-center'>
        <h1 className='text-bold text-xl'>Home Page Need to Code.</h1>
        <p>Edit /src/Screens/Home.jsx</p>
        </div>
    </div>
  )
}

export default Home
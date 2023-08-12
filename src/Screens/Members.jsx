import React from 'react'
import NavBar from './Components/NavBar'
import Member from './Components/Member'

const Members = () => {
    
  return (
    <div className='flex flex-col '>
        <NavBar/>
        <main className='text-white mt-20 flex flex-col items-center'>
           <h1 className='text-white bold text-2xl'>Core Members</h1>
           <section className='p-10 w-full h-full'>
                <Member/>
           </section>
        </main>
    </div>
  )
}

export default Members
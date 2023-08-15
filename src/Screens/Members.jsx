import React from 'react'
import NavBar from './Components/NavBar'
import Member from './Components/Member'

const Members = () => {
    
  return (
    <div className='flex flex-col '>
        <NavBar/>
        <main className='text-white mt-20 flex flex-col items-center'>
           <h1 className='text-white bold text-2xl my-2'>Core Members</h1>
           <div className='p-10  h-full flex flex-col items-center sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5  gap-x-20 gap-y-10'>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
           </div>
           <h1 className='text-white bold text-2xl my-2'>Core Members</h1>
           <div className='p-10  h-full flex flex-col items-center sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5  gap-x-20 gap-y-10'>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
           </div>
           <h1 className='text-white bold text-2xl my-2'>Coordinators</h1>
           <div className='p-10  h-full flex flex-col items-center sm:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5  gap-x-20 gap-y-10'>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
                <Member name={"Kevin Paul"} position={"President"}/>
           </div>
        </main>
    </div>
  )
}

export default Members
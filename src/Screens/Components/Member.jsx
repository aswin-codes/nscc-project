import React from 'react'
import ProfilePic from '../../assets/person.png'
const Member = () => {
  return (
    <div className='bg-secondary px-4 py-3 w-fit rounded-lg hover:shadow-md'>
        <div className=' overflow-hidden rounded-md'>
            <img className='h-52 hover:scale-110 transition ease-in-out duration-200 ' src={ProfilePic} />
        </div>
        <div className='flex flex-col items-center'>
            <h2 className='text-white bold text-2xl w-fit'>Kevin Paul</h2>
            <h3 className='text-white semibold text-md w-fit'>President</h3>
        </div>
    </div>
  )
}

export default Member
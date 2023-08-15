import React from 'react'
import ProfilePic from '../../assets/person.png'
const Member = ({name, position, imageUrl}) => {
  return (
    <div className='bg-secondary px-4 py-3 w-fit rounded-lg hover:shadow-md'>
        <div className=' overflow-hidden rounded-md'>
            <img className='h-40 hover:scale-110 transition ease-in-out duration-200 ' src={ProfilePic} />
        </div>
        <div className='flex flex-col items-center'>
            <h2 className='text-white bold text-2xl w-fit'>{name}</h2>
            <h3 className='text-white semibold text-md w-fit'>{position}</h3>
        </div>
    </div>
  )
}

export default Member
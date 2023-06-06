import React from 'react'

export default function MovieList(props) {
  return (
    <div>
         <div className='mb-10 ml-6'>
        <p className='text-3xl font-bold my-2 ml-2 text-center'>{props.name}</p>
        <div className='bar flex h-[500px] items-center w-full overflow-x-auto border'>{props.list}</div>
      </div>
    </div>
  )
}

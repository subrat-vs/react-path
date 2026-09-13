import React from 'react'

const Welcome = ({name}) => {
  return (
    <>
    <h1 className='uppercase'>Welcome <span className='text-6xl text-olive-600'>{name}</span> </h1>
    </>
  )
}

export default Welcome
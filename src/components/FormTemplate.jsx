import React from 'react'

const FormTemplate = () => {
  return (
    <div className='  h-300px flex flex-col gap-2 items-center justify-center w-full md:w-500px'>
      <span className=' text-white mr-20'>Enter first three digits of plate number:</span>
      <div className=' flex items-center justify-center '>
        <span className=' bg-green-500 p-7'>NG</span>
        <input type="text" className=' tracking-widest uppercase  text-center focus:outline-none h-20 w-72 rounded-l-none rounded-xl pl-2 text-2xl  font-bold ' />
      </div>
    </div>
  )
}

export default FormTemplate
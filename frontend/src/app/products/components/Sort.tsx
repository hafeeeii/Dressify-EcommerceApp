'use client'

import { sortOptions } from '@/lib/data'
import { useAppDispatch } from '@/store/hooks'
import { handleSort } from '@/store/slices/productSlice'
import React from 'react'


const Sort = () => {
const dispatch = useAppDispatch()
  return (
    <div className="dropdown">
    <div tabIndex={0} role="button" className="btn  m-1">Click</div>
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow text-white bg-black rounded-box w-52" >
{sortOptions?.map((option,index)=>(
  <li key={index} className='cursor-pointer' onClick={()=>dispatch(handleSort(option.value))} >
    {option.label}
  </li>
))}
    </ul>
  </div>
  )
}

export default Sort
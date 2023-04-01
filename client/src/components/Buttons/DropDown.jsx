import React from 'react'

import {IoMdArrowDropdown} from "react-icons/io"

const DropDown = ({children}) => {
  return (
    <div>
      <button className='dark:bg-[#2e3241] bg-[#f8f9fa] dark:text-white text-[#OCOFC8] py-1.5 px-3 rounded-lg flex justify-between items-center'>
        {children}
        <IoMdArrowDropdown className='dark:text-white text-[#OCOFC8]'/>
      </button>
    </div>

  )
}

export default DropDown
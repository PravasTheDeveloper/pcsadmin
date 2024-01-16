import React from 'react'
import { VscActivateBreakpoints } from "react-icons/vsc";

export default function SideNavBar() {
  return (
    <div className='w-[350px] h-screen bg-blue-lite p-10'>
        <div className='w-full h-full bg-slate-800'>
            <div className='font-bold flex justify-start items-center cursor-pointer mb-5'>
                <VscActivateBreakpoints className='text-xl mr-2 text-yellow-main' /> <span className='text-white'>My Skills</span>
            </div>
            <div className='font-bold flex justify-start items-center cursor-pointer mb-5'>
                <VscActivateBreakpoints className='text-xl mr-2 text-yellow-main' /> <span className='text-white'>Portfolio</span>
            </div>
        </div>
    </div>
  )
}

import MainDashBoard from '@/components/MainDashBoard/MainDashBoard'
import SideNavBar from '@/components/SideNavBar/SideNavBar'
import React from 'react'

export default function adminpage() {
    return (
        <>
            <div className='w-full h-auto flex'>
                <SideNavBar />
                <MainDashBoard />
            </div>
        </>
    )
}

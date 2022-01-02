import { BiMenu, BiHomeAlt } from 'react-icons/bi'
import Drawer from '@mui/material/Drawer' 
import { useState } from 'react'
import { FaHeartbeat } from 'react-icons/fa'

function Header() {
    const [drawerState, setdrawerState] = useState(false)
    return (
        <div className="border-b-2">
            <header className="max-w-screen-xl text-gray-800 mx-auto flex items-center justify-between p-3 px-5 xl:px-0 py-3">
            <div className="flex items-center space-x-3">
                <FaHeartbeat size={35} className="text-green-600" />
                <span className="font-bold hidden sm:block">SMH</span>
            </div>
            <div className="hidden sm:flex items-center space-x-10">
                <div className="text-sm font-semibold">Home</div>
                <div className="text-sm font-semibold">About</div>
                <div className="text-sm font-semibold">Appointment</div>
            </div>
            <div className="flex items-center space-x-4 sm:hidden">
                <div className="text-sm p-2 px-4 border-2 rounded-md">Appointment</div>
                <BiMenu size={25} className="cursor-pointer" onClick={() => setdrawerState(!drawerState)} />
            </div>
            <Drawer open={drawerState} anchor="right" onClose={() => setdrawerState(false)}>
                <div className="p-5 font-readex">
                    <div className="flex items-center space-x-2">
                        <BiHomeAlt size={25} />
                        <div>Home</div>
                    </div>
                </div>
            </Drawer>
        </header>
        </div>
    )
}

export default Header

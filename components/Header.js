import { BiMenu, BiHomeAlt } from 'react-icons/bi'
import Drawer from '@mui/material/Drawer' 
import { useState } from 'react'
import { FaHeartbeat } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Header() {
    const [drawerState, setdrawerState] = useState(false)
    const router = useRouter()

    return (
        <div className="border-b-2 font-readex">
            <header className="max-w-screen-xl text-gray-800 mx-auto flex items-center justify-between p-3 px-5 xl:px-0 py-3">
            <div className="flex items-center space-x-3">
                <FaHeartbeat size={35} className="text-green-600" />
                <span className="font-bold hidden sm:block">SMH</span>
            </div>
            <div className="hidden sm:flex items-center space-x-10">
                <Link href="/"><div className={`text-sm font-semibold cursor-pointer ${router.pathname === "/" && "text-green-500"}`}>Home</div></Link>
                <div className="text-sm font-semibold">About</div>
                <div className="text-sm font-semibold">Appointment</div>
                <Link href="/podiatry"><div className="text-sm cursor-pointer transform hover:scale-105 active:scale-95 duration-100 font-semibold border p-2 rounded-md bg-green-500 text-white px-4">Podiatry</div></Link>
            </div>
            <div className="flex items-center space-x-4 sm:hidden">
                <div className="text-sm p-2 px-4 border-2 rounded-md">Appointment</div>
                <BiMenu size={25} className="cursor-pointer" onClick={() => setdrawerState(!drawerState)} />
            </div>
            <Drawer open={drawerState} anchor="right" onClose={() => setdrawerState(false)}>
                <div className="p-5 font-readex flex flex-col space-y-4">
                    <div className="flex items-center space-x-2 bg-blue-500">
                        <BiHomeAlt size={25} />
                        <div>Home</div>
                    </div>
                    <div className="flex items-center space-x-2 bg-blue-500">
                        <BiHomeAlt size={25} />
                        <div>Podiatry</div>
                    </div>
                    <div className="flex items-center space-x-2 bg-blue-500">
                        <BiHomeAlt size={25} />
                        <div>Appointment</div>
                    </div>
                </div>
            </Drawer>
        </header>
        </div>
    )
}

export default Header

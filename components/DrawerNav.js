import { useRouter } from 'next/router'
import Link from 'next/link'
import { BiHomeAlt } from 'react-icons/bi'
function DrawerNav() {
    const router = useRouter()
    return (
        <div>
            <div className="flex space-x-2 px-7 py-5 mb-3">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                </div>
                <div className="font-readex flex flex-col space-y-4">
                    <div onClick={() => router.push("/")} className={`flex items-center space-x-2 p-2 px-6 border-l-4  ${router.pathname === "/" ? "border-green-500 text-green-500" : "border-white"}`}>
                        <BiHomeAlt size={25} />
                        <div>Home</div>
                    </div>
                    <div onClick={() => router.push("/podiatry")} className={`flex items-center space-x-2 p-2 px-6 border-l-4  ${router.pathname === "/podiatry" ? "border-green-500 text-green-500" : "border-white"}`}>
                        <BiHomeAlt size={25} />
                        <div>Podiatry</div>
                    </div>
                    <div className={`flex items-center space-x-2 p-2 px-6 border-l-4  ${router.pathname === "" ? "border-green-500 text-green-500" : "border-white"}`}>
                        <BiHomeAlt size={25} />
                        <div>Appointment</div>
                    </div>
                </div>
        </div>
    )
}

export default DrawerNav

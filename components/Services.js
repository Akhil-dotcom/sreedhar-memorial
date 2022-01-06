import Image from 'next/image'
import HealthImage from '../public/images/health.png'

function Services() {
    return (
        <div className="max-w-screen-xl text-gray-800 mx-auto py-20 sm:py-40 p-5 xl:px-0">
            <div className="max-w-2xl mx-auto">
                <div className="text-4xl md:text-5xl lg:text-7xl text-center font-semibold">We provide all the best world class services.</div>
                <div className="text-center pt-5 text-lg text-gray-500">We are your helping hand.</div>
            </div>
            <div className="pt-20 relative">
                <div className="w-full md:w-4/6 h-80 md:h-96 lg:h-[500px] rounded-md mx-auto relative">
                    <img src="https://images.pexels.com/photos/4021806/pexels-photo-4021806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="noting" className="shadow-lg object-cover h-full w-full rounded-md" />
                    <div className="absolute shadow-2xl h-40 w-28 md:h-64 md:w-40 rounded-md -right-2 md:-right-5 -top-10 bg-green-500">
                        <img src="https://images.pexels.com/photos/6129051/pexels-photo-6129051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="h-full w-full object-cover rounded-md border-4 border-white" />
                    </div>
                    <div className="absolute bg-white rounded-md p-3 pr-5 shadow-2xl flex gap-3 items-center -bottom-8 md:bottom-10 right-0 md:-right-36">
                        <div className="h-14 w-14 rounded-md bg-blue-500"></div>
                        <div className="flex flex-col">
                            <span className="text-sm md:text-base font-medium">Dr. Praveen Sreedhar</span>
                            <span className="text-sm text-gray-500">Podiatry</span>
                        </div>
                    </div>
                    <div className="h-14 w-14 sm:h-16 sm:w-16 absolute bottom-8 sm:bottom-5 -left-4 rounded-md bg-white shadow-2xl border-4 border-gray-700">
                        <Image src={HealthImage} layout="fill" className="object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

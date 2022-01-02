import { MdContentCopy } from 'react-icons/md'

function MainHome() {
    return (
        <div className="max-w-screen-xl text-gray-800 mx-auto pt-20 p-5 xl:px-0">
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 max-w-lg mx-auto">
                    <div className="text-center lg:text-left pb-3">Sreedhar Memorial Hospital</div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-center lg:text-left font-semibold">Best outcomes <br className="hidden lg:inline-block" />for Every patient Every <span className="text-green-500">t</span>ime.</h1>
                    <h3 className="pt-4 text-gray-500 text-center lg:text-left lg:max-w-lg">MUI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop React applications faster.</h3>
                    <div className="pt-10 flex flex-col justify-center lg:justify-start sm:flex-row gap-5">
                        <button className="bg-green-500 border-2 border-green-500 p-4 rounded-md text-white">Get Appointment</button>
                        <button className="bg-gray-100 p-4 rounded-md border-2 flex justify-center border-gray-300 items-center">sreedharmemeorial@gmail.com <MdContentCopy size={20} className="text-gray-700 ml-2" /></button>
                    </div>
                </div>
                <div className="flex-1 flex relative justify-center items-center gap-3 sm:gap-5">
                    <div className="h-80 bg-blue-200 w-40 rounded-md">
                        <img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" className="h-full w-full object-cover rounded-md" />
                    </div>
                    <div className="h-80 mt-44 bg-blue-200 w-40 rounded-md">
                        <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className="h-full w-full object-cover rounded-md" />
                    </div>
                    <div className="h-80 mt-20 bg-blue-200 w-40 rounded-md">
                        <img src="https://images.unsplash.com/photo-1562243061-204550d8a2c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="h-full w-full object-cover rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHome

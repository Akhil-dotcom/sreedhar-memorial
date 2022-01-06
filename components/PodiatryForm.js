import { useForm } from 'react-hook-form'

function PodiatryForm() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        alert(data)
    }
    return (
        <div className="max-w-screen-xl text-gray-800 mx-auto p-5 xl:px-0 font-readex">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto sm:shadow-lg sm:p-10 rounded-md sm:bg-white flex flex-col gap-5">
                <div className="flex flex-col">
                    <label className="text-sm">Full Name</label>
                    <input className="border-2 rounded-md p-2 bg-gray-100" {...register("name")} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm">Email Address</label>
                    <input className="border-2 rounded-md p-2 bg-gray-100" {...register("email")} />
                </div>
                <div className="flex flex-col">
                    <label className="text-sm">Phone Number</label>
                    <input className="border-2 rounded-md p-2 bg-gray-100" {...register("phone")} />
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-green-500 text-white p-3  px-4 rounded-md">Get a call Back</button>
                </div>
            </form>
        </div>
    )
}

export default PodiatryForm

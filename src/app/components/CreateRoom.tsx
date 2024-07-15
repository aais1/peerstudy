import { currentUser } from "@clerk/nextjs/server"

export async function CreateRoom(){
    const user = await currentUser();
    return (
        <div className="h-[80vh] flex justify-center items-center">
            {
                user ? (
                    <div className="md:w-[50vw] mx-auto">
                        <h1 className='text-2xl font-bold text-center'>Create Room</h1>
                        <input type='text' placeholder='Room Name' className='border border-gray-300 p-2 rounded-lg w-full mt-2'/>
                        <button className='bg-blue-500 text-white px-4 py-2 w-[100%] rounded-lg mt-2'>Create Room</button>
                    </div>
                ) : <div className="text-blue-500 text-3xl font-semibold font-serif">Sign in to create Rooms</div>
            }
        </div>
    )
}
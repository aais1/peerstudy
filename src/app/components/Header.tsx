import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

export const Header = () => {
    return (
        <header className='flex  justify-between items-center py-3 px-6 border-b '>
            <div>
                <h1 className='text-xl text-blue-500 font-serif'>Study Peer</h1>
            </div>
            <div>
                <SignedOut>
                <SignInButton  >
                    <button className='text-white hover:bg-gradient-to-b transition-all duration-200 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'>Sign In</button>
                </SignInButton>

                </SignedOut>
                <SignedIn>
                <   UserButton />
                </SignedIn>
            </div>
        </header>
    )
}   
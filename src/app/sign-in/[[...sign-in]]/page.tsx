import { SignIn } from "@clerk/nextjs";

export const metadata={
    title:"Sign In",
    description:"Sign in to start studying with peers"
}

export default function Page(){
    return (
      <div className="h-screen flex justify-center items-center">
        <SignIn/>
      </div>
    );
}

import { SignUp } from "@clerk/nextjs";

export const metadata={
    title:"Sign Up",
    description:"Sign up to create an account to study with peers"
}

export default function Page(){
    return (
      <div className="h-screen flex justify-center items-center">
        <SignUp/>
      </div>
    );
}

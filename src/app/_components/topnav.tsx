import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";

export function TopNav(){
    return(
      <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
        <div className="text-2xl text-zinc-200">CineSync</div>

        <div>
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <UserButton/>   
            </SignedIn>
        </div>
      </nav>
    )
  }
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please Sign In</div>
      </SignedOut>
      <SignedIn>
      <div>hello cine-sync</div>
     </SignedIn>
    </main>
  );
}

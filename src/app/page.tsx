import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { db } from "~/server/db";


export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      <SignedIn>
        <div>hello cine-sync</div>
      </SignedIn>
    </main>
  );
}

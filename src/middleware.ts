import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Exclude _next (Next.js static files) and various file types
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    // Exclude API routes and TRPC endpoints
    '/(api|trpc)(.*)',
    '/dashboard/(.*)',
  ],
};

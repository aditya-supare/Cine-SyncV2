'use client'

import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarProvider,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";

import Link from "next/link";


const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
    ariaLabel: "Go to Home",
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
    ariaLabel: "Go to Inbox",
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
    ariaLabel: "Go to Calendar",
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
    ariaLabel: "Search",
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    ariaLabel: "Settings",
  },
];

export function AppSidebar() {
  const { user } = useUser();

  return (
    <>
      <SignedIn>
        <SidebarProvider>
          <Sidebar className="bg-black text-zinc-200 min-h-screen">
            <SidebarHeader>

            <Link href="/" passHref>
              <span className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-slate-700 pl-1 pt-1 transition-transform transform hover:scale-105 focus:scale-105 focus:outline-none">
                CineSync
              </span>
            </Link>
            </SidebarHeader>
            <SidebarContent className="flex-grow">
              <SidebarMenu className="mt-4 space-y-2">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} aria-label={item.ariaLabel} className="flex items-center justify-start space-x-3 p-2 bg-gray-800 bg-opacity-0 hover:bg-opacity-60 rounded-xl shadow-lg w-full">
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>

            <SidebarFooter className="flex items-center justify-between p-2 border-t border-zinc-400">
            <div className="flex items-center justify-start space-x-3 p-2 bg-gray-800 bg-opacity-0 hover:bg-opacity-60 rounded-xl shadow-lg w-full">
              <UserButton/>
              {user && (
                <span className="text-sm font-medium text-zinc-100">
                  {user.firstName}
                </span>
              )}
            </div>

            </SidebarFooter>
          </Sidebar>
        </SidebarProvider>
      </SignedIn>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  );
}

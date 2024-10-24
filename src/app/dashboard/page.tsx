// src/app/dashboard/page.tsx

import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { AppSidebar } from "~/components/app-sidebar";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Show Sidebar when user is signed in */}
      <SignedIn>
        <AppSidebar />

        {/* Main Content Area */}
        <main style={{ flexGrow: 1, padding: "20px" }}>
          <h1>Welcome to your Dashboard</h1>
          <p>This is where your main dashboard content will appear.</p>
        </main>
      </SignedIn>

      {/* If user is not signed in, show sign-in form */}
      <SignedOut>
        <div style={{ margin: "auto", textAlign: "center" }}>
          <h1>Please Sign In to Access the Dashboard</h1>
          <SignIn />
        </div>
      </SignedOut>
    </div>
  );
};

export default Dashboard;

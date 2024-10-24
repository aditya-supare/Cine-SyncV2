import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <SignIn routing="hash" />
    </div>
  );
};

export default SignInPage;

import { TextInput, Button, Label } from "flowbite-react";

function AuthLayout() {
  return (
    <div className="flex h-screen">
      {/* Left Section (Form) */}
      <div className="flex-1 p-10 flex flex-col justify-center items-center text-black bg-white">
        <h1 className="text-3xl font-bold">LOGIN</h1>
        <p className=" text-sm text-gray-400 mb-3">
          Sign in to your account to continue where you left off!
        </p>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <Label htmlFor="username" value="Username" />
            <TextInput
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="password" value="Password" />
            <TextInput
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <Button className="w-full bg-blue-400 text-xl" type="submit">
            Sign In
          </Button>
        </form>
      </div>

      <div className="flex-1 bg-blue-200">
 
        <img src="/assets/hospital.svg" alt="Image description" style={{width: "90%", height: "100%", objectFit: "contain"}}/>
  
        <div />
      </div>
    </div>
  );
}

export default AuthLayout;

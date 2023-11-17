import { Button, Label } from "flowbite-react";
import { useState } from "react";

function AuthLayout() {
  const [email, setEmail] = useState("");
  return (
    <div className="flex h-screen">
      {/* Left Section (Form) */}
      <div className="flex-1 flex flex-col justify-center items-center  text-black bg-ha-primary1">
        <div className="space-y-6 w-[80%] flex items-center flex-col">
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Sign In
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Your Username" />
            </div>
            <input
              id="username"
              className="w-[300px]"
              placeholder="name@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <input id="password" type="password" className="w-[300px]" required placeholder="P@$$word"/>
          </div>
          <div className="flex justify-between">
            <a
              href="#"
              className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
            >
              Lost Password?
            </a>
          </div>
          <div className="w-[300px] flex">
            <Button className="w-full">Log in to your account</Button>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-blue-200">
        <img
          src="/assets/hospital.svg"
          alt="Image description"
          style={{ width: "90%", height: "100%", objectFit: "contain" }}
        />

        <div />
      </div>
    </div>
  );
}

export default AuthLayout;

import { Button } from "flowbite-react";
import { useState } from "react";
import { useLogin } from "../hooks/reactQuery/useUser";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/ui/loader";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

function AuthLayout() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInput, setPasswordInput] = useState(true);
  const navigate = useNavigate();
  const { mutate, isLoading, data } = useLogin();

  if (data && data?.status) {
    navigate("/dashboard");
  }

  const handleLogin = async () => {
    try {
      if (!username || !password) return;
      await mutate({ username, password });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col justify-center items-center  text-black bg-ha-primary1">
        <div className="space-y-6 w-[80%] flex items-center flex-col">
          <h3 className="text-3xl font-extrabold text-white">Login</h3>
          <div>
            <div className="mb-2 block">
              <label htmlFor="username" className="text-white">
                Your Username
              </label>
            </div>
            <input
              id="username"
              className="w-[300px]"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="password" className="text-white">
                Your Password
              </label>
            </div>
            <div className="flex items-center justify-center w-[300px] bg-[#e7f0fe] rounded-md">
              <input
                id="password"
                type={passwordInput ? "password" : "text"}
                className="w-[280px] rounded-right-none"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {passwordInput ? (
                <FaRegEye
                  className="w-[30px] cursor-pointer"
                  onClick={() => setPasswordInput(!passwordInput)}
                />
              ) : (
                <FaRegEyeSlash
                  className="w-[30px] cursor-pointer"
                  onClick={() => setPasswordInput(!passwordInput)}
                />
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <Link
              to="/forgot"
              className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="w-[300px] flex" onClick={handleLogin}>
            <Button className="w-full">Login</Button>
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

import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useActivate } from "../hooks/reactQuery/useUser";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/ui/loader";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

function ActivationLayout() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { mutate, isLoading, data } = useActivate();
  const [, setCookie] = useCookies(["accessToken"]);
  const { token } = useParams();


  useEffect(() => {
    if (token) {
      setCookie("accessToken", token);
    }
  }, [token]);

  if(data?.status){
    toast.success("Account activated successfully");
    navigate('/login')
  }
  
  const handleActivate = async () => {
    try {
      if(!username || !password) return
      await mutate(
        { username, password });
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
          <h3 className="text-2xl font-extrabold text-white">
            User Activation
          </h3>
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
            <input
              id="password"
              type="password"
              className="w-[300px]"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="w-[300px] flex" onClick={handleActivate}>
            <Button className="w-full">Activate your account</Button>
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

export default ActivationLayout;

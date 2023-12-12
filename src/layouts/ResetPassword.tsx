import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useReset } from "../hooks/reactQuery/useUser";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/ui/loader";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const { mutate, isLoading, data } = useReset();
  const [, setCookie] = useCookies(["accessToken"]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    const activateAccount = async () => {
      try {
        if (token) {
          setCookie("accessToken", token);
        }
      } catch (error) {
        console.error("reset failed", error);
      }
    };

    activateAccount();
  }, [token]);

  const handleActivate = async () => {
    try {
      if (!password) return;
      await mutate({
        password: password,
        //   username: ""
      });
    } catch (error) {
      console.error("Activation failed", error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (data && data.status) {
    toast.success("Account Reset successfully");
    navigate("/login");
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col justify-center items-center text-black bg-ha-primary1">
        <div className="space-y-6 w-[80%] flex items-center flex-col">
          <h3 className="text-3xl font-extrabold text-white">Password Reset</h3>
          <div>
            <div className="mb-2 block">
              <label htmlFor="password" className="text-white">
                Your New Password
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
          <div className="w-[300px] flex">
            <Button className="w-full" onClick={handleActivate}>
              Reset Your Password
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-blue-200">
        <img
          src="/assets/hospital.svg"
          alt="Image description"
          style={{ width: "90%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}

export default ResetPassword;

import { Button } from "flowbite-react";
import { useForgot } from "../hooks/reactQuery/useUser";
import Loader from "../components/ui/loader";
import { toast } from "react-toastify";
import { useState } from "react";

function ForgotPassword() {
  const [username, setUsername] = useState("");
  const { mutate, isLoading, data } = useForgot();

  const handleActivate = async () => {
    try {
      if (!username) return;
      await mutate({
        username: username,
      });
    } catch (error) {
      console.error("Activation failed", error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (data && data.status) {
    toast.success(`${data.message}`);
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col justify-center items-center text-black bg-ha-primary1">
        <div className="space-y-6 w-[80%] flex items-center flex-col">
          <h3 className="text-3xl font-extrabold text-white">
            Forgot Password?
          </h3>
          <div>
            <div className="mb-2 block">
              <label htmlFor="username" className="text-white">
                Your Username
              </label>
            </div>
            <input
              id="username"
              type="text"
              className="w-[300px]"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
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

export default ForgotPassword;

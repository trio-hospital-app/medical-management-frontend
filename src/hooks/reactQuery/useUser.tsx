// useUser.ts
import { useQuery, useMutation, QueryClient } from "react-query";
import { useCookies } from "react-cookie";
import UserService, {
  User,
  LoginData,
  LoginResponse,
} from "../../services/userService";

// Create a new instance of QueryClient if it doesn't exist
const queryClient = new QueryClient();

// React Query hook for fetching all users
export const useGetUsers = () => {
  return useQuery("users", UserService.getUsers);
};

// React Query hook for user registration
export const useRegister = () => {
  return useMutation((user: User) => UserService.register(user), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};

export const useDeleteUser = () => {
  return useMutation((id: string) => UserService.deleteUser(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
};

export const useLogin = () => {
  const [, setCookie] = useCookies(["accessToken"]);
  return useMutation((data: LoginData) => UserService.login(data), {
    onSuccess: (response: LoginResponse) => {
      const { accessToken } = response.data;
      setCookie("accessToken", accessToken);

      queryClient.invalidateQueries("login");
    },
  });
};

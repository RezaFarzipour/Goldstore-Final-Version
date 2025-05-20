import { getCookie } from "../utils/cookie";

export const useAuthorize = () => {
  const token = getCookie("token");
  const userType = getCookie("user_type"); // 'admin' | 'customer' | undefined

  const isAuthenticated = !!token;
  return { token, userType, isAuthenticated };
};

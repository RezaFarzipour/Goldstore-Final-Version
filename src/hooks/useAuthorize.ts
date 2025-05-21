import { getCookie } from "../utils/cookie";

export const useAuthorize = () => {
  const token = getCookie("token");
  const userType = getCookie("user_type"); // 'admin' | 'customer' | undefined
  const isFullyRegistered = getCookie("is_fully_registered") === "true"

  const isAuthenticated = !!token;
  return { token, userType, isAuthenticated, isFullyRegistered };
};

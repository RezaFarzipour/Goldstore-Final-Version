import { Navigate, useLocation } from "react-router-dom";
import { useAuthorize } from "../../hooks/useAuthorize";
import { JSX } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedUserType?: "admin" | "customer";
  redirectTo?: string; // مسیر ریدایرکت وقتی userType اشتباهه یا کاربر لاگین هست اما نباید به صفحه مهمان بره
  guestOnly?: boolean; // اگر true بود یعنی صفحه فقط برای مهمان‌هاست (مثلا signup)
}

const ProtectedRoute = ({
  children,
  allowedUserType,
  redirectTo = "/",
  guestOnly = false,
}: ProtectedRouteProps) => {
  const { isAuthenticated, userType, isFullyRegistered } = useAuthorize();
  const location = useLocation();

  // -------------------------
  // صفحات فقط برای مهمان‌ها
  // -------------------------
  if (guestOnly) {
    if (isAuthenticated && isFullyRegistered) {
      // اگر کاربر کامل ثبت‌نام کرده، بفرستش داشبورد
      const dashboardPath =
        userType === "admin" ? "/admin" : "/customerdashboard";
      return <Navigate to={dashboardPath} replace />;
    }
    // در غیر این صورت اجازه بده صفحه مهمان دیده بشه
    return children;
  }

  // -------------------------
  // صفحات محافظت‌شده (نیاز به لاگین)
  // -------------------------
  if (!isAuthenticated) {
    return <Navigate to="/signup" replace />;
  }

  // اگر لاگین کرده ولی هنوز ثبت‌نام تکمیلی نکرده
  if (!isFullyRegistered && location.pathname !== "/signupinfo") {
    return <Navigate to="/signupinfo" replace />;
  }

  // اگر نوع کاربر درست نباشه
  if (allowedUserType && userType !== allowedUserType) {
    return <Navigate to={redirectTo} replace />;
  }

  // در حالت عادی صفحه رو نشون بده
  return children;
};

export default ProtectedRoute;

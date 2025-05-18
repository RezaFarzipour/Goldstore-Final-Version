import { Navigate } from "react-router-dom";
import { useAuthorize } from "../../hooks/useAuthorize";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedUserType?: "admin" | "customer"; // اختیاری
  redirectTo?: string; // مسیر ریدایرکت وقتی userType اشتباهه یا کاربر لاگین هست اما نباید به صفحه مهمان بره
  guestOnly?: boolean; // اگر true بود یعنی صفحه فقط برای مهمان‌هاست (مثلا signup)
}

const ProtectedRoute = ({
  children,
  allowedUserType,
  redirectTo = "/", // مسیر پیش‌فرض ریدایرکت
  guestOnly = false,
}: ProtectedRouteProps) => {
  const { isAuthenticated, userType } = useAuthorize();

  if (guestOnly) {
    // صفحه مخصوص مهمان‌ها (login/signup)
    if (isAuthenticated) {
      // اگر کاربر لاگین کرده، ریدایرکت کن به داشبوردش
      const dashboardPath =
        userType === "admin" ? "/admin" : "/customerdashboard";
      return <Navigate to={dashboardPath} replace />;
    }
    // اگر مهمان هست، اجازه بده صفحه رو ببینه
    return children;
  }

  // صفحات محافظت شده
  if (!isAuthenticated) {
    return <Navigate to="/signup" replace />;
  }

  if (allowedUserType && userType !== allowedUserType) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default ProtectedRoute;

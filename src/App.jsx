import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

// Layouts
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Index Redirection based on Auth
import IndexRedirect from "./pages/IndexRedirect";

// Auth Pages
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

// Dashboard Pages
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root Route */}
        <Route path="/" element={<IndexRedirect />} />

        {/* Public (Auth) Routes */}
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
          </Route>
        </Route>

        {/* Private (Dashboard) Routes  */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

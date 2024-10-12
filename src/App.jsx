import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/global/GlobalStyles";

//import PublicRouter from "./routes/PublicRouter";
import AdminRouter from "./routes/AdminRouter";
//import AuthRouter from "./routes/AuthRouter";
import BaseLayout from "./components/layout/BaseLayout";
import HomeScreen from "./screens/home/HomeScreen";
import CourseMain from "./screens/course/CourseMain";
import NotFoundScreen from "./screens/error/NotFoundScreen";
import AuthLayout from "./components/layout/AuthLayout";
import AccountScreen from "./screens/user/AccountScreen";
import AddressScreen from "./screens/user/AddressScreen";
import SignInScreen from "./screens/auth/SignInScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import ResetScreen from "./screens/auth/ResetScreen";
import ChangePasswordScreen from "./screens/auth/ChangePasswordScreen";
import CheckMailScreen from "./screens/auth/CheckMailScreen";
import VerificationScreen from "./screens/auth/VerificationScreen";
import CourseDetailsMain from "./screens/course-details/CourseDetailsMain";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          {/* public routes */}
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<HomeScreen />} />
            <Route path="/course" element={<CourseMain />} />
            <Route path="/course-details/:id" element={<CourseDetailsMain />} />
          </Route>

          {/* Auth route */}
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<AccountScreen />} />
            <Route path="/account" element={<AccountScreen />} />
            <Route path="/account/add" element={<AddressScreen />} />
            <Route path="/sign_in" element={<SignInScreen />} />
            <Route path="/sign_up" element={<SignUpScreen />} />
            <Route path="/reset" element={<ResetScreen />} />
            <Route path="/change_password" element={<ChangePasswordScreen />} />
            <Route path="/check_mail" element={<CheckMailScreen />} />
            <Route path="/verification" element={<VerificationScreen />} />
          </Route>
          
          {/* not found route */}
          <Route path="*" element={<NotFoundScreen />} />
          
          {/* Admin route */}
          <Route path="/admin/*" element={<AdminRouter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

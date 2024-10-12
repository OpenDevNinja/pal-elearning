import { Routes, Route } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import ResetScreen from "../screens/auth/ResetScreen";
import VerificationScreen from "../screens/auth/VerificationScreen";
import CheckMailScreen from "../screens/auth/CheckMailScreen";
import ChangePasswordScreen from "../screens/auth/ChangePasswordScreen";
import AccountScreen from "../screens/user/AccountScreen";
import AddressScreen from "../screens/user/AddressScreen";
const AuthRouter = () => {
  return (
    <Routes>
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
    </Routes>
  )
}

export default AuthRouter
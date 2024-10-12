import { Routes, Route } from "react-router-dom";
import AdminLayout from "../admin/components/layout/AdminLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../admin/styleAdmin.css"

import Main from "../admin/pages/main/Main";
const AdminRouter = () => {
  return (
    <Routes>
    <Route path="/" element={<AdminLayout />}>
      <Route index element={<Main />} />
     
    </Route>
  </Routes>
  )
}

export default AdminRouter
import { Fragment } from "react";

import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import AdminSidebar from "../Sidebar/AdminSidebar";

const AdminLayout = () => {
    return (
        <Fragment>
            <div id="bgBack">

                <Header />
                <AdminSidebar />

                <Outlet />
            </div>

        </Fragment>
    );
};

export default AdminLayout;

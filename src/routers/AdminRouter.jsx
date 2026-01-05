import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/admin/DashBoardPage/DashBoardPage";
import ManageUserPage from "../pages/admin/ManageUserPage/ManageUserPage";
import UserDetailPage from "../pages/admin/UserDetailPage/UserDetailPage";

function AdminRouter() {
    return (
        <>
            <Routes>
                <Route path="/dashboard" element={<DashBoardPage />} />
                <Route path="/manage/user" element={<ManageUserPage />} />
                <Route
                    path="/manage/user/:username"
                    element={<UserDetailPage />}
                />
            </Routes>
        </>
    );
}

export default AdminRouter;

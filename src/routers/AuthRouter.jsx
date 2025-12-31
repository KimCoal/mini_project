import React from "react";
import { Routes, Route } from "react-router-dom";
import SigninPage from "../pages/user/SigninPage/SigninPage";
import SignupPage from "../pages/user/SignupPage/SignupPage";
import OAuth2Router from "./OAuth2Router";

function AuthRouter() {
    return (
        <>
            <Routes>
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/oauth2/*" element={<OAuth2Router />} />
                
            </Routes>
        </>
    );
}

export default AuthRouter;

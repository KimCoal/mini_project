import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/user/MainPage/MainPage";
import Layout from "../components/Layout/Layout";
import AuthRouter from "./AuthRouter";
import BoardRouter from "./BoardRouter";

function MainRouter() {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout
                            showSideBar={showSideBar}
                            setShowSideBar={setShowSideBar}>
                            <MainPage
                                showSideBar={showSideBar}
                                setShowSideBar={setShowSideBar}
                            />
                        </Layout>
                    }
                />
                <Route path="/auth/*" element={<AuthRouter />} />
                <Route
                    path="/board/*"
                    element={
                        <Layout
                            showSideBar={showSideBar}
                            setShowSideBar={setShowSideBar}>
                            <BoardRouter />
                        </Layout>
                    }
                />
            </Routes>
        </>
    );
}

export default MainRouter;

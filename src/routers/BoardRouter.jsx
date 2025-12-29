import React from "react";
import { Route, Routes } from "react-router-dom";
import BoardListPage from "../pages/user/BoardListPage/BoardListPage";
import BoardDetailPage from "../pages/user/BoardDetailPage/BoardDetailPage";
import BoardAddPage from "../pages/user/BoardAddPage/BoardAddPage";

function BoardRouter() {
    return (
        <>
            <Routes>
                <Route path="/list" element={<BoardListPage />} />
                <Route path="/:boardId" element={<BoardDetailPage />} />
                <Route path="/add" element={<BoardAddPage />} />
            </Routes>
        </>
    );
}

export default BoardRouter;

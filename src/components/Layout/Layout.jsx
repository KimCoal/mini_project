/** @jsxImportSource @emotion/react */
import { useState } from "react";
import MainHeader from "../MainHeader/MainHeader";
import * as s from "./styles";

function Layout({ children }) {
    const [showSideBar, setShowSideBar] = useState(false);
    return (
        <div css={s.container}>
            <MainHeader
                showSideBar={showSideBar}
                setShowSideBar={setShowSideBar}
            />
            <div
                css={s.blurBox(showSideBar)}
                onClick={() => setShowSideBar((prev) => (prev ? !prev : prev))}>
                {children}
            </div>
        </div>
    );
}

export default Layout;

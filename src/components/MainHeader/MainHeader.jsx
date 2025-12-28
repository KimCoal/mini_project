/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import * as s from "./styles";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";

function MainHeader({ showSideBar, setShowSideBar }) {
    const navigate = useNavigate();

    const onClickSigninHandler = () => {
        navigate("/auth/signin");
    };
    const onClickSignupHandler = () => {
        navigate("/auth/signup");
    };
    return (
        <div css={s.container}>
            <div css={s.leftBox}>
                <button onClick={() => setShowSideBar((prev) => !prev)}>
                    <IoMenu />
                </button>
                <div>TechBoard</div>
            </div>
            <div css={s.rightBox}>
                <button onClick={onClickSigninHandler}>로그인</button>
                <button onClick={onClickSignupHandler}>회원가입</button>
            </div>
            <div css={s.sideBarContainer(showSideBar)}>
                <SideBar />
            </div>
        </div>
    );
}

export default MainHeader;

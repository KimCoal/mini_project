import React from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import { usePrincipalState } from "../../../store/usePrincipalState";

function ProfilePage() {
    const navigate = useNavigate();
    const { isLoggedIn, principal, loading, login, logout } =
        usePrincipalState();
    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <button onClick={() => navigate("/")}>홈으로</button>
                <h1>마이페이지</h1>
                <div css={s.profileBox}>
                    <div css={s.profileTopBox}>
                        <div>
                            <div css={s.profileImg}></div>
                            <div>
                                <h3>{principal?.username}</h3>
                                <p>{principal?.email}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => logout()}>로그아웃</button>
                        </div>
                    </div>
                    <div css={s.profileBottomBox}>
                        <div>작성한 게시물</div>
                        <p>3</p>
                    </div>
                </div>
                <div css={s.profileSettingBox}>
                    <div>
                        <h3>계정 설정</h3>
                        <p>계정 보안 및 정보를 관리하세요</p>
                    </div>
                    <div css={s.settingButtonBox}>
                        <button>비밀번호 변경</button>
                        <button>이메일 인증</button>
                        <button>회원 탈퇴</button>
                    </div>
                </div>
                <div css={s.profileBoardBox}>
                    <div>
                        <h3>내가 작성한 게시물</h3>
                        <p>총 0개의 게시물을 작성했습니다</p>
                    </div>
                    <div css={s.boardBox}>
                        <p>작성한 게시물이 없습다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;

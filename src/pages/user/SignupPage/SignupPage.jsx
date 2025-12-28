import React from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const navigate = useNavigate();
    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <button onClick={() => navigate(-1)}>
                        <IoArrowBack />
                        뒤로가기
                    </button>
                </div>
                <div css={s.signupBox}>
                    <div css={s.topBox}>
                        <h4>회원가입</h4>
                        <p>TechBoard와 함께 시작하세요</p>
                    </div>
                    <div css={s.bottomBox}>
                        <div>
                            <label htmlFor="">이름</label>
                            <input
                                type="text"
                                placeholder="사용자 이름을 입력해주세요."
                            />
                        </div>
                        <div>
                            <label htmlFor="">이메일</label>
                            <input
                                type="email"
                                placeholder="이메일을 입력해주세요."
                            />
                        </div>
                        <div>
                            <label htmlFor="">비밀번호</label>
                            <input
                                type="password"
                                placeholder="비밀번호를 입력해주세요."
                            />
                        </div>
                        <div>
                            <label htmlFor="">비밀번호 확인</label>
                            <input
                                type="password"
                                placeholder="비밀번호를 다시 입력해주세요."
                            />
                        </div>
                        
                        <button>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;

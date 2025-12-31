import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { IoArrowBack } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { oAuth2SignupRequest } from "../../../apis/auth/oAuth2Apis";

function OAuth2SignupPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [signupInputValue, setSignupInputValue] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    // location.state 확인
    useEffect(() => {
        if (!location.state || !location.state.providerUserId) {
            alert("OAuth2 정보가 없습니다. 다시 시도해주세요.");
            navigate("/auth/signin");
        } else {
            // OAuth2에서 받은 이메일로 초기값 설정
            setSignupInputValue((prev) => ({
                ...prev,
                email: location.state.email || "",
            }));
        }
    }, [location.state, navigate]);

    const inputOnChangeHandler = (e) => {
        const { name, value } = e.target;
        setSignupInputValue((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
    // 8자 이상 16자 미만, 영문자, 숫자 및 특수 문자 포함
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    // 이메일 형식

    const oAuth2SignupOnClickHandler = () => {
        if (
            signupInputValue.username.trim().length === 0 ||
            signupInputValue.email.trim().length === 0 ||
            signupInputValue.password.trim().length === 0 ||
            signupInputValue.passwordConfirm.trim().length === 0
        ) {
            alert("모든 항목을 입력해주세요.");
            return;
        }
        if (!emailRegex.test(signupInputValue.email)) {
            alert("이메일 형식에 맞게 입력해주세요.");
            return;
        }

        if (!passwordRegex.test(signupInputValue.password)) {
            alert(
                "비밀번호는 8자 이상 16자 미만, 영문자, 숫자 및 특수 문자 포함해주세요."
            );
            return;
        }
        if (signupInputValue.password !== signupInputValue.passwordConfirm) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (!confirm("회원가입하시겠습니까?")) {
            return;
        }

        // location.state 확인
        if (
            !location.state ||
            !location.state.provider ||
            !location.state.providerUserId
        ) {
            alert("OAuth2 정보가 없습니다. 다시 시도해주세요.");
            navigate("/auth/signin");
            return;
        }

        // 수정: oAuth2SignupRequest 함수 호출
        oAuth2SignupRequest({
            username: signupInputValue.username,
            email: signupInputValue.email,
            password: signupInputValue.password,
            provider: location.state.provider,
            providerUserId: location.state.providerUserId,
        })
            .then((response) => {
                if (response.data.status === "success") {
                    alert(response.data.message);
                    navigate("/auth/signin");
                } else if (response.data.status === "failed") {
                    alert(response.data.message);
                    return;
                }
            })
            .catch((error) => {
                console.error("에러:", error);
                alert("문제가 발생했습니다. 다시 시도해주세요.");
                return;
            });
    };

    // location.state가 없으면 렌더링 안 함
    if (!location.state || !location.state.providerUserId) {
        return null;
    }

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
                                name="username"
                                type="text"
                                placeholder="사용자 이름을 입력해주세요."
                                onChange={inputOnChangeHandler} // 수정
                                value={signupInputValue.username}
                            />
                        </div>
                        <div>
                            <label htmlFor="">이메일</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="이메일을 입력해주세요."
                                onChange={inputOnChangeHandler} // 수정
                                value={signupInputValue.email}
                            />
                        </div>
                        <div>
                            <label htmlFor="">비밀번호</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="비밀번호를 입력해주세요."
                                onChange={inputOnChangeHandler} // 수정
                                value={signupInputValue.password}
                            />
                        </div>
                        <div>
                            <label htmlFor="">비밀번호 확인</label>
                            <input
                                name="passwordConfirm"
                                type="password"
                                placeholder="비밀번호를 다시 입력해주세요."
                                onChange={inputOnChangeHandler} // 수정
                                value={signupInputValue.passwordConfirm}
                            />
                        </div>
                        <button onClick={oAuth2SignupOnClickHandler}>
                            회원가입
                        </button>{" "}
                        {/* 수정 */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OAuth2SignupPage;

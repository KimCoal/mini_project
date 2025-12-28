/** @jsxImportSource @emotion/react */
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import * as s from "./styles";
import { FiUsers, FiZap } from "react-icons/fi";

function MainPage({ showSideBar, setShowSideBar }) {
    return (
        <div
            css={s.container(showSideBar)}
            onClick={() => setShowSideBar((prev) => prev ? !prev : prev)}>
            <div css={s.mainContainer}>
                <div css={s.topBox}>
                    <h1>
                        기술을 공유하고
                        <br />
                        함께 성장하세요
                    </h1>
                    <p>
                        <span>TechBoard</span>는 개발자들이 모여 지식을 나누고
                        서로 배우는 공간입니다.
                        <br /> 당신의 경험을 공유하고, 다른 개발자들과
                        소통하세요.
                    </p>
                    <button>시작하기</button>
                </div>
                <div css={s.bottomBox}>
                    <div css={s.card}>
                        <div>
                            <MdOutlineChatBubbleOutline />
                        </div>
                        <h3>자유로운 소통</h3>
                        <p>
                            개발 관련 질문과 답변을 자유롭게 주고받으며 함께
                            문제를 해결하세요.
                        </p>
                    </div>
                    <div css={s.card}>
                        <div>
                            <FiUsers />
                        </div>
                        <h3>활발한 커뮤니티</h3>
                        <p>
                            다양한 분야의 개발자들과 네트워킹하고 인사이트를
                            얻으세요.
                        </p>
                    </div>
                    <div css={s.card}>
                        <div>
                            <FiZap />
                        </div>
                        <h3>빠른 성장</h3>
                        <p>
                            실시간으로 업데이트되는 최신 기술 트렌드와 팁을
                            확인하세요.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;

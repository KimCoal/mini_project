import React from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function BoardDetailPage() {
    const navigate = useNavigate();
    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <button onClick={() => navigate("/board/list")}>
                        <IoArrowBack />
                        목록으로
                    </button>
                </div>
                <div>
                    <div css={s.topBox}>
                        <h4>React 18의 새로운 기능들</h4>
                        <div css={s.boardBottomBox}>
                            <div>
                                <div>김</div>
                                <p>김개발</p>
                            </div>
                            <div>
                                <p>2025-12-29</p>
                            </div>
                        </div>
                    </div>
                    <div css={s.bottomBox}>
                        <p>
                            React 18에서는 Concurrent Rendering, Automatic
                            Batching, 그리고 새로운 Suspense 기능들이
                            추가되었습니다. 이번 업데이트는 특히 성능 개선에
                            초점을 맞추고 있으며...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardDetailPage;

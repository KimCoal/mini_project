import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { LuSparkle } from "react-icons/lu";

function BoardAddPage() {
    const [contentInputValue, setContentInputValue] = useState("");
    const [contentInputLength, setContentInputLength] = useState(0);

    const contentInputChangeHandler = (e) => {
        setContentInputValue(e.target.value);
    };

    useEffect(() => {
        setContentInputLength(contentInputValue.length);
    }, [contentInputValue]);
    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <div>
                        <LuSparkle />
                    </div>
                    <h1>새로운 이야기를 시작하세요.</h1>
                    <p>당신의 지식과 경험을 커뮤니티와 공유해보세요</p>
                </div>
                <div css={s.bottomContainer}>
                    <div css={s.innerBox}>
                        <div>
                            <label htmlFor="">제목</label>
                            <input
                                type="text"
                                placeholder="제목을 입력해주세요."
                            />
                        </div>
                        <div>
                            <label htmlFor="">내용</label>
                            <textarea
                                type="text"
                                onChange={contentInputChangeHandler}
                                placeholder="내용용을 입력해주세요."
                            />
                        </div>
                        <div>
                            <span>{contentInputValue.length} 자</span>
                            <span>최소 10자 이상 작성해주세요</span>
                        </div>
                        <div>
                            <button>취소</button>
                            <button>게시하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardAddPage;

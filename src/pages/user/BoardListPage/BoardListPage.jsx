/** @jsxImportSource @emotion/react */
import { IoArrowBack } from "react-icons/io5";
import * as s from "./styles";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
    getBoardByKeywordRequest,
    getBoardInfiniteRequest,
    getBoardListRequest,
} from "../../../apis/board/boardApis";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SyncLoader } from "react-spinners";

function BoardListPage() {
    // const [boardList, setBoardList] = useState([]);
    const [searchInputValue, setSearchInputValue] = useState("");
    const navigate = useNavigate();
    const bottomRef = useRef(null);

    const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
        useInfiniteQuery({
            queryKey: ["BoardInfinite"],
            queryFn: getBoardInfiniteRequest,
            initialPageParam: null,
            getNextPageParam: (lastPage) => {
                if (
                    !lastPage?.data?.data?.hasNext ||
                    !lastPage?.data?.data?.boardNextCursor
                ) {
                    // 다음 페이지가 없으면 undefined 반환
                    return undefined;
                }
                return lastPage?.data?.data?.boardNextCursor; // 다음 요청의 params
            },
        });

    const boardList =
        data?.pages?.flatMap((p) => p?.data?.data?.boardRespDtoList ?? []) ??
        [];

    useEffect(() => {
        if (!bottomRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (!first.isIntersecting) return;
                if (!hasNextPage) return;
                if (isFetchingNextPage) return;
                fetchNextPage();
            },
            { threshold: 0.1 }
        );

        observer.observe(bottomRef.current);
        return () => observer.disconnect();
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    // useEffect(() => {
    //     getBoardListRequest().then((response) => {
    //         if (response.data.status === "success") {
    //             setBoardList(response.data.data);
    //         } else if (response.data.status === "failed") {
    //             alert(response.data.message);
    //         }
    //     });
    // }, []);

    // const searchOnChangeHandler = (e) => {
    //     setSearchInputValue(e.target.value);
    // };

    // const searchOnKeyDownHandler = (e) => {
    //     if (e.key === "Enter") {
    //         getBoardByKeywordRequest(searchInputValue).then((response) => {
    //             if (response.data.status === "success") {
    //                 setBoardList(response.data.data);
    //             } else if (response.data.status === "failed") {
    //                 alert(response.data.message);
    //             }
    //         });
    //     }
    // };

    // useEffect(() => {}, [searchInputValue]);

    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div onClick={() => navigate("/")}>
                    <IoArrowBack />홈
                </div>
                <div>
                    <div>게시물</div>
                    <div>
                        <LuSearch />
                        <input
                            type="text"
                            placeholder="게시물 제목을 검색하세요."
                            // onChange={searchOnChangeHandler}
                            // onKeyDown={searchOnKeyDownHandler}
                        />
                    </div>
                </div>
                <div css={s.listContainer}>
                    <ul>
                        {boardList &&
                            boardList.map((board) => (
                                <li
                                    key={board.boardId}
                                    onClick={() =>
                                        navigate(`/board/${board.boardId}`)
                                    }>
                                    <div>
                                        <h4>{board.title}</h4>
                                        <p>{board.content}</p>
                                    </div>
                                    <div css={s.boardBottomBox}>
                                        <div>
                                            <div css={s.profileImgBox}>
                                                <img
                                                    src={board.profileImg}
                                                    alt="profileImg"
                                                />
                                            </div>
                                            <p>{board.username}</p>
                                        </div>
                                        <div>
                                            <p>{board.createDt}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        <div ref={bottomRef} style={{ height: 1 }} />
                    </ul>
                    {isFetchingNextPage && (<div css={s.loadingBox}><SyncLoader color="#4f39f6" /></div>)}
                    {!hasNextPage && <div>No more data</div>}
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default BoardListPage;

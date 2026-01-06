import { useNavigate } from "react-router-dom";
import { usePrincipalState } from "../../../store/usePrincipalState";
import { useEffect, useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../apis/config/firebaseConfig";
import { v4 as uuid } from "uuid";
import {
    changeProfileImg,
    emailSendRequest,
    withdrawRequest,
} from "../../../apis/account/accountApis";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getBoardListByUserIdRequest } from "../../../apis/board/boardApis";
import { SyncLoader } from "react-spinners";

function TailWindEx() {
    const [isSending, setIsSending] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const navigate = useNavigate();
    const { logout } = usePrincipalState();
    const imgInputRef = useRef();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData(["getPrincipal"])?.data
        ?.data;
    const { data, isLoading } = useQuery({
        queryKey: ["getBoardListByUserId"],
        queryFn: () => getBoardListByUserIdRequest(principalData?.userId),
        enabled: !!principalData,
        refetch: 1,
    });

    function onRefresh() {
        queryClient.invalidateQueries({ queryKey: ["getPrincipal"] });
    }

    const changeProfileImgMutation = useMutation({
        mutationKey: "changeProfileImg",
        mutationFn: changeProfileImg,
        onSuccess: (response) => {
            if (response.data.status === "success") {
                alert("프로필 이미지가 변경되었습니다.");
                onRefresh();
                setIsUploading(false);
            } else if (response.data.status === "failed") {
                alert(response.data.message);
                setIsUploading(false);
                return;
            }
        },
        onError: (error) => {
            console.log(error);
            alert("문제가 발생했습니다. 다시 시도해주세요.");
            setIsUploading(false);
            return;
        },
    });

    const onChangeFileHandler = (e) => {
        const file = e.target.files[0];

        if (!confirm("프로필 이미지를 변경하시겠습니까?")) {
            return;
        }

        setIsUploading(true);

        const imageRef = ref(
            storage,
            `profile-img/${uuid()}_${file.name.split(".").pop()}`
        );

        const uploadTask = uploadBytesResumable(imageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progressPercent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                console.log(progressPercent);
                setProgress(progressPercent);
            },
            (error) => {
                setIsUploading(false);
                alert("업로드 중 에러가 발생했습니다.");
            },
            async () => {
                try {
                    const downloadUrl = await getDownloadURL(
                        uploadTask.snapshot.ref
                    );
                    changeProfileImgMutation.mutate({
                        userId: principalData.userId,
                        profileImg: downloadUrl,
                    });
                } catch (error) {
                    setIsUploading(false);
                    alert("이미지 URL을 가져오는데 문제가 발생했습니다.");
                }
            }
        );
    };

    const onClickProfileImgHandler = () => {
        imgInputRef.current.click();
    };

    const onClickEmailSendHandler = () => {
        if (!confirm("이메일 인증코드를 전송하시겠습니까?")) {
            return;
        }
        setIsSending(true);
        emailSendRequest().then((response) => {
            if (response.data.status === "success") {
                setIsSending(false);
                alert(response.data.message);
                return;
            } else if (response.data.status === "failed") {
                setIsSending(false);
                alert(response.data.message);
                return;
            }
        });
    };

    const onClickWithdrawHandler = () => {
        if (!confirm("정말로 회원탈퇴를 하시겠습니까?")) {
            return;
        }

        withdrawRequest().then((response) => {
            if (response.data.status === "success") {
                alert(response.data.message);
                logout();
                navigate("/");
                return;
            } else if (response.data.status === "failed") {
                alert(response.data.message);
                return;
            }
        });
    };

    return (
        <div className="w-full bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 flex justify-center items-start pb-12">
            <div className="w-full max-w-[1000px] flex flex-col items-start gap-6 p-4">
                <button 
                    onClick={() => navigate("/")}
                    className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                    홈으로
                </button>
                
                <h1 className="text-3xl font-bold text-gray-800">마이페이지</h1>
                
                {/* 프로필 박스 */}
                <div className="w-full bg-white p-6 rounded-2xl">
                    <div className="w-full h-[150px] flex justify-between items-center border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-5">
                            <div className="w-[90px] h-[90px] rounded-full flex justify-center items-center overflow-hidden">
                                <img
                                    src={principalData?.profileImg}
                                    alt="profileImg"
                                    onClick={onClickProfileImgHandler}
                                    className="w-full h-full object-cover cursor-pointer"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={imgInputRef}
                                    onChange={onChangeFileHandler}
                                    className="hidden"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                    {principalData?.username}
                                </h3>
                                <p className="text-gray-600">{principalData?.email}</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button 
                                onClick={() => logout()}
                                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                로그아웃
                            </button>
                            {principalData?.authorities[0].authority === "ROLE_ADMIN" && (
                                <button
                                    onClick={() => navigate("/admin/dashboard")}
                                    className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all"
                                >
                                    관리자 대시보드
                                </button>
                            )}
                        </div>
                    </div>
                    
                    <div className="w-full h-[150px] flex justify-center items-center flex-col">
                        <div className="text-gray-600 mb-2">작성한 게시물</div>
                        <p className="text-2xl font-bold text-gray-800">{data?.data?.data.length || 0}</p>
                    </div>
                </div>

                {/* 계정 설정 박스 */}
                <div className="w-full bg-white p-6 rounded-2xl">
                    <div className="mb-5">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">계정 설정</h3>
                        <p className="text-gray-600">계정 보안 및 정보를 관리하세요</p>
                    </div>
                    <div className="w-full flex flex-col gap-4">
                        <button
                            onClick={() => navigate("/profile/change/password")}
                            className="border border-gray-200 bg-transparent px-3 py-4 text-base rounded-lg text-left cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            비밀번호 변경
                        </button>
                        {principalData?.authorities[0]?.authority !== "ROLE_USER" && (
                            <button 
                                onClick={onClickEmailSendHandler}
                                className="border border-gray-200 bg-transparent px-3 py-4 text-base rounded-lg text-left cursor-pointer hover:bg-gray-50 transition-colors"
                            >
                                이메일 인증
                            </button>
                        )}
                        <button 
                            onClick={onClickWithdrawHandler}
                            className="border border-gray-200 bg-transparent px-3 py-4 text-base rounded-lg text-left cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            회원탈퇴
                        </button>
                    </div>
                </div>

                {/* 내가 작성한 게시물 박스 */}
                <div className="w-full bg-white p-6 rounded-2xl">
                    <div className="mb-5">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">내가 작성한 게시물</h3>
                        <p className="text-gray-600">
                            총 {data?.data?.data.length || 0}개의 게시물을 작성했습니다
                        </p>
                    </div>
                    <div className="w-full h-[600px] flex justify-center items-center overflow-auto p-5">
                        <ul className="w-full h-full flex flex-col gap-8">
                            {isLoading ? (
                                <div className="flex justify-center items-center h-full">
                                    <span>로딩중</span>
                                </div>
                            ) : (
                                data?.data?.data.map((board) => (
                                    <li
                                        key={board.boardId}
                                        onClick={() => navigate(`/board/edit/${board.boardId}`)}
                                        className="list-none flex flex-col gap-4 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                                    >
                                        <div className="flex flex-col gap-2.5">
                                            <h4 className="text-xl font-normal text-gray-900">
                                                {board.title}
                                            </h4>
                                            <p className="text-base font-light text-gray-500">
                                                {board.content}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-8 h-8 rounded-full bg-aquamarine flex justify-center items-center overflow-hidden">
                                                    <img
                                                        src={board.profileImg}
                                                        alt="profileImg"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <p className="text-sm text-gray-900">{board.username}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-900">{board.createDt}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            {/* 업로드 진행률 오버레이 */}
            {isUploading && (
                <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50">
                    <h4 className="text-6xl text-gray-900">{progress}%</h4>
                </div>
            )}

            {/* 이메일 전송 로딩 오버레이 */}
            {isSending && (
                <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex justify-center items-center z-50">
                    <SyncLoader color="#4f39f6" height={50} />
                </div>
            )}
        </div>
    );
}

export default TailWindEx;
import { css } from "@emotion/react";

export const container = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eef2ff;
    background: linear-gradient(
        90deg,
        rgba(238, 242, 255, 1) 0%,
        rgba(250, 245, 255, 1) 50%,
        rgba(253, 242, 248, 1) 100%
    );
`;

export const mainContainer = css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div > button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        padding: 5px 12px;
        border: none;
        background-color: transparent;
        border-radius: 8px;
        color: oklch(0.446 0.03 256.802);
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            background-color: #f2f2f2;
            color: black;
        }
    }
`;

export const signupBox = css`
    width: 448px;
    background-color: white;
    border-radius: 14px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const topBox = css`
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > h4 {
        font-size: 30px;
        font-weight: 400;
        color: black;
    }

    & > p {
        font-size: 16px;
        font-weight: 300;
        color: #717182;
    }
`;

export const bottomBox = css`
    padding: 0 24px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 5px;

        & > input {
            outline: none;
            padding: 12px 8px;
            border-radius: 8px;
            border: 1px solid #dbdbdb;
            font-size: 14px;
            background-color: rgb(243, 243, 245);

            &:focus {
                outline: 3px solid #aaaaaa;
            }
        }
    }

    & > button {
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 14px;
        transition: all 0.15s ease;
        cursor: pointer;
        background: #4f39f6;
        background: linear-gradient(
            90deg,
            rgba(79, 57, 246, 0.9) 0%,
            rgba(152, 16, 250, 0.9) 100%
        );
        color: white;

        &:hover {
            background: linear-gradient(
                90deg,
                rgba(79, 57, 246, 1) 0%,
                rgba(152, 16, 250, 1) 100%
            );
        }
    }
`;

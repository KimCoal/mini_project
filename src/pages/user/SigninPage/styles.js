import { css } from "@emotion/react";

export const container = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eef2ff;
    background: linear-gradient(
        90deg,
        rgba(238, 242, 255, 1) 0%,
        rgba(250, 245, 255, 1) 50%,
        rgba(253, 242, 248, 1) 100%
    );;
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
        cursor: pointer;
        color: oklch(0.446 0.03 256.802);
        transition: all 0.15s ease;
        &:hover {
            background-color: #f2f2f2;
            color: black;
        }
    }
`;

export const signinBox = css`
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
        margin: 0;
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
`;

export const inputBox = css`
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 4px;

        & > input {
            outline: none;
            padding: 12px 8px;
            border-radius: 8px;
            border: 1px solid #dbdbdb;
            font-size: 14px;
            background-color: rgb(243, 243, 245);

            &:focus {
                outline: 2px solid #aaaaaa;
            }
        }
    }
    & > button {
        border: none;
        border-radius: 8px;
        padding: 10px 32px;
        font-size: 18px;
        background: linear-gradient(
            90deg,
            rgba(79, 57, 246, 0.9) 0%,
            rgba(152, 16, 250, 0.9) 100%
        );
        color: white;
        transition: all 0.15s ease;
        cursor: pointer;

        &:hover {
            background: linear-gradient(
                90deg,
                rgba(79, 57, 246, 1) 0%,
                rgba(152, 16, 250, 1) 100%
            );
        }
    }
`;

export const lineBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &::before {
        width: calc(50% - 20px);
        display: block;
        content: "";
        height: 1px;
        background-color: oklch(0.551 0.027 264.364);
    }

    &::after {
        width: calc(50% - 20px);
        display: block;
        content: "";
        height: 1px;
        background-color: oklch(0.551 0.027 264.364);
    }

    & > span {
        text-align: center;
        width: 40px;
        font-size: 12px;
        padding: 0 8px;
        box-sizing: border-box;
        color: oklch(0.551 0.027 264.364);
    }
`;

export const buttonBox = css`
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > button {
        border: 1px solid #dbdbdb;
        padding: 8px 16px;
        border-radius: 8px;
        font-size: 14px;
        transition: all 0.15s ease;
        cursor: pointer;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        &:hover {
            background-color: #f2f2f2;
        }
    }
`;

export const signupBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    & > a {
        text-decoration: none;
        color: oklch(0.457 0.24 277.023);
    }
`;

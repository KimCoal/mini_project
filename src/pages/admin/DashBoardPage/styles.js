import { css } from "@emotion/react";

export const container = css`
    width: 100vw;
    height: 100vh;
    background-color: #f9fafb;
    display: flex;
    justify-content: center;
    padding: 80px 0;
    box-sizing: border-box;
`;

export const mainContainer = css`
    width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const headerContainer = css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const statusContainer = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    & > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid #dbdbdb;
        border-radius: 14px;
        box-sizing: border-box;
        background-color: white;
        gap: 30px;

        & > div:nth-of-type(1) {
            padding: 24px 24px 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        & > div:nth-of-type(2) {
            padding: 0 24px 24px 24px;
        }
    }
`;

export const buttonContainer = css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    & > button {
        width: 100%;
        padding: 32px;
        border: 1px solid #dbdbdb;
        border-radius: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        box-sizing: border-box;
        cursor: pointer;

        & > div {
            width: 56px;
            height: 56px;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 14px;
            border: 1px solid #dbdbdb;
            margin-bottom: 15px;
        }

        & > h3 {
            font-size: 26px;
        }
    }
`;

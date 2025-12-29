import { css } from "@emotion/react";

export const container = css`
    width: 300px;
    height: 100vh;
    background-color: white;
    box-shadow: 10px 0px 20px 5px rgba(0, 0, 0, 0.1);
`;

export const topBox = css`
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #dbdbdb;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    & > div {
        font-size: 18px;
        font-weight: 700;
    }

    & > button {
        width: 36px;
        height: 36px;
        padding: 0;
        box-sizing: border-box;
        border: none;
        background-color: transparent;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        transition: all 0.15s ease;

        &:hover {
            background-color: #f2f2f2;
        }
    }
`

export const bottomBox = css`
    width: 100%;

    & > ul {
        list-style: none;
        padding: 16px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 7px;

        & > li {
            padding: 12px 16px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 16px;
            color: #364154;
            cursor: pointer;
            border-radius: 10px;
            transition: all 0.15s ease;

            &:hover {
                background-color: #f2f2f2;
            }
        }
    }
`;
import styled from "styled-components";

export const LoaderContainer = styled.div`
    background-color: #000000;
    opacity: 0.7;
    position: fixed;
    height: 100%; 
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 0;
`;

export const Loader = styled.div`
    width: 100px;
    height: 100px;
    border: 7px solid #FFFFFF;
    border-top-color: #ee6b2f;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

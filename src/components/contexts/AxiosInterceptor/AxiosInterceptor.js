import React, { useEffect, useState } from "react";
import { api } from "../../../scripts/Request";
import styled from "styled-components";
import toastr from "toastr";

export const AxiosInterceptors = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    /** This function is just simulate production enviroment, 
     * if not has timout the loader is removed too fast and not ,
     * see it. Case not want timeout, only call setIsLoading(false)
     * where is called _removeLoaderTimeout()  */
    const _removeLoaderTimeout = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 700);
    };

    api.interceptors.request.use(
        (request) => {
            setIsLoading(true);
            return request;
        },
        (error) => {
            _removeLoaderTimeout();
            toastr.error("Internal Server Error");
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (request) => {
            _removeLoaderTimeout();
            return request;
        },
        (error) => {
            _removeLoaderTimeout();
            toastr.error("Internal Server Error");
            return Promise.reject(error);
        }
    );
    
    return (
        <React.Fragment>
            {isLoading && <LoaderContainer>
                <Loader />
            </LoaderContainer>}
            {children}
        </React.Fragment>
    );
};


const LoaderContainer = styled.div`
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
const Loader = styled.div`
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

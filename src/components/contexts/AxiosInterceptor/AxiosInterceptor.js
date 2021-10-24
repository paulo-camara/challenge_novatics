import React, { useState } from "react";
import { LoaderContainer, Loader } from '../../shared/Loader/Loader';
import { api } from "../../../scripts/Request";
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

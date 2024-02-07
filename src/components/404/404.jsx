import React from "react";
import { Link } from "react-router-dom";

import ImgNotFound from '../../assets/img/404/NotFound404.jpeg';

const Error404 = () => {
    // const ErrorImg = 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690478092/Projects/qr-service/imgs/cars404.png';
    return (
        <div className="tw-flex tw-justify-center tw-items-center tw-container tw-h-screen tw-mx-auto">
            <div className="tw-grid tw-grid-cols-1 tw-sm:grid-cols-2 tw-ml-4">
                <div className="tw-col-span-2 tw-sm:col-auto">
                    <p className='tw-text-4xl tw-uppercase tw-font-semibold tw-md:mx-24 tw-w-max tw-relative'>
                        Lo sentimos!
                    </p>
                    <h2 className='tw-text-secondary tw-text-5xl xl:tw-text-5xl tw-uppercase'>
                        404 - Page Not Found
                    </h2>
                    <p className='tw-my-5 tw-text-secondary-light'>
                        Es posible que la página que busca haya sido eliminada, haya cambiado de nombre o no esté disponible temporalmente.
                    </p>
                    <p className="tw-my-2 tw-text-secondary-light">
                        Para volver al inicio, pulse
                        <Link to="/" className="hover:tw-text-secondary/80">
                            <strong > Aquí </strong>
                        </Link>
                    </p>
                    <div className="tw-col-span-2 tw-sm:col-auto xl:tw-flex xl:tw-justify-center">
                        <img src={ImgNotFound} alt="404-img" className="tw-w-72" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Error404;
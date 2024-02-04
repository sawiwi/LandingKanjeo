import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
    const ErrorImg = 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690478092/Projects/qr-service/imgs/cars404.png';
    return (
        <div className="tw-flex tw-justify-center tw-items-center tw-container tw-h-screen tw-mx-auto">
            <div className="tw-grid tw-grid-cols-1 tw-sm:grid-cols-2 tw-ml-4">
                <div className="tw-col-span-2 tw-sm:col-auto">
                    <p className='tw-text-4xl tw-uppercase tw-font-semibold tw-md:mx-24 tw-w-max tw-relative'>
                        OOPS!
                    </p>
                    <h2 className='tw-text-primary tw-text-5xl tw-xl:text-5xl tw-uppercase'>
                        404 - Page Not Found
                    </h2>
                    <p className='tw-my-5'>
                        Es posible que la página que busca haya sido eliminada, haya cambiado de nombre o no esté disponible temporalmente.
                    </p>
                    <p className="tw-my-2">
                        <Link to="/" className="tw-hover:text-orange-400">
                            <strong>Pulse aquí para volver a la página de inicio</strong>
                        </Link>
                    </p>
                    <div className="tw-col-span-2 tw-sm:col-auto">
                        <img src={ErrorImg} alt="404-img" className="tw-w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Error404;
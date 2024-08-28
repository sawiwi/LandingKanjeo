import React from "react";
import { Link } from "react-router-dom";

import ImgNotFound from '../../assets/img/404/NotFound404.jpeg';

const Error404 = () => {
    // const ErrorImg = 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690478092/Projects/qr-service/imgs/cars404.png';
    return (
        <div className="flex justify-center items-center container h-screen mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 ml-4">
                <div className="col-span-2 sm:col-auto">
                    <p className='text-4xl uppercase font-semibold md:mx-24 w-max relative'>
                        Lo sentimos!
                    </p>
                    <h2 className='text-secondary text-5xl xl:text-5xl uppercase'>
                        404 - Page Not Found
                    </h2>
                    <p className='my-5 text-secondary-light'>
                        Es posible que la página que busca haya sido eliminada, haya cambiado de nombre o no esté disponible temporalmente.
                    </p>
                    <p className="my-2 text-secondary-light">
                        Para volver al inicio, pulse
                        <Link to="/" className="hover:text-secondary/80">
                            <strong > Aquí </strong>
                        </Link>
                    </p>
                    <div className="col-span-2 sm:col-auto xl:flex xl:justify-center">
                        <img src={ImgNotFound} alt="404-img" className="w-72" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Error404;
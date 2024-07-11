import Button from '../../../../ui/button';
import Alert from '../../../../alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';

const ContactRealtor = () =>{
  const [loading, setLoading] = useState(false);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log('enviado')
  };

    return(
        <>
        <div className="tw-w-full tw-justify-center">
                    <h3 className="tw-text-xl tw-text-center tw-font-semibold">
                        Contacta
                    </h3>
            <div className="tw-p-2 tw-px-3">
                <Fade direction="up" triggerOnce={true}>
                <div className='tw-flex tw-justify-center tw-mx-24'>
                    <form  onSubmit={onFormSubmit} className='tw-w-full'>
                        <div className="tw-relative tw-mb-2 tw-mt-4">
                            <input
                                disabled
                                autoComplete="off"
                                id="realtor"
                                name="realtor"
                                type="text"
                                value={''}
                                onChange={()=> console.log('nombre')}
                                className="tw-peer tw-placeholder-transparent tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-rounded-md tw-pl-2 tw-text-gray-800 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                placeholder="Corredor 1"
                            />
                            <label
                                htmlFor="realtor"
                                className="tw-absolute tw-pl-2 tw-left-0 tw--top-6 tw-text-gray-800 tw-text-md peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-800/80 peer-placeholder-shown:tw-top-2 tw-transition-all tw-duration-300  peer-focus:tw--top-7 peer-focus:tw-text-gray-800/80 peer-focus:tw-text-lg"
                            >
                               Contactaras con el Corredor
                            </label>
                        </div>
                        <div className="tw-relative tw-mb-2 tw-mt-8">
                            <input
                                autoComplete="off"
                                id="name"
                                name="name"
                                type="text"
                                value={''}
                                onChange={()=> console.log('nombre')}
                                className="tw-peer tw-placeholder-transparent tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-rounded-md tw-pl-2 tw-text-gray-800 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                placeholder="Ingresa tu nombre personal o empresa"
                            />
                            <label
                                htmlFor="name"
                                className="tw-absolute tw-pl-2 tw-left-0 tw--top-6 tw-text-gray-800 tw-text-md peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-800/80 peer-placeholder-shown:tw-top-2 tw-transition-all tw-duration-300  peer-focus:tw--top-7 peer-focus:tw-text-gray-800/80 peer-focus:tw-text-lg"
                            >
                                Ingresa tu Nombre
                            </label>
                        </div>
                        <div className="tw-relative tw-mb-4 tw-mt-8">
                            <input
                                autoComplete="off"
                                id="email"
                                name="email"
                                type="email"
                                value={''}
                                onChange={()=> console.log('correo')}
                                className="tw-peer tw-placeholder-white tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-pl-2 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                placeholder="Correo electrónico"
                            />
                            <label
                                htmlFor="email"
                                className="tw-absolute tw-pl-2 tw-left-0 tw--top-6 tw-text-gray-800 tw-text-sm peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-800/80 peer-placeholder-shown:tw-top-2 tw-transition-all tw-duration-300  peer-focus:tw--top-7 peer-focus:tw-text-gray-800/80 peer-focus:tw-text-lg"
                            >
                                Correo electrónico
                            </label>
                        </div>
                        <div className="tw-relative tw-mb-4 tw-mt-8">
                            <input
                                autoComplete="off"
                                id="subject"
                                name="subject"
                                type="text"
                                value={''}
                                onChange={()=> console.log('correo')}
                                className="tw-peer tw-placeholder-white tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-pl-2 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                placeholder="Asunto"
                            />
                            <label
                                htmlFor="subject"
                                className="tw-absolute tw-pl-2 tw-left-0 tw--top-6 tw-text-gray-800 tw-text-sm peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-800/80 peer-placeholder-shown:tw-top-2 tw-transition-all tw-duration-300  peer-focus:tw--top-7 peer-focus:tw-text-gray-800/80 peer-focus:tw-text-lg"
                            >
                                Asunto
                            </label>
                        </div>
                        <div className="tw-relative tw-mb-4 tw-mt-8">
                            <textarea
                                autoComplete="off"
                                id="description"
                                name="description"
                                type="text"
                                rows={2}
                                value={''}
                                onChange={()=> console.log('descripcion')}
                                className="tw-peer tw-placeholder-white tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-pl-2 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                placeholder="Describe"
                            />
                            <label
                                htmlFor="description"
                                className="tw-absolute tw-pl-2 tw-left-0 tw--top-6 tw-text-gray-800 tw-text-sm peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-800/80 peer-placeholder-shown:tw-top-2 tw-transition-all tw-duration-300  peer-focus:tw--top-7 peer-focus:tw-text-gray-800/80 peer-focus:tw-text-lg"
                            >
                                Descripción
                            </label>
                        </div>
                        <div className="tw-relative tw-my-3 tw-mt-8">
                            <Button
                            type="submit"
                            className="tw-bg-secondary hover:tw-bg-secondary-light tw-text-primary tw-rounded-md tw-px-12 tw-py-2 tw-w-full"
                            >
                            {loading ? 'Enviando...' : 'Enviar'}
                            </Button>
                        </div>
                    {/* {errorMsg.fieldsRequired && (
                        <Alert message={errorMsg.fieldsRequired} />
                    )}
                    {errorMsg.serverError && (
                        <Alert message={errorMsg.serverError} />
                    )} */}
                    </form>
                </div>
                </Fade>
            </div>
            <ToastContainer />
        </div>
    </>
    )
}
export default ContactRealtor;
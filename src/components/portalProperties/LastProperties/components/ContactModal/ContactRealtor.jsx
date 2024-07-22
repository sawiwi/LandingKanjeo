import Button from '../../../../ui/button';
import Alert from '../../../../alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import ContactApiFormServices from '../../../../../services/portal-contact/ContactFormServices';

const ContactRealtor = ({property}) =>{
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    to: property?.user.session.email,
    phone: "",
    mail: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const inputData = { ...formData, [e.target.name]: e.target.value };
    setFormData(inputData);
  };

  const [errorMsg, setErrorMsg] = useState({
    fieldsRequired: '',
    serverError: '',
  });

    /* ToastMessage : Success */
    const showToastSuccessMsg = (msg) => {
        toast.success(msg, {
          position: 'bottom-center',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      };
    
      /* ToastMessage : Error */
      const showToastErrorMsg = (msg) => {
        toast.error(msg, {
          position: 'bottom-center',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if(Object.values(formData).includes('')){
        setErrorMsg({
            fieldsRequired:'Todos los campos son requeridos'
        });
        setTimeout(() => {
            setErrorMsg({
                fieldsRequired: '',
            });
        }, 3000);
        return;
    }
    console.log('formData', formData)
    try {
        setLoading(true);
        const response = await ContactApiFormServices.contactForm(formData)
            console.log('formData on try', formData)

        if (response?.success === 200 || response?.success === 'true'){
            showToastErrorMsg(
                'Formulario enviado con exito!'
            )
            setLoading(false);
            resetForm();
            setErrorMsg({
                allFieldRequierd: '',
                serverEmailError: '',
            });
        }else {
            showToastErrorMsg(
                'Error al Completar tu Solicitud, Verifique los campos e Intente nuevamente.'
              );
              setLoading(false);
        }
    }catch (error) {
        setLoading(false);
        showToastErrorMsg(
            'Lo siento, no hemos podido enviar tu formulario, Vuelve a intentarlo más tarde!'
        );
    }
  };


  const resetForm = () =>{
    setFormData({
        name: "",
        lastName: "",
        to: property?.user.session.email,
        phone: "",
        mail: "",
        subject: "",
        message: "",
    })
  }

    return(
        <>
        <div className="tw-w-full tw-justify-center">
            <h3 className="tw-text-2xl tw-text-center tw-font-semibold tw-mb-3">
                Contacta
            </h3>
            <div className="tw-p-2 tw-px-3">
                <Fade direction="up" triggerOnce={true}>
                <div className='tw-grid tw-text-center'>
                        <p>Corredor: <b>{property?.user.name || 'No se encontró nombre'} {property?.user.lastName || 'No se encontró apellido'}</b> </p>
                        <p>Email: <b>{property?.user.session.email || 'No se encontró email'}</b></p>
                    </div>
                <div className='tw-flex tw-justify-center tw-mx-24'>
                    <form onSubmit={onFormSubmit} className='tw-w-full'>
                        <div className='tw-flex tw-flex-col md:tw-flex-row tw-gap-2'>
                            <div className="tw-relative tw-mb-2 tw-mt-8 tw-w-full">
                                <input
                                    autoComplete="off"
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData?.name}
                                    onChange={handleInputChange}
                                    className="tw-peer tw-placeholder-transparent tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-rounded-md tw-pl-2 tw-text-gray-800 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                    placeholder="Ingresa tu nombre"
                                />
                                <label
                                    htmlFor="name"
                                    className="tw-absolute tw-pl-2 tw-left-0 tw--top-6 tw-text-gray-800 tw-text-md peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-800/80 peer-placeholder-shown:tw-top-2 tw-transition-all tw-duration-300  peer-focus:tw--top-7 peer-focus:tw-text-gray-800/80 peer-focus:tw-text-lg"
                                >
                                    Ingresa tu Nombre
                                </label>
                            </div>
                            <div className="tw-relative tw-mb-2 tw-mt-8 tw-w-full">
                                <input
                                    autoComplete="off"
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formData?.lastName}
                                    onChange={handleInputChange}
                                    className="tw-peer tw-placeholder-transparent tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-rounded-md tw-pl-2 tw-text-gray-800 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                    placeholder="Ingresa tu apellido"
                                />
                                <label
                                    htmlFor="lastName"
                                    className="tw-absolute tw-pl-2 tw-left-0 tw--top-6 tw-text-gray-800 tw-text-md peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-800/80 peer-placeholder-shown:tw-top-2 tw-transition-all tw-duration-300  peer-focus:tw--top-7 peer-focus:tw-text-gray-800/80 peer-focus:tw-text-lg"
                                >
                                    Ingresa tu Apellido
                                </label>
                        </div>
                        </div>
                        <div className='tw-flex tw-flex-col md:tw-flex-row tw-gap-2'>
                            <div className="tw-relative tw-mb-4 tw-mt-8 tw-w-full">
                                <input
                                    autoComplete="off"
                                    id="mail"
                                    name="mail"
                                    type="email"
                                    value={formData?.mail}
                                    onChange={handleInputChange}
                                    className="tw-peer tw-placeholder-white tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-pl-2 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                    placeholder="Correo electrónico"
                                />
                                <label
                                    htmlFor="mail"
                                    className="tw-absolute tw-pl-2 tw-left-0 tw--top-6 tw-text-gray-800 tw-text-sm peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-800/80 peer-placeholder-shown:tw-top-2 tw-transition-all tw-duration-300  peer-focus:tw--top-7 peer-focus:tw-text-gray-800/80 peer-focus:tw-text-lg"
                                >
                                    Correo electrónico
                                </label>
                            </div>
                            <div className="tw-relative tw-mb-4 tw-mt-8 tw-w-full">
                                <input
                                    autoComplete="off"
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData?.phone}
                                    onChange={handleInputChange}
                                    className="tw-peer tw-placeholder-white tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-pl-2 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                    placeholder="9 823 233 23"
                                />
                                <label
                                    htmlFor="phone"
                                    className="tw-absolute tw-pl-2 tw-left-0 tw--top-6 tw-text-gray-800 tw-text-sm peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-800/80 peer-placeholder-shown:tw-top-2 tw-transition-all tw-duration-300  peer-focus:tw--top-7 peer-focus:tw-text-gray-800/80 peer-focus:tw-text-lg"
                                >
                                    N° Contacto
                                </label>
                            </div>
                        </div>
                        <div className="tw-relative tw-mb-4 tw-mt-8">
                            <input
                                autoComplete="off"
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData?.subject}
                                onChange={handleInputChange}
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
                                id="message"
                                name="message"
                                type="text"
                                rows={3}
                                value={formData?.message}
                                onChange={handleInputChange}
                                className="tw-peer tw-placeholder-white tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-pl-2 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                placeholder="Describe"
                            />
                            <label
                                htmlFor="message"
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
                        {errorMsg.fieldsRequired && (
                            <Alert message={errorMsg.fieldsRequired} />
                        )}
                        {errorMsg.serverError && (
                            <Alert message={errorMsg.serverError} />
                        )}
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
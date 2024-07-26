import Button from '../../../ui/button';
import Alert from '../../../alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import ContactApiFormServices from '../../../../services/portal-contact/ContactFormServices';

const ContactProfile = ({dataUser}) =>{
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    to: dataUser?.session.email,
    phone: "",
    mail: "",
    subject: "",
    message: ""
  });

//   const phoneRegex = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$|^(\+?56)?(\s?)(0?2|0[3-8]\d)(\s?)\d{7}$/;
  const phoneRegex = /^(0?9\d{8})$/;

  const handleInputChange = (e) => {
    const inputData = { ...formData, [e.target.name]: e.target.value };
    setFormData(inputData);
  };

  const handleInpChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "phone" && !phoneRegex.test(value)) {
      setErrorMsg({
        ...errorMsg,
        phone: 'Error al ingresar número de celular, debe comenzar con 9 acompañado de 8 digitos',
      });
    } else {
      setErrorMsg({
        ...errorMsg,
        phone: '',
      });
    }

    setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handlePhraseClick = (phrase) => {
        setFormData({
          ...formData,
          message: phrase
        });
      };

  const [errorMsg, setErrorMsg] = useState({
    fieldsRequired: '',
    serverError: '',
    phone: '',
  });


    /* ToastMessage : Success */
    const showToastSuccessMsg = (msg) => {
        toast.success(msg, {
          position: 'top-center',
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
          position: 'top-center',
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
    if(Object.values(formData).includes('') || errorMsg.phone){
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
    try {
        setLoading(true);
        const response = await ContactApiFormServices.contactForm(formData);

        if (response?.status === 200 ||  response?.status === 201 ||  response?.status === true ){
            showToastSuccessMsg(
                'Formulario enviado con exito!'
            )
            setLoading(false);
            resetForm();
            setErrorMsg({
                allFieldRequierd: '',
                serverEmailError: '',
                phone:'',
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
        to: dataUser?.session.email,
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
                        <p>Corredor: <b>{dataUser?.name || 'No se encontró nombre'} {dataUser?.lastName || 'No se encontró apellido'}</b> </p>
                        <p>Email: <b>{dataUser?.session.email || 'No se encontró email'}</b></p>
                    </div>
                <div className='tw-flex tw-justify-center md:tw-mx-2 2xl:tw-mx-16'>
                    <form onSubmit={onFormSubmit} className='tw-w-full'>
                        <div className='tw-flex tw-flex-col md:tw-flex-row tw-gap-2'>
                            <div className="tw-relative tw-mb-2 tw-mt-6 tw-w-full">
                                <label
                                    htmlFor="name"
                                    className="tw-text-gray-800 tw-text-base tw-font-semibold xl:tw-mb-2 tw-transition-all tw-duration-300"
                                >
                                    Nombre
                                </label>
                                <input
                                    autoComplete="off"
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData?.name}
                                    onChange={handleInputChange}
                                    className="tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-p-2 tw-text-sm"
                                    // className="tw-peer tw-placeholder-transparent tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-rounded-md tw-pl-2 tw-text-gray-800 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                    placeholder="Ingresa tu nombre"
                                />
                          
                            </div>
                            <div className="tw-relative tw-mb-2 tw-mt-6 tw-w-full">
                                <label
                                    htmlFor="lastName"
                                    className="tw-text-gray-800 tw-text-base tw-font-semibold xl:tw-mb-2 tw-transition-all tw-duration-300"
                                >
                                    Apellido
                                </label>
                                <input
                                    autoComplete="off"
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={formData?.lastName}
                                    onChange={handleInputChange}
                                    className="tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-p-2 tw-text-sm"
                                    // className="tw-peer tw-placeholder-transparent tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-rounded-md tw-pl-2 tw-text-gray-800 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                    placeholder="Ingresa tu apellido"
                                />
                           
                            </div>
                        </div>
                        <div className='tw-flex tw-flex-col md:tw-flex-row tw-gap-2'>
                            <div className="tw-relative tw-mb-4 tw-mt-2 tw-w-full">
                                <label
                                    htmlFor="email"
                                    className="tw-text-gray-800 tw-text-base tw-font-semibold xl:tw-mb-2 tw-transition-all tw-duration-300"
                                >
                                    Correo
                                </label>
                                <input
                                    autoComplete="off"
                                    id="mail"
                                    name="mail"
                                    type="email"
                                    value={formData?.mail}
                                    onChange={handleInputChange}
                                    className="tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-p-2 tw-text-sm"
                                    // className="tw-peer tw-placeholder-white tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-pl-2 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                    placeholder="Correo electrónico"
                                />
                         
                            </div>
                            <div className="tw-relative tw-mb-4 tw-mt-2 tw-w-full">
                                <label
                                    htmlFor="phone"
                                    className="tw-text-gray-800 tw-text-base tw-font-semibold xl:tw-mb-2 tw-transition-all tw-duration-300"
                                >
                                    N° Contacto
                                </label>
                                <input
                                    autoComplete="off"
                                    maxLength={9}
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData?.phone}
                                    onChange={handleInpChange}
                                    className="tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-p-2 tw-text-sm"
                                    // className="tw-peer tw-placeholder-white tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-pl-2 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                    placeholder="912323221"
                                />
                      
                            </div>
                        </div>
                        <div className="tw-relative tw-mb-4 tw-mt-2">
                            <label
                                htmlFor="subject"
                                className="tw-text-gray-800 tw-text-base tw-font-semibold xl:tw-mb-2 tw-transition-all tw-duration-300"
                            >
                                Asunto
                            </label>
                            <input
                                autoComplete="off"
                                id="subject"
                                name="subject"
                                type="text"
                                value={formData?.subject}
                                onChange={handleInputChange}
                                className="tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-p-2 tw-text-sm"
                                // className="tw-peer tw-placeholder-white tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-pl-2 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                placeholder="Asunto"
                            />
                  
                        </div>
                        <div className="tw-relative tw-mb-4 tw-mt-2">
                            <label
                                htmlFor="message"
                                className="tw-text-gray-800 tw-text-base tw-font-semibold xl:tw-mb-2 tw-transition-all tw-duration-300"
                            >
                                Descripción
                            </label>
                            <textarea
                                autoComplete="off"
                                id="message"
                                name="message"
                                type="text"
                                rows={3}
                                value={formData?.message}
                                className="tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-p-2 tw-text-sm"
                                onChange={handleInputChange}
                                // className="tw-peer tw-placeholder-white tw-h-10 tw-w-full tw-border tw-text-gray-800/70 tw-text-gray-800 tw-rounded-md tw-pl-2 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                                placeholder="Ingresa o elige una breve descripción para contactar"
                            />

                            <div className='tw-flex tw-flex-row tw-gap-2'>
                                <button
                                type='button' 
                                onClick={() => handlePhraseClick('Muy buenas, necesito asesoría sobre arriendo / venta')}
                                className='tw-border tw-border-spacing-1 tw-border-gray-500 tw-p-2 tw-bg-transparent hover:tw-shadow-lg tw-duration-200 tw-rounded-lg tw-text-sm tw-text-gray-600'>
                                    Muy buenas, necesito asesoría sobre arriendo / venta
                                </button>
                                <button 
                                type='button' 
                                onClick={() => handlePhraseClick('Quisiera saber más sobre arriendo!')}
                                className='tw-border tw-border-spacing-1 tw-border-gray-500 tw-p-2 tw-bg-transparent hover:tw-shadow-lg tw-duration-200 tw-rounded-lg tw-text-sm tw-text-gray-600'>
                                     Quisiera saber más sobre arriendo!
                                </button>
                                <button 
                                type='button' 
                                onClick={() => handlePhraseClick('Estoy interesado en una asesoria, necesito vender rápido.')}
                                className='tw-border tw-border-spacing-1 tw-border-gray-500 tw-p-2 tw-bg-transparent hover:tw-shadow-lg tw-duration-200 tw-rounded-lg tw-text-sm tw-text-gray-600'>
                                    Estoy interesado en una asesoria, necesito vender rápido.
                                </button>
                            </div>
                        </div>
                        <div className="tw-relative tw-my-3 tw-mt-2">
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
                        {errorMsg.phone && (
                            <Alert message={errorMsg.phone} />
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
export default ContactProfile;
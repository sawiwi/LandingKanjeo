import { useState } from 'react';
import ContactFormServices from '../../services/ContactFormServices';
import RegisterNewUser from '../../services/Register/RegisterFormServices';

import Button from '../ui/button';
import Alert from '../alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade } from 'react-awesome-reveal';


const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // phone: '',
    // message: '',
  });
  // const [formApiData, setFormApiData] = useState({
  //   name:'',
  //   email: ''
  // })


  const [errorMsg, setErrorMsg] = useState({
    fieldsRequired: '',
    serverError: '',
  });

  const handleInputChange = (e) => {
    const inputData = { ...formData, [e.target.name]: e.target.value };
    setFormData(inputData);
    // setFormApiData(inputData);
  };
  

  const resetForm = () =>
    setFormData({
      name: '',
      email: '',

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

    if (Object.values(formData).includes('')) {
      setErrorMsg({
        fieldsRequired: 'Todos los campos son obligatorios',
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
      const response = await ContactFormServices.sendContactFormUser(
        formData?.name,
        formData?.email,
        `${formData?.name} Quiere registrarse en Yokanjeo`,
        'fabians@bidata.cl'
      );

      const apiResponse = await RegisterNewUser.postNewUser(formData)


      if(response?.success === 'false'){
        showToastErrorMsg(
          'Se necesita activación de email del administrador/a'
        );
        setLoading(false);
        resetForm();
        return;
      }

      if (response?.success === true && (apiResponse?.status === 'created' || apiResponse?.status === 'ok' || apiResponse?.status === 201 )) {
        showToastSuccessMsg(
          'Solicitud enviada con exito! revisa tu cuenta de correo porfavor'
        );
        setLoading(false);
        resetForm();
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError: '',
        });
      } else {
        showToastErrorMsg(
          'Error al Completar tu Solicitud, Verifique los campos e Intente nuevamente.'
        );
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      showToastErrorMsg(
        'No Hemos Podido Completar tu Solicitud, Vuelve a intentarlo más tarde.'
      );
    }
  };

  return (
    <div className="tw-h-[100vh] tw-bg-gray-50 tw-py-6 sm:tw-py-10 lg:tw-py-16 tw-flex tw-flex-col tw-justify-start">
            <div className='tw-mt-36 tw-mb-3 lg:tw-mb-2 xl:tw-mb-6'>
              <h2 className='tw-text-center tw-text-3xl xl:tw-text-5xl tw-text-secondary'>
                Crea tu cuenta
              </h2>
              <small className="tw-text-secondary-light tw-text-md xl:tw-text-lg">
                Te enviaremos un email para que puedas registrarte.
              </small>
            </div>
            <Fade direction="up" triggerOnce={true}>
              <div className='tw-flex tw-justify-center'>
                <form  onSubmit={onFormSubmit} name='FormSubmit' className='tw-relative tw-shadow-xl tw-shadow-secondary/40  tw-w-[95%] xl:tw-w-[40%] tw-h-[350px] tw-mx-4  lg:tw-mx-16 tw-px-10 tw-py-10 lg:tw-py-8 tw-p-4 tw-rounded-md '>
                    <div className="tw-relative tw-mb-2 tw-mt-10">
                      <input
                        autoComplete="off"
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="tw-peer tw-placeholder-transparent tw-h-10 tw-w-full tw-border tw-border-secondary/70 tw-rounded-md tw-pl-2 tw-text-secondary focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                        placeholder="Ingresa tu nombre personal o empresa"
                      />
                      <label
                        htmlFor="name"
                        className="tw-absolute tw-pl-2 tw-left-0 tw--top-4 tw-text-secondary-light tw-text-md peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-secondary/80 peer-placeholder-shown:tw-top-2 tw-transition-all tw-duration-300  peer-focus:tw--top-7 peer-focus:tw-text-secondary/80 peer-focus:tw-text-lg"
                      >
                        Ingresa tu Nombre o Empresa
                      </label>
                    </div>
                    <div className="tw-relative tw-mb-10 tw-mt-10">
                      <input
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="tw-peer tw-placeholder-white tw-h-10 tw-w-full tw-border tw-border-secondary/70 tw-text-secondary tw-rounded-md tw-pl-2 focus:tw-outline-none focus:tw-borer-rose-600 tw-text-sm"
                        placeholder="Correo electrónico"
                      />
                      <label
                        htmlFor="email"
                        className="tw-absolute tw-pl-2 tw-left-0 tw--top-4 tw-text-secondary-light tw-text-sm peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-secondary/80 peer-placeholder-shown:tw-top-2 tw-transition-all tw-duration-300  peer-focus:tw--top-7 peer-focus:tw-text-secondary/80 peer-focus:tw-text-lg"
                      >
                        Correo electrónico
                      </label>
                    </div>
                    <div className="tw-relative tw-my-3 tw-mt-10">
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
      <ToastContainer />
    </div>
  );
};

export default ContactForm;

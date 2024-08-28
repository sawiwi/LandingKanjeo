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
      // const response = await ContactFormServices.sendContactFormUser(
      //   formData?.name,
      //   formData?.email,
      //   `${formData?.name} Quiere registrarse en Yokanjeo`,
      //   'fabians@bidata.cl'
      // );
      setLoading(true);
      const response = await RegisterNewUser.postNewUser(formData)
      if (response?.status === 200 || response?.statusText === 'created' || response?.status === 201 ) {
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
    <div className="h-[100vh] bg-gray-50 py-6 sm:py-10 lg:py-16 flex flex-col justify-start">
            <div className='mt-28 xl:mt-20 2xl:mt-36 mb-3 lg:mb-2 xl:mb-6'>
              <h2 className='text-center text-3xl xl:text-4xl 2xl:text-5xl text-secondary'>
                Crea tu cuenta
              </h2>
              <small className="text-secondary-light text-md xl:text-lg">
                Te enviaremos un email para que puedas registrarte.
              </small>
            </div>
            <Fade direction="up" triggerOnce={true}>
              <div className='flex justify-center'>
                <form  onSubmit={onFormSubmit} className='relative shadow-xl shadow-secondary/40  w-[95%] xl:w-[45%] 2xl:w-[40%] h-[350px]  mx-4  lg:mx-16 px-10 py-10 lg:py-8 p-4 rounded-md '>
                    <div className="relative mb-2 mt-10">
                      <input
                        autoComplete="off"
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="peer placeholder-transparent h-10 w-full border border-secondary/70 rounded-md pl-2 text-secondary focus:outline-none focus:borer-rose-600 text-sm"
                        placeholder="Ingresa tu nombre personal o empresa"
                      />
                      <label
                        htmlFor="name"
                        className="absolute pl-2 left-0 -top-6 text-secondary-light text-md peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary/80 peer-placeholder-shown:top-2 transition-all duration-300  peer-focus:-top-7 peer-focus:text-secondary/80 peer-focus:text-lg"
                      >
                        Ingresa tu Nombre o Empresa
                      </label>
                    </div>
                    <div className="relative mb-10 mt-10">
                      <input
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="peer placeholder-white h-10 w-full border border-secondary/70 text-secondary rounded-md pl-2 focus:outline-none focus:borer-rose-600 text-sm"
                        placeholder="Correo electrónico"
                      />
                      <label
                        htmlFor="email"
                        className="absolute pl-2 left-0 -top-6 text-secondary-light text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary/80 peer-placeholder-shown:top-2 transition-all duration-300  peer-focus:-top-7 peer-focus:text-secondary/80 peer-focus:text-lg"
                      >
                        Correo electrónico
                      </label>
                    </div>
                    <div className="relative my-3 mt-10">
                    <Button
                      type="submit"
                      className="bg-secondary hover:bg-secondary-light text-primary rounded-md px-12 py-2 w-full"
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

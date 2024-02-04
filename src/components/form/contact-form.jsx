import { useState } from 'react';
import ContactFormServices from '../../services/ContactFormServices';
import Button from '../ui/button';
import Alert from '../alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState({
    fieldsRequired: '',
    serverError: '',
  });

  const handleInputChange = (e) => {
    const inputData = { ...formData, [e.target.name]: e.target.value };
    setFormData(inputData);
  };

  const resetForm = () =>
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
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
        formData?.phone,
        formData?.message,
        `${formData?.name} Quiere contactarse con QR Service`,
        'ign.casrod59@gmail.com'
      );

      if ((await response.success) === 'true') {
        showToastSuccessMsg(
          'Solicitud enviada con exito! Un ejecutivo se contactara contigo'
        );
        setLoading(false);
        resetForm();
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
    <div className="tw-min-h-screen tw-bg-gray-50 tw-py-6 tw-flex tw-flex-col tw-justify-center sm:tw-py-12">
      <div className="tw-relative tw-py-3 sm:tw-max-w-xl sm:tw-mx-auto">
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-blue-300 tw-to-blue-600 tw-shadow-lg tw-transform tw--skew-y-6 sm:tw-skew-y-0 sm:tw--rotate-6 sm:tw-rounded-3xl"></div>
        <form
          onSubmit={onFormSubmit}
          className="tw-relative tw-px-4 tw-py-10 tw-bg-white tw-shadow-lg sm:tw-rounded-3xl sm:tw-p-20"
        >
          <div className="tw-max-w-md tw-mx-auto">
            <div>
              <h1 className="tw-text-gray-700 tw-text-2xl tw-font-semibold">
                Completa el formulario
              </h1>
              <small className="tw-text-gray-400">
                Un administrador atenderá tu solicitud
              </small>
            </div>
            <div className="tw-divide-y tw-divide-gray-200">
              <div className="tw-py-8 tw-text-base tw-leading-6 tw-space-y-4 tw-text-gray-700 sm:tw-text-lg sm:tw-leading-7">
                <div className="tw-relative tw-my-2">
                  <input
                    autoComplete="off"
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="tw-peer tw-placeholder-transparent tw-h-10 tw-w-full tw-border-b-2 tw-border-gray-300 tw-text-gray-900 focus:tw-outline-none focus:tw-borer-rose-600"
                    placeholder="Ingresa tu Nombre o Empresa"
                  />
                  <label
                    htmlFor="name"
                    className="tw-absolute tw-left-0 tw--top-3.5 tw-text-gray-600 tw-text-sm peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-440 peer-placeholder-shown:tw-top-2 tw-transition-all peer-focus:tw--top-3.5 peer-focus:tw-text-gray-600 peer-focus:tw-text-sm"
                  >
                    Ingresa tu Nombre o Empresa
                  </label>
                </div>

                <div className="tw-relative tw-my-2">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="tw-peer tw-placeholder-transparent tw-h-10 tw-w-full tw-border-b-2 tw-border-gray-300 tw-text-gray-900 focus:tw-outline-none focus:tw-borer-rose-600"
                    placeholder="Correo electrónico"
                  />
                  <label
                    htmlFor="email"
                    className="tw-absolute tw-left-0 tw--top-3.5 tw-text-gray-600 tw-text-sm peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-440 peer-placeholder-shown:tw-top-2 tw-transition-all peer-focus:tw--top-3.5 peer-focus:tw-text-gray-600 peer-focus:tw-text-sm"
                  >
                    Correo electrónico
                  </label>
                </div>

                <div className="tw-relative tw-my-2">
                  <input
                    autoComplete="off"
                    id="phone"
                    name="phone"
                    type="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="tw-peer tw-placeholder-transparent tw-h-10 tw-w-full tw-border-b-2 tw-border-gray-300 tw-text-gray-900 focus:tw-outline-none focus:tw-borer-rose-600"
                    placeholder="Teléfono o móvil"
                  />
                  <label
                    htmlFor="phone"
                    className="tw-absolute tw-left-0 tw--top-3.5 tw-text-gray-600 tw-text-sm peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-440 peer-placeholder-shown:tw-top-2 tw-transition-all peer-focus:tw--top-3.5 peer-focus:tw-text-gray-600 peer-focus:tw-text-sm"
                  >
                    Teléfono o móvil
                  </label>
                </div>

                <div className="tw-relative tw-my-2">
                  <textarea
                    autoComplete="off"
                    rows={3}
                    id="message"
                    name="message"
                    type="text"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="tw-peer tw-placeholder-transparent tw-h-10 tw-w-full tw-border-b-2 tw-border-gray-300 tw-text-gray-900 focus:tw-outline-none focus:tw-borer-rose-600"
                    placeholder="Deja tu mensaje"
                  />
                  <label
                    htmlFor="message"
                    className="tw-absolute tw-left-0 tw--top-3.5 tw-text-gray-600 tw-text-sm peer-placeholder-shown:tw-text-base peer-placeholder-shown:tw-text-gray-440 peer-placeholder-shown:tw-top-2 tw-transition-all peer-focus:tw--top-3.5 peer-focus:tw-text-gray-600 peer-focus:tw-text-sm"
                  >
                    Deja tu mensaje
                  </label>
                </div>

                {errorMsg.fieldsRequired && (
                  <Alert message={errorMsg.fieldsRequired} />
                )}

                {errorMsg.serverError && (
                  <Alert message={errorMsg.serverError} />
                )}

                <div className="tw-relative tw-my-3">
                  <Button
                    type="submit"
                    className="tw-bg-primary hover:tw-bg-primary-light tw-text-white tw-rounded-md tw-px-12 tw-py-2"
                  >
                    {loading ? 'Enviando...' : 'Enviar'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;

import React, { useState } from 'react';
import SimpleInput from '../ui/input/simpleInput';
import ContactFormServices from '../../services/ContactFormServices.js';
import TitleSection from '../../components/title-section';
import ListBoxComponent from '../ui/select/listBox.jsx';
import SendButton from '../ui/button/sendButton.jsx';
import { plansData } from '../../constants/plans';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = ({ renderContent }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    lastName: false,
    phone: false,
    email: false,
    company: false,
  });
  const [selected, setSelected] = useState(plansData[0]);
  const [loading, setLoading] = useState(false);

  /** Handle Name change */
  const handleNameChange = (ev) => {
    const { value } = ev.target;

    setFormData({
      ...formData,
      name: ev.target.value,
    });

    // Actualiza el estado de error para el campo específico
    setErrors({
      ...errors,
      name: value.trim() === '',
    });
  };

  const handleLastname = (ev) => {
    const { value } = ev.target;
    setFormData({
      ...formData,
      lastName: ev.target.value,
    });
    // Actualiza el estado de error para el campo específico
    setErrors({
      ...errors,
      lastName: value.trim() === '',
    });
  };

  /** Handle Email change */
  const handleEmailChange = (ev) => {
    const { value } = ev.target;
    setFormData({
      ...formData,
      email: ev.target.value,
    });
    // Actualiza el estado de error para el campo específico
    setErrors({
      ...errors,
      email: value.trim() === '',
    });
  };

  /** Handle Phone change */
  const handlePhoneChange = (ev) => {
    const { value } = ev.target;
    if (ev.target.value < 0) {
      setFormData({
        ...formData,
        phone: '',
      });
      return;
    }
    if (ev.target.value.length > 9) {
      return;
    }

    setFormData({
      ...formData,
      phone: ev.target.value,
    });
    // Actualiza el estado de error para el campo específico
    setErrors({
      ...errors,
      phone: value.trim() === '',
    });
  };

  /** Handle Company change */
  const handleCompanyChange = (ev) => {
    const { value } = ev.target;
    setFormData({
      ...formData,
      company: ev.target.value,
    });
    // Actualiza el estado de error para el campo específico
    setErrors({
      ...errors,
      company: value.trim() === '',
    });
  };

  /* Reset Form */
  const resetForm = () => {
    setFormData({
      name: '',
      lastName: '',
      phone: '',
      email: '',
      company: '',
    });
    setSelected(plansData[0]);
  };

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

  const onFormSubmit = async (ev) => {
    ev.preventDefault();
    try {
      /* Validate empty fields */
      if (Object.values(formData).includes('')) {
        if (formData.name.trim() === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: true,
          }));
        }
        if (formData.lastName.trim() === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            lastName: true,
          }));
        }
        if (formData.phone.trim() === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            phone: true,
          }));
        }
        if (formData.email.trim() === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: true,
          }));
        }
        if (formData.company.trim() === '') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            company: true,
          }));
        }
        return;
      }

      setLoading(true);
      const response = await ContactFormServices.sendContactForm(
        formData?.name,
        formData?.lastName,
        formData?.phone,
        formData?.email,
        formData?.company,
        selected.name,
        'Nuevo mensaje de YoKanje',
        'admincorredor@gmail.com'
      );

      if (response.success === 'true') {
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
    <div className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-10 tw-relative tw-z-10">
        {/* <img
          src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1690573530/Projects/qr-service/imgs/Fondo2.webp"
          alt=""
          className="tw-absolute tw-w-full tw-left-0 tw-top-0 tw-z-0"
        /> */}
      <form
        id="contact-plan-form"
        onSubmit={onFormSubmit}
        className="tw-rounded-2xl tw-px-8 tw-pt-8 tw-pb-8 tw-mb-4 tw-max-w-[700px] tw-w-full tw-shadow-lg tw-bg-primary"
      >
        <TitleSection
          title={renderContent.headings[0].content}
          subtitle={renderContent.texts[0].content}
          position="center"
        />

        <SimpleInput
          type="text"
          id="Name"
          placeholder="Nombre *"
          value={formData?.name}
          onChange={handleNameChange}
          error={errors.name}
        />
        <SimpleInput
          type="text"
          id="Lastname"
          placeholder="Apellido *"
          value={formData?.lastName}
          onChange={handleLastname}
          error={errors.lastName}
        />
        <SimpleInput
          type="number"
          id="phone"
          placeholder="Teléfono *"
          value={formData?.phone}
          onChange={handlePhoneChange}
          error={errors.phone}
        />
        <SimpleInput
          type="email"
          id="Email"
          placeholder="Correo *"
          value={formData?.email}
          onChange={handleEmailChange}
          error={errors.email}
        />
        <SimpleInput
          type="text"
          id="Company"
          placeholder="Empresa *"
          value={formData?.company}
          onChange={handleCompanyChange}
          error={errors.company}
        />

        <ListBoxComponent
          plans={plansData}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="tw-flex tw-items-center tw-justify-center">
          <SendButton text="Enviar" isLoading={loading} />
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Index;

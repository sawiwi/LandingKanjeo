import axios from 'axios';

const ContactFormServices = {
  sendContactForm: async (
    name,
    lastName,
    phone,
    email,
    company,
    plan,
    subjectEmail,
    realtorEmail
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Nombre: `${name} ${lastName}`,
        Telefono: phone,
        Correo: email,
        Empresa: company,
        Plan: plan,
        _template: 'table',
        _subject: subjectEmail,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },
  sendContactFormUser: async (
    name,
    email,
    phone,
    message,
    subjectEmail,
    realtorEmail
  ) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Nombre_empresa: name,
        Correo: email,
        Telefono: phone,
        Mensaje: message,
        _template: 'table',
        _subject: subjectEmail,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },
};

export default ContactFormServices;

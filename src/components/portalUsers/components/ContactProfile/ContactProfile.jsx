import Button from '../../../ui/button';
import Alert from '../../../alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';
import ContactApiFormServices from '../../../../services/portal-contact/ContactFormServices';
import UsersServices from '../../../../services/portal-users/UsersServices';

const ContactProfile = ({dataUser}) =>{
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    to: dataUser?.session.email,
    // to: 'fabians@bidata.cl',
    phone: "",
    mail: "",
    subject: "",
    message: "",
    title: "Portal de Corredores"
  });
    const [clicDataSendContact, setClicDataSendContact] = useState([]);

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

    const handleCounterClicSend = async (id) => {
        const clicked = clicDataSendContact.find(item => item.id === id);
        let updateClicks;

        if (clicked) {
            updateClicks = clicDataSendContact.map(item => 
                item.id === id ? {...item, clicks: item.clicks + 1} : item
            );
        }else {
            updateClicks = [...clicDataSendContact, {id, clicks: 1}];
        }
        setClicDataSendContact(updateClicks);

        const formData = {
            clickOfNameRealtor: 0,
            clickOfMoreOfRealtor: 0,
            clickOfOpenContact: 0,
            clickOfSendContact: 1,
            clickOfWebPage: 0
        };

        try {
            await UsersServices.getClicksUsers(id, formData);
            console.log('Datos enviados correctamente', formData)
        }catch (error){
            console.log('ERROR al enviar los clics', error)
        }

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
        title:"Portal de Corredores"
    })
  }

    return(
        <>
        <div className="w-full justify-center">
            <h3 className="text-2xl text-center font-semibold mb-3">
                Contacta
            </h3>
            <div className="p-2 px-3">
                <Fade direction="up" triggerOnce={true}>
                <div className='grid text-center'>
                        <p>Corredor: <b>{dataUser?.name || 'No se encontró nombre'} {dataUser?.lastName || 'No se encontró apellido'}</b> </p>
                        <p>Email: <b>{dataUser?.session.email || 'No se encontró email'}</b></p>
                    </div>
                <div className='flex justify-center md:mx-2 2xl:mx-16'>
                    <form onSubmit={onFormSubmit} className='w-full'>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <div className="relative mb-2 mt-6 w-full">
                                <label
                                    htmlFor="name"
                                    className="text-gray-800 text-base font-semibold xl:mb-2 transition-all duration-300"
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
                                    className="h-10 w-full border text-gray-800/70 text-gray-800 rounded-md p-2 text-sm"
                                    // className="peer placeholder-transparent h-10 w-full border text-gray-800/70 rounded-md pl-2 text-gray-800 focus:outline-none focus:borer-rose-600 text-sm"
                                    placeholder="Ingresa tu nombre"
                                />
                          
                            </div>
                            <div className="relative mb-2 mt-6 w-full">
                                <label
                                    htmlFor="lastName"
                                    className="text-gray-800 text-base font-semibold xl:mb-2 transition-all duration-300"
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
                                    className="h-10 w-full border text-gray-800/70 text-gray-800 rounded-md p-2 text-sm"
                                    // className="peer placeholder-transparent h-10 w-full border text-gray-800/70 rounded-md pl-2 text-gray-800 focus:outline-none focus:borer-rose-600 text-sm"
                                    placeholder="Ingresa tu apellido"
                                />
                           
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <div className="relative mb-4 mt-2 w-full">
                                <label
                                    htmlFor="email"
                                    className="text-gray-800 text-base font-semibold xl:mb-2 transition-all duration-300"
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
                                    className="h-10 w-full border text-gray-800/70 text-gray-800 rounded-md p-2 text-sm"
                                    // className="peer placeholder-white h-10 w-full border text-gray-800/70 text-gray-800 rounded-md pl-2 focus:outline-none focus:borer-rose-600 text-sm"
                                    placeholder="Correo electrónico"
                                />
                         
                            </div>
                            <div className="relative mb-4 mt-2 w-full">
                                <label
                                    htmlFor="phone"
                                    className="text-gray-800 text-base font-semibold xl:mb-2 transition-all duration-300"
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
                                    className="h-10 w-full border text-gray-800/70 text-gray-800 rounded-md p-2 text-sm"
                                    // className="peer placeholder-white h-10 w-full border text-gray-800/70 text-gray-800 rounded-md pl-2 focus:outline-none focus:borer-rose-600 text-sm"
                                    placeholder="912323221"
                                />
                      
                            </div>
                        </div>
                        <div className="relative mb-4 mt-2">
                            <label
                                htmlFor="subject"
                                className="text-gray-800 text-base font-semibold xl:mb-2 transition-all duration-300"
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
                                className="h-10 w-full border text-gray-800/70 text-gray-800 rounded-md p-2 text-sm"
                                // className="peer placeholder-white h-10 w-full border text-gray-800/70 text-gray-800 rounded-md pl-2 focus:outline-none focus:borer-rose-600 text-sm"
                                placeholder="Asunto"
                            />
                  
                        </div>
                        <div className="relative mb-4 mt-2">
                            <label
                                htmlFor="message"
                                className="text-gray-800 text-base font-semibold xl:mb-2 transition-all duration-300"
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
                                className="h-10 w-full border text-gray-800/70 text-gray-800 rounded-md p-2 text-sm"
                                onChange={handleInputChange}
                                // className="peer placeholder-white h-10 w-full border text-gray-800/70 text-gray-800 rounded-md pl-2 focus:outline-none focus:borer-rose-600 text-sm"
                                placeholder="Ingresa o elige una breve descripción para contactar"
                            />

                            <div className='flex flex-col md:flex-row gap-2'>
                                <button
                                type='button' 
                                onClick={() => handlePhraseClick('Muy buenas, necesito asesoría sobre arriendo / venta')}
                                className='border border-spacing-1 border-gray-500 p-2 bg-transparent hover:shadow-lg duration-200 rounded-lg text-sm text-gray-600'>
                                    Muy buenas, necesito asesoría sobre arriendo / venta
                                </button>
                                <button 
                                type='button' 
                                onClick={() => handlePhraseClick('Quisiera saber más sobre arriendo!')}
                                className='border border-spacing-1 border-gray-500 p-2 bg-transparent hover:shadow-lg duration-200 rounded-lg text-sm text-gray-600'>
                                     Quisiera saber más sobre arriendo!
                                </button>
                                <button 
                                type='button' 
                                onClick={() => handlePhraseClick('Estoy interesado en una asesoria, necesito vender rápido.')}
                                className='border border-spacing-1 border-gray-500 p-2 bg-transparent hover:shadow-lg duration-200 rounded-lg text-sm text-gray-600'>
                                    Estoy interesado en una asesoria, necesito vender rápido.
                                </button>
                            </div>
                        </div>
                        <div className="relative my-3 mt-2"
                        onClick={() => handleCounterClicSend(dataUser.id)}>
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
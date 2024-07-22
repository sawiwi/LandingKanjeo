import { api } from "../../api";

const ContactApiFormServices = {
    contactForm: async (formData) => {
        try {
            const response = await api.post(`/properties-portal/email-contact`, formData);
            console.log('response', response)
            return response;
        }catch (error){
            console.log('error al enviar', error);
            throw error
        }
 
    },
};

export default ContactApiFormServices;
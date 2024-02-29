import api from "../../api";

const RegisterNewUser = {
    postNewUser: async (data) => {
        try {
            const response = await api.post(`/users/send-link-for-sign-up`, data);
            return response.data
        }catch (error){
            console.error('Error al enviar solicitud', error);
            throw error
        }
        
    }
}

export default RegisterNewUser;
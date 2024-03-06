import axios from "axios";
// import api from "../../api";

const RegisterNewUser = {
    postNewUser: async (data) => {
        try {
            const response = await axios.post(`https://yokanjeoapi.partnersadvisers.info/users/send-link-for-sign-up`, data);
            return response.data
        }catch (error){
            console.error('Error al enviar solicitud', error);
            throw error
        }
        
    }
}

export default RegisterNewUser;
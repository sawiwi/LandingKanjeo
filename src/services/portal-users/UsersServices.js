import {api} from '../../api/index';

const UsersServices = {
    getUsers: async () => {
        const response = await api.get(
            `users-portal?`
        );

        return{
            data: response.data.data,
            meta: response.data.meta,
        };
    },

    getUser: async (id) => {
        const response = await api.get(
            `users-portal/${id}`
        );
        return response.data;
    },

    getClicksUsers: async (id, formData) => {
        try {
            const response = await api.post(
                `/users-portal/click/${id}`, formData
            );
            return response.data;
        }catch (error){
            console.log('error al enviar', error)
            throw error
        }

    },
}
export default UsersServices;
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
}
export default UsersServices;
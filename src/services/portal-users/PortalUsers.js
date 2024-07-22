import api  from "../../api";
import { paginationTopLimit } from "../../constants/consts/company";

const UsersServices = {
    getUsers: async (
        currentPage,
        limit,
    ) => {
        const response = await api.get(
            `users-portal?page=${currentPage}&limit=${limit}`
        );
        // console.log('data', response.data)
        return {
            data: response.data.data,
            meta: response.data.meta,
        };
    }
}

export default UsersServices;
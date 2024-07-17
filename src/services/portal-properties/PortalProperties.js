import api from "../../api";
import { company, paginationTopLimit } from "../../constants/consts/company";

const PropertiesServices = {
    getProperties: async (
        currentPage,
        limit,
    ) => {
        const response = await api.get(
            `properties-portal?page=${currentPage}&limit=${limit}`
        );

        return {
            data: response.data.data,
            meta: response.data.meta,
        };
    },

    getAllProperties: async (
        currentPage = paginationTopLimit.limitPage,
        limit = paginationTopLimit.topLimit,
        statusId = company.statusId,
    ) => {
        const response =  await api.get(
            `properties-portal?page=${currentPage}&limit=${limit}&statusId=${statusId}`
        );
        console.log('data', response.data)
        return { data: response.data.data, meta: response.data.meta}
    },
}

export default PropertiesServices;

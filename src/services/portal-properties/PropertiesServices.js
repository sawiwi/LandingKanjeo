import {api}  from '../../api/index';
import { company, paginationTopLimit } from '../../constants/consts/company';

const PropertiesServices = {
  getProperties: async () => {
    const response = await api.get(
      `properties-portal?`
    //   `properties-portal?page=${currentPage}&limit=${limit}`
    );
    return {
      data: response.data.data,
      meta: response.data.meta,
    };
  },

  getAllProperties: async () => {
    const response = await api.get(
      `properties-portal?`
    //   `properties-portal?page=${currentPage}&limit=${limit}`
    );
    return { data: response.data.data, meta: response.data.meta };
  },

  getProperty: async (id) => {
    const response = await api.get(
      `properties-portal/${id}?`
    );
    return response.data;
  },

  // getPropertyByIdCode: async (url) => {
  //   const response = await api.get(`${url}`);
  //   return response.data;
  // },

  // Obtener ventas por venta de departamentos
//   getPropertiesByCard: async (
//     currentPage = paginationTopLimit.limitPage,
//     limit = paginationTopLimit.topLimit,
//     statusId = company.statusId,
//     companyId = company.companyId,
//     operationType,
//     typeOfProperty
//   ) => {
//     const response = await api.get(
//       `properties?page=${currentPage}&limit=${limit}&statusId=${statusId}&companyId=${companyId}&operationType=${operationType}&typeOfProperty=${typeOfProperty}`
//     );
//     return { data: response.data.data, meta: response.data.meta };
//   },
};

export default PropertiesServices;

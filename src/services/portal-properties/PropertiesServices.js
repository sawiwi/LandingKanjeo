import {api}  from '../../api/index';
import { queryParams, paginationTopLimit } from '../../constants/consts/company';



const PropertiesServices = {
  getProperties: async () => {
    const response = await api.get(
      `properties-portal?limit=${paginationTopLimit.limit}&disabled=${queryParams.disabled}`
    );
    return {
      data: response.data.data,
      meta: response.data.meta,
    };
  },
  getAllProperties: async () => {
    const response = await api.get(
      `properties-portal?limit=${paginationTopLimit.limit}&disabled=${queryParams.disabled}`
    );
    return {
      data: response.data.data,
      meta: response.data.meta,
    };
  },

  getPropertiesExchange: async () => {
    const response = await api.get(
      `properties-portal?limit=${paginationTopLimit.limit}&disabled=${queryParams.disabled}&inExchange=${queryParams.inExchange}`
    );
    return {
      data: response.data.data,
      meta: response.data.meta,
    };
  },

  getProperty: async (id) => {
    const response = await api.get(
      `properties-portal/${id}?`
    );
    return response.data;
  },


  getStatesExchange: async () =>{
    const response = await api.get(
      `properties-portal/states/metadata?`
    );
    return response
  },

  getPropertyByIdCode: async (url) => {
    try{
      const response = await api.get(`${url}`);
      return response.data;
    } catch (error){
      console.error("Error llamada a propiedad", error);
      throw new Error("Falla en la llamada")
    }
  },

  getClicksProperties: async (id, formData) => {
      try{
        const response = await api.post(
          `/properties-portal/click/${id}`, formData
        );
        return response.data;
      }catch (error){
        console.log('error al enviar', error)
        throw error
      }
  }

};

export default PropertiesServices;

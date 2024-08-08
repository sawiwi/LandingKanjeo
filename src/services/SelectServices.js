import { api } from "../api";

const PortalSelects = {
    getSelects: async () => {
        const response = await api.get('portal-selects');
        return {data:response.data};
    },

    getCommuneByStateId : async (stateId) => {
        const response = await api.get(`portal-selects/communes?stateId=${stateId}`);
        return {data: response.data};
    },
};

export default PortalSelects;
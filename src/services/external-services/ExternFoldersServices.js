import {api} from '../../api'

const ExternalFolders = {
    getExternServiceCategories : async (
    ) => {
        const response = await api.get(`web-external-services/folders/categories?`);
        return {
            data: response.data.data,
            meta: response.data.meta,
        };
    },

    getExternServiceFolders: async (
    ) => {
        const response = await api.get(`web-external-services/folders?`);
        return {
            data: response.data.data,
            meta: response.data.meta,
        };
    },

    getExternServiceFolderId : async (id) => {
        const response = await api.get(`web-external-services/folders/${id}?`);
        return response.data;
    },
    
};

export default ExternalFolders;
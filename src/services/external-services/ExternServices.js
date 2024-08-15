import {api} from '../../api'

const ExternalServices = {
    getExternServiceCategories : async (folderId
    ) => {
        const response = await api.get(`web-external-services?folderId=${folderId}`);
        return {
            data: response.data.data,
            meta: response.data.meta,
        };
    },
    
}

export default ExternalServices;
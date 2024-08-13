import {api} from '../../api'

const ExternalServices = {
    getExternServiceCategories : async (
    ) => {
        const response = await api.get('web-external-services?');
        return {
            data: response.data.data,
            meta: response.data.meta,
        };
    },
    
}

export default ExternalServices;
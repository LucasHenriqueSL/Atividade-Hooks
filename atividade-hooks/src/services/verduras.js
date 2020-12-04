import api from './server';

const VERDURAS = '/verduras';

export const getVerduras = async () => {
    try {
        const { data } = await api.get(VERDURAS);
        if(data) {
            return data;    
        }
        
    } catch (error) {
        return false;
        
    }
}
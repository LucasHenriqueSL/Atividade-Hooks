import api from './server';

const VERDURAS = '/verduras';

export const getVerduras = async () => {
    try {
        const { data } = await api.get(VERDURAS);
        if(data) return data;    
    } catch (error) {
        return false;
        
    }
}

export const getVerdura = async (id) => {
    try {
        const { data } = await api.get(`${VERDURAS}/${id}`);
        if(data) return data;       
    } catch (error) {
        return false; 
    }
}
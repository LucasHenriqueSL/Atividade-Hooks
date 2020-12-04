import api from './server';

const AUTH_LOGIN = '/auth/login';
const AUTH_ME = '/auth/me';

const salvarToken = (token) => {
    localStorage.setItem('token', token);
}

export const isLogged = () => {
    return !!localStorage.getItem('token');
}

export const getUser = async () => {
    const { data } = await api.get(AUTH_ME);
    return data;
}

export const logar = async (user, pass) => {
    try {
        const { data } = await api.post(AUTH_LOGIN, { email: user, senha: pass });
        if(data.token) {
            salvarToken(data.token);
            return true;    
        }
        
    } catch (error) {
        return false;
        
    }
}


 
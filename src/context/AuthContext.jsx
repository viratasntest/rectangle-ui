import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from '../utils/axios';
import Cookies from 'js-cookie';
import instance from '../utils/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token');

        if (token) {
            setUser(token);
        }

        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const data = await instance.post("/auth/signin", { email, password });
            Cookies.set('token', data.data.token);
            setUser(data.data.token);
            router.push('/dashboard');
            console.log(data,'SSSsssssssss')
        } catch (err) {
            console.error(err);
        }
    };

    const logout = () => {
        Cookies.remove('token');
        setUser(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

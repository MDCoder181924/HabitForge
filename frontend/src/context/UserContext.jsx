import api from '../api/axios';
import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMe = async () => {
            try {
                const res = await api.get('/user/profile', { withCredentials: true })
                setUser(res.data.user);
            }
            catch (error) {
                setUser(null);
            }
            finally {
                setLoading(false);
            }
        }
        getMe();
    }, [])

    const refreshUser = async () => {
        const res = await api.get("/user/profile", { withCredentials: true });
        setUser(res.data.user);
    };

    return (
        <UserContext.Provider value={{ user, setUser, loading, refreshUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    return useContext(UserContext);
}
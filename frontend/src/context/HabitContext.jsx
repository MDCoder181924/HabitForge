import api from "../api/axios";
import {
    createContext, useContext, useState
} from "react";

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {

    const [habits, setHabits] = useState([]);
    const [loading, setLoading] = useState(false);

    const getHabits = async () => {
        try {
            setLoading(true);
            const res = await api.get("/habit/habits", { withCredentials: true });
            setHabits(res.data.habits);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <HabitContext.Provider value={{ habits,setHabits,loading, getHabits }}>
            {children}
        </HabitContext.Provider>
    );
};

export const useHabit = () => {
    return useContext(HabitContext);
};
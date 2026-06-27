import { Routes, Route , Navigate } from "react-router-dom";
import Home from "../pages/Home"
import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import Layout from "../components/User/Layout";
import DashboardPage from "../pages/User/DashboardPage";
import MyHabitsPage from "../pages/User/MyHabitsPage";
import TodayFocusPage from "../pages/User/TodayFocusPage";
import CalendarPage from "../pages/User/CalendarPage";
import AnalyticsPage from "../pages/User/AnalyticsPage";
import ProfilePage from "../pages/User/ProfilePage";
import SettingsPage from "../pages/User/SettingsPage";
import CreateHabitPage from "../pages/User/CreateHabitPage";
import EditHabitPage from "../pages/User/EditHabitPage";
import { Children } from "react";
import { useUser } from "../context/UserContext";

const GuestRouter = ({ children })=>{
    const {user , loading} = useUser();
    if(loading) return null;
    return user ? <Navigate to ="/dashboard" replace/> : children;
}
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useUser();
    if (loading) return null;
    return user ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<GuestRouter> <Home /> </GuestRouter>} />
                <Route path='/login' element={<GuestRouter> <LoginPage /> </GuestRouter> } />
                <Route path='/register' element={<GuestRouter> <RegisterPage /> </GuestRouter>} />
                <Route element={ <ProtectedRoute> <Layout /> </ProtectedRoute>}>
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/habits' element={<MyHabitsPage />} />
                    <Route path='/today' element={<TodayFocusPage />} />
                    <Route path='/calendar' element={<CalendarPage />} />
                    <Route path='/analytics' element={<AnalyticsPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/settings' element={<SettingsPage />} />
                    <Route path='/create-habit' element={<CreateHabitPage />} />
                    <Route path='/edit-habit/:id' element={<EditHabitPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes;
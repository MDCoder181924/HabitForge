import { Routes, Route } from "react-router-dom";
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

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route element={<Layout />}>
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
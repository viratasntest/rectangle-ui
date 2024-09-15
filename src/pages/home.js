
import { useContext } from 'react';
import ProtectedRoute from '@/ProtectedRoute';
import AuthContext from '@/context/AuthContext';
import DashboardLayout from '@/layouts/DashboardLayout';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <ProtectedRoute>
           <DashboardLayout>
             Hi this is dashboard
           </DashboardLayout>
        </ProtectedRoute>
    );
};

export default Dashboard;

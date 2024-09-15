import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthContext from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return user ? children : null;
};

export default ProtectedRoute;

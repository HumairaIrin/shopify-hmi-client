import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Loading from '../Shared/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;
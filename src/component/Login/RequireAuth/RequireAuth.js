import React from 'react';
import { auth } from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loding from '../../Shared/Loading/Loding';





const RequirAuth = ({ children }) => {
    
    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    if (loading) {
        return <Loding/>
    }
    if (!user) {
        return <Navigate to="/login" state={{from: location}} replace />
    }
    return children;
};

export default RequirAuth;
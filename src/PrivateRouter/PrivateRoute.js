import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const PrivateRoute = ({children}) => {

    const location = useLocation();
    const {user, loader} =useContext(AuthContext);
    if(user && user.uid){
        return children;
    }

    if(loader){
        return <div>Loading...</div>
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
};
export default PrivateRoute;
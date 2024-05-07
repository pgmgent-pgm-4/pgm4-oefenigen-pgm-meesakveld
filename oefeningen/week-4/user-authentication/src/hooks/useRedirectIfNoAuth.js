import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from 'react'

export const useRedirectIfNoAuth = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!user) navigate("/login")
    }, [navigate]);
}
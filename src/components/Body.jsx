import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { BASEURL } from '../utils/constant'
import { addUser } from '../utils/userSlice'
import axios from 'axios';

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((store)=>store.user)
    console.log(userData)
    const fetchUser = async () =>{
        try{
            const res = await axios.get(BASEURL + "/profile/view",{
                withCredentials:true,
            });
            console.log(res.data)
            dispatch(addUser(res.data))
        }catch(err){
            console.error(err)
            navigate("/login")
        }
    }

    useEffect(()=>{
     fetchUser()
    },[])

    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Body
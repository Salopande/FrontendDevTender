import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASEURL } from '../utils/constant';

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () => {

        try {
            const res = await axios.post(BASEURL + '/login', {
                emailId, password
            }, { withCredentials: true })
            dispatch(addUser(res.data));
            return navigate('/')
        } catch (err) {
            console.log(err)
            setError(err.response.data || "Something went wrong")
        }
    }
    return (
        <div className='flex justify-center my-10'>
            <div className="card card-border bg-base-300 w-96">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <div>
                        <div className="form-control my-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} placeholder="" className="input input-bordegray  w-full max-w-xs" />
                        </div>
                        <div className="form-control my-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="" className="input input-bordegray  w-full max-w-xs" />
                        </div>
                    </div>
                    {error && <p className='text-red-500'>{error}</p>}
                    <div className="card-actions justify-center">
                        <button onClick={handleLogin} className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div></div>
    )
}

export default Login
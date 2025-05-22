import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserCards from './UserCards';
import axios from 'axios';
import { BASEURL } from '../utils/constant';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName)
    const [age, setAge] = useState(user.age)
    const [gender, setGender] = useState(user.gender)
    const [about, setAbout] = useState(user.about)
    const [photoUrl, setPhotoURL] = useState(user.photoUrl)
    const [error, setError] = useState("")
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSaveData = async () => {
        setError("")
        try {
            const res = await axios.patch(BASEURL + '/profile/edit', {
                firstName, lastName, photoUrl, age, gender, about
            }, { withCredentials: true })
            console.log(res.data)
            toast.success('Update successful!');
            dispatch(addUser(res.data.data));
        } catch (err) {
            console.log(err)
            setError(err.response.data || "Something went wrong")
        }
    }

    return (
    <> 
        <Toaster
            position="top-center"
            toastOptions={{
                duration: 5000, // Show for 1 second
            }}
        />
        <div className='flex justify-center my-10 mb-40'>
                <div className='flex justify-center mx-10'>
                    <div className="card card-border bg-base-300 w-96">
                        <div className="card-body">
                            <h2 className="card-title">Edit Profile</h2>
                            <div>
                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="" className="input input-bordegray  w-full max-w-xs" />
                                </div>
                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text">LastName</span>
                                    </label>
                                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="" className="input input-bordegray  w-full max-w-xs" />
                                </div>
                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" value={photoUrl} onChange={(e) => setPhotoURL(e.target.value)} placeholder="" className="input input-bordegray  w-full max-w-xs" />
                                </div>

                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text">Age</span>
                                    </label>
                                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="" className="input input-bordegray  w-full max-w-xs" />
                                </div>
                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="" className="input input-bordegray  w-full max-w-xs" />
                                </div>
                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text">About</span>
                                    </label>
                                    <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="" className="input input-bordegray  w-full max-w-xs" />
                                </div>
                            </div>
                        </div>
                        {error && <p className='text-red-500'>{error}</p>}
                        <div className="card-actions justify-center">
                            <button onClick={handleSaveData} className="btn btn-primary">Save Profile</button>
                        </div>
                    </div>
                </div>
                <UserCards user={{ firstName, lastName, photoUrl, age, gender, about }} />

        </div>
    </>
    )
}

export default EditProfile
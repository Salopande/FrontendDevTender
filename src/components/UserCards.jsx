import React from 'react'

const UserCards = ({ user }) => {
    const {firstName, lastName, photoUrl, age, gender, about}= user;
    return (
        <div className="card bg-base-300 w-60 shadow-xl">
            <figure>
                <img src={user.photoUrl} alt="" className='flex w-50 h-50 justify-center' />
            </figure>
            <div className="card-body"> 
                <h5 className="card-title">{firstName + " " + lastName}</h5>
                {age && gender && <p>{age + " " + gender}</p>}
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{about}</p>
                <div className='card-actions justify-center'>
                    <button className='btn btn-secondary'>Interested</button>
                    <button className='btn btn-primary'>Ignore</button>
                    
                </div>
            </div>
        </div>

    )
}

export default UserCards
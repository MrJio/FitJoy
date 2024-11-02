// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        })
    }, [])
  return (
    <div className='text-center mx-auto'>{ authUser ? <h1>{`Signed In as ${authUser.email}`}</h1> : <p>Signed Out</p>} </div>
  )
}

export default AuthDetails;
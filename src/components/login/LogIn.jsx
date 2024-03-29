import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from "../../firebase/firebase.init";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


const LogIn = () => {
    const [user, setUser] = useState('')
    const location = useLocation()
    const pathName = location.pathname.replace('/', '').toUpperCase()
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const buttonHandle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const logInUser = result.user
                setUser(logInUser)
                toast.success('Successfully Log-In')
            })
            .catch(() => {
                toast.error('not Log-In')
            })
    }
    const signOutHandle = () =>{
        signOut(auth)
        .then(()=>{
            setUser('')
            toast.success('successfully !! Log-Out---!')
        })
        .catch(()=>{
            toast.error('not Log-out')
        })
    }
    return (
        <div>
            <Toaster/>
            <Helmet>
                <title>React-Project || {pathName}</title>
            </Helmet>
            {
                !user ? <button onClick={buttonHandle}>Google Log-In</button> : <h1></h1>
            }
            {
                user && <div >
                    <h2>Users: {user.displayName}</h2>
                    <h2>Email: {user.email}</h2>
                    <img src={user.photoURL} alt="" />
                </div>
            }
            {
                user?<button onClick={signOutHandle}>Sign-Out</button>: <h2></h2>
            }
        </div>
    );
};

export default LogIn;
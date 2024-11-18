import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import app from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);




function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // create  user
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout user
    const logout = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {
                console.log('logged out.')
            })
            .catch(error => {
                console.log(error)
            })
    }
    // forget password
    const forgetPassword = (email) => {
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('your reset password email was send');
                })
                .catch(error => {
                    alert(error.message)
                })
        }
    }
    // global variables
    const authInfo = {
        user,
        loading,
        setUser,
        createNewUser,
        login,
        logout,
        forgetPassword,
        setLoading
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    console.log(user, loading)
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default AuthProvider;
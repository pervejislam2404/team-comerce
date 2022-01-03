import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import firebaseInitialize from './firebase.init';
import { setErrorMsg, setGoogleSignErrorMsg, setIdToken, setIsLoading, setUser } from "../Redux/StateSlice/StateSlice";
import swal from "sweetalert";

firebaseInitialize();
 const googleProvider = new GoogleAuthProvider();
 const auth = getAuth();
 
 
 const useFirebase = ()=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.statesCounter.user);

// register-user-with-email-password

    const registerWithEmailPass = (email, password, name) => {
      dispatch(setIsLoading(true));
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            dispatch(setErrorMsg(''));
              const newUser = { email, displayName: name };
              dispatch(setUser(newUser))

              swal({
                title: "Sign up success!",
                icon: "success"
              });
             

              saveUser(email, name, 'POST');
              updateProfile(auth.currentUser, {
                  displayName: name
              }).then(() => {
              }).catch((error) => {
              });
              navigate('/');

          })
          .catch((error) => {
            const errorMessage = error.message;
            dispatch(setErrorMsg(errorMessage));
          })
          .finally(() =>  dispatch(setIsLoading(false)));
  }

// sign-in-with-email-and-password

  const signWithEmailPass = (email, password, location, navigate) =>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    dispatch(setUser(user));
    saveUser(user?.email, user?.displayName, 'PUT')

    const destination = location?.state?.from || '/';
    navigate(destination);
  })
  .catch((error) => {
    const errorMessage = error.message;
    dispatch(setGoogleSignErrorMsg(errorMessage));
  });

  }




// google-sign-in-method

const googleSign = (location,navigate)=>{
    dispatch(setIsLoading(true));

    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      dispatch(setIsLoading(false));
      dispatch(setUser(user));
      saveUser(user.email, user.displayName,'PUT')
      const destination = location?.state?.from || '/';
      navigate(destination);
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      dispatch(setGoogleSignErrorMsg(errorMessage));
    });
}



const googleSingOut = ()=>{
    signOut(auth).then(() => {
        dispatch(setUser(null));
        // dispatch(setAdmin(false));
      }).catch((error) => {
       const errorMessage = error.message;
      dispatch(setErrorMsg(errorMessage));
      });
}


useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        dispatch(setUser(user))
        if (user) {
          dispatch(setUser(user));
            getIdToken(user)
                .then(idToken => {
                  console.log(idToken);
                  dispatch(setIdToken(idToken));
                })
        } else {
          dispatch(setUser(user));
        }
        
        dispatch(setIsLoading(false));
    });
    return () => unsubscribed;
}, [auth])


// useEffect(() => {
//   axios(`https://guarded-ocean-40685.herokuapp.com/checkAdmin/${user?.email}`)
//   .then(res=>{
// //   dispatch(setAdmin(res.data))
//   })
// },[user])


// saving-user-to-database
const saveUser = (email, displayName, method) => {
  const user = { email, displayName };
  fetch('http://localhost:4000/saveUser', {
      method: method,
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(user)
  })
      .then()
}





return {googleSingOut,googleSign,registerWithEmailPass, signWithEmailPass};

}

export default useFirebase;
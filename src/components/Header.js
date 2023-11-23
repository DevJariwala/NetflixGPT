import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import { loginLogo, netflixLogo } from "./utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user;
              dispatch(addUser({uid,email,displayName}));
              navigate("/browse")
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/")
            }
          });
        
        //   unsubscribe when component unmounts
          return ()=>{
            unsubscribe();
          }
    }, [])
    
    
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
            <img className="w-44" src={netflixLogo} alt="logoNetflix" />
            {
                user!==null && (
                    <div className="flex items-center">
                        <img className="w-10 m-4" src={loginLogo} alt="logo" />
                        <p className="cursor-pointer text-white hover:text-gray-300" onClick={()=>{handleSignOut()}}>Sign Out</p>
                    </div>
                )
            }
            
        </div>
    )
}

export default Header;
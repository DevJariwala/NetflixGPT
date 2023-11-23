import {useState} from 'react'
import Header from "./Header";
import { checkValidData } from './utils/validation';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from './utils/firebase';
import { signInBackgroundImg } from './utils/constants';

const Login = ()=>{
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const handleSubmit = ()=>{
        let err=checkValidData(email,password);
        setError(err);
        if(err===null){

            // here we are not dispatching any action as it is done on header component
            if(isSignUp){
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode+"->"+errorMessage)
                });
            }else{
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode+"->"+errorMessage)
                });
            }
        }
    }
    return (
        <div >
            <Header />
            <div className="absolute">
                <img src={signInBackgroundImg} alt="logo" />
            </div>
            <form className="absolute bg-black bg-opacity-80 w-1/4 mx-auto left-0 right-0 my-36 p-12">
                <h1 className="text-white text-3xl">Sign {isSignUp===true?"Up":"In"}</h1>
                <input type="text" name="email" placeholder="Email Address" value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-[#333] h-10 w-full p-2 mt-6 rounded-[3px] h-[45px]"/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="bg-[#333] h-10 w-full p-2 mt-3 rounded-[3px] h-[45px]"  />
                {
                    isSignUp===true && <input type="password" name="confirmPassword" placeholder="Confirm Password" className="bg-[#333] h-10 w-full p-2 mt-3 rounded-[3px] h-[45px]"  />
                }
                <p className="bg-[#e50914] text-[white] w-full p-2 mt-10 rounded-[3px] cursor-pointer text-center" onClick={()=>handleSubmit()}>Sign {isSignUp===true?"Up":"In"}</p>
                {
                    error!==null && <p className='text-red-800'>{error}</p>
                }
                {isSignUp===false ?<p className="text-gray-400 font-thin mt-10">New to Netflix? <span className='cursor-pointer hover:underline' onClick={()=>setIsSignUp(!isSignUp)}> Sign Up Now. </span></p> : <p className="text-gray-400 font-thin mt-10">Already registered? <span className='cursor-pointer hover:underline' onClick={()=>setIsSignUp(!isSignUp)}> Sign In Now. </span></p> }
            </form>
        </div>
    )
}

export default Login;
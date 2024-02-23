import {useEffect, useState} from 'react';
import {useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth,provider} from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import relaxImg from '../assets/relax.png';


export default function Login() {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            
            navigate('/home');
        })
        .catch((error) => {
            console.log(error.message);
        });
};
   
   const [value, setValue] = useState('');
    const handleClick = () => {
            signInWithPopup(auth, provider).then((data)=>{
                setValue(data.user.email)
                localStorage.setItem('email',data.user.email)
                navigate('/home');

            })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'));

    })


    return(
        <div onSubmit={signIn}>
            <h1>ONBOARDIO</h1>
                <div className='form'>
                <img src={relaxImg}/>
               <form className='content-left'>
                    <h3>Good Morning!</h3>

            <button className='google' onClick={handleClick}>Connect with Google</button>
                    <div className='email-pwd'>
                    <input type="email" placeholder='Email' required 
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}/>
                    <input type="password" placeholder='Password' required 
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)} />
                    </div>
                    <button  type='submit' >Enter</button>
                </form>
              
                </div>
        </div>    
 );
}
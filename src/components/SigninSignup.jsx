import React, { useState } from 'react'
import { email, password, person } from '../assets'
import './SigninSignupStyles.css'
import { useNavigate } from 'react-router-dom'

const SigninSignup = () => {
  const [action,setAction] = useState("Sign Up");
  const [pwd, setPwd] = useState('');
  const [pwdError, setPwdError] = useState(false);
  const [cpd, setcpd] = useState('');
  const [cpderr, setcpderr] = useState(false);
  const [mail, setMail] = useState('');
  const [mailError, setMailError] = useState(false);

  const navigate = useNavigate();

  function handleClick() {
    setcpderr(false);
    var re_mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{5,}@g(oogle)?mail\.com$/;

    if(!re_mail.test(mail)) {
      setMailError(true);
      setMail('');
    }else setMailError(false);

    if(action === "Sign In") {
      if(mailError===false && pwd!==''){
      navigate('/foundation-website-react');
      }
    }
    else if(action === "Sign Up") {
      var re_pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/
      if(!re_pwd.test(pwd)) {
        setPwdError(true);
        setPwd('');
        setcpd('');
      }
      else{
        setPwdError(false);
        if(cpd === pwd){
          setcpderr(false);
          navigate('/foundation-website-react');
        }
        else{
          setcpderr(true);
          setcpd('');
        }
      }
    }
  }

  return (
    <div className="w-full overflow-hidden flex p-8 bg-gradient-to-r from-slate-600 to-gray-900 font-poppins">
      <div id='signinsignup' className='flex flex-col m-auto my-12 bg-zinc-100 py-4 rounded-lg px-6'>
        <div className="flex flex-col items-center gap-2">
          <div className="text-gradient-signin text-[32px] font-semibold pt-2 pb-1">{action}</div>
          <div className="w-14 h-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-800"></div>
        </div>
        <div className="flex flex-col mt-10">
          {action==="Sign Up"?<div className="input">
            <img src={person} alt="person_icon" />
            <input id='name' type="text" placeholder='Name'required/>
          </div>:<div></div>}
        
          <div className="input">
            <img src={email} alt="email_icon" />
            <input id='mail' type="email" value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Email Address' required/>
          </div>
          {mailError===true?<div className='error'>Please Enter a valid gmail address</div>:<div></div> }

          <div className="input">
            <img src={password} alt="pwd_icon" />
            <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder='Password' required/>
          </div>
          {pwdError===true?<div className='error'><div>Please choose a strong password.</div>
          <div><ul className='list-disc'>A strong password should have:
            <li className='ml-6'>Length between 6 to 20 characters</li>
            <li className='ml-6'>Atleast one Lowercase letter</li>
            <li className='ml-6'>Alteast one Uppercase letter</li>
            <li className='ml-6'>Atleast one Number</li>
            <li className='ml-6'>Atleast one Special character</li>
          </ul></div></div>:<div></div>}

          {action==="Sign Up"?<div className="input">
            <img src={password} alt="pwd_icon" />
            <input value={cpd} type="password" placeholder='Confirm Password' onChange={(e) => setcpd(e.target.value)} required/>
          </div>:<div></div>}
          {action==="Sign Up" && cpderr===true?<div className='error'>Please enter the same value in Password and Confirm Password fields</div>:<div></div>}
        </div>

        {action==="Sign In"?<div className="general-text">Forgot Password? <span>Click Here</span></div>:<div></div>}

        <div className="submit-container">
          <button className="submit-btn" onClick={handleClick}>{action}</button>
        </div>

        <div className="alternate-option">
        {action==="Sign Up"?<div className="general-text">Already Have An Account? <span onClick={() => setAction("Sign In")}>Click Here To Sign In</span></div>:<div className="general-text">First Time Here? <span onClick={() => setAction("Sign Up")}>Click Here To Create an Account</span></div>}
        </div>
      </div>
    </div>
  )
}

export default SigninSignup
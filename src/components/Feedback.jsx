import React, { useState } from 'react'
import styles from '../style';
import Popup from 'reactjs-popup';
import './FeedbackStyles.css'

const Feedback = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <Popup
    trigger={<button className="modal-btn"> Feedback </button>}
    modal
    nested
  >
    {close => (
      <div className="modal-window">
        <button className="close-btn" onClick={close}>
          &times;
        </button>
        <div className="header"> 
          <h1 className='flex-1 font-poppins font-semibold ss:text-[40px] text-[32px] ss:leading-[70px] leading-[55px] pb-2'> Feedback Form
          </h1> 
        </div>
        <div className="explanation">
          <p>Here at <b>Nayepankh Foundation</b>, we are committed to improving ourselves constantly, so kindly drop your suggestions or feedback regarding our work and this website here. You can also visit our Community page for further interactions.</p>

        </div>
        <div className="content">
          {' '}
          <form>
            <div>
                <input type="text" placeholder='Name' name='Name' />
            </div>
            <div>
            <input type='checkbox' name='contact-check' onClick={()=>setToggle((value)=>!value)}/>I don't mind being contacted further regarding this feedback.
            </div> 
            {toggle && (
              <div>
              <input type="email" placeholder='Email' name='email' />
          </div>
            )}           
            <div>                    
            <textarea id="feedback" rows="6" placeholder="Enter your feedback or suggestions here"></textarea>
            </div>
            <div><button className='submit'>Submit</button></div>
            
            </form>
        </div>
      </div>
    )}
  </Popup>
  )
}

export default Feedback
import { useState } from 'react';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Home() {
const [email, setEmail] = useState('');
const [emails, setEmails] = useState([]);
const [subject, setSubject] = useState('');
const [chosenEmail,setChosenEmail]=useState('');
const [formData, setFormData] = useState({
    subject: '',
    message: '',
});
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_50yykq4', 'template_m09g3b3', form.current, {
      publicKey: 'byQX2hrErQEUJmFD9',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    e.target.reset();
};
formData.subject=subject;
function handleChange(event) {
    setFormData((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
        
    }));
}
/*function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
}*/
function handleAddEmail() {
setEmails([...emails, email]);
}
function saveEmail(event) {
setEmail(event.target.value);
}
function chooseEmail(selectedEmail) {
    setChosenEmail(selectedEmail);
}
function saveSubject(selectedSubject) {
    setSubject(selectedSubject);
  }
console.log(formData);
console.log(emails);
console.log(subject);
console.log(chosenEmail);
    return(
        <section>
            <div className="header">
            <h1>ONBOARDIO</h1>
            <div className="user">Hello,Ahmed</div>
            </div>
            <h3>Boss, No Time Today? 💃</h3>
            <article className="content">
            <div className="left">
                <div>
                   
                    <button> <input type="email" name='user_email' placeholder="Enter concdidate email" value={email} onChange={saveEmail} /> </button>
              <button className='btn' onClick={handleAddEmail}>Add</button>
              </div>
              {emails.map((emails,index)=>{
                    return <div key={index} ><button className='btn-email' onClick={() => chooseEmail(email)}><p className='emails'>{emails}</p></button></div>

              })}
            </div>
            <div className="middle">
                <button className='btn-email' onClick={() => saveSubject("Hello hello ! Welcome to the Team")} ><p className="emails-examples" >Hello hello ! Welcome to the Teams</p></button>
                <button className='btn-email' onClick={() => saveSubject("Please Prepare These Documents")}><p className="emails-examples" >Please Prepare These Documents</p></button>
                <button className='btn-email' onClick={() => saveSubject("We Cant Wait To See You!")}><p className="emails-examples" >We Cant Wait To See You!</p></button>
                <button className='btn-email' onClick={() => saveSubject("Onboarding Starts Tomorrow !")}><p className="emails-examples" >Onboarding Starts Tomorrow !</p></button>
            </div>
            <div className="right">
                <form onSubmit={sendEmail} ref={form}>
                    <input type="text" value={subject} onChange={handleChange} name='subject'/>
                    <textarea name="message"  cols="30" rows="10" value={formData.message} onChange={handleChange}></textarea>
                    <div>
                    <button className='edit-btn'>Edit email</button>
                    <button className='send-btn' type='submit'>Send Email</button>
                    </div>
                </form>
            </div>
            </article>
        </section>
    );

}
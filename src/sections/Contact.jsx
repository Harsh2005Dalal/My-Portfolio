import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import Alert from '../components/Alert';
import { Particles } from '../components/Particles';

const Contact = () => {
  const [formData, setFormData] = useState({name:"",email:"",message:""})
  const [isLoading,setIsLoading] = useState(false);
  const [showAlert,setShowAlert] = useState(false);
  const [alertType,setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");


  const handleAlert = (type,message) =>{
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
    setTimeout(()=>{
      setShowAlert(false);
    },5000)
  }

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setIsLoading(true);
    // emailjs.send("service_11g7cts","template_h3ecnbf",{from_name:formData.name, to_name:"Harsh Dalal", from_email: formData.email, to_email:"harsh2005dalalwork@gmail.com", message: formData.message });

    try {
      await emailjs.send("service_9dtlr3b","template_h3ecnbf",{from_name:formData.name, to_name:"Harsh Dalal", from_email: formData.email, to_email:"harsh2005dalalwork@gmail.com", message: formData.message }, "fcaHPj1lI8YkHgkAn");
      setIsLoading(false);
      handleAlert("success","Thanks, I received your message!");
      setFormData({...formData, name:"", email:"",message:""});
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      handleAlert("danger","Oops, Try sending the message again");
      setFormData({...formData, name:"", email:"",message:""});
    }
    // data will come here in formData form
    // service_11g7cts

  }
  return (
    <section className='relative flex items-center c-space section-spacing'>
      <Particles className='absolute inset-0 -z-50' quantity={250} ease={120} color={"#ffffff"} refresh/>
      {showAlert && <Alert type={alertType} text={alertMessage}/>}
      <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary'>
      <div className='flex flex-col mb-10 items-start w-full gap-5'>
        <h2 className='md:text-4xl text-3xl font-bold'>Lets Talk</h2>
        <p className='font-normal text-neutral-400'>Looking for a new website, improve your current website, or just want to give feedback of my website, I'm here to listen and build</p>
      </div>
      <form action="" className='w-full' onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label htmlFor="name" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Full Name</label>
          <input type="text" id="name" name="name" className='w-full min-h-10 rounded-md px-3 py-2 text-sm bg-white/10 transition duration-200 placeholder-neutral-500 border border-white/10 mt-2; focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20; flex items-center pl-2' placeholder='Harsh Dalal' required autoComplete='name' value={formData.name} onChange = {handleChange}/>
        </div>

        <div className='mb-5'>
          <label htmlFor="name" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Email</label>
          <input type="email" id="email" name="email" className='w-full min-h-10 rounded-md px-3 py-2 text-sm bg-white/10 transition duration-200 placeholder-neutral-500 border border-white/10 mt-2; focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20; pt-1 pl-2 flex items-center' placeholder='harsh2005dalal@gmail.com' required autoComplete='email' value={formData.email} onChange = {handleChange}/>
        </div>

        <div className='mb-5'>
          <label htmlFor="message" className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>Message</label>
          <textarea type="text" id="message" name="message" className='w-full min-h-10 rounded-md px-3 py-2 text-sm bg-white/10 transition duration-200 placeholder-neutral-500 border border-white/10 mt-2; focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20; pt-1 pl-2' rows="4" placeholder='Wanna share something?...' required autoComplete='message' value={formData.message} onChange = {handleChange}/>
        </div>

        <button className='w-full px-1 py-3 text-lg text-center cursor-pointer rounded-md bg-gradient-to-r from-transparent via-lavender to-transparent hover-animation border-none' type="submit">{isLoading ? "Sending..." : "Send"}</button>
      </form>
      </div>
    </section>
  )
}

export default Contact;

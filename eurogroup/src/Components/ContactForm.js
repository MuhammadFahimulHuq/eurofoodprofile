import React from 'react';
import { Button} from 'react-bootstrap';

export const ContactForm = () => {
  return <div>
<div className='contactForm-container'>
<h1 style={{textAlign:'center',margin:'50px auto',color:'black'}}>Talk To Us – We’re Here To Help</h1>
       <div class="red-line"></div>
       <p className='paragraph' style={{textAlign:'center',margin:'auto'}}>Feel free to drop us a message and we’ll get back to you as soon as we can.</p>
      <form className='contact-form'>
        
          <label>First Name<span className='astrek'>*</span></label>
          <input type="text"/>
          <label>Last Name<span className='astrek'>*</span></label>
          <input type="text"/>
        
     
        <label>Email<span className='astrek'>*</span></label>
          <input type="text" />
    
      
        <label>Subject<span className='astrek'>*</span></label>
          <input type="text" />
      
       
        <label>How Can We Help ?</label>
          <input type='text' style={{overflow:'hidden',height: '100px',
    whiteSpace: 'nowrap'}}/>
    
        
    <Button variant="success" style={{marginTop:'10px',padding:'10px'}}>Send Message</Button>
      </form>
    
      </div>
  </div>;
};

import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';

import './Contact.css'
import Border from '../../assets/Home/border.png'
// import ContactImg from  '../../assets/Home/mailz.jpeg'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

export default function Contact() {
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;



    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      });

      const [validation,  setValidation] = useState(false)
      const form = useRef();

      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === "" || formData.email === "" || formData.message === "") {
            document.getElementById('alert').innerHTML = 'Please fill these field correctly!'
            document.getElementById('alert').style.color = '#FF5823'

            setTimeout(function() {
                document.getElementById('alert').innerHTML = ''
              }, 2000);            

        }

      
        else {
          // submit the form
          if (nameRegex.test(formData.name) && emailRegex.test(formData.email)) {
            setValidation(true);
        //    Email code
            emailjs.sendForm('service_cgjwjb4', 'template_rq3g4a8', form.current, 'dTo8V0k85F0L91QRR')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent successfully")
                document.getElementById('alert').innerHTML = 'Message sent successfully!'
                document.getElementById('alert').style.color = 'green'
                setTimeout(function() {
                    document.getElementById('alert').innerHTML = ''
                  }, 2000); 
            }, (error) => {
                console.log(error.text);
            });
          } else {
                document.getElementById('alert').innerHTML = 'Please fill these field correctly!'
                document.getElementById('alert').style.color = '#FF5823'

                setTimeout(function() {
                    document.getElementById('alert').innerHTML = ''
                  }, 2000);  
            }
        }
      }


  
  return (
    <div className='Contact' id='Contact'>
        <div className='about-head'>
                <div class='content'>
                <h1 className='aboutme-head'>ContactMe</h1>
                <p className='reason'>Lets Keep In Touch.</p>
                    <img className='border-img' src={Border}/> 
                </div>


            </div>
        
        <div className='contact-form shadow-lg bg-body rounded'>
        <div className='leftside'>
            <h1>Get In Touch Here</h1>
            <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://www.facebook.com/profile.php?id=100040632817720' target='_blank'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        {/* <a href="mailto:yourname@example.com" target="_blank">
                            <i className='fa fa-google-plus-square'></i>

                        </a> */}
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=uzair1kk2019@gmail.com" target="_blank">
                        <i class="fa fa-google-plus-square"></i>
                        </a>
                        <a href='https://www.instagram.com/muxairkhan080/' target='_blank'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://github.com/muxair080' target='_blank'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a href="https://wa.me/923149819182" target='_blank'>
                            <i className='fa fa-whatsapp'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/muhammad-uzair-a69b5a223/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                    </div>
                   
                </div>
            <p className='email_msg mt-5'>Send Your Email Here!</p>
            <div className='Img'>

            </div>

        </div>
        <div className='rightside'>
            <div className='alert-box' id="alert">
                
            </div>
          
        <Form ref={form} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='label'>Name:</Form.Label>
            <Form.Control type="text" className="input_field" name="user_name" placeholder="Full Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className='label'>Email address:</Form.Label>
            <Form.Control type="email" className="input_field" name="user_email" placeholder="user@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className='label'>Message:</Form.Label>
            <Form.Control as="textarea" className="input_field" name="message" rows={3} placeholder='Type your message.'
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
            />
            </Form.Group>
          
            <div className='profile-options'>
                    <button className='btn primary-btn' onClick={handleSubmit} >
                        {""} Send {" "}
                    </button>
                </div>
        </Form>
        </div>
        
       </div>
    </div>
  )
}

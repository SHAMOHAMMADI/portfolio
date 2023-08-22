import react from "react";
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import styled from "./Contact.module.css"
import pic from '../img/lowPic/logo.jpg'

function Contact() {
  return (
    <>
    <NavBar />
    <div className={styled.Contact}> 
      <div className={styled.main}>
        <h2>Let's started a project together</h2>
        <div className={styled.input}>
        <label for="input1">What's your name?</label>
        <input id="input1" placeholder=""></input>
        </div>
        <div className={styled.input}>
        <label for="input1">What's your email?</label>
        <input id="input1" placeholder=""></input>
        </div>
        <div className={styled.input}>
        <label for="input1">What's the name of your organization?</label>
        <input id="input1" placeholder=""></input>
        </div>
        <div className={styled.input}>
        <label for="input1">What services are you looking for?</label>
        <input id="input1" placeholder=""></input>
        </div>
        <div className={styled.input}>
        <label for="input1">Your message</label>
        <textarea id="input1" placeholder=""></textarea>
        </div>
        <button className={styled.btn}>send</button>
      </div>
      <sidebar className={styled.sidebarContact}>
        <img src={pic} alt="" />
        <h4>Contact Detail :</h4>
          <h5>Email :</h5>
          <p>
            shahmohammadi1986@yahoo.com</p>
          <h5>Location:</h5>
                 <p>Tehran</p>
          <h5>Phone number:</h5>
          <p>+989128982040</p>
            
      </sidebar>
    </div>
      <Footer/>
    </>
  );
}

export default Contact;

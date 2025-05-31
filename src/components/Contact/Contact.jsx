import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"


const Contact = () => {
 
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3bcdb8e5-5a33-4ba3-917b-4c5344d1b455");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.result();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="Contact">
        <div className="Contact-col">
            <h3>Get in Touch <img src={msg_icon} alt="" /></h3>
            <p>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.</p>
            <ul>
                <li><img src={mail_icon} alt="" /> kiddiekaretoo@gmail.com</li>
                <li><img src={phone_icon} alt="" /> +1 (123) 456-7890</li>
                <li><img src={location_icon} alt="" /> 123 Kiddie Lane, Childtown, USA</li>
            </ul>
        </div>
      <div className="Contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" required/>
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type="submit" className='btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
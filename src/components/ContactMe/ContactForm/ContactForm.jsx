import React from 'react'
import './ContactForm.css'

const ContactForm = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bf755af3-5f61-4aff-849d-3de524437047");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-form-content">
  <form onSubmit={onSubmit}>
    <div className="name-container">
      <input type="text" name="firstname" placeholder="First Name" />
      <input type="text" name="lastname" placeholder="Last Name" />
    </div>

    <input type="text" name="email" placeholder="Email" />
    <textarea type="text" name="message" placeholder="Message" rows={3}/>

    <button>SEND</button>
  </form>
  <span>{result}</span>
</div>
  )
}

export default ContactForm
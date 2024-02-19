import React from 'react';
import axios from 'axios'; // Import Axios
import './Contact.css';
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    const { name, email, subject, message } = e.target.elements;

    let formData = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    try {
      // Make a POST request using Axios
      const response = await axios.post('YOUR_API_ENDPOINT', formData); // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint

      // Handle success
      console.log('Form submitted successfully!', response.data);
      setFormStatus('Sent');
    } catch (error) {
      // Handle error
      console.error('There was an error submitting the form', error);
      setFormStatus('Failed');
    }
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="subject">
              Subject
            </label>
            <input className="form-control" type="text" id="subject" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

import React , { useState }from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.sheetbest.com/sheets/e1152544-02ff-4d00-b1a8-a81a297b1348', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-grp">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input 
              type="email" 
              name="email" 
              placeholder="Email address" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone number" 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-grp">
            <input 
              type="text" 
              name="subject" 
              placeholder="Subject" 
              value={formData.subject} 
              onChange={handleChange} 
            />
          </div>
        </div>
      </div>
      <div className="form-grp">
        <textarea 
          name="message" 
          placeholder="Write message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button type="submit" className="btn">
          Send a message
        </button>
      </div>
    </form>
  );
};
export default ContactForm;

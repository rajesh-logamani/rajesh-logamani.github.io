import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__info">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out. I'd love to hear from you!</p>
          
          <div className="contact__details">
            <div className="contact__detail">
              <Mail className="icon" />
              <div>
                <h3>Email</h3>
                <p>rajeshlogamani@gmail.com</p>
              </div>
            </div>
            
            {/* <div className="contact__detail">
              <Phone className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div> */}
            
            <div className="contact__detail">
              <MapPin className="icon" />
              <div>
                <h3>Location</h3>
                <p>Chennai, Tamilnadu, India</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          
          <div className="form__group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          
          <div className="form__group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="icon" size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
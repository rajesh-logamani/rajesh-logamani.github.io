import React, { useState, useRef } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface AlertProps {
  type: 'success' | 'error';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => (
  <div className={`alert ${type === 'success' ? 'alert--success' : 'alert--error'}`}>
    {type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
    <p>{message}</p>
  </div>
);

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlert(null);

    try {
      const result = await emailjs.sendForm(
        'service_2ijo0ce', // Replace with your EmailJS service ID
        'template_eq5hso6', // Replace with your EmailJS template ID
        formRef.current!,
        '_Re1NynMaq343zdc7' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        setAlert({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setAlert({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
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

        <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
          {alert && <Alert type={alert.type} message={alert.message} />}
          
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
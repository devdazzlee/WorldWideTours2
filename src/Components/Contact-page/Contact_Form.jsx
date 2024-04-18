import React, { useEffect, useState } from 'react';
import '../Animation/Animation.css';
import axios from 'axios';

const Contact_Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const cards = document.querySelectorAll('.contact-form-animate');

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-up-element');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Email is not valid';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    if (!company.trim()) {
      newErrors.company = 'Company is required';
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    const isFormValid = validateForm();
    if (isFormValid) {
      const contactData = { name, email, phone, company, message }
      axios.post('https://ill-plum-cape-buffalo-ring.cyclic.app/api/v1/contact', contactData)
        .then((response) => {
          alert('Form has been submitted');


          setName('');
          setEmail('');
          setPhone('');
          setCompany('');
          setMessage('');
  
        })
        .catch((error) => {
          console.error('Error creating contact:', error);
        });
    } else {
      // Form is not valid; you can display error messages or take other actions
    }
  };

  return (
    <section className="contact-form-animate text-gray-700 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus-border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="phone" className="leading-7 text-sm text-gray-600">
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus-border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="company" className="leading-7 text-sm text-gray-600">
                Visiting Place
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder=" Visiting Place"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus-border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {errors.company && <p className="text-red-500">{errors.company}</p>}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="message" className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus-border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
                {errors.message && <p className="text-red-500">{errors.message}</p>}
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={handleSubmit}
                style={{ backgroundColor: '#0090B7' }}
                className="flex items-center mx-auto text-white border-0 py-2 px-8 focus:outline-none hover-bg-indigo-600 rounded text-lg"
              >
                <i className="fa fa-paper-plane mr-2" aria-hidden="true"></i>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_Form;

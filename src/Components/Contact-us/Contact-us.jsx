import React, { useEffect, useState } from 'react';
import './Contact-us.css';
import axios from 'axios';
const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSendClick = (e) => {
    e.preventDefault();
    alert("Form Submited")
    if (formData) {
      axios.post('https://ill-plum-cape-buffalo-ring.cyclic.app/api/v1/contactform', formData)
        .then((response) => {
          alert('Form has been submitted');
        })
        .catch((error) => {
          console.error('Error creating contact:', error);
        });
    } else {
      // Form is not valid; you can display error messages or take other actions
    }






    // Clear form data after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

  };

  useEffect(() => {
    const cards = document.querySelectorAll('.animation-from-left');
    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight) {
          card.classList.add('fade-from-right');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div class="bg-white  container mx-auto md:px-6">
        <section>
          <div class="flex flex-wrap py-24 animation-from-left">
            <div class="mb-10 w-full px-6 md:px-0 shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2 style={{ color: '#06885C' }} class="mb-6 text-3xl font-bold">
                GET IN TOUCH
              </h2>
              <h2 style={{ color: '#313E64' }} class="mb-6 text-3xl font-bold">
                Don't hesitate to <br /> contact us for more <br /> information.
              </h2>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                Feel free to reach out and connect with us - your gateway to personalized travel experiences. Whether you have
                questions, need assistance, or want to start planning your next adventure, we're here to make your travel dreams
                come true.
              </p>
              <button className="w-36 sm:w-36 md:w-36 lg:w-36  text-white font-bold py-2 px-4 rounded">
                Contact us
              </button>
            </div>

            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6 part-form">
              <form class="px-4 py-4">
              <div class=" mb-6">
  <input
    type="text"
    placeholder="Name"
    class="peer block min-h-[auto] w-full rounded border-2  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear "
    id="name" // Corrected id to match the key in formData
    onChange={handleChange}
    value={formData.name} // Set value attribute

  />
</div>
<div class="relative mb-6" data-te-input-wrapper-init>
  <input
    type="email"
    placeholder="Email Address"
    class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear "
    id="email" // Corrected id to match the key in formData
    onChange={handleChange}
    value={formData.email} // Set value attribute

  />
</div>
<div class="relative mb-6" data-te-input-wrapper-init>
  <textarea
    style={{ border: '2px solid #E5E7EB' }}
    class="peer block min-h-[auto] w-full rounded border-1 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear"
    id="message" // Corrected id to match the key in formData
    rows="3"
    placeholder="Your message"
    value={formData.message} // Set value attribute

    onChange={handleChange}
  ></textarea>
</div>

                <button
                  onClick={handleSendClick}
                  style={{ background: '#0090B7' }}
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  class="mb-6 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
    </>
  );
};

export default Contactus;

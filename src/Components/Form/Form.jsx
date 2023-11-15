import React, { useState, useRef, useEffect } from 'react';
import '../Dropdown/Dropdown.css';
import Select, { components } from "react-select";
import { Country, State, City } from 'country-state-city';
import '../Animation/Animation.css';
import './Form.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextField } from '@mui/material';
import { CustomDropdown } from '../Dropdown/Dropdown';

const Form = () => {
  const [name, setName] = useState('');
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quantity, setQuantity] = useState({});
  const [people, setPeople] = useState(2);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(`Total Quantity: ${people}`);
  };

  


  const handleIncrement = (option, e) => {
    e.stopPropagation();
    setQuantity((prev) => ({ ...prev, [option]: (prev[option] || 0) + 1 }));
    setPeople((prev) => prev + 1); // Increment total quantity
  };

  const handleDecrement = (option, e) => {
    e.stopPropagation();
    setQuantity((prev) => ({ ...prev, [option]: Math.max(0, (prev[option] || 0) - 1) }));
    setPeople((prev) => Math.max(0, prev - 1)); // Decrement total quantity
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const options = ['Adults', 'Childs', 'Infants'];


  const fetchCities = async () => {
    if (!selectedCountry) return;

    const selectedCountryIsoCode = selectedCountry.value;

    try {
      const citiesData = await City.getCitiesOfCountry(selectedCountryIsoCode);
      const formattedCities = citiesData.map((city) => ({
        value: city.name,
        label: city.name,
      }));
      setCities(formattedCities);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const fetchStates = async () => {
    if (!selectedCountry) return;

    const selectedCountryIsoCode = selectedCountry.value;
    const statesData = await State.getStatesOfCountry(selectedCountryIsoCode).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }));
    setStates(statesData);
  };

  useEffect(() => {
    console.log(checkinDate)
    const fetchCountries = async () => {
      const countriesData = await Country.getAllCountries().map((country) => ({
        value: country.isoCode,
        label: country.name,
      }));
      setCountries(countriesData);
    };

    const fetchStatesAndCities = async () => {
      fetchCities();
      fetchStates();
    };

    fetchCountries();
    fetchStatesAndCities();
  }, [selectedCountry, selectedState ]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption); 
    setName(selectedOption.label);
  };
  
  const handleSubmit = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (people < 1) {
      newErrors.people = 'Number of people must be at least 1';
    }

    if (!checkinDate) {
      newErrors.checkinDate = 'Checkin date is required';
    }

    if (checkinDate && checkoutDate && checkinDate > checkoutDate) {
      newErrors.checkinDate = 'Checkin date must be before checkout date';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const formData = {
        name,
        people,
        checkinDate,
        checkoutDate,
      };
console.log(formData)
      axios.post('https://brown-bear-tutu.cyclic.app/api/v1/trip', formData)
        .then(response => {
          alert('Form has been submitted');
        })
        .catch(error => {
          console.error('Error creating trip:', error);
        });
    }
  };
  const handleDateChange = (date) => {
    setCheckinDate(date); 
  };
const handleCheckoutDateChange = (date) =>{
  setCheckoutDate(date)
}
  

  return (
    <div   className='m-auto'   >
      <div className="fade-up-element elementor-form-fields-wrapper elementor-labels-">
      <Select
  className='w-44 py-4 z-50	'
  value={selectedCountry}
  onChange={handleCountryChange}
  options={countries}
  placeholder="Select a Country"
  style={{ fontFamily: 'YourChosenFont, sans-serif' }}
/>

 <div className="relative inline-block z-50	">
      <button
        style={{ border: "1px solid #ccc" }}
        className="text-white px-6 py-4 rounded "
        onClick={handleToggle}
      >
        {selectedOption || (
          <span
            dangerouslySetInnerHTML={{
              __html: '<i   class="fa fa-user" aria-hidden="true" style="color: #707070;"></i>',
            }}
          />
        )}
        <span className='text-black ml-4'>{people}</span>

        <span
          dangerouslySetInnerHTML={{
            __html: '<i class="fa fa-caret-down text-black ml-4"  style="color: #707070;" aria-hidden="true" ></i>',
          }}
        />
      </button>

      {isOpen && (
        <ul className="absolute top-full left-0 bg-white border rounded p-2 shadow-md">
          {options.map((option) => (
            <li
            
              key={option}
              className="flex w-40 p-2 cursor-not-allowed hover:bg-gray-200" // Disable cursor and click events
            >
              <span className="mr-2">{option}</span>
              <div className="flex">
                <button
                  className="mx-2"
                  onClick={(e) => handleIncrement(option, e)}
                >
                  +
                </button>
                <span>{quantity[option] || 0}</span>
                <button
                  className="mx-2"
                  onClick={(e) => handleDecrement(option, e)}
                >
                  -
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
        <LocalizationProvider    dateAdapter={AdapterDayjs}  >
          <DatePicker
          dateFormat="yyyy-MM-dd"
          onChange={handleDateChange}
          label="Check In Date"
        />
        </LocalizationProvider>
        <LocalizationProvider    dateAdapter={AdapterDayjs}  >
        <DatePicker
         dateFormat="yyyy-MM-dd"
        label="Check Out Date"
        onChange={handleCheckoutDateChange}
      />
        </LocalizationProvider>
        <button onClick={handleSubmit} className="custom-button">
          <span>Inquiry Now</span>
        </button>

      {Object.keys(errors).length > 0 && (
        <div   style={{"color" : "red"}} className="error-messages">
          <ul>
            {Object.values(errors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default Form;
import React, { useState, useRef, useEffect } from "react";
import "../Dropdown/Dropdown.css";
import Select, { components } from "react-select";
import '../Card/Card.css'
import { Country, State, City } from "country-state-city";
import "../Animation/Animation.css";
import "./Form.css";
import axios from "axios";
import { TextField } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Form2 = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const locationRef = useRef(null);
  const activitiesRef = useRef(null);
  const accomodationRef = useRef(null);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
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
  const [people, setPeople] = useState(0);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleIncrement = (option, e) => {
    e.stopPropagation();
    setQuantity((prev) => ({ ...prev, [option]: (prev[option] || 0) + 1 }));
    setPeople((prev) => prev + 1); // Increment total quantity
  };

  const handleDecrement = (option, e) => {
    e.stopPropagation();
    setQuantity((prev) => ({
      ...prev,
      [option]: Math.max(0, (prev[option] || 0) - 1),
    }));
    setPeople((prev) => Math.max(0, prev - 1)); // Decrement total quantity
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const options = ["Adults", "Childs", "Infants"];

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
      console.error("Error fetching cities:", error);
    }
  };

  const fetchStates = async () => {
    if (!selectedCountry) return;

    const selectedCountryIsoCode = selectedCountry.value;
    const statesData = await State.getStatesOfCountry(
      selectedCountryIsoCode
    ).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }));
    setStates(statesData);
  };

  useEffect(() => {
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
  }, [selectedCountry, selectedState]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setName(selectedOption.label);
  };

  const handleSubmit = () => {
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const numberValue = numberRef.current.value;
    const locationValue = locationRef.current.value;
    const activitiesValue = activitiesRef.current.value;
    const accomodationValue = accomodationRef.current.value;
    const newErrors = {};
    if (!nameValue) {
      newErrors.nameValue = "Name is required";
    }
    if (!emailValue) {
      newErrors.emailValue = "Email is required";
    }
    if (!numberValue) {
      newErrors.numberValue = "Number is required";
    }
    if (!locationValue) {
      newErrors.locationValue = "Desired Location is required";
    }
    if (!activitiesValue) {
      newErrors.activitiesValue = "Desired Activities are required";
    }
    if (!accomodationValue) {
      newErrors.accomodationValue = "Desired Accommodation is required";
    }
    if (!name) {
      newErrors.name = "Country Name is required";
    }
    if (people < 1) {
      newErrors.people = "Number of people must be at least 1";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const formData = {
        nameValue,
        emailValue,
        numberValue,
        locationValue,
        activitiesValue,
        accomodationValue,
        selectedCountry,
        people,
        name
      };
      console.log(formData);
      axios
        .post("https://brown-bear-tutu.cyclic.app/api/v1/trip2", formData)
        .then((response) => {
          setName("");
          setSelectedCountry(null);
          setSelectedState(null);
          setSelectedCity(null);
          setIsOpen(false);
          setQuantity({});
          setPeople(0);
          nameRef.current.value = "";
        emailRef.current.value = "";
        numberRef.current.value = "";
        locationRef.current.value = "";
        activitiesRef.current.value = "";
        accomodationRef.current.value = "";
        toast.success("Form submitted successfully!");
        })
        .catch((error) => {
          toast.error("Error Occur !");
          console.error("Error creating trip:", error);
        });
    }
  };
  const handleDateChange = (date) => {
    setCheckinDate(date);
  };
  const handleCheckoutDateChange = (date) => {
    setCheckoutDate(date);
  };

const handleChange = (event) => {
    setAge(event.target.value);
};


  return (
<div   className={` flex justify-between	 flex-wrap m-auto bg-white rounded-xl	`}  >
               <div className="flex flex-col mx-12 m-auto ">
      <div  className="py-6  elementor-form-fields-wrapper3 elementor-labels- ">
        <TextField
        className="bg-white rounded"
       style={{"width" : "100%" }}
          inputRef={nameRef}
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
        />
        <TextField
  className="bg-white rounded"
  style={{"width" : "100%"}}
          inputRef={emailRef}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
  className="bg-white rounded"
  style={{"width" : "100%"}}
          inputRef={numberRef}
          id="outlined-basic"
          label="Number or Whatsapp"
          variant="outlined"
        />

        <div className="relative inline-block	">
          <button
            style={{ border: "1px solid #ccc", zIndex: "10px" }}
            className="w-80 text-white px-6 py-4 rounded  bg-white"
            onClick={handleToggle}
          >
            {selectedOption || (
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    '<i   class="fa fa-user" aria-hidden="true" style="color: #707070;"></i>',
                }}
              />
            )}
            <span className="text-black ml-4">{people}</span>

            <span
              dangerouslySetInnerHTML={{
                __html:
                  '<i class="fa fa-caret-down text-black ml-4"  style="color: #707070;" aria-hidden="true" ></i>',
              }}
            />
          </button>

          {isOpen && (
            <ul className="z-50 absolute top-full left-0 bg-white border rounded p-2 shadow-md">
              {options.map((option) => (
                <li
                  key={option}
                  className="flex w-40 p-2 cursor-not-allowed hover:bg-gray-200" // Disable cursor and click events
                >
                  <span className="mr-2">{option}</span>
                  <div className="flex">
                    <button
                      className="mx-2"
                      onClick={(e) => handleDecrement(option, e)}
                    >
                      -
                    </button>
                    <span>{quantity[option] || 0}</span>
                    <button
                      className="mx-2"
                      onClick={(e) => handleIncrement(option, e)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <TextField
            className="bg-white rounded"
            style={{"width": "100%"}}
            inputRef={locationRef}
            id="outlined-basic"
            label="Desired Location"
            variant="outlined"
          />
          <Select
          className="w-80 z-10"
          value={selectedCountry}
          onChange={handleCountryChange}
          options={countries}
          placeholder="Select a Country"
          style={{ fontFamily: "YourChosenFont, sans-serif" }}
        />
 <TextField
            className="bg-white rounded"
            style={{"width": "100%"}}
            inputRef={activitiesRef}
            id="outlined-basic"
            label="Desired Activities"
            variant="outlined"
          />
          <TextField
            className="bg-white rounded"
            style={{"width": "100%"}}
            inputRef={accomodationRef}
            id="outlined-basic"
            label="Desired Accommodation"
            variant="outlined"
          />
        <button onClick={handleSubmit} className="custom-button">
          <span>Inquire Now</span>
        </button>

        {Object.keys(errors).length > 0 && (
          <div style={{ color: "red" }} className="error-messages">
            <ul>
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}
         <ToastContainer />
      </div>
    </div>



</div>
  );
};

export default Form2;
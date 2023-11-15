import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

export const CustomDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quantity, setQuantity] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(`Total Quantity: ${totalQuantity}`);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option, totalQuantity); 
    setIsOpen(false);
  };
  


  const handleIncrement = (option, e) => {
    e.stopPropagation();
    setQuantity((prev) => ({ ...prev, [option]: (prev[option] || 0) + 1 }));
    setTotalQuantity((prev) => prev + 1); // Increment total quantity
  };

  const handleDecrement = (option, e) => {
    e.stopPropagation();
    setQuantity((prev) => ({ ...prev, [option]: Math.max(0, (prev[option] || 0) - 1) }));
    setTotalQuantity((prev) => Math.max(0, prev - 1)); // Decrement total quantity
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

  return (
    <div className="relative inline-block z-50	">
      <button
        style={{ border: "1px solid #ccc" }}
        className="text-white px-6 py-4 rounded "
        onClick={handleToggle}
      >
        {selectedOption || (
          <span
            dangerouslySetInnerHTML={{
              __html: '<i   class="fa fa-user text-black" aria-hidden="true"></i>',
            }}
          />
        )}
        <span className='text-black ml-4'>{totalQuantity}</span>

        <span
          dangerouslySetInnerHTML={{
            __html: '<i class="fa fa-caret-down text-black ml-4   " aria-hidden="true"></i>',
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
  );
};
import React from 'react';
import './Hover_Image_Card.css';
import { Link } from 'react-router-dom';

const HoverImageCard = ({ imageUrl, title, description, defaultText }) => {
  return (
    <div className="imagertfhover">
      <img className="image__img" src={imageUrl} alt={title} />
      <div className="image__overlay image__overlay--primary">
         <Link to="/Contact-us">
        <button className="image__title">{title}</button>
         </Link>
      </div>
      <div className="default-text">{defaultText}</div>
    </div>
  );
};

export default HoverImageCard;
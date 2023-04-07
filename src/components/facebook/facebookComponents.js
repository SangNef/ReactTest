import React from 'react';

const FacebookComponents = (props) => {
  return (
    <div className={`facebook-account ${props.className}`}>
      <div className="facebook-avatar">
        <img src={props.images} alt="" />
      </div>
      <div className="facebook-details">
        <h2 className="facebook-name">{props.name}</h2>
        <h3 className="facebook-contact">{props.contact}</h3>
      </div>
    </div>
  );
};

export default FacebookComponents;
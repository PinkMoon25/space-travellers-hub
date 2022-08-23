import React from 'react';
import PropTypes from 'prop-types';
import './Dragons.css';

const BabyDragon = ({
  name, type, description, image,
}) => (
  <li>
    <div className="image_container">
      <img src={image} alt={name} className="dragon_image" />
    </div>
    <div className="description-container">
      <h3 className="title">{name}</h3>
      <h5 className="type">
        (
        {type}
        )
      </h5>
      <p>{description}</p>
      <button type="button" className="reserve">Reserve Dragon</button>
    </div>
  </li>
);

BabyDragon.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
};

export default BabyDragon;

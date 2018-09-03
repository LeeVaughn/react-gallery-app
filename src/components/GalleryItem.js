import React from 'react';

// creates li element for an image
const GalleryItem = props => (
  <li>
    <img src={props.url} alt={props.title} />
  </li>
);

export default GalleryItem;
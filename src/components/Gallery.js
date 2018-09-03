import React from "react";
import GalleryItem from "./GalleryItem";
import NotFound from "./NotFound";

// uses data supplied as props to create image gallery
const Gallery = props => {
    console.log(props);
    // stores data
    const results = props.data;
    let images;

    if (results.length > 0) {
        // maps over array to return an image component for each object in array
        // passes url as a prop
        images = results.map(image => <GalleryItem url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} key={image.id} />);
    } else {
        images = <NotFound />
    }
    
    return (
        <div className="photo-container">
            <h2>Images of {props.category}</h2>
            <ul>
                {images}
            </ul>
        </div>
    )
};

export default Gallery;

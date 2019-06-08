import React from 'react';
import config from '../../config';

const ProductThumbnail = props => {
     const photo = config.apiURL + '/uploads/' + props.photo;
    return <img className="w-100" src={photo} alt=""/>
};

export default ProductThumbnail;

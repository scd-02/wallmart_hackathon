
"use client";

import React, { useState } from 'react';
import './ProductDetails.css'; 



const ProductDetails = ({ product }) => {
  const [customizationQuery, setCustomizationQuery] = useState(product.customizationQuery);

  const handleInputChange = (event) => {
    setCustomizationQuery(event.target.value);
  };

  return (
    <div className="product-details">
      <div className="product-image">
        {product.productImages && product.productImages.length > 0 ? (
          <img
            src={"iphone.png"}
            alt={product.productName}
            className="product-img"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <div className="product-info">
        <h2>{product.productName}</h2>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Description:</strong> {product.productDescription}</p>
        <p><strong>Specification:</strong> {product.productSpecification}</p>
        <p><strong>URL:</strong> <a href={product.productURL} target="_blank" rel="noopener noreferrer">{product.productURL}</a></p>
        <p className="customization-query"><strong>Customization Query:</strong></p>
        <input
          type="text"
          value={customizationQuery}
          onChange={handleInputChange}
          className="customization-input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default ProductDetails;

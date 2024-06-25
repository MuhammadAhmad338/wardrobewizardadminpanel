"use client"
import React, { useState } from 'react';
import axios from 'axios';

const ProductUploadForm = () => {

  const [name, setName] = useState('THRST Classic Hue Swim Shorts');
  const [price, setPrice] = useState(49.99);
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cur…');
  const [sizes, setSizes] = useState(['S', 'M', 'L', 'XL']);
  const [images, setImages] = useState(['image1.jpg', 'image2.jpg']);
  const [material, setMaterial] = useState('90% Polyester 10% elastane');
  const [features, setFeatures] = useState(
    'Super quick-dry mesh lining, Side pockets and back pocket with zip, El…'
  );
  const [fitDescription, setFitDescription] = useState(
    'Runs slightly longer through the outer leg'
  );
  const [additionalDetails, setAdditionalDetails] = useState(
    'Model wears a size medium'
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const productData = {
      name,
      price,
      description,
      sizes,
      images,
      productInfo: {
        material,
        features,
        fitDescription,
        additionalDetails,
      },
    };

    try {
      await axios.post('/api/products', productData);
      console.log('Product data uploaded successfully');
    } catch (error) {
      console.error('Error uploading product data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="sizes">Sizes:</label>
        <input
          type="text"
          id="sizes"
          value={sizes.join(', ')}
          onChange={(e) => setSizes(e.target.value.split(', '))}
        />
      </div>
      <div>
        <label htmlFor="images">Images:</label>
        <input
          type="text"
          id="images"
          value={images.join(', ')}
          onChange={(e) => setImages(e.target.value.split(', '))}
        />
      </div>
      <div>
        <label htmlFor="material">Material:</label>
        <input
          type="text"
          id="material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="features">Features:</label>
        <textarea
          id="features"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="fitDescription">Fit Description:</label>
        <input
          type="text"
          id="fitDescription"
          value={fitDescription}
          onChange={(e) => setFitDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="additionalDetails">Additional Details:</label>
        <input
          type="text"
          id="additionalDetails"
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
        />
      </div>
      <button type="submit">Upload Product</button>
    </form>
  );
};

export default ProductUploadForm;
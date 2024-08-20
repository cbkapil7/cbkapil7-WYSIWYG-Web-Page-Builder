import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import { Image } from '@chakra-ui/react';

export default function ImageComponent() {
  const [imageSrc, setImageSrc] = useState('https://localhost'); 
  const [imageFile, setImageFile] = useState(null);
  const imageRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setImageFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Draggable>
      <div>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <Image
          ref={imageRef}
          src={imageSrc}
          alt="Draggable"
          boxSize="150px" 
          objectFit="cover"
        />
      </div>
    </Draggable>
  );
}

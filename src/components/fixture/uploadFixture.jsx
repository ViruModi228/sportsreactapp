import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/upload.css'

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post("http://localhost:3001/api/v1/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
      alert('file uploaded successfully')
      // Handle success, display message, update state, etc.
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error, display error message, etc.
    }
  };

  return (
    <div className='upload_main'>
      <div className='tittle'>Upload Image</div>
      <form onSubmit={handleSubmit} className='choose'>
        <input type="file" onChange={handleFileChange} className='up_input'/>
        <button type="submit" className='upload_bt'>Upload</button>
      </form>
    </div>
  );
};

export default ImageUpload;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/fixture.css'

const UserSprintAndPump = ({name}) => {
  const [fileUrl, setFileUrl] = useState('');

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/uploads/${name}.jpg`, {
          responseType: 'blob',
        });
        const blob = new Blob([response.data]);
        const url = URL.createObjectURL(blob);
        setFileUrl(url);
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    };
    fetchFile();
  }, []);
  return (
    <div className='image-container'>
      {fileUrl && 
        <img src={fileUrl} alt="Uploaded File" className='responsive-image'>

        </img>
      }
    </div>
  );
};

export default UserSprintAndPump;

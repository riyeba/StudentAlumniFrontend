import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Upcoming = () => {
const[Upcoming, setUpcomingdata]=useState()
const[loading,setIsLoading]=useState(false)

 
  const carouselItemStyle = {
    minWidth: '100%',
    boxSizing: 'border-box',
    padding: '20px',
    textAlign: 'center',
  };

  const carouselContentStyle = {
    display: 'flex',
    animation: 'scroll 15s linear infinite',
  };


  useEffect(() => {
    const fetchDataExco = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/upcoming/");
        setUpcomingdata(response.data);
        setIsLoading(false);
        
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchDataExco();
  }, []);

  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '200px', position: 'relative' }} >
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        <div style={carouselContentStyle}>
          <div className="" style={carouselItemStyle}>
           {Upcoming?.map((el)=> <div key={el.id}>
            <h3>{el.date}</h3>
            <p className='fw-bold fs-4'>{el.title}.</p>
            
            </div>)}
            
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Upcoming;
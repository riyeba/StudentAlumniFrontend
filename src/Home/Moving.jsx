

import Carousel from 'react-bootstrap/Carousel';

import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function RecentEvent() {

  const[loading, setIsLoading]=useState(false)
  const[eventdata,setEventdata]=useState()

  useEffect(() => {
    const fetchDataExco = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/event/");
        setEventdata(response.data);
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
   <section className='container-fluid'   style={{ width: "21rem", height:'21rem'}}>
     <Carousel  indicators={false}>
      {eventdata?.map((el)=><Carousel.Item key={el.id}>
        <div >
        <img src={el.photo} 
       
        style={{ width: "13rem", height:'13rem'}}
        alt="..."
        />
        </div>
        
        <Carousel.Caption  style={{position:'relative' , marginTop:"1.2rem" , marginRight:"6rem"}}>
          
          <p  className='fs-5 text-dark text-bold' >{el.title}</p>
        </Carousel.Caption>
      </Carousel.Item>)}
    
      
    </Carousel>

   </section>
  );
}

export default  RecentEvent;
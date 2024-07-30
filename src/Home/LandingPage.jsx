import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import RecentEvent from "./Moving";
import Upcoming from "./UpcomingEvent";
import axios from "axios";

function LandingPage() {

  const [active, setActive] = useState([]);
  const [excodata, setExcodata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/pres/");
        setActive(response.data);
        setIsLoading(false);
        
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  
  const active2=active.reverse()
  console.log(active2)


  useEffect(() => {
    const fetchDataExco = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/port/");
        setExcodata(response.data);
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
    <div className="min-vh-100">
      <div
        className="container mt-4  container-fluid "
        style={{ width: "100%" }}
      >
        <h3 className="" style={{ fontSize: "2rem" }}>
          President Speech
        </h3>
        <div className="card ">
          {/* <h5 className="card-header">Featured</h5> */}
          <div className="card-body ">
            {/* <h5 className="card-title">Special title treatment</h5> */}
            <p
              className="card-text  "
              style={{ fontSize: "1.2rem", textAlign: "justify" }}
            >
             {active2[0]?.text}
            </p>
            <p className="text-success " style={{ fontSize: "1.6rem" }}>
              {active2[0]?.name}
            </p>
            <p className="fs-4" style={{marginTop:"-1rem"}}>NSU-KSU President</p>
          </div>
        </div>

        <div>
          <h3
            className="text-center "
            style={{ marginTop: "5rem", fontSize: "2rem" }}
          >
            Meet Our Excos
          </h3>
        </div>

      
        <section className="container-fluid text-nowrap  ">
          <div
            className="d-flex justify-content-center container flex-wrap "
            style={{ width: "70%" }}
          >
           {excodata.map((el)=><div className="text-center m-4 " key={el.id}>
              <img
                src={el.photo}
                className=""
                alt="..."
                style={{ width: "12rem", height:'15rem'}}
              />
              <div className=" fs-6">
                <h5
                  className="mt-2 text-success text-uppercase"
                  style={{ marginBottom: "0.1rem" }}
                >
                  {el.exco}
                </h5>
                <p className=" " style={{ marginBottom: "0.1rem" }}>
                  {el.name}
                </p>
                {/* <p className="" style={{marginBottom:'0.1rem'}}>College : language sciences</p> */}
                <p className="" style={{ marginBottom: "0.1rem" }}>
                  Department : {el.department}
                </p>
                <p className="" style={{ marginBottom: "0.1rem" }}>
                  Program : {el.degree}
                </p>
                <p className="">Mobile/Whatsapp : {el.mobile}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>)}
            

            
           
            
          </div>
        </section>
        



            <section>
            <div>
                <h3
                  className="text-center "
                  style={{ marginTop: "5rem", fontSize: "2rem" }}
                >
                  Recent Events
                </h3>
              </div>
              <div className="text-center  "  style={{marginTop:"3.5rem"}}>
                <div > <RecentEvent/></div>
              </div>
            </section>

            <section>
            <div>
                <h3
                  className="text-center "
                  style={{ marginTop: "10rem", fontSize: "2rem" }}
                >
                  Upcoming Event
                </h3>
              </div>
              <div className="text-center mt-3">
                <div ><Upcoming/></div>
              </div>
            </section>
      </div>
    </div>
  );
}

export default LandingPage;

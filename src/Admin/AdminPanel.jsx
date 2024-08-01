
import React from "react";

import { Link, NavLink} from "react-router-dom";


function SiteAdmin() {
  return (
    <div className="container-fluid mt-4 min-vh-100">
      <div className="d-flex gap-1">
        <aside className="card fs-7 " style={{height:"40rem", width:"21rem"}}>
          <div>
            <div className="list-group list-group-flush ">
              <div className="list-group-item list-group-item-action  d-flex gap-2  ">
                <i className="bi bi-house-door-fill"></i>
                <Link href="#" className="text-black text-decoration-none ">
                  Dashboard
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-person-fill-check"></i>
                <Link to="/speech" className="text-black text-decoration-none">
                  President Speech
                </Link>
              </div>
             

              
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-person-fill-dash"></i>
                <Link to="/exco" className="text-black text-decoration-none ">
                  Register Excos
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-person-fill-dash"></i>
                <Link to="/event" className="text-black text-decoration-none ">
                  Recent Events
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-person-fill-dash"></i>
                <Link to="/upcomings" className="text-black text-decoration-none ">
                  Upcoming Event
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-person-fill-dash"></i>
                <Link to="/attendance" className="text-black text-decoration-none ">
                  Attendance
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-person-fill-dash"></i>
                <Link to="/logo" className="text-black text-decoration-none ">
                  Upload Logo
                </Link>
              </div>

             
             
        

              <Link
                
                className="list-group-item list-group-item-action text-danger mt-4 d-flex gap-2 fw-bold fs-6 position-absolute bottom-0 end-0 border-top"
              >
                <i className="bi bi-box-arrow-right text-danger "></i>
                Sign Out
              </Link>
            </div>
          </div>
        </aside>

        <section className="container-fluid  ">
            <div className="d-flex justify-content-center flex-wrap gap-2" style={{ marginRight: '-1rem'}}>
<div className="card"  style={{ width: '12rem', height:'9rem' }}>
 
  <div className="card-body text-center" >
    <h5 className="card-title">Male Students</h5>
    <p className="card-text">20</p>
    <NavLink to="/activeadmin" className="btn btn-success">Check</NavLink>
  </div>
</div>

<div className="card"  style={{ width: '12rem', height:'9rem' }}>
 
  <div className="card-body text-center">
    <h5 className="card-title">Female Students</h5>
    <p className="card-text">20</p>
    <a href="#" className="btn btn-success">Check</a>
  </div>
</div>

<div className="card"  style={{ width: '12rem', height:'9rem' }}>
 
  <div className="card-body text-center">
    <h5 className="card-title ">Alumni</h5>
    <p className="card-text ">20</p>
    <Link to="/alumniinfo" className="btn btn-success">Check</Link>
  </div>
</div>
{/* <div className="card"  style={{ width: '12rem', height:'9rem' }}>
 
  <div className="card-body text-center">
    <h5 className="card-title">Alumni (Females)</h5>
    <p className="card-text ">20</p>
    <a href="#" className="btn btn-success">Check</a>
  </div>
</div> */}







</div>
        </section>
      </div>
    </div>
  );
}

export default SiteAdmin;

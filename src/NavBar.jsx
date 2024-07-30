import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";



function NavBar() {

  const UserLoginStatus=localStorage.getItem('UserLoginStatus')
  const UserLoginStatu=localStorage.getItem('UserLoginStatu')
  
    
  function LogOut(){
    localStorage.removeItem('UserLoginStatus')
    window.location.href='/login'
  }

  function LogOutal(){
    localStorage.removeItem('UserLoginStatu') 
    window.location.href='/loginal'     
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light sticky-top">
    <div className="container">
      <div className=" d-flex gap-1">
      <div className="my-1">
      <LazyLoadImage src='nsulogo.jpg' width="30" className="rounded-circle"/>
      </div>
      <Link className="navbar-brand text-dark fw-bold" to="/"> NSU-KSU </Link>
      </div>
      
      <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <Link className="nav-link active text-dark fs-5" aria-current="page" to="/home">Login</Link>
         
          {UserLoginStatus==='true'? <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Active Student
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
             
            <div>
            
            </div>
            
            
            <li onClick={()=>LogOut()}><Link className="dropdown-item text-dark fs-5" href="#">LogOut</Link></li> 
          </ul>
        </li>: ""}

        

       {UserLoginStatu=='true'? 
       <div>
       <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Alumni
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          
            
            
            
            <li onClick={()=>LogOutal()}><Link className="dropdown-item" href="#">LogOut</Link></li>
          </ul>
        </li>
        </div> : ""}
        </div>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;

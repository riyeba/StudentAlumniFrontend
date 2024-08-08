// // import axios from "axios";
// // import React, { useState } from "react";
// // import toast from "react-hot-toast";
// // import { Link, useLocation, useNavigate} from "react-router-dom";

// // function EditProfile() {
// //   const navigate=useNavigate()
// //   const location = useLocation();
// //   const id = location?.state?.id;
// //   const el = location?.state?.el;

 
 
// //   const [Surname, setSurname] = useState();
// //   const [First_name, setFirst_name] = useState();
// //   const [Emergency_FirstName, setEmergency_FirstName] = useState();
// //   const [Degree, setDegree] = useState();
// //   const [College, setCollege] = useState();
// //   const [Phone_number, setPhone_number] = useState();
// //   const [Address, setAddress] = useState();
// //   const [FamilyinSaudi, setFamilyinSaudi] = useState();
// //   const [Building_number, setBuilding_number] = useState();
// //   const [Room_number, setRoom_number] = useState();
// //   const [Emergency_Surname, setEmergency_Surname] = useState();
// //   const [Nextofkin_mobile, setNextofkin_mobile] = useState();
// //   const [Nextofkin_city, setNextofkin_city] = useState();
// //   const [Relationship, setRelationship] = useState();
// //   const [photo, setphoto] = useState();
// //   const [auth_email, setauth_email] = useState();
// //   const [auth_password, setauth_password] = useState();


  

// //   function Submit() {
// //     // const verify_token=Math.floor(100000 + Math.random() * 900000)
// //     const formdata = new FormData();

// //     formdata.append("Surname", Surname);
// //     formdata.append("First_name", First_name);
// //     formdata.append("Degree", Degree);
// //     formdata.append("College", College);
// //     formdata.append("Phone_number", Phone_number);
// //     formdata.append("Address", Address);
// //     formdata.append("FamilyinSaudi", FamilyinSaudi);
// //     formdata.append("Building_number", Building_number);
// //     formdata.append("Room_number", Room_number);
// //     formdata.append("Emergency_Surname", Emergency_Surname);
// //     formdata.append("Emergency_FirstName", Emergency_FirstName);
// //     formdata.append("Relationship", Relationship);
// //     formdata.append("Nextofkin_mobile", Nextofkin_mobile);
// //     formdata.append("Nextofkin_city", Nextofkin_city);
// //     formdata.append("photo", photo);
// //     formdata.append("auth_email", auth_email);
// //     formdata.append("auth_password", auth_password);
// //     formdata.append("verify_token", el?.verify_token);

// //     try {
// //       axios
// //         .put(`http://127.0.0.1:8000/nsu/${id}/`, formdata)
// //         .then((response) => {
          
// //           if (response.status === 200) {
// //             toast.success("data successfully updated");
            
// //             window.location.href = "/board";
           
           
// //           }
          
// //         });
// //     } catch (error) {
// //       toast.error(error.response.statusText);
// //     }
// //   }

// //   function SubmitForm(e) {
// //     e.preventDefault();
// //     Submit();
// //   }

// //   return (
// //     <form className=" container w-auto mt-5 min-vh-100 " onSubmit={SubmitForm}>
// //       <div className="card">
// //         {/* <h3 className="card-header mb-3">Edit Profile</h3> */}
// //         <div className="card-header d-flex justify-content-between align-items-center">
// //           <h3 className="mb-0">Edit Profile</h3>
          
// //           <Link
// //             to="/board"
// //             className="text-decoration-none text-black fw-bold"
// //           >
// //             <h2 className="mb-0 ">
// //               <i className="bi bi-arrow-left"></i>
// //             </h2>
// //           </Link>
// //         </div>
// //         <div className="container">
// //           <div className="mb-3 mt-4">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               Surname
// //             </label>
// //             <input
// //               required
// //               type="text"
// //               className="form-control"
// //               aria-describedby="emailHelp"
// //               onChange={(e) => setSurname(e.target.value)}
// //               // defaultValue={el?.Surname}
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               First Name
// //             </label>
// //             <input
// //               required
// //               type="text"
// //               className="form-control"
// //               aria-describedby="emailHelp"
// //               onChange={(e) => setFirst_name(e.target.value)}
// //               // defaultValue={el?.First_name}
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               Degree
// //             </label>

// //             <select
// //               className="form-select"
// //               aria-label="Default select example"
// //               required
// //               onChange={(e) => setDegree(e.target.value)}
// //             >
// //               <option value="select">Select</option>
// //               <option value="MSC">MSC</option>
// //               <option value="PhD">Diploma</option>
// //               <option value="PhD">Professional Degree</option>
// //               <option value="PhD">PhD</option>
// //               <option value="PhD">Other</option>
// //             </select>
// //           </div>

// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               Email
// //             </label>
// //             <input
// //               onChange={(e) => setauth_email(e.target.value)}
// //               type="email"
// //               className="form-control"
// //               aria-describedby="emailHelp"
// //               required
// //               // defaultValue={values.name}
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail" className="form-label">
// //               Password
// //             </label>
// //             <input
// //               onChange={(e) => setauth_password(e.target.value)}
// //               type="password"
// //               className="form-control"
// //               aria-describedby="emailHelp"
// //               required
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               College
// //             </label>

// //             <select
// //               className="form-select"
// //               aria-label="Default select example"
// //               required
// //               onChange={(e) => setCollege(e.target.value)}
// //             >
// //               <option value="Select">Select</option>
// //               <option value="Language">Language</option>
// //               <option value="Education">Education</option>
// //               <option value="Humanity">Humanity</option>
// //               <option value="Engineering">Engineering</option>
// //               <option value="Science">Science</option>
// //               <option value="Health">Health</option>
// //               <option value="Business Admn">Business Admn</option>
// //               <option value="Architecture">Architecture</option>
// //               <option value="Computer Science">Computer Science</option>
// //               <option value="Food & Agric">Food & Agric</option>
// //               <option value="other">other</option>
// //             </select>
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               Phone Number
// //             </label>
// //             <input
// //               required
// //               type="text"
// //               className="form-control"
// //               aria-describedby="emailHelp"
// //               placeholder="+966"
// //               onChange={(e) => setPhone_number(e.target.value)}
// //               // defaultValue={el?.Phone_number}
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //               Building No
// //             </label>
// //             <input
// //               required
// //               type="text"
// //               className="form-control"
// //               placeholder="7"
// //               onChange={(e) => setBuilding_number(e.target.value)}
// //               // defaultValue={el?.Building_number}
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //               Room Number
// //             </label>
// //             <input
// //               required
// //               type="text"
// //               className="form-control"
// //               placeholder="4"
// //               onChange={(e) => setRoom_number(e.target.value)}
// //               // defaultValue={el?.Room_number}
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               Family in Saudi Arabia?
// //             </label>
// //             <select
// //               className="form-select"
// //               required
// //               aria-label="Default select example"
// //               onChange={(e) => setFamilyinSaudi(e.target.value)}
// //             >
// //               <option defaultValue="Select">Select</option>
// //               <option value="No">No</option>
// //               <option value="Yes">Yes</option>
// //             </select>
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //               Address ( If your family is in Saudi Arabia)
// //             </label>
// //             <input
// //             required
// //             placeholder="write No if your family is not in Sa"
// //               type="text"
// //               className="form-control"
              
// //               onChange={(e) => setAddress(e.target.value)}
// //             />
// //           </div>

// //           <div className="mb-3 mt-4">
// //             <label htmlFor="formFile" className="form-label">
// //               Upload your passport
// //             </label>
// //             <input
// //               required
// //               className="form-control"
// //               type="file"
// //               id="formFile"
// //               accept="image/*"
// //               onChange={(e) => setphoto(e.target.files[0])}
// //             />
// //           </div>

// //           <h3 className="card-header mb-3 mt-5">Emergency Contact</h3>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //               Surname
// //             </label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               onChange={(e) => setEmergency_Surname(e.target.value)}
// //               // value={el.Emergency_Surname}
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //               First Name
// //             </label>
// //             <input
// //               required
// //               type="text"
// //               className="form-control"
// //               // value={el.Emergency_FirstName}
// //               onChange={(e) => setEmergency_FirstName(e.target.value)}
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               Relationship
// //             </label>

// //             <select
// //               className="form-select"
// //               aria-label="Default select example"
// //               required
// //               onChange={(e) => setRelationship(e.target.value)}
// //             >
// //               <option value="select">Select</option>
// //               <option value="Brother">Brother</option>
// //               <option value="Sister">Sister</option>
// //               <option value="Uncle">Uncle</option>
// //               <option value="Wife">Wife</option>
// //             </select>
// //           </div>

// //           <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //               Phone Number
// //             </label>
// //             <input
// //               required
// //               type="text"
// //               className="form-control"
// //               placeholder="+234"
// //               // value={el.Nextofkin_mobile}
// //               onChange={(e) => setNextofkin_mobile(e.target.value)}
// //             />
// //           </div>

// //           <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //               City
// //             </label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               placeholder="Iwo"
// //               // value={el?.Nextofkin_city}
// //               onChange={(e) => setNextofkin_city(e.target.value)}
// //             />
// //           </div>

// //           <button type="submit" className="btn mb-3 btn-primary">
// //             Update
// //           </button>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // }

// // export default EditProfile;


// // import axios from "axios";
// // import React, { useState } from "react";
// // import toast from "react-hot-toast";
// // import TransparentSpinner from "../Spinner";
// // import {useNavigate} from "react-router-dom"

// // function Register() {
// //   const navigate=useNavigate()
// //   const[show,setShow]=useState(true)
// //   const [ Surname, setSurname] = useState();
// //   const [First_name , setFirst_name] = useState()
// //   const [Degree, setDegree] = useState();
// //   const [College, setCollege] = useState();
// //   const [Phone_number, setPhone_number] = useState();
// //   const [Address, setAddress] = useState();
// //   const [FamilyinSaudi, setFamilyinSaudi] = useState();
// //   const [Building_number, setBuilding_number] = useState();
// //   const [Room_number, setRoom_number] = useState();
// //   const [Emergency_Surname, setEmergency_Surname] = useState();
// //   const [Nextofkin_mobile, setNextofkin_mobile] = useState();
// //   const [Nextofkin_city, setNextofkin_city] = useState();
// //   const [photo, setphoto] = useState();
// //   const [auth_email, setauth_email] = useState();
// //   const [auth_password, setauth_password] = useState(); 
// //  const [loading, setLoading] = useState(false);


// //   async function Submit() {
// //     setLoading(true);
// //     const verify_token=Math.floor(100000 + Math.random() * 900000)
// //     const formdata = new FormData();
    

// //     formdata.append("Surname",  Surname);
// //     formdata.append("First_name",  First_name);
// //     formdata.append("Degree", Degree);
// //     formdata.append("College", College);
// //     formdata.append("Phone_number", Phone_number);
// //     formdata.append("Address", Address);
// //     formdata.append("FamilyinSaudi", FamilyinSaudi);
// //     formdata.append("Building_number", Building_number);
// //     formdata.append("Room_number", Room_number);
// //     formdata.append("Emergency_Surname", Emergency_Surname);
// //     formdata.append("Nextofkin_mobile", Nextofkin_mobile);
// //     formdata.append("Nextofkin_city", Nextofkin_city);
// //     formdata.append("photo", photo);
// //     formdata.append("auth_email", auth_email);
// //     formdata.append("auth_password", auth_password);
// //     formdata.append("verify_token", verify_token);
// //     formdata.append("email_sent_condition_met", true)



// //   try {
// //     const response = await axios.post("http://127.0.0.1:8000/nsu/", formdata);
// //     console.log(response)
// //     if (response.status === 201) {
// //       toast.success("data successfully uploaded");
// //       // window.location.href = "/otp";
// //       navigate("/otp")
    
// //     } else {
// //       setLoading(false);
// //     }
// //   } catch (error) {
// //     toast.error(error.response.statusText);
// //   } finally {
// //     setLoading(false);
// //   }
// // }

// // function SubmitForm(e) {
// //   e.preventDefault();
// //   Submit();
// // }

// //   return (
// //     <form className=" container w-auto mt-5 min-vh-100" onSubmit={SubmitForm} style={{marginBottom:"4rem"}}>
// //       {loading? <TransparentSpinner/> : <div className="card">
// //         <h3 className="card-header mb-3">Personal Details</h3>
// //         <div className="container">
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               Surname
// //             </label>
// //             <input
// //               required
// //               type="text"
// //               className="form-control"
             
// //               aria-describedby="emailHelp"
// //               onChange={(e) => setSurname(e.target.value)}
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               First Name
// //             </label>
// //             <input
// //               required
// //               type="text"
// //               className="form-control"
             
// //               aria-describedby="emailHelp"
// //               onChange={(e) => setFirst_name(e.target.value)}
// //             />
            
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               Degree
// //             </label>

// //             <select
// //               className="form-select"
// //               aria-label="Default select example"
// //               required
// //               onChange={(e) => setDegree(e.target.value)}
// //             >
// //               <option value="select">Select</option>
// //               <option value="MSC">MSC</option>
// //               <option value="PhD">Diploma</option>
// //               <option value="PhD">Professional Degree</option>
// //               <option value="PhD">PhD</option>
// //               <option value="PhD">Other</option>
// //             </select>
// //           </div>

         

// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               Family in Saudi Arabia?
// //             </label>
// //             <select
// //               className="form-select"
// //               required
// //               aria-label="Default select example"
// //               onChange={(e) => setFamilyinSaudi(e.target.value)}
// //             >
// //               <option defaultValue="Select">Select</option>
// //               <option value="No">No</option>
// //               <option value="Yes">Yes</option>
// //             </select>
// //           </div>
// //           {FamilyinSaudi=="Yes" && 

// // <div className="mb-3">
// // <label htmlFor="exampleInputPassword1" className="form-label">
// //   Address ( If your family is in Saudi Arabia)
// // </label>
// // <input
// //   type="text"
// //   className="form-control"
 
  
// //   onChange={(e) => setAddress(e.target.value)}
// // />
// // </div>
// //           }

// //           {FamilyinSaudi=="No" && <div>
// //             <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //              Hostel Building No
// //             </label>
// //             <input
              
// //               type="text"
// //               className="form-control"
             
// //               placeholder="7"
// //               onChange={(e) => setBuilding_number(e.target.value)}
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //             Hostel  Room Number
// //             </label>
// //             <input
              
// //               type="text"
// //               className="form-control"
             
// //               placeholder="4"
// //               onChange={(e) => setRoom_number(e.target.value)}
// //             />
// //           </div>
// //           </div>
          
// //           }

// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               College
// //             </label>
// //             <input
// //               required
// //               type="text"
// //               className="form-control"
             
// //               aria-describedby="emailHelp"
              
// //               onChange={(e) => setCollege(e.target.value)}
// //             />
           
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               Phone Number
// //             </label>
// //             <input
// //               required
// //               type="text"
// //               className="form-control"
             
// //               aria-describedby="emailHelp"
// //               placeholder="+966"
// //               onChange={(e) => setPhone_number(e.target.value)}
// //             />
// //           </div>

          
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail1" className="form-label">
// //               Email
// //             </label>
// //             <input
// //               onChange={(e) => setauth_email(e.target.value)}
// //               type="email"
// //               className="form-control"
// //               aria-describedby="emailHelp"
// //               required
// //             />
            
// //           </div>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputEmail" className="form-label">
// //               Password
// //             </label>
// //             <input
// //               onChange={(e) => setauth_password(e.target.value)}
// //               type={ show? "password" : "text"}
// //               className="form-control"
// //               aria-describedby="emailHelp"
// //               required
// //             />
         
// //           </div>
         
         

// //           <div className="mb-3 mt-4">
// //             <label htmlFor="formFile" className="form-label">
// //               Upload your passport
// //             </label>
// //             <input
              
// //               className="form-control"
// //               type="file"
// //               id="formFile"
// //               accept="image/*"
// //               onChange={(e) => setphoto(e.target.files[0])}
// //             />
// //           </div>

// //           <h3 className="card-header mb-3 mt-5">Emergency Contact</h3>
// //           <p className="text-dark fw-bold fs-7"> Please note that only the admin has access to your emergency contact.</p>
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //               Name
// //             </label>  
// //             <input
// //               type="text"
// //               className="form-control"
             
// //               onChange={(e) => setEmergency_Surname(e.target.value)}
// //             />
// //           </div>
         
          
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //               Phone Number
// //             </label>
// //             <input
// //               required
// //               type="text"
// //               className="form-control"
             
// //               placeholder="+234"
// //               onChange={(e) => setNextofkin_mobile(e.target.value)}
// //             />
// //           </div>
          
// //           <div className="mb-3">
// //             <label htmlFor="exampleInputPassword1" className="form-label">
// //               City
// //             </label>
// //             <input
// //               type="text"
// //               className="form-control"
             
// //               placeholder="e.g Abuja"
// //               onChange={(e) => setNextofkin_city(e.target.value)}
// //             />
// //           </div>

// //           <button type="submit" className="btn mb-3 btn-success">
// //             Submit
// //           </button>
// //         </div>
// //       </div>}
// //     </form>
// //   );
// // }

// // export default Register;





// import axios from "axios";
// import React, { useState } from "react";
// import toast from "react-hot-toast";
// import TransparentSpinner from "../Spinner";
// import { useLocation, useNavigate } from "react-router-dom";

// function EditProfile() {

    
//   const location = useLocation();
//   const id = location?.state?.id;
//   const el = location?.state?.el;
//   const navigate = useNavigate();
//   const [show, setShow] = useState(true);
//   const [Surname, setSurname] = useState("");
//   const [First_name, setFirst_name] = useState("");
//   const [Degree, setDegree] = useState("select");
//   const [College, setCollege] = useState("");
//   const [Phone_number, setPhone_number] = useState("");
//   const [Address, setAddress] = useState("");
//   const [FamilyinSaudi, setFamilyinSaudi] = useState("Select");
//   const [Building_number, setBuilding_number] = useState("");
//   const [Room_number, setRoom_number] = useState("");
//   const [gender, setGender] = useState("");

//   const [Nextofkin_mobile, setNextofkin_mobile] = useState("");
//   // const [Nextofkin_city, setNextofkin_city] = useState("");
//   const [photo, setphoto] = useState(null);
//   const [auth_email, setauth_email] = useState("");
//   const [auth_password, setauth_password] = useState(""); 
//   const [loading, setLoading] = useState(false);

//   const validateForm = () => {
   
//     if (!Surname || !First_name || Degree === "select" || !College || !Phone_number || !auth_email || !auth_password   ) {
//       toast.error("Please fill all required fields");
//       return false;
//     }

  
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(auth_email)) {
//       toast.error("Please enter a valid email address");
//       return false;
//     }

   
//     const phoneRegex = /^\+?[0-9]{10,14}$/;
//     if (!phoneRegex.test(Phone_number)) {
//       toast.error("Please enter a valid phone number");
//       return false;
//     }

   
//     if (auth_password.length < 6) {
//       toast.error("Password should be at least 6 characters long");
//       return false;
//     }

     
   
//     if (FamilyinSaudi === "Yes" && !Address) {
//       toast.error("Please enter address if family is in Saudi Arabia");
//       return false;
//     }

//     if (FamilyinSaudi === "No" && (!Building_number || !Room_number)) {
//       toast.error("Please enter hostel building and room number if family is not in Saudi Arabia");
//       return false;
//     }

    
//     if (photo) {
//       const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
//       if (!validImageTypes.includes(photo.type)) {
//         toast.error("Please upload a valid image file (jpg, png, gif)");
//         return false;
//       }

//       if (photo.size > 2 * 1024 * 1024) {
//         toast.error("Uploaded file size should be less than 2MB");
//         return false;
//       }
//     }

//     return true;
//   };

//   async function Submit() {
//     if (!validateForm()) {
//       return;
//     }

//     setLoading(true);
//     const verify_token = Math.floor(100000 + Math.random() * 900000);
//     const formdata = new FormData();

//     formdata.append("Surname", Surname);
//     formdata.append("First_name", First_name);
//     formdata.append("Degree", Degree);
//     formdata.append("College", College);
//     formdata.append("Phone_number", Phone_number);
//     formdata.append("Address", Address);
//     formdata.append("FamilyinSaudi", FamilyinSaudi);
//     formdata.append("Building_number", Building_number);
//     formdata.append("Room_number", Room_number);
    
   
//     formdata.append("Nextofkin_mobile", Nextofkin_mobile);
   
//     if (photo) {
//       formdata.append("photo", photo);
//     }
//     formdata.append("auth_email", auth_email);
//     formdata.append("auth_password", auth_password);
//     formdata.append("verify_token", verify_token);
//     formdata.append("email_sent_condition_met", true);
//     formdata.append("gender", gender)

//     try {
//       const SelectGender= `http://127.0.0.1:8000/nsu/${id}/` 
//       const response = await axios.put(SelectGender, formdata);
//       if (response.status === 201) {
//         toast.success("Data successfully uploaded");
//         navigate("/otp");
//       } else {
//         setLoading(false);
//       }
//     } catch (error) {
//       toast.error(error.response.statusText);
//     } finally {
//       setLoading(false);
//     }
//   }

//   function SubmitForm(e) {
//     e.preventDefault();
//     Submit();
//   }
  

//   return (
//     <form className="container w-auto mt-5 min-vh-100" onSubmit={SubmitForm} style={{ marginBottom: "4rem" }}>
      
//         <div className="card">
//           <h3 className="card-header mb-3">Re-enter your Details</h3>
//           <div className="container">
//           <div className="mb-3">
//               <label className="form-label">Gender</label>
//               <select
//                 className="form-select"
//                 required
//                 onChange={(e) => setGender(e.target.value)}
//               >
//                 <option defaultValue="Select">Select</option>
//                 <option value="Male">{el.gender}</option>
//                 {/* <option value="Female">Female</option> */}
//               </select>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Surname</label>
//               <input
//                 required
//                 type="text"
//                 className="form-control"
//                 onChange={(e) => setSurname(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">First Name</label>
//               <input
//                 required
//                 type="text"
//                 className="form-control"
//                 onChange={(e) => setFirst_name(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Degree</label>
//               <select
//                 className="form-select"
//                 required
//                 onChange={(e) => setDegree(e.target.value)}
//               >
//                 <option value="select">Select</option>
//                 <option value="MSC">MSC</option>
//                 <option value="Diploma">Diploma</option>
//                 <option value="Professional Degree">Professional Degree</option>
//                 <option value="PhD">PhD</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Family in Saudi Arabia?</label>
//               <select
//                 className="form-select"
//                 required
//                 onChange={(e) => setFamilyinSaudi(e.target.value)}
//               >
//                 <option defaultValue="Select">Select</option>
//                 <option value="No">No</option>
//                 <option value="Yes">Yes</option>
//               </select>
//             </div>
//             {FamilyinSaudi === "Yes" && (
//               <div className="mb-3">
//                 <label className="form-label">Address (If your family is in Saudi Arabia)</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   onChange={(e) => setAddress(e.target.value)}
//                 />
//               </div>
//             )}
//             {FamilyinSaudi === "No" && (
//               <div>
//                 <div className="mb-3">
//                   <label className="form-label">Building No</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="7"
//                     onChange={(e) => setBuilding_number(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Room Number</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="4"
//                     onChange={(e) => setRoom_number(e.target.value)}
//                   />
//                 </div>
//               </div>
//             )}
//             <div className="mb-3">
//               <label className="form-label">College</label>
//               <input
//                 required
//                 type="text"
//                 className="form-control"
//                 onChange={(e) => setCollege(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Phone Number</label>
//               <input
//                 required
//                 type="text"
//                 className="form-control"
//                 placeholder="+966"
//                 onChange={(e) => setPhone_number(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Email</label>
//               <input
//                 onChange={(e) => setauth_email(e.target.value)}
//                 type="email"
//                 className="form-control"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 onChange={(e) => setauth_password(e.target.value)}
//                 type={show ? "password" : "text"}
//                 className="form-control"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Upload your passport</label>
//               <input
//                 onChange={(e) => setphoto(e.target.files[0])}
//                 type='file'
//                 className="form-control"
//                 accept="image/*"
                
//               />
//             </div>
            


//           <h3 className="card-header mb-3 mt-5">Emergency Contact</h3>
//           <p className="text-dark fw-bold fs-7"> Please note that only the admin has access to your emergency contact.</p>
         
         
          
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Phone Number
//             </label>
//             <input
              
//               type="text"
//               className="form-control"
             
//               placeholder="+234"
//               onChange={(e) => setNextofkin_mobile(e.target.value)}
//             />
//           </div>
          
//           {/* <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               City
//             </label>
//             <input
//               type="text"
//               className="form-control"
             
//               placeholder="e.g Abuja"
//               onChange={(e) => setNextofkin_city(e.target.value)}
//             />
//           </div> */}

//           <button type="submit" className="btn mb-3 btn-success">
//             Submit
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default EditProfile;


import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import TransparentSpinner from "../Spinner";
import { useLocation, useNavigate } from "react-router-dom";

function EditProfile() {

    
  const location = useLocation();
  const id = location?.state?.id;
  const el = location?.state?.el;
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [Surname, setSurname] = useState("");
  const [First_name, setFirst_name] = useState("");
  const [Degree, setDegree] = useState("select");
  const [College, setCollege] = useState("");
  const [Phone_number, setPhone_number] = useState("");
  const [Address, setAddress] = useState("");
  const [FamilyinSaudi, setFamilyinSaudi] = useState("Select");
  const [Building_number, setBuilding_number] = useState("");
  const [Room_number, setRoom_number] = useState("");
  const [Gender, setGender] = useState("");

  const [Nextofkin_mobile, setNextofkin_mobile] = useState("");
  // const [Nextofkin_city, setNextofkin_city] = useState("");
  const [photo, setphoto] = useState(null);
  const [auth_email, setauth_email] = useState("");
  const [auth_password, setauth_password] = useState(""); 
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
   
    if (!Surname || !First_name || Degree === "select" || !College || !Phone_number || !auth_email || !auth_password || Gender==="Select"  ) {
      toast.error("Please fill all required fields");
      return false;
    }

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(auth_email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

   
    const phoneRegex = /^\+?[0-9]{10,14}$/;
    if (!phoneRegex.test(Phone_number)) {
      toast.error("Please enter a valid phone number");
      return false;
    }

   
    if (auth_password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return false;
    }

     
   
    if (FamilyinSaudi === "Yes" && !Address) {
      toast.error("Please enter address if family is in Saudi Arabia");
      return false;
    }

    if (FamilyinSaudi === "No" && (!Building_number || !Room_number)) {
      toast.error("Please enter hostel building and room number if family is not in Saudi Arabia");
      return false;
    }

    
    if (photo) {
      const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validImageTypes.includes(photo.type)) {
        toast.error("Please upload a valid image file (jpg, png, gif)");
        return false;
      }

      if (photo.size > 2 * 1024 * 1024) {
        toast.error("Uploaded file size should be less than 2MB");
        return false;
      }
    }

    return true;
  };

  async function Submit() {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const verify_token = Math.floor(100000 + Math.random() * 900000);
    const formdata = new FormData();

    formdata.append("Surname", Surname);
    formdata.append("First_name", First_name);
    formdata.append("Degree", Degree);
    formdata.append("College", College);
    formdata.append("Phone_number", Phone_number);
    formdata.append("Address", Address);
    formdata.append("FamilyinSaudi", FamilyinSaudi);
    formdata.append("Building_number", Building_number);
    formdata.append("Room_number", Room_number);
    
   
    formdata.append("Nextofkin_mobile", Nextofkin_mobile);
   
    if (photo) {
      formdata.append("photo", photo);
    }
    formdata.append("auth_email", auth_email);
    formdata.append("auth_password", auth_password);
    formdata.append("verify_token", verify_token);
    formdata.append("email_sent_condition_met", true);
    formdata.append("Gender", Gender)

    try {
      if(Gender ==="" || Gender ==="Select"){
        toast.error("select your gender")
        return false
      }

      
      
      const response = await axios.put(`http://127.0.0.1:8000/nsu/${id}/`, formdata);
      if (response.status === 201) {
        toast.success("Data successfully uploaded");
        navigate("/board");
      } else {
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.response.statusText);
    } finally {
      setLoading(false);
    }
  }

  function SubmitForm(e) {
    e.preventDefault();
    Submit();
  }
  

  return (
    <form className="container w-auto mt-5 min-vh-100" onSubmit={SubmitForm} style={{ marginBottom: "4rem" }}>
      
        <div className="card">
          <h3 className="card-header mb-3">Edit Profile</h3>
          <div className="container">
          <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                required
                onChange={(e) => setGender(e.target.value)}
              >
                <option defaultValue="Select">Select</option>
                <option value="Male">{el?.Gender}</option>
                
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Surname</label>
              <input
                required
                type="text"
                className="form-control"
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                required
                type="text"
                className="form-control"
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Degree</label>
              <select
                className="form-select"
                required
                onChange={(e) => setDegree(e.target.value)}
              >
                <option value="select">Select</option>
                <option value="MSC">MSC</option>
                <option value="Diploma">Diploma</option>
                <option value="Professional Degree">Professional Degree</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Family in Saudi Arabia?</label>
              <select
                className="form-select"
                required
                onChange={(e) => setFamilyinSaudi(e.target.value)}
              >
                <option defaultValue="Select">Select</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            {FamilyinSaudi === "Yes" && (
              <div className="mb-3">
                <label className="form-label">Address (If your family is in Saudi Arabia)</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            )}
            {FamilyinSaudi === "No" && (
              <div>
                <div className="mb-3">
                  <label className="form-label">Building No</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="7"
                    onChange={(e) => setBuilding_number(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Room Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="4"
                    onChange={(e) => setRoom_number(e.target.value)}
                  />
                </div>
              </div>
            )}
            <div className="mb-3">
              <label className="form-label">College</label>
              <input
                
                type="text"
                className="form-control"
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="+966"
                onChange={(e) => setPhone_number(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => setauth_email(e.target.value)}
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => setauth_password(e.target.value)}
                type={show ? "password" : "text"}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Upload your passport</label>
              <input
                onChange={(e) => setphoto(e.target.files[0])}
                type='file'
                className="form-control"
                accept="image/*"
                
              />
            </div>
            


          <h3 className="card-header mb-3 mt-5">Emergency Contact</h3>
          <p className="text-dark fw-bold fs-7"> Please note that only the admin has access to your emergency contact.</p>
         
         
          
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone Number
            </label>
            <input
              
              type="text"
           
             
              placeholder="+234"
              onChange={(e) => setNextofkin_mobile(e.target.value)}
            />
          </div>
          <button type="submit" className="btn mb-3 btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditProfile;

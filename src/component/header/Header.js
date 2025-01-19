// import React from "react";
// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <>
//       <div className="container-fluid bg-dark d-flex justify-content-between align-items-center py-2">
//         <div className="d-flex flex-column align-items-center justify-content-left">
//           <img src="logo1.png" alt="Logo" style={{ height: "70px" }} />
//           <p className="text-dark mb-0 mt-1" style={{ fontSize: "16px" }}>VedaRoot</p>
//         </div>
//         <div className="d-flex justify-content-center w-50">
//           <input type="text" className="form-control" placeholder="What are you looking for?.." />
//           <button className="btn btn-primary ms-2">Search</button>
//         </div>


        
//         <div className="d-flex align-items-center">
//           <img src="login.png" alt="Login" style={{ height: "40px", width: "auto" }} />
//           <button className="text-dark ms-2">Login</button>
//           <ul className="dropdown-menu" aria-labelledby="loginDropdown">
//               <li><Link className="dropdown-item" to="/user">User</Link></li>
//               <li><Link className="dropdown-item" to="/doctor">Doctor</Link></li>
//             </ul>
//             </div>
          
//           <div className="ms-3"><img src="cart.png" alt="Cart" style={{ height: "40px", width: "auto" }} />
//             <span className="text-light" style={{fontSize:"x-large"}}>Cart</span>
//           </div>
         
//       </div>

//       <div className="container-fluid bg-warning d-flex justify-content-around py-2"style={{width:"100%"}}>
//         <Link to="/" className="btn btn-link text-dark">Home</Link>
//         <Link to="/Disease" className="btn btn-link text-dark">Disease</Link>
//         <Link to="/Products" className="btn btn-link text-dark">Products</Link>
//         <Link to="/Yoga" className="btn btn-link text-dark">Yoga</Link>
//         <Link to="/Remedies" className="btn btn-link text-dark">Home Remedies</Link>
//         <Link to="/AboutUs" className="btn btn-link text-dark">About Us</Link>
//         <Link to="/Contact" className="btn btn-link text-dark">Contact</Link>
//       </div>
//       {/* <div className="container-fluid  d-flex">
//           <img src="home.jpg" style={{height:"550px",width:"100%"}}></img>
//         </div> */}
//       </>
//   );
// }

// export default Header;




// -----------------------------------------------



import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-between align-items-center py-3">
        {/* Logo Section */}
        <div className="d-flex flex-column align-items-center justify-content-left">
          <img src="logo.jpg" alt="Logo" style={{ height: "70px" }} />
          <p className="text-dark mb-0 mt-1" style={{ fontSize: "16px", fontWeight: "600" }}>VedaRoot</p>
        </div>

        {/* Search Bar Section */}
        <div className="d-flex justify-content-center w-50">
          <input
            type="text"
            className="form-control"
            placeholder="What are you looking for?..."
            style={{
              borderRadius: "20px", 
              border: "1px solidrgb(252, 152, 52)", 
              boxShadow: "0 2px 5px rgba(58, 22, 22, 0.83)"
            }}
          />
          <button className="btn btn-primary ms-2" style={{ borderRadius: "20px",backgroundColor:"#7B3F00" }}>Search</button>
        </div>

        {/* Login and Cart Section */}
        <div className="d-flex align-items-center">
          {/* Login Icon and Dropdown */}
          <img
            src="login.png"
            alt="Login"
            style={{ height: "40px", width: "auto", cursor: "pointer" }}
            className="me-2"
          />
          <button className="text-dark ms-2" style={{ fontSize: "16px", fontWeight: "600" }}>Login</button>
          <ul className="dropdown-menu" aria-labelledby="loginDropdown">
            <li><Link className="dropdown-item" to="/user">User</Link></li>
            <li><Link className="dropdown-item" to="/doctor">Doctor</Link></li>
          </ul>

          {/* Cart Icon */}
          <div className="ms-3">
            <img src="cart.png" alt="Cart" style={{ height: "40px", width: "auto", cursor: "pointer" }} />
            <span className="text-dark" style={{ fontSize: "x-large", fontWeight: "600" }}>Cart</span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="container-fluid d-flex justify-content-around py-2" style={{ width: "100%",backgroundColor:"#7B3F00 " }}>
        <Link to="/" className="btn btn-link text-light" style={{ fontSize: "18px", fontWeight: "500" }}>Home</Link>
        <Link to="/Disease" className="btn btn-link text-light" style={{ fontSize: "18px", fontWeight: "500" }}>Disease</Link>
        <Link to="/Products" className="btn btn-link text-light" style={{ fontSize: "18px", fontWeight: "500" }}>Products</Link>
        <Link to="/Yoga" className="btn btn-link text-light" style={{ fontSize: "18px", fontWeight: "500" }}>Yoga</Link>
        <Link to="/Remedies" className="btn btn-link text-light" style={{ fontSize: "18px", fontWeight: "500" }}>Home Remedies</Link>
        <Link to="/AboutUs" className="btn btn-link text-light" style={{ fontSize: "18px", fontWeight: "500" }}>About Us</Link>
        <Link to="/Contact" className="btn btn-link text-light" style={{ fontSize: "18px", fontWeight: "500" }}>Contact</Link>
      </div>
    </>
  );
}

export default Header;


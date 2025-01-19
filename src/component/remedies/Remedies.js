// import axios from "axios";
// import { useEffect, useState } from "react";
// import Header from "../header/Header";
// import { useNavigate } from "react-router-dom";
// import Api from "../../apis/Api";
// function Remedies() {
//     const [remediesList, setRemediesList] = useState([]);
//     const navigate = useNavigate();  // Initialize the navigate function

//     useEffect(() => {
//         loadRemedies();
//     }, []);

//     const loadRemedies = async () => {
//         try {
//             let response = await axios.get(Api.LOAD_REMEDIES);
//             console.log(response.data.result);
//             setRemediesList(response.data.result);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     const navigateToViewMore = (id) => {
//         navigate(`view-more/${id}`);  // Correctly using navigate to route
//     };

//     return (
//         <>
//             {/* <Header /> */}
//             <h1>hello remedies</h1>
//             <div className="container mt-5">
//                 <div className="row">
//                     {remediesList.map((remedy, index) => (
//                         <div key={index} className="col-md-3 p-2">
//                             <div className="d-flex flex-column align-items-center" style={{ boxShadow: "10px 10px 10px grey", height: "auto" }}>
//                                 <img src={remedy.imageUrl[0]} alt={remedy.RemediesName} style={{ height: "250px", width: "100%" }} />
//                                <div className="aline-item-center" style={{fontSize:"13px"}}><p>{remedy.remedyName}</p></div>
//                                 <button onClick={() => navigateToViewMore(remedy._id)} style={{ width: "100%" }} className="btn btn-secondary text-white">View more</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Remedies;
// =========================
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import Api from "../../apis/Api";

function Remedies() {
  const [remediesList, setRemediesList] = useState([]);
  const navigate = useNavigate();  // Initialize the navigate function

  useEffect(() => {
    loadRemedies();
  }, []);

  const loadRemedies = async () => {
    try {
      let response = await axios.get(Api.LOAD_REMEDIES);
      setRemediesList(response.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const navigateToViewMore = (id) => {
    navigate(`view-more/${id}`);  // Correctly using navigate to route
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          {remediesList.map((remedy, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className="card custom-card shadow-lg"
                style={{
                  position: "relative",
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {/* Remedy Image */}
                <div
                  className="card-img-container"
                  style={{
                    position: "relative",
                    height: "250px",
                    overflow: "hidden",
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <img
                    src={remedy.imageUrl[0]}
                    className="card-img-top"
                    alt={remedy.remedyName}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>

                {/* Remedy Name */}
                <div
                  className="card-body text-center"
                  style={{
                    padding: "1.2rem",
                    backgroundColor: "#f5f5f5",
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                  }}
                >
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#333",
                      textAlign: "center",
                      marginBottom: "15px",
                    }}
                  >
                    {remedy.remedyName}
                  </h5>

                  {/* Button */}
                  <button
                    onClick={() => navigateToViewMore(remedy._id)}
                    className="btn btn-primary w-100"
                    style={{
                      padding: "12px 0",
                      fontSize: "16px",
                      fontWeight: "bold",
                      borderRadius: "10px",
                      backgroundColor: "#8e735b",
                      border: "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Remedies;

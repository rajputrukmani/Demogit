// // import Header from "../header/Header";
// // import Yoga from "../yoga/Yoga";
// // import Remedies from "../remedies/Remedies";
// // function Home() {
// //   return <>
// //     <Header />
// //    <div className="container-fluid  d-flex"> 
// //           <img src="ayurveda home.jpg.webp" style={{height:"600px",width:"100%"}}></img>
// //         </div> 

// //         <div className="container mt-5 bg-dark">
// //           <p className="text-center text-dark" style={{ fontSize: '3rem' }}>Yoga</p>
// //      <div className="row">
// //           <div className="col-md-4 mb-4">
// //             <div className="card">
// //               <img src=" yoga1.jpg" className="card-img-top img-fluid"style={{ height: '200px', objectFit: 'cover' }}/>
// //                   <div className="card-body text-center">
// //                    <h5 className="card-title"> Vrikshasana</h5>
// //                 <button className="btn btn-primary">Get Start</button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="col-md-4 mb-4 " >
// //             <div className="card">
// //               <img src="yoga2.jpg"  className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
// //               <div className="card-body text-center">
// //                 <h5 className="card-title">Parvatasana</h5>
// //                 <button className="btn btn-primary">Get Start</button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="col-md-4 mb-4">
// //             <div className="card">
// //               <img src="yoga3.jpeg"  className="card-img-top img-fluid"style={{ height: '200px', objectFit: 'cover' }} />
// //               <div className="card-body text-center">
// //                 <h5 className="card-title"> Trikonasana</h5>
// //                 <button className="btn btn-primary">Get Start</button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="container mt-5">
// //           <p className="text-center text-dark" style={{ fontSize: '3rem' }}>Home-Remedies</p>
// //      <div className="row">
// //           <div className="col-md-4 mb-4">
// //             <div className="card">
// //               <img src="Remedies1.jpg" className="card-img-top img-fluid"  style={{ height: '200px', objectFit: 'cover' }}/>
// //                   <div className="card-body text-center">
// //                    <h5 className="card-title"> Turmeric Milk</h5>
// //                 <button className="btn btn-primary">View More</button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="col-md-4 mb-4">
// //             <div className="card">
// //               <img src="remedies2.jpg"  className="card-img-top img-fluid"  style={{ height: '200px', objectFit: 'cover' }} />
// //               <div className="card-body text-center">
// //                 <h5 className="card-title">Chamomile Tea</h5>
// //                 <button className="btn btn-primary">View More</button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="col-md-4 mb-4">
// //             <div className="card">
// //               <img src="remedies3.JPG"  className="card-img-top img-fluid"style={{ height: '200px', objectFit: 'cover' }} />
// //               <div className="card-body text-center">
// //                 <h5 className="card-title">Boiled Rice and Toast</h5>
// //                 <button className="btn btn-primary">View More</button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //   </>
// // }
// // export default Home;


// // ====================================
// import Header from "../header/Header";
// import Yoga from "../yoga/Yoga";
// import Remedies from "../remedies/Remedies";
// import { Navigate, useNavigate } from "react-router-dom";

// function Home() {

//   const navigate = useNavigate();
//   const navigateToViewMore =(id) =>{
//     navigate(`view-more/$(id)`)
// }




//   return (
//     <>
//       <style>{`
//         body {
//           font-family: 'Poppins', sans-serif;
//           margin: 0;
//           padding: 0;
//           background: linear-gradient(135deg, #f8c6d7, #ff6f61);

//         }
//         .hero-image {
//           height: 600px;
//           width: 100%;
//           object-fit: cover;
//           position: relative;
//           border-bottom: 5px solid #a77b5a;
//         }
//         .section-title {
//           font-size: 3rem;
//           color: #a77b5a;
//           text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
//           margin-bottom: 1rem;
//         }
//         .card {
//           border: none;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           border-radius: 8px;
//         }
//         .card:hover {
//           transform: scale(1.05);
//           box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
//         }
//         .card-title {
//           font-weight: bold;
//           color: #5a4a3c;
//         }
//         .btn-primary {
//           background-color: #a77b5a;
//           border: none;
//           color: #fff;
//           padding: 0.5rem 1rem;
//           border-radius: 5px;
//           font-size: 1rem;
//         }
//         .btn-primary:hover {
//           background-color: #8c6248;
//         }
//         .bg-dark {
//           background-color: #d4c1a5;
//           padding: 2rem;
//           border-radius: 8px;
//         }
//         .container {
//           margin-bottom: 3rem;
//         }
//         .card-body {
//           background-color: #fdf8f4;
//           border-top: 4px solid #a77b5a;
//           border-radius: 0 0 8px 8px;
//         }
//         .text-center {
//           text-align: center;
//         }
//       `}</style>
//       <Header />
//       <div className="container-fluid d-flex">
//         <img src="ayurveda home.jpg.webp" alt="Ayurveda Home" className="hero-image" />
//       </div>

//       <div className="container mt-5">
//         <p className="text-center section-title">Yoga</p>
//         <div className="row">
//           <div className="col-md-4 mb-4">
//             <div className="card">
//               <img
//                 src="yoga1.jpg"
//                 alt="Vrikshasana"
//                 className="card-img-top img-fluid"
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body text-center">
//                 <h5 className="card-title">Vrikshasana</h5>
//                 <button className="btn btn-primary">Get Start</button>

//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 mb-4">
//             <div className="card">
//               <img
//                 src="yoga2.jpg"
//                 alt="Parvatasana"
//                 className="card-img-top img-fluid"
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body text-center">
//                 <h5 className="card-title">Parvatasana</h5>
//                 <button className="btn btn-primary">Get Start</button>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 mb-4">
//             <div className="card">
//               <img
//                 src="yoga3.jpeg"
//                 alt="Trikonasana"
//                 className="card-img-top img-fluid"
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body text-center">
//                 <h5 className="card-title">Trikonasana</h5>
//                 {/* <button className="btn btn-primary">Get Start</button> */}
//                 <button className="btn btn-primary" onClick={() => navigateToViewMore(Yoga.id)}style={{ width: "100%" }} >Get Start</button>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-5">
//         <p className="text-center section-title">Home-Remedies</p>
//         <div className="row">
//           <div className="col-md-4 mb-4">
//             <div className="card">
//               <img
//                 src="Remedies1.jpg"
//                 alt="Turmeric Milk"
//                 className="card-img-top img-fluid"
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body text-center">
//                 <h5 className="card-title">Turmeric Milk</h5>
//                 <button className="btn btn-primary">View More</button>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 mb-4">
//             <div className="card">
//               <img
//                 src="remedies2.jpg"
//                 alt="Chamomile Tea"
//                 className="card-img-top img-fluid"
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body text-center">
//                 <h5 className="card-title">Chamomile Tea</h5>
//                 <button className="btn btn-primary">View More</button>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 mb-4">
//             <div className="card">
//               <img
//                 src="remedies3.JPG"
//                 alt="Boiled Rice and Toast"
//                 className="card-img-top img-fluid"
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body text-center">
//                 <h5 className="card-title">Boiled Rice and Toast</h5>
//                 <button className="btn btn-primary">View More</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;



//-------------------------------------------------------------------------



import Header from "../header/Header";
import Yoga from "../yoga/Yoga";
import Remedies from "../remedies/Remedies";
import { Navigate, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Home() {

  const navigate = useNavigate();
  const navigateToViewMore = (id) => {
    navigate(`view-more/$(id)`)
  }

  return (
    <>
      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
          background-color :rgba(117, 98, 53, 0.92);
        }
        .hero-image {
          height: 600px;
          width: 100%;
          object-fit: cover;
          position: relative;
          border-bottom: 5px solid #c68c53;
        }
        .section-title {
          font-size: 3rem;
          color:white;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
          margin-bottom: 1rem;
        }
        .card {
          border: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 8px;
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }
        .card-title {
          font-weight: bold;
          color: #6b4e3b;
        }
        .btn-primary {
          background-color: #7B3F00;
          border: none;
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          font-size: 1rem;
        }
        .btn-primary:hover {
          background-color: #9e6f4a;
        }
        .bg-dark {
          background-color: #d4c1a5;
          padding: 2rem;
          border-radius: 8px;
        }
        .container {
          margin-bottom: 3rem;
        }
        .card-body {
          background-color: #faf1e6;
          border-top: 4px solid #c68c53;
          border-radius: 0 0 8px 8px;
        }
        .text-center {
          text-align: center;
        }
      `}</style>
      <Header />
     
     

<div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="ayurveda home.jpg.webp"
            alt="Slide 1"
            height="600"
          />
          <Carousel.Caption>
            {/* Add your caption here if needed */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="ayurveda.jpg"
            alt="Slide 2"
            height="600"
          />
          <Carousel.Caption>
            {/* Add your caption here if needed */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="ayurveda.webp"
            alt="Slide 3"
            height="600"
          />
          <Carousel.Caption>
            {/* Add your caption here if needed */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  

      <div className="container mt-5">
        <p className="text-center section-title">Yoga</p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="yoga1.jpg"
                alt="Vrikshasana"
                className="card-img-top img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Vrikshasana</h5>
                <button className="btn btn-primary" onClick={() => navigateToViewMore(Yoga._id)}>Get Start</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="yoga2.jpg"
                alt="Parvatasana"
                className="card-img-top img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Parvatasana</h5>
                <button className="btn btn-primary" onClick={() => navigateToViewMore(Yoga.id)}>Get Start</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="yoga3.jpeg"
                alt="Trikonasana"
                className="card-img-top img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Trikonasana</h5>
                <button className="btn btn-primary" onClick={() => navigateToViewMore(Yoga.id)}>Get Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <p className="text-center section-title">Home-Remedies</p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="Remedies1.jpg"
                alt="Turmeric Milk"
                className="card-img-top img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Turmeric Milk</h5>
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="remedies2.jpg"
                alt="Chamomile Tea"
                className="card-img-top img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Chamomile Tea</h5>
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="remedies3.JPG"
                alt="Boiled Rice and Toast"
                className="card-img-top img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Boiled Rice and Toast</h5>
                <button className="btn btn-primary">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;


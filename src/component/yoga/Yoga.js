import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import Api from "../../apis/Api";

function Yoga() {
    const [yogaList, setYogaList] = useState([]);
    const navigate  = useNavigate();

    useEffect(() => {
        loadYoga();
    }, []);



const loadYoga = async ()=>{
    try{
        let response = await axios.get( Api.LOAD_YOGA);
        console.log(response.data.result);
        console.log(response.data)
        setYogaList(response.data.result);
    }
    catch(err){
        console.log(err);
    }   
}

const navigateToViewMore =(id) =>{
    navigate(`view-more/$(id)`)
}

return<>
<Header/>
{/* <h1>yoga component.</h1> */}
 <div className="container mt-5">
        <div className="row">
          {yogaList.map((yoga,index)=><div key={index} className="col-md-3 p-2">
             <div className="d-flex flex-column" style={{boxShadow: "10px 10px 10px grey", height:"300px"}}>
                 <img src={yoga.imageUrl[0]} style={{height:"400px", width:"100%"}}/>
                <div className=" d-flex d-flex justify-content-center align-items-center" style={{fontSize:"13px"}}> <p>{yoga.yogaName}</p></div>
                <button onClick={() => navigateToViewMore(yoga._id)}style={{ width: "100%" }} className="btn btn-secondary text-white">View more</button>
                  <p style={{fontSize:"small"}}>{yoga.benefits}</p>
                   
             </div>
          </div>)}
        </div>
     </div>
   </>
}

export  default Yoga;

 
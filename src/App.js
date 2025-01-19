import { Route, Routes } from "react-router-dom";
// import Header from "./component/header/Header";
import Home from "./component/home/Home";
 import Yoga from "./component/yoga/Yoga";
import Remedies from "./component/remedies/Remedies";
import ViewMore from "./component/remedies/ViewMore";
 import ViewMoreYoga from "./component/yoga/ViewMoreYoga";
 import AboutUs from "./component/about/AboutUs";
 import Disease from "./component/disease/Disease";
 import Products from "./component/product/Products";
 import Doctor from "./component/doctor/Doctor";
 import Contact from "./component/contact/Contact";


function App() {
  return <>
    <Routes>
      {/* <Route path="/Header" element={<Header />} /> */}

      <Route path="/" element={<Home />} />
      <Route path="/Disease" element={<Disease/>}/>
      <Route path="/Products" element={<Products/>}/>
      <Route path="/yoga" element={<Yoga />} />
      <Route path="/remedies" element={<Remedies/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/Doctor" element={<Doctor/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="view-more/:id" element={<ViewMore/>}/>
      <Route path="view-more/:id" element={<ViewMoreYoga/>}/>
    </Routes>
  </>
}

export default App;
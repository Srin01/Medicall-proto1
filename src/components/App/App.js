import React from 'react';
import './App.css';
import Header from "../Header/Header";
import CardDetails from "../CardDetails/CardDetails";
import Appoitment from "../Appoitment/Appoitment"
import Vision from '../Vision/Vision';
import Social from "../Social/Social";
import Footer from '../Footer/Footer';

const services = [
  {id: 1, name:"Dermatologist", src:"images/top-speciality-dermatologist.svg", alt :"Dermatologist", body: "$250"}, 
  {id: 2, name:"General Physician", src:"images/top-speciality-gp.svg", alt :"General Physician", body: "$250"},
  {id: 3, name:"Gynaecology", src:"images/top-speciality-stomach.svg", alt :"Gynaecology", body: "$250"},
  {id: 4, name:"Sexology", src:"images/top-speciality-sexology.svg", alt :"Sexology", body: "$250"},
  {id: 5, name:"Psychiatry", src:"images/top-speciality-psychiatric.svg", alt :"Psychiatry", body: "$250"}]

function App() {
  return (
    <div className="App">
      <Header />
      <CardDetails services = {services}/>
      <Appoitment />
      <Vision />
      <Social />
      <Footer />
    </div>
  );
}

export default App;

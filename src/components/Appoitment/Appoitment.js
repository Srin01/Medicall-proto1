import React, { Component } from "react";
import "./Appoitment.css"
import {Card, CardDeck, CardImg, CardTitle} from "reactstrap";

const appoitments = [
{id: 1, name:"Dermatologist", src:"images/skinp.jpg", alt :"Dermatologist", body: "$250"}, 
{id: 2, name:"General Physician", src:"images/cough-cold-v1.jpg", alt :"General Physician", body: "$250"},
{id: 3, name:"Gynaecology", src:"images/gyno.jpeg", alt :"Gynaecology", body: "$250"},
{id: 4, name:"Sexology", src:"images/sexology.jpg", alt :"Sexology", body: "$250"},
{id: 5, name:"Psychiatry", src:"images/counselling.jpeg", alt :"Psychiatry", body: "$250"}]

class Appoitment extends Component{
    render()
    {
        return(
            <div className = "Appoitment">
                <h2 id= "heading">Book an Appoitment for In-clinic Consultation</h2>
                <CardDeck className = "carddeck">
                    {appoitments.map((appoitment)=>{return(
                        <Card className="card" id = {appoitment.id}>
                            <CardImg src ={appoitment.src} alt ={appoitment.alt} />
                            <CardTitle><h2 className="titles">{appoitment.name}</h2></CardTitle>
                        </Card>
                    )})}
                </CardDeck>
            </div>
        );
    }
}

export default Appoitment;
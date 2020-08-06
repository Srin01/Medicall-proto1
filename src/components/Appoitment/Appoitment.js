import React, { Component } from "react";
import "./Appoitment.css"
import {Card, CardDeck, CardImg, CardTitle} from "reactstrap";

class Appoitment extends Component{
    render()
    {
        return(
            <div className = "Appoitment">
                <h2 id= "heading">Book an Appoitment for In-clinic Consultation</h2>
                <CardDeck className = "carddeck">
                    {this.props.appoitments.map((appoitment)=>{return(
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
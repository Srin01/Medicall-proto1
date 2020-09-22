import React, { Component } from "react";
import { CardDeck, Card, CardTitle, CardImg, CardLink, CardBody } from "reactstrap";
import "./CardDetails.css";

class CardDetails extends Component{
    render(){
        return(
            <div className = "Appoitment1">
                <h2 id= "heading1">Consult Top Doctors Online for Health Concerns</h2>
                <CardDeck className = "carddeck1">
                    {this.props.services.map((service)=>{return(
                        <Card className="card1" id = {service.id}>
                            <CardImg className = "CardImage1" id = "#width1" src ={service.src} alt ={service.alt} />
                            <CardTitle><h2 className="titlesq">{service.name}</h2></CardTitle>
                            <CardBody>{service.body}</CardBody>
                            <CardLink>Consult Now</CardLink>
                        </Card>
                    )})}
                </CardDeck>
            </div>
        );
    }
}
export default CardDetails;
import React, { Component } from "react";
import Service from "../Service/Service";
import "./CardDetails.css";

class CardDetails extends Component{
    render(){
        return(
            <div className = "background ">
                <div className = "CardHeading">
                    <h2>Consult Top Doctors Online for Health Concerns</h2>
                </div>
                <div className = "CardDetails">
                    {this.props.services.map((service)=>{return(<Service service = {service} id={service.id} />);})}
                </div>
            </div>
        );
    }
}
export default CardDetails;
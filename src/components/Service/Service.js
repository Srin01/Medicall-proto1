import React, { Component } from "react";
import "./Service.css"

class Service extends Component{

    render(){
        return(
            <div className = "Service">
                <div className = "image-container">
                    <img src={this.props.service.src} alt ={this.props.service.alt} />
                </div>
                <h2>{this.props.service.name}</h2>
                <div className = "service-information">
                    <p>{this.props.service.body}</p>
                    <a href ="#">Consult now</a>
                </div>
            </div>    
        );
    }
}

export default Service;
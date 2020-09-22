import React, { Component } from "react";
import { Card, CardBody, CardHeader, CardImg } from "reactstrap";
import "./Service.css"

class Service extends Component{

    render(){
        return(
            <Card>
                <CardImg src={this.props.service.src} alt ={this.props.service.alt} />
                <CardHeader>{this.props.service.name}</CardHeader>
                <CardBody>
                    <p>{this.props.service.body}</p>
                    <a href ="#">Consult now</a>
                </CardBody>
            </Card>    
        );
    }
}

export default Service;
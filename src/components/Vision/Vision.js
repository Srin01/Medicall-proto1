import React, { Component } from "react";
import "./Vision.css";

class Vision extends Component
{
    render(){
        return(
            <div>
                <div className ="Vision">
                    <h2>Vision</h2>
                    <h6>MediCall aims to be the leading telehealthcare care provider in Hong Kong by relieving stress on the patients as well as health professionals, with increased comfort and decreased waiting/ travel time. We also aspire to become the platform of choice for doctors looking for a new work environment (eg. pregnant doctors, new doctors, doctors seeking flexibility, doctors in remote areas, etc.). </h6>
                </div>
                <div className = "Mission">
                    <h2>Mission</h2>
                    <h6>As a whole we want to popularize telehealthcare through modern and targeted marketing for a greater impact, to benefit the Hong Kong population and increase our reach. We will start the platform with general practitioners, and soon after, psychologists and psychiatrists. We also intend to increase our range of services offered with: Medical specialists, Medical aesthetic (non-invasive hair, skin, ageing and cosmetic treatment advice), Remote patient monitoring, Chronic care, Remote dentistry, Nursing</h6>
                </div>
            </div>
        );
    }
}
export default Vision;

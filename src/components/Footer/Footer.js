import React, { Component } from "react";
import "./Footer.css"

class Footer extends Component
{
    render()
    {
        return(
            <div>
                <div className="footer">
                    <img className="image" src ="images/applink.jpg" />
                </div>
                <div class="footer-copyright">Copyright © 2020, MediCall. All rights reserved.</div>
            </div>
        );
    }
}
export default Footer;
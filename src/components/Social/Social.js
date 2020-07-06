import React, { Component } from "react";
import "./Social.css";


class Social extends Component
{
    render()
    {
        return(
    <div class="footer">
        <h2 className="header">Social Links</h2>
        <ul class="social-network social-circle">
            <li><a className="icoLinkedin" href="https://www.linkedin.com" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
            <li><a className="icoTwitter" href="https://twitter.com" title="Twitter"><i className="fa fa-twitter"></i></a></li>
            <li><a className="icoMedium" href="https://medium.com" title="Medium"><i className="fa fa-medium"></i></a></li>
            <li><a className="icoQuora" href="https://www.quora.com" title="Quora"><i className="fa fa-quora"></i></a></li>
            <li><a className="icoFacebook" href="https://www.facebook.com" title="Facebook"><i className="fa fa-facebook"></i></a></li>
            <li><a className="icoInstagram" href="https://www.instagram.com" title="Instagram"><i className="fa fa-instagram"></i></a></li>
        </ul>
    </div>

        );
    }
}
export default Social;
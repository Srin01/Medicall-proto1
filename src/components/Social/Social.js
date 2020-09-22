import React, { Component , useState} from "react";
import { Carousel, CarouselIndicators, CarouselControl, CarouselItem } from "reactstrap";
import "./Social.css";

const Social = (props) => {

    const items = [{p : "Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.", name : "Lee"} ,{p : "Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.", name : "Lee"},{p : "Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.", name : "Lee"}];
    const[activeIndex, setActiveIndex] = useState(0);
    const[animating, setAnimating] = useState(false);

    const next = () => {
        if(animating) return;
        const nextIndex = activeIndex === items.length-1 ? 0 : activeIndex +1 ;
        setActiveIndex(nextIndex);
    }
    const previous = () => {
        if(animating) return;
        const nextIndex = activeIndex === 0 ? items.length-1 : activeIndex -1;
        setActiveIndex(nextIndex);
    } 
    const goToIndex = (nextIndex) => {
        if(animating) return ;
        setActiveIndex(nextIndex);
    }

    const slides = items.map((item) => {
        return(
            <CarouselItem className = "item" onExiting = {() => setAnimating(true)} onExited = {() => setAnimating(false)} key={item.src} >
                <h4>{item.p}</h4>
                <h3><img src = "images/user.png" />{item.name}</h3>
            </CarouselItem>
        );
    });

        return(
    <div>
        <div class="container">
            <img className = "image1" src="images/blogbg.jpg" alt="Snow" />
            <h3>Read top articles from health experts</h3>
            <p>Health articles that keep you informed about good health practices and achieve your goals</p>
            <button class="btn">See all articles</button>
        </div>
        <div className = "footer">
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
        <div class="container1 ">
            <h3>What our users have to say</h3>
            <Carousel activeIndex = {activeIndex} next = {next} previous = {previous} >
                <CarouselIndicators className="indicators" items = {items} activeIndex = {activeIndex} onClickHandler = {goToIndex} />
                {slides}
                <CarouselControl direction = "prev" directionText="Previous" onClickHandler = {previous} />
                <CarouselControl direction = "next" directionText="Next" onClickHandler = {next} />
            </Carousel>
        </div>  
    </div>

        );
}
export default Social;
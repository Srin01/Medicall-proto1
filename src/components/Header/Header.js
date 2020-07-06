import React, {useState} from 'react';
import "./Header.css"
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, CarouselItem, CarouselIndicators, CarouselControl,Carousel} from 'reactstrap';

const Example = (props) => {
    const items = [{src: "images/image1.jpeg" , text : "Image1"} ,{src : "images/image2.jpeg", text : "Image2"},{src : "images/image3.jpeg", text : "Image3"}];
    const[activeIndex, setActiveIndex] = useState(0);
    const[animating, setAnimating] = useState(false);
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

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
            <CarouselItem onExiting = {() => setAnimating(true)} onExited = {() => setAnimating(false)} key={item.src} >
                <img src= {item.src} alt ={item.text}/>
            </CarouselItem>
        );
    });
    
        return(
            <div>
                <Navbar className="Navbar" expand = "md">
                    <NavbarBrand className="brand" href="/">Medicall</NavbarBrand>
                    <NavbarToggler onClick = {toggle} />
                    <Collapse isOpen = {isOpen} navbar >
                        <Nav className = "mr-auto" navbar>
                            <NavItem className="nav-item">
                                <NavLink className="navlink" href="/consult/">Consult Doctors</NavLink> 
                            </NavItem >
                            <NavItem className="nav-item">
                                <NavLink className="navlink" href = "/appoitments">Appoitments</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="navlink" href="/mission">Mission</NavLink>
                            </NavItem>
                            <NavItem className="nav-item">
                                <NavLink className="navlink" href="/vision">Vision</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div>
                <Carousel activeIndex = {activeIndex} next = {next} previous = {previous} >
                    <CarouselIndicators items = {items} activeIndex = {activeIndex} onClickHandler = {goToIndex} />
                    {slides}
                    <CarouselControl direction = "prev" directionText="Previous" onClickHandler = {previous} />
                    <CarouselControl direction = "next" directionText="Next" onClickHandler = {next} />
                </Carousel>
                </div>
            </div>
        );

}
export default Example
import React from 'react'; 
// import images from assets
import myImage from '../../assets/images/echo.JPG';
import { Col } from 'react-bootstrap';


function About() {
    return(
    <section className="title">
      
      <div className="row justify-content-center" id="about-container">       
      <Col lg={6} md={12}>
      <center><img src={myImage} className="my-image" alt="ketlon-profile"/></center>
      <p className="name">Kelton Leach</p>
      <p className="job">full stack web developer</p>
      <h2 className="education">a little about me</h2>
        <p>
             Hi! I'm Kelton and I was born in Mountain View, California. After highschool I moved to the south 
             where I attended University of Tennessee before moving back west and finishing my education at 
             Washington State University. Currently I live in Bellingham, WA which I am happy
          to call my home for the last 9 years. 
        <br></br>
        <br></br>
            Before becoming a stay at home mom I worked in customer service and product management
          for an art museum. I was ready to continue my education and jump into a field I 
          felt excited about: web development. I graduated in September 2022 with experience in HTML, CSS, Javascript, jQuery,
          Bootstrap, the MERN stack, MYSQL, NOSQL, and git. In my spare time I like to spend as much time as possible with my daughter, 
          hike, read, paddle board and travel when I can. 
        <br></br>
        <br></br>
         </p>
      </Col>

      </div>
    </section> 
)}
  
export default About;
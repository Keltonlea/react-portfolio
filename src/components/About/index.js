import React from 'react'; 
// import images from assets
import myImage from '../../assets/images/echo.JPG';
// import flowerImage from '../../assets/images/myflower.png';
import { Col } from 'react-bootstrap';


function About() {
    return(
    <section className="title">
      
      <div className="row justify-content-center" id="about-container">       
      <Col lg={6} md={12}>
      <center><img src={myImage} className="my-image" alt="nicole-profile"/></center>
      <p class="name">Kelton Leach</p>
      <p class="job">full stack web developer</p>
      <h2 class="education">a little about me</h2>
        <p>
             Hi! I'm Kelton and I was born in Mountain View, California. In highschool, my family
          and I moved to Nashville, Tennessee where I finished highschool and went to University of Tennessee, 
          before moving back to San Francisco, California. Currently I live in Bellingham, WA which I am happy
          to call my home for the last 9 years. 
        <br></br>
        <br></br>
            Before becoming a stay at home mom I worked in customer service and product management
          at an art museum. I decided it was time to learn a new skill and jump into a new field I 
          feel excited about: web development. I'm currently learning HTML, CSS, Javascript, jQuery,
          Bootstrap, the MERN stack, MYSQL, databases, and git. In my spare time I like to spend as much time as possible with my daughter , 
          hike, and travel when I can. My other hobbies include exploring museums, video games,
          paddleboarding, tv, and reading. 
        <br></br>
        <br></br>
         </p>
      </Col>

      </div>
    </section> 
)}
  
export default About;
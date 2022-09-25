import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helper';
import { Row, Col } from 'react-bootstrap'; 
import Resume from '../../assets/images/kelton-resume-2022.pdf'


export default function ContactForm() {
    return(
        
        <form className="wow pulse" action="https://formspree.io/f/mzbwrgjq" method="POST">
                    <h1 data-testid='h1tag' className="contact">contact me</h1>

            <div className="form-group">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                        <input
                            type="text"
                            name="name"
                            className="form-control form-control-lg"
                            id="name"
                            placeholder="Name"
                        />
                    </div>
                </div>
            </div>
            <div className="form-group hidden">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                        <input
                            type="email"
                            name="_replyto"
                            className="form-control form-control-lg"
                            id="exampleFormControlInput1"
                            placeholder="Your email"
                        />
                    </div>
                </div>
            </div>
            <div className="form-group hiddenRight">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                        <textarea
                            name="message"
                            className="form-control form-control-lg"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Write your message..."
                        />
                    </div>
                </div>
            </div>
            <div className="row text-md-right text-sm-center">
                <div className="col-12 col-sm-12 col-md-6 mx-auto">
                    <button
                        type="submit"
                        className="btn btn-primary mb-2 hidden">
                        Submit
                    </button>
                </div>
            </div>
            <section>

        <div className="contact-icons">
        <Row>
            <Col lg={3} md={12}>
            <a href="https://github.com/keltonlea"><img src="https://img.icons8.com/doodle/100/000000/github--v1.png" alt="github-logo" class="icon"/></a><p class="icon-text">github</p>
            </Col>

            <Col lg={3} md={12}>
            <a href="https://www.linkedin.com/in/kelton-leach-938557172/"><img src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png" alt="linkedin-logo" class="icon"/></a><p class="icon-text">linkedin</p>
            </Col>

            <Col lg={3} md={12}>
            <a href="mailto:kelton.leach@gmail.com"><img src="https://img.icons8.com/doodle/120/000000/new-post.png" alt="mail-logo"/></a><p class="icon-text">email</p>
            </Col>

            <Col lg={3} md={12}>
            <a href={Resume} download><img src="https://img.icons8.com/doodle/120/000000/pdf-2.png" alt="resume" /></a><p class="icon-text">resume</p>
            </Col>
        </Row>
        </div>

        <div class="resume-container">
            <Row>
                <Col lg={4} md={12}>
                <h2 class="resume">font-end technologies</h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        React.js
                    </li>
                    <li>
                        Framework (Bootstrap, Materalize)
                    </li>
                    <li>
                        UI/UX Design
                    </li>
                    <li>
                        Responsive Web Design
                    </li>
                </ul>
                </Col>
        
            <Col lg={4} md={12}>
            <h2 class="resume">back-end technologies</h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL (mysql, mysql2)
                    </li>
                    <li>
                        NoSQL (MongoDB, Mongoose)
                    </li>
                    <li>
                        API's (web, third-party, RESTful, server-side)
                    </li>
                    <li>
                        Templating language (Handlebars)
                    </li>
                </ul>
            </Col>

        <Col lg={4} md={12}>
        <h2 class="education">my education</h2>
        <p>
          <span className="school-name">University of Washington EXTENSION</span><br></br>
          Full Stack Boot Camp - Certification 
          <br></br>
          <br></br>
          <span className="school-name">Whatcom Community College</span><br></br>
          Computer Information Systems Course
          <br></br>
          <br></br>
          <span className="school-name">Washington State University</span><br></br>
          Social Sciences, concentrations: Political Science, Sociology, Psychology - BS
          <br></br>
          <br></br>
          <span className="school-name">Foothill College</span><br></br>
          Liberal Arts: Arts & Humanities - AA<br></br>
          
        </p>
        </Col>
        </Row>
        </div>

    </section>

        </form>
        
    )};
    
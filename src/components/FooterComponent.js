import React from 'react';
import {Link} from 'react-router-dom';
function Footer(props) {
    return(
        <>
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5 style={{color:"white"}}>Quick Directs:</h5>
                    <ul className="list-unstyled">
                        <li><Link to={'/home'} style={{color:"white"}}>Home</Link></li>
                        <li><Link to={'/aboutus'} style={{color:"white"}}>About</Link></li>
                        <li><Link to={'/categories'} style={{color:"white"}}>Categories</Link></li>
                        <li><Link to={'/contactus'} style={{color:"white"}}>Contact us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5 style={{color:"white"}}>Our Address</h5>
                    <address>
		              107,Vidhya Nagar<br />
		              Ujjain ,Madhya Pradesh<br />
		              456010<br />
                      <i className="fa fa-phone fa-lg"></i>: +6264595529<br />
                      <i className="fa fa-envelope fa-lg" style={{color:"white"}}></i>: <a href="mailto:alwareadit@gmail.com" style={{color:"white"}}>
                      
                         alwareadit@gmail.com</a><br></br>
                        

                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/aditalware"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/aditalware"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:alwareadit@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p style={{color:"white"}}>© Copyright 2020 Universal Shopping Center</p>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default Footer;
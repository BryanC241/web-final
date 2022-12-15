import React from "react";
import '../comp.css';
import 'font-awesome/css/font-awesome.min.css';



const Contact = () => {
    return (

        <div className="shine">
            <img src="/assets/bg.jpg" alt="galactic-store" height="350px " />
            <h1>Get In Touch</h1>

            <p>Need help with your order or have a question about our products? Contact us and our friendly customer service team will be happy to assist you:</p>



            <data><p>Galactic E-commerce Store</p></data>
            <data><p>Galactic 19342 Sale Ave San Diego, CA 49135</p></data>
            <data><p>Phone: 1-800-261-0948</p></data>
            <data><p>Email: galacticstore@galactic.com</p></data>

            <h2>Reach out to us on social media</h2>
            <div className="flex-parent jc-center" >
                <p><a href="https://twitter.com/" title="twitter.com" className="margin-right fa-icon" target="_blank"><i class="fa fa-twitter"></i></a></p>
                <p><a href="https://www.facebook.com/" title="facebook.com" className="margin-right fa-icon" target="_blank"><i class="fa fa-user"></i></a></p>
                <p><a href="https://www.instagram.com/" title="instagram.com" className="margin-right fa-icon" target="_blank"><i class="fa fa-users"></i></a></p>
            </div>
        </div>


    )

}
export default Contact;
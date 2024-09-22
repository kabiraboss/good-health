/*import React from 'react'

export const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <h2>Contact  Us</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quibusdam nam, quasi dolorem nulla odio recusandae iusto sint. Perferendis, dolorem!</p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><i class="fa-solid fa-map-location-dot"></i></div>
            <div className="text">
              <h3>Address</h3>
              <p>4567 Partap Nagar, <br />Abudhabi , Sikar, <br />55768 </p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i class="fa-solid fa-phone"></i></div>
            <div className="text">
              <h3>Phone</h3>
              <p>4567-5678-1234 </p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i class="fa-regular fa-envelope"></i></div>
            <div className="text">
              <h3>Email</h3>
              <p>InternPakki@gmail.com </p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form >
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" name='' required="required" />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name='' required="required" />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <input type="text" name='' required="required" />
              <span>Type your Message...</span>
            </div>
            <div className="inputBox">
              <input type="submit" name='' value="Send" />
            </div>

          </form>
        </div>
      </div>

    </section>
  )
}*/
import React from 'react'
import "./contact.css"

export default  function contact  ()  {
  return (
    <body className='rohit'>
      <section id="section-wrapper">
        <div class="box-wrapper">
            <div class="info-wrap">
                <h2 class="info-title">Contact Information</h2>
                <h3 class="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                <ul class="info-details">
                    <li>
                        <i class="fas fa-phone-alt"></i>
                        <span>Phone:</span> <a href="tel:+ 1235 2355 98">+ 1235 2355 98</a>
                    </li>
                    <li>
                        <i class="fas fa-paper-plane"></i>
                        <span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </li>
                    <li>
                        <i class="fas fa-globe"></i>
                        <span>Website:</span> <a href="0">yoursite.com</a>
                    </li>
                </ul>
                <ul class="social-icons">
                    <li><a href='0'><i class="fab fa-facebook"></i></a></li>
                    <li><a href="0"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="0"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            <div class="form-wrap">
                <form action="#" method="POST">
                    <h2 className="form-title">Send us a message</h2>
                    <div class="form-fields">
                        <div className="form-group">
                            <input type="text" class="fname" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" class="lname" placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" class="email" placeholder="Mail" />
                        </div>
                        <div className="form-group">
                            <input type="number" class="phone" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="" placeholder="Write your message"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Send Message" className="submit-button" />
                </form>
            </div>
        </div>
    </section>

    </body>
      
    
    
    

    
  );
}

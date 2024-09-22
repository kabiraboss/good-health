
import React from 'react'
import "./register.css";
import { Link } from "react-router-dom" ;


export default function Register  ()  {
  return (
    <body className='rohit'>
      
    
    <section id="section-wrapper">
<div class="box-wrapper">
    <div class="form-box">
        <form action="#" method="POST">
            <h4 class="form-title">Create an account</h4>
            <div class="form-fields">
                <div class="frm-group">
                    <input type="text" class="user-name" placeholder="Your Name"/>
                </div>
                <div class="frm-group">
                    <input type="email" class="user-email" placeholder="Your Email"/>
                </div>
                <div class="frm-group">
                    <input type="password" class="user-pass" placeholder="Your Password"/>
                </div>
            </div>
            <input type="submit" value="Sign Up" class="submit-button"/>
        </form>
        <p class="loginhere">Have already an account ? <a href="0"> <Link className="link" to="/login">
                Login
              </Link> </a></p>
    </div>
    <div class="bg-box">
      
      <img src="/sign-up.png" alt="" />
      

    </div>
</div>
</section>
</body>
    
  );
}


/*import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton"> <Link className="link" to="/register">
                Register
              </Link></button>
    </div>
  );
}*/
import React  ,{useState}  from 'react'
import './login.css'
import { Link  } from "react-router-dom";

export default function Login  () {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <body className='rohit'>
    
    <section id="section-wrappe">
        <div class="bo-wrappe">
            <div class="bg-bo">
             <img src="/rohi.png" alt="" />
             
            </div>
            <div class="form-bo">
                <form action="#" method="POST">
                    <h4 class="form-titl">Login your account</h4>
                    <div class="form-fiel">
                        <div class="form-grou">
                            <input type="email" class="user-email" placeholder="Your email"/>
                        </div>
                        <div class="form-grou">
                            <input type="password" class="user-pass" placeholder="Your Password"/>
                        </div>
                        <div class="fpas">
                            <span class="fpas-btn"  onClick={handleOpenPopup}>
                            Forget Password?
                            </span>
                        </div>
                    </div>
                    <input type="submit" value="Sign In" class="submi-button"/>
                </form>
                <p class="signi-her">Don't have an account ? <a href="0"><Link className="link" to="/register">
                Register
              </Link></a></p>
            </div>
            
            <div class="fpas-popu-bo"  style={{
          transform: isPopupVisible ? 'scale(1)' : 'scale(0)',
          transition: 'transform 0.3s ease',
        }}>
              
                <button className="close-btn" onClick={handleClosePopup}>
                <img src="/close-button.png" class="close-btn" alt=""/>
        </button>
                   
                
                <form action="#" method="POST">
             
                 
                    <p class="form-sub-titl"> Reset your password.</p>
                    <div class="form-fiel">
                        <div class="frm-group">
                            <input type="email" class="user-name" placeholder="Your email"/>
                        </div>
                    </div>
                    <input type="submit" value="Send email" class="submi-button"/>
                </form>
            </div>
        </div>
    </section>
   
</body>
  );
}


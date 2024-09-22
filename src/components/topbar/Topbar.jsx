
import { Link } from "react-router-dom";
import "./topbar.css";
import { useState  , useEffect} from "react";

export default function Topbar() {
  const [user, setUser] = useState(true);
  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
  }, []);

 
 const handleLogout = () => {
  setUser(false); 
 
  
  <Link className="link" to="/register">
  REGISTER
</Link> ;
 <Link className="link" to="/login">
 LOGIN
</Link>
 }

  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fab fa-facebook"></i>
        <i className=" topIcon fab fa-instagram"></i>
        <i className=" topIcon fab fa-pinterest"></i>
        <i className="topIcon fab fa-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
         
          <li className="topListItem"> {user?( <Link className="link" to="/contact">
          
      
          CONTACT
        </Link>
        ):( <Link className="link" to="/login" >
      
  
          CONTACT
        </Link>)}</li>
      
          
          
          <li className="topListItem">
           
           {user?( <Link className="link" to="/write">
          
      
              WRITE
            </Link>
            ):( <Link className="link" to="/login">
          
      
              WRITE
            </Link>)}
           
          </li>
        
          
            
         
         <li className="topListItem">
          {user&&<Link className="link"  to="/login" onClick={handleLogout}>
         LOGOUT
        </Link>} 
        </li>
        </ul>
      </div>
      <div className="topRight">
      {user?(<i class=" md fa-solid fa-forward"></i>):null}
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        {user?( <i class="fa-solid fa-backward"></i>
        ):null}
      </div>
    </div>
  );
}
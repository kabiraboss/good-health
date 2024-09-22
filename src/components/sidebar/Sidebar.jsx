import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://t4.ftcdn.net/jpg/02/11/02/49/240_F_211024931_EjDZ5mej7egquHK9gl6I3kMvacfxGakK.jpg"
          alt=""
        />
        <p>
        "Our platform empowers individuals to share health concerns and discover solutions through community experiences, fostering a supportive environment for better well-being and healthier living."
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">TOP CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Cancer
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
            Stress
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
            Diabetes
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
            Obesity
            </Link>
          </li>
         
         
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
          <i className="sidebarIcon fab fa-pinterest"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

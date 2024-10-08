import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <Link  to="/post/abc" > <img
        className="postImg"
        src={img}
        alt=""
      /></Link>
      
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Cancer
            </Link>
          </span>
        
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
          My Personal Journey
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        <Link to="/post/abc" className="link"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?</Link>
       
      </p>
    </div>
  );
}

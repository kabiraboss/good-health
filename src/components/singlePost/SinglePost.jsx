import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://thumbs.dreamstime.com/z/good-health-good-life-written-chalk-chalkboard-44720047.jpg?ct=jpeg"
          alt=""
        />
        <h1 className="singlePostTitle">
        My Personal Journey
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              
                Rohit
              
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
        Being diagnosed with cancer felt like my world had stopped. The initial shock turned into fear, but I knew I had to face this battle head-on. Chemotherapy was brutal, leaving me physically and mentally drained, but my family’s support kept me going. I found strength in the smallest victories — a day without nausea, a morning walk in the sun.

Mental resilience was key; I joined support groups where others shared their experiences, reminding me I wasn’t alone. I started focusing on nutrition, meditation, and staying active as much as possible. Every treatment felt like a step closer to survival, not just survival but reclaiming my life.


          <br />
          <br />
          Through this journey, I learned that the biggest challenge wasn’t just fighting the illness but maintaining hope. Cancer tried to break me, but it also taught me the value of every moment, and how inner strength can truly heal.
          <br />
          <br />
          I also relied on my doctors and trusted their guidance, believing in the process, no matter how tough it got. Through this journey, I learned that the biggest challenge wasn’t just fighting the illness but maintaining hope. Cancer tried to break me, but it also taught me the value of every moment, and how inner strength can truly heal.
         
        </p>
        <div className="mic" ><Link className="link" to="/">Home Page</Link></div>
      </div>
    </div>
  );
}

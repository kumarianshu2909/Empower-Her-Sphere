import { Link } from "react-router-dom";
import "./post.css";

export default function Post1({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Shubhangi Mishra
          </Link>
        </span>
        <hr />
        <span className="postDate">few hours ago</span>
      </div>
       <p className="postDesc">
      As an Indian housewife, I advocate for gender equality by challenging traditional roles and fostering mutual respect within the family. It's about recognizing that every individual, regardless of gender, contributes to the harmonious functioning of our household. Gender equality at home sets the foundation for a more balanced and inclusive society, where every role is valued.
      </p> 
    </div>
  );
}

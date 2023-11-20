import { Link } from "react-router-dom";
import "./post.css";

export default function Post2({img}) {
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
            Radhika Mehra
          </Link>
        </span>
        <hr />
        <span className="postDate">4 days ago</span>
      </div>
       <p className="postDesc">
       It's about breaking glass ceilings, fostering diversity, and ensuring that every woman has a seat at the decision-making table. Feminism fuels not just my success but the collective progress of women in the business world, contributing to a more inclusive and equitable future.
      </p> 
    </div>
  );
}

import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
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
            Kritika Jain
          </Link>
        </span>
        <hr />
        <span className="postDate">6 days ago</span>
      </div>
       <p className="postDesc">
       I embrace feminism as the driving force behind my pursuit of education, breaking stereotypes and challenging societal expectations. It's about fostering an environment where every woman can dream without limitations and where my voice is a catalyst for positive change. Feminism is not just a concept; it's the empowering journey I navigate daily, inspiring others to envision a future of equal opportunities and respect
      </p> 
    </div>
  );
}

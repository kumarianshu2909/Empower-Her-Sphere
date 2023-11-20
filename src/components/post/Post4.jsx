import { Link } from "react-router-dom";
import "./post.css";

export default function Post4({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {/* <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span> */}
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Preety Verma
          </Link>
        </span>
        <hr />
        <span className="postDate">1 week ago</span>
      </div>
       <p className="postDesc">
       As a female doctor in India, I embody the spirit of feminism by breaking barriers in a traditionally male-dominated field. My journey is a testament to the importance of equal opportunities and recognition for women in healthcare. Advocating for gender equality is not just a personal mission; it's an essential step toward a healthier, more equitable society
      </p> 
    </div>
  );
}

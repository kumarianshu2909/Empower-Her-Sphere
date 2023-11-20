import { Link } from "react-router-dom";
import "./post.css";

export default function Post3({img}) {
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
            Rashi Singhania
          </Link>
        </span>
        <hr />
        <span className="postDate">2 days ago</span>
      </div>
       <p className="postDesc">
       Gender equality means having the freedom to dream without limitations, pursuing education, and aspiring to any career. It's about breaking stereotypes, empowering each other, and envisioning a future where opportunities are not bound by gender. Embracing gender equality is not just a goal; it's a commitment to building a society where every girl's potential is recognized and celebrated.
      </p> 
    </div>
  );
}

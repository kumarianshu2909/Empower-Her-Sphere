import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Her Sphere</span>
        <span className="headerTitleLg">EMPOWER</span>
      </div>
      <img
        className="headerImg"
        src="https://preen.ph/wp-content/blogs.dir/38/files/2023/04/Dear-Internet-Header.jpg"
        alt=""
      />
    </div>
  );
}

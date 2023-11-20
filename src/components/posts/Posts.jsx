import Post from "../post/Post";
import Post1 from "../post/Post1";
import Post2 from "../post/Post2";
import Post3 from "../post/Post3";
import Post4 from "../post/Post4";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://img.freepik.com/premium-photo/young-indian-college-girl-holding-backpack-books-giving-happy-expression_54391-7222.jpg" />
      <Post1 img="https://t4.ftcdn.net/jpg/05/07/45/65/360_F_507456599_n26cDdJJUfYMFvXkYO0Ecmbmn5x5UCsu.jpg" />
      <Post2 img="https://media.istockphoto.com/id/1272815911/photo/young-indian-female-university-student-stock-photo.jpg?s=612x612&w=0&k=20&c=Iwdc08GR3pw8_Qg3_nabNJUQYTo52EU3dvW4tsth1tE="/>
      <Post3 img="https://www.imageconsultinginstitute.com/wp-content/uploads/2021/12/smiling-confident-businesswoman-posing-with-arms-folded.jpg"/>
      <Post4 img="https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66978.jpg"/> 
    </div>
  );
}

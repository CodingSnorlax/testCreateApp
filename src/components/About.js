import { Link } from "react-router-dom";

function About() {
    return (
      <>
        <h1>關於我</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi a possimus. Laborum optio alias, accusamus possimus facere neque perspiciatis!</p>
        <Link to="/">回到首頁</Link>
      </>
    );
  }

  export default About;
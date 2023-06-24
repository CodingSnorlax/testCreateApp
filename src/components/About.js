import { useNavigate } from "react-router-dom";

function About() {
  let navigate = useNavigate();
  return (
    <>
      <h1>關於我</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque modi
        a possimus. Laborum optio alias, accusamus possimus facere neque
        perspiciatis!
      </p>
      {/* <Link to="/">回到首頁</Link> */}
      <button
        onClick={(e) => {
          navigate("/");
        }}
      >
        回到首頁
      </button>
    </>
  );
}

export default About;

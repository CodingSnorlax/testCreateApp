import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>這是一個首頁</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
        voluptatem voluptate repudiandae ratione atque veritatis? Labore sint
        magnam animi maxime.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, doloribus.
      </p>
      <ul>
        <li>Sunday</li>
        <li>Monday</li>
        <li>Tuesday</li>
        <li>Wednesday</li>
        <li>Thursday</li>
        <li>Friday</li>
        <li>Saturday</li>
      </ul>
      {/* 透過 Link 連接到 /about */}
      <Link to="/about">關於我</Link>
    </>
  );
}

export default Home;

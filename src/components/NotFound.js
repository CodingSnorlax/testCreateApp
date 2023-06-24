import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>噢歐，找不到這個頁面</h1>
      <Link to="/">回到首頁</Link>
    </>
  );
}

export default NotFound;

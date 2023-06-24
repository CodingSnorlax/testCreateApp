import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function Layout() {
  return (
    <>
      <div className="header">
        <h1>header 區塊</h1>
      </div>
      <Outlet></Outlet>
      <div className="footer">
        <h1>footer 區塊</h1>
      </div>
    </>
  );
}

function App() {
  return (
    // 註冊路由表
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} /> {/* 路徑會切換到 Home 元件 */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

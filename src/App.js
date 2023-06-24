import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    // 註冊路由表
    <Routes>
      <Route path="/" element={<Home />} /> {/* 👈 Renders at /app/ */}
      {/* 代表 /about 的路徑會切換到 About 元件 */}
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

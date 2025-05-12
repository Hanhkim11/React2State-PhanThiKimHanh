import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BaiTapState from "./BaiTapState/BaiTapState";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BaiTapState />
    </>
  );
}

export default App;

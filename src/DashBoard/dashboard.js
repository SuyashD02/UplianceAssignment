import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Classes from "./dashboard.module.css";

const Dashboard = () => {
  const [count, setCount] = useState(0);
  const { width } = useSpring({
    width: `${count * 10}%`,
  });

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);
  //   rich
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = () => {
    setIsUnderline(!isUnderline);
  };

  useEffect(() => {
    const savedText = localStorage.getItem("RichText");
    if (savedText) {
      setText(savedText);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("RichText", text);
  }, [text]);
  return (
    <div className="w-[100vw] h-[100%]">
      
      <div className={Classes.top}>
        <div className={Classes.counter}>
          <div className="flex justify-center mt-[20px] text-[24px]">
            {count}
          </div>
          <p className="flex justify-center mt-[10px] text-[24px]">Counter</p>
          <div className={Classes.mainButtons}>
            <button
              onClick={increment}
              disabled={count === 10}
              className="w-[20%] h-[5vh] rounded-[10px] text-[24px]"
            >
              +
            </button>
            <button
              onClick={reset}
              className="w-[20%] h-[5vh] rounded-[10px] border-[] text-[20px]"
            >
              Reset
            </button>
            <button
              onClick={decrement}
              disabled={count==0}
              className="w-[20%] h-[5vh] rounded-[10px] border-[] text-[24px]"
            >
              -
            </button>
          </div>
        </div>
        <div className={Classes.rich}>
          <textarea
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textDecoration: isUnderline ? "underline" : "none",
              fontSize:"18px",
              width: "90%", // Fixed width
              height: "190px", // Fixed height
              resize: "none",
              border:"none",
            }}
          />
          <div className={Classes.changeButtons}>
            <button
              onClick={handleBoldClick}
              className="w-[20%] h-[5vh] rounded-[10px] text-[20px]"
            >
              Bold
            </button>
            <button
              onClick={handleItalicClick}
              className="w-[20%] h-[5vh] rounded-[10px] text-[20px]"
            >
              Italic
            </button>
            <button
              onClick={handleUnderlineClick}
              className="w-[20%] h-[5vh] rounded-[10px] text-[20px]"
            >
              Underline
            </button>
          </div>
          {/* over */}
        </div>
      </div>
      <div className={Classes.bottom}></div>
      <animated.div
        style={{
          background: "linear-gradient(to right, #ffcc00, #76db09)",
          height: "30px",
          width,
        }}
      />
    </div>
  );
};

export default Dashboard;

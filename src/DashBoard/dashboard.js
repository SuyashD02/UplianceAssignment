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
  const [formData, setFormData] = useState({
    address: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSave = () => {
    const { address, email, phone } = formData;
    setText(`Address: ${address}\nEmail: ${email}\nPhone: ${phone}`);

    setFormData({
      address: "",
      email: "",
      phone: ""
    });
  };

  const [name, setName] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  useEffect(() => {
    const generatedId = generateUniqueId();
    setUniqueId(generatedId);
  }, []);

  const generateUniqueId = () => {
    const id = Math.random().toString(36).substring(2, 10);
    return id;
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUnique = () => {
    localStorage.setItem("UserData", JSON.stringify({ name, uniqueId }));
    setName("");
    const generatedId = generateUniqueId();
    setUniqueId(generatedId);
  };
  return (
    <div className={Classes.baground}>
      <div className={Classes.top}>
        <div className={Classes.counter}>
          <div className="flex justify-center mt-[20px] text-[24px] text-[#000] font-[800]">
            {count}
          </div>
          <p className="flex justify-center mt-[10px] text-[24px] text-[#3c009d] font-[800]">Counter</p>
          <div className={Classes.mainButtons}>
            <button
              onClick={increment}
              disabled={count === 10}
              className="w-[20%] h-[5vh] rounded-[10px] text-[24px] bg-[#3c009d] text-[#fff] outline-none"
            >
              +
            </button>
            <button
              onClick={reset}
              className="w-[20%] h-[5vh] rounded-[10px] border-[] text-[20px] bg-[#3c009d] text-[#fff] outline-none"
            >
              Reset
            </button>
            <button
              onClick={decrement}
              disabled={count == 0}
              className="w-[20%] h-[5vh] rounded-[10px]  text-[24px] bg-[#3c009d] text-[#fff] outline-none "
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
              fontSize: "18px",
              width: "90%",
              height: "190px",
              resize: "none",
              border: "none",
              outline:"none",
              backgroundColor:"#dbd7f2",
            }}
          />
          <div className={Classes.changeButtons}>
            <button
              onClick={handleBoldClick}
              className="w-[20%] h-[5vh] rounded-[10px] text-[20px] bg-[#3c009d] text-[#fff] outline-none"
            >
              Bold
            </button>
            <button
              onClick={handleItalicClick}
              className="w-[20%] h-[5vh] rounded-[10px] text-[20px] bg-[#3c009d] text-[#fff] outline-none"
            >
              Italic
            </button>
            <button
              onClick={handleUnderlineClick}
              className="w-[20%] h-[5vh] rounded-[10px] text-[20px] bg-[#3c009d] text-[#fff] outline-none"
            >
              Underline
            </button>
          </div>
        </div>
      </div>

      <div className={Classes.bottom}>
        <div className={Classes.bottomf}>
          <div className="flex justify-center gap-[15px] items-center w-[95%] mt-[20px]">
            <p>Name:</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
              className={Classes.inputAddress}
            />
          </div>
          <div className="flex justify-center gap-[15px] items-center w-[95%] mt-[20px]">
            <p>Unique ID:</p>
            <p>{uniqueId}</p>
          </div>
          <button className={Classes.saveAddress} onClick={handleUnique}>
            Save
          </button>
        </div>
        <div className={Classes.bottoms}>
          <div className="flex justify-center gap-[15px] items-center w-[95%] mt-[20px]">
            <p>Address:</p>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className={Classes.inputAddress}
            />
          </div>
          <div className="flex justify-center gap-[15px] items-center w-[95%] mt-[20px]">
            <p>Email:</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className={Classes.inputAddress}
            />
          </div>
          <div className="flex justify-center gap-[15px] items-center w-[95%] mt-[20px]">
            <p>Phone:</p>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
              className={Classes.inputAddress}
            />
          </div>
          <button className={Classes.saveAddress} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <div className={Classes.bar}>
        <animated.div
          style={{
            background: "linear-gradient(to right, #ffcc00, #76db09)",
            height: "35px",
            width,
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import "./Main.css";

const Main = ({ onAddNote }) => {
  const [text, setText] = useState({ title: "", content: "" });
  const textHandler = (e) => {
    const { name, value } = e.target;
    setText((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const clickHandler = (e) => {
    e.preventDefault();
    onAddNote(text);
    setText({ title: "", content: "" });
  };
  return (
    <div>
      <form className="one">
        <input
          name="title"
          placeholder="Title . . ."
          value={text.title}
          onChange={textHandler}
        />
        <textarea
          name="content"
          placeholder="write here..."
          rows="5"
          value={text.content}
          onChange={textHandler}
        />
        <button onClick={clickHandler}>ADD</button>
      </form>
    </div>
  );
};

export default Main;

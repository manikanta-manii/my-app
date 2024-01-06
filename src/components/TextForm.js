import React, { useState } from "react";

export default function TextForm(props) {
  const onClickHandle = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const onChangeHandle = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your text here");

  return (
    <>
      <div>
        <h3>{props.heading}</h3>
        <div>
          <textarea
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={onChangeHandle}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={onClickHandle}>
          ToUppercase
        </button>
      </div>
    </>
  );
}

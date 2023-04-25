import React from "react";

function Quote(props) {

  return (
    <div className="quote">
      <div className="box">
        <h1>{props.quote}</h1>
        <p>{props.author}</p>
      </div>
    </div>
  );
}

export default Quote;
import React from "react";
import "./Style.css";

function Cards(props) {
  return (
    <div>
      <div className="items">
        <img src={props.src} alt="Not Found Images" />
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default Cards;
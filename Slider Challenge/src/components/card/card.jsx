import React from "react";

export function Card({ title, text }) {
  return (
    <>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{title}</h1>
        <p data-testid="text">{text}</p>
      </div>
    </>
  );
}

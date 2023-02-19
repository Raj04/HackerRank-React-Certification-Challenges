import React from "react";
import { Card } from "./card/card";
import { useSlide } from "./hook";
function Slides({ slides }) {
  const {
    title,
    text,
    onClickRestart,
    onClickNext,
    onClickPrev,
    isRestartDisabled,
    isPrevDisabled,
    isNextDisabled,
  } = useSlide(slides);
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={onClickRestart}
          disabled={isRestartDisabled}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={onClickPrev}
          disabled={isPrevDisabled}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={onClickNext}
          disabled={isNextDisabled}
        >
          Next
        </button>
      </div>
      <Card title={title} text={text} />
    </div>
  );
}

export default Slides;

import React from "react";

export const useSlide = (slides) => {
  const [currentCard, setCurrentCard] = React.useState(0);
  const [title, setTitle] = React.useState(slides[0].title);
  const [text, setText] = React.useState(slides[0].text);
  const [isRestartDisabled, setRestartDisabled] = React.useState(false);
  const [isPrevDisabled, setPrevDisabled] = React.useState(false);
  const [isNextDisabled, setNextDisabled] = React.useState(false);

  const onClickRestart = () => {
    setCurrentCard(0);
  };
  const onClickPrev = () => {
    if (currentCard - 1 < 0) {
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard - 1);
    }
  };
  const onClickNext = () => {
    if (currentCard + 1 >= slides.length) {
      setCurrentCard(0);
    } else {
      setCurrentCard(currentCard + 1);
    }
  };
  React.useEffect(() => {
    updateContent();
    if (currentCard === 0) {
      setPrevDisabled(true);
      setRestartDisabled(true);
      setNextDisabled(false);
    } else if (currentCard === slides.length - 1) {
      setNextDisabled(true);
      setPrevDisabled(false);
      setRestartDisabled(false);
    } else {
      setPrevDisabled(false);
      setRestartDisabled(false);
      setNextDisabled(false);
    }
  }, [currentCard]);

  const updateContent = () => {
    setTitle(slides[currentCard].title);
    setText(slides[currentCard].text);
  };

  return {
    title,
    text,
    isRestartDisabled,
    isPrevDisabled,
    isNextDisabled,
    onClickRestart,
    onClickNext,
    onClickPrev,
  };
};

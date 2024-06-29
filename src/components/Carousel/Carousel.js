import { useState } from 'react';
import Component from './Component';
import './style.css';

const Carousel = () => {
  const [left, setLeft] = useState(0);

  const leftHidden = 0;
  const rightHidden = 4;
  const a = 300;

  const leftBtn = () => {
    if (left >= a * leftHidden) return;
    setLeft(left + a);
    let cards = document.getElementById("App-header")
    cards.style.left = `${left + a}px`
  }
  const rightBtn = () => {
    if (left <= a * rightHidden * -1) return;
    setLeft(left - a);
    let cards = document.getElementById("App-header")
    cards.style.left = `${left - a}px`
  }

  return (
    <>
      <div className="carousel-component">
        <Component rightBtn={rightBtn} leftBtn={leftBtn} />
      </div>
    </>
  );
}

export default Carousel;

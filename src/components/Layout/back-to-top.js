import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import './back-to-top.css';

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function scrollFunction(backToTopButton) {
  if (!backToTopButton) return;
  if (window.pageYOffset > 300) {
    if (!backToTopButton.classList.contains('btn-entrance')) {
      backToTopButton.classList.remove('btn-exit');
      backToTopButton.classList.add('btn-entrance');
      backToTopButton.style.display = 'block';
    }
  } else if (backToTopButton.classList.contains('btn-entrance')) {
    backToTopButton.classList.remove('btn-entrance');
    backToTopButton.classList.add('btn-exit');
    setTimeout(function () {
      backToTopButton.style.display = 'none';
    }, 250);
  }
}

const BackToTop = () => {
  const ref = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', () => scrollFunction(ref.current));
  }, []);
  return (
    <button ref={ref} className="back-to-top-btn" type="button" onClick={smoothScrollBackToTop}>
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );
};

export default BackToTop;

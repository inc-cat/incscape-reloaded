import React, { useState } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import './blog.css';

const Showcase = [
  {
    image: 'https://placehold.co/600x400',
    title: 'Placeholder image!',
    text: 'This is a placholder image!!!',
  },
  {
    image: 'https://placehold.co/600x400/000000/FFFFFF/png',
    title: 'Placeholder image!!',
    text: 'This is a placeholder image!!',
  },
  {
    image: 'https://placehold.co/600x400/orange/white',
    title: 'Placeholder image!!!',
    text: 'This is a placeholder image!',
  },
];

const ShowSlider = function () {
  const [currentImage, setCurrentImage] = useState(0);

  if (!Array(Showcase)) {
    return null;
  }
  let showLength = Showcase.length;

  if (Showcase.length === 0) {
    return null;
  }

  const nextSlide = function () {
    setCurrentImage((currentImage + 1) % showLength);
  };

  const previousSlide = function () {
    setCurrentImage((currentImage + showLength - 1) % showLength);
  };

  return (
    <>
      <p></p>
      <section>
        {Showcase.map(function (slide, i) {
          return (
            <div className="container" key={i}>
              {i === currentImage && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  title={slide.title}
                  className="image"
                />
              )}
              <div class="slideshow-text">{Showcase[currentImage].text}</div>
            </div>
          );
        })}
      </section>{' '}
      <div className="arrows">
        <FaLongArrowAltLeft className="left-arrow" onClick={previousSlide} />
        <FaLongArrowAltRight className="right-arrow" onClick={nextSlide} />
      </div>
      <p></p>
    </>
  );
};

export default ShowSlider;

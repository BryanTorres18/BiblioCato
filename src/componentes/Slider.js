import React, { Component } from "react";
import "../styles/Slider.css";

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0,
      slides: [
        {
          image: require("../imagenes/Slider/slider_1.jpg"),
          text: "Texto de la imagen 1",
        },
        {
          image: require("../imagenes/Slider/slider_2.jpg"),
          text: "Texto de la imagen 2",
        },
        {
          image: require("../imagenes/Slider/slider_3.jpg"),
          text: "Texto de la imagen 3",
        },
        {
          image: require("../imagenes/Slider/slider_4.jpg"),
          text: "Texto de la imagen 4",
        },
      ],
    };
  }

  componentDidMount() {
    this.startSliderInterval();
  }

  componentWillUnmount() {
    clearInterval(this.sliderInterval);
  }

  startSliderInterval() {
    this.sliderInterval = setInterval(() => {
      this.nextSlide();
    }, 7000);
  }

  nextSlide() {
    this.setState((prevState) => ({
      currentSlide: (prevState.currentSlide + 1) % this.state.slides.length,
    }));
  }

  prevSlide() {
    this.setState((prevState) => ({
      currentSlide:
        (prevState.currentSlide - 1 + this.state.slides.length) %
        this.state.slides.length,
    }));
  }

  render() {
    const { currentSlide, slides } = this.state;
    return (
      <div className="container-slider">
        <div className="slider" style={{ marginLeft: `-${currentSlide * 100}%`, transition: "all 0.5s" }}>
          {slides.map((slide, index) => (
            <div className="slider__section" key={index}>
              <img src={slide.image} alt="" className="slider__img" />
              <div className="slider__text">{slide.text}</div>
            </div>
          ))}
        </div>

        <div
          className="slider__btn slider__btn--right"
          onClick={() => this.nextSlide()}
        >
          &gt;
        </div>
        <div
          className="slider__btn slider__btn--left"
          onClick={() => this.prevSlide()}
        >
          &lt;
        </div>
      </div>
    );
  }
}

export default Slider;


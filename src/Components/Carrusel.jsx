import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    src: require('../img-fondo/fotoUno.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoDos.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoTres.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoCuatro.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoCinco.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoSeis.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoSiete.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoOcho.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoNueve.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoDiez.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoOnce.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoDoce.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoTrece.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoCatorce.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoQuince.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoDieciseis.jpg'),
    altText: '',
    caption: ''
  },
  {
    src: require('../img-fondo/fotoDiecisiete.jpg'),
    altText: '',
    caption: ''
  },
  
];

class Carrusel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText}  height="auto"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Carrusel;
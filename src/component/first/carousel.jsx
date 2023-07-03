import './first.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
    var settings = {
        infinite: true,
        autoplay: true,
        speed: 4000,
        dots: true,
        button:false,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint:  1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 3
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 530,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='main-brand'>
      <div className="brands">
           <div className="flex-brand">
                <Slider {...settings}>
                <div className='the-brand'>
                    <img className='main-carousel-pix' src="asset/h4.png" alt="" />
                </div>
                <div className='the-brand'>
                     <img className='main-carousel-pix' src="asset/h5.png" alt="" />
                </div>
                <div className='the-brand'>
                    <img className='main-carousel-pix' src="asset/h4.png" alt="" />
                </div>
                <div className='the-brand'>
                     <img className='main-carousel-pix' src="asset/h5.png" alt="" />
                </div>
                <div className='the-brand'>
                    <img className='main-carousel-pix' src="asset/h4.png" alt="" />
                </div>
                <div className='the-brand'>
                     <img className='main-carousel-pix' src="asset/h5.png" alt="" />
                </div>
                </Slider>
           </div>
      </div>
    </div>
  )
}

export default Carousel

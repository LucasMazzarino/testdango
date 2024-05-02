import { img1, img2, img3, bgimage } from "../assets/images";
import { rightArrow } from "../assets/icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


const Hero = () => {
  return (
    <section id="home" className="container mx-auto mb-24 mt-16 relative bg-cover bg-center"
    style={{backgroundImage: `url(${bgimage})`,}}>
      <div className="absolute inset-0 bg-gray-100 opacity-80 z-0"></div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop
      >
        {[
          { img: img1, text: "Lorem ipsum dolor sit amet" },
          { img: img2, text: "Lorem ipsum dolor sit amet" },
          { img: img3, text: "Lorem ipsum dolor sit amet" },
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between"> 
              <div className="w-full md:w-1/2 p-4 md:p-8">
                <img
                  src={slide.img}
                  alt="Ejemplo"
                  className="rounded-lg object-cover w-full h-60 md:h-auto" 
                />
              </div>

              <div className="w-full md:w-1/2 p-4 md:p-8 max-md:text-center">
                <h2 className="text-2xl text-primary md:text-6xl font-md">{slide.text}</h2>
                <p className="text-primary mt-2 hidden md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit of type and scrambled it to make a type specimen book. .</p>
                
                <div className="mt-4 flex flex-col md:flex-col max-md:items-center lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0"> 
                  <button
                    className="bg-primary text-white py-2 px-4 rounded-lg border flex items-center max-w-40" 
                  >
                    Shop Now
                    <img src={rightArrow} alt="arrow" className="ml-2" height={20} width={20} />
                  </button>        
                  <button
                    className="bg-gray-200 text-primary py-2 px-4 rounded-lg border flex items-center max-w-40 max-md:border-none max-md:bg-transparent" 
                  >
                    Take the Quiz
                    <img src={rightArrow} alt="arrow" className="ml-2" height={20} width={20} />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

      <div className="flex ml-16 max-md:justify-center max-md:ml-0 lg:justify-start ">
        <button className="swiper-button-prev text-primary bg-white border
         border-primary rounded-2xl px-2 text-2xl">
          ←
        </button>
        <button className="swiper-button-next text-white
         bg-primary border px-2 mx-2 rounded-2xl text-2xl">
          → 
        </button>
      </div>
      </Swiper>
    </section>
  );
};

export default Hero;
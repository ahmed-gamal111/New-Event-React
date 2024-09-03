import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SpeakerData from './speakerData';
import { H2, SpanThree } from './style';

export default function Slider() {
  return (
    <Swiper
    autoplay ={{
      delay : 7500,
    }}
    loop ={true}
    module ={[Autoplay]}
      spaceBetween={50}
      slidesPerView={4}
    >
      {SpeakerData.map((item) => (
        <SwiperSlide key={item.id}>
          <div style={{ width: "80%", margin: "5px",  }}>
            <img src={item.img} alt={item.alt} width="100%" />
            <H2 className='fs-4'>{item.name}</H2>
            <SpanThree>{item.jop}</SpanThree>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

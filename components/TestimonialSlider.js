// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import next links 
import Link from 'next/link';

// import swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// icon 
import { FaQuoteLeft } from 'react-icons/fa';

// image
import Image from 'next/image';

// import requried modules
import {Navigation, Pagination } from 'swiper';

const TestimonialSlider = () => {
  return (
  <Swiper
  navigation={true}
  pagination={{
    clickable: true,
  }}
  modules={[Navigation, Pagination]}
  className='h-[280px] sm:h-[340px]'
  >
    {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avata name position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar  */}
                  <div className='mb-2 mx-auto drop-shadow-lg hover:drop-shadow-2xl'>
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name  */}
                  <div className='text-lg'>{person.name}</div>
                  {/* position  */}
                  <div className='text-[12px] uppercase font-extralight'>{person.position}</div>
                </div>
              </div>
              {/* qoutes and message  */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute
              xl:before:left-0 xl:before:h-[200px] relative xl:pl-20
              '>
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' /></div>
              
              {/* messages  */}
              <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
             </div>
          </SwiperSlide>
        );
       }) } 
    
  </Swiper>
  );
};

export default TestimonialSlider;

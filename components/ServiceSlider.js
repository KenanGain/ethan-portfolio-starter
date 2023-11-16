// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import next links 
import Link from 'next/link';

// import swiper Styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxCamera,
  RxLaptop,
  RxBarChart,
  RxArrowTopRight
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxLaptop />,
    title: (
      <>
        AI Solution By <Link href="#" className='text-accent font-bold'>Aiksha.ai</Link>
      </>
    ),
    description: "Revolutionizing businesses with advanced AI solutions.",
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: "Crafting custom software for web and mobile platforms.",
  },
  {
    icon: <RxReader />,
    title: 'Prompt Engineering',
    description: "Crafting effective prompts for AI and machine learning applications.",
  },
  {
    icon: <RxCamera />,
    title: 'Video Editing/Streaming',
    description: "Professional editing and streaming for digital media.",
  },
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: "Creating impactful brands with unique identities.",
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: "Innovative WEB3 designs for a digital world.",
  },
  {
    icon: <RxReader />,
    title: 'Content Creator',
    description: "Engaging and SEO-optimized content creation.",
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: "Boosting your site's visibility and search ranking.",
  },
];


// import requried modules
import { FreeMode, Pagination } from 'swiper';

const ServiceSlider = () => {
  return (
  <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    }
  }}
  freeMode={true}
  pagination={{
    clickable: true
  }}
  modules={[FreeMode, Pagination]}
  className='h-[280px] sm:h-[340px]'
  >
    {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,45,123,0.15)] drop-shadow-xl h-max rounded-lg px-6 py-7 sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
             hover:bg-[rgba(89,65,169,0.15)] hover:drop-shadow-2xl transition-all duration-300 flex 
            '>
              {/* icons */}
              <div className='text-4xl text-accent mb-2'>{item.icon}</div>
              {/* title */}
              <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })
    }
    
  </Swiper>
  );
};

export default ServiceSlider;

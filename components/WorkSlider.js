// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.png',
          link: 'https://www.google.com/search?q=google&rlz=1C1ONGR_enCA1049CA1049&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTITCAEQLhiDARjHARixAxjRAxiABDIGCAIQRRg7MgYIAxBFGDwyBggEEEUYPDIGCAUQRRg8MgYIBhBFGEEyBggHEEUYQdIBCDM0MzZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8',
          isLiveProject: true,
        },
        {
          title: 'title',
          path: '/thumb2.png',
          link: 'https://student-budget-9v9hufm9h-kenans-projects-be5392c6.vercel.app/',
          isLiveProject: true,
        },
        {
          title: 'title',
          path: '/thumb3.png',
          isLiveProject: false,
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.png',
          link: '/link-for-thumb4',
          isLiveProject: true,
        },
        {
          title: 'title',
          path: '/thumb2.png',
          link: 'https://student-budget-9v9hufm9h-kenans-projects-be5392c6.vercel.app/',
          isLiveProject: true,
        },
        {
          title: 'title',
          path: '/thumb3.png',
          isLiveProject: false,
        },
      ],
    },
  ],
};


import { useRouter } from 'next/router';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import next links 
import Link from 'next/link';

// import swiper Styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icon
import { BsArrowRight } from 'react-icons/bs';

import Image from 'next/image';

// import requried modules
import { Pagination } from 'swiper';

const WorkSlider = () => {

 // Use Next.js router
  // Define the mapping of image paths to URLs


  
 

  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[340px] sm:h-[480px]'
    >
       {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
            {slide.images.map((image, idx) => (
              <div
                key={idx}
                className='relative rounded-lg overflow-hidden flex items-center justify-center group'
              >
                {image.isLiveProject ? (
                  <Link href={image.link} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center group' >
                    <ImageComponent image={image} />
                  </Link>
                ) : (
                  <ImageComponent image={image} />
                )}
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const ImageComponent = ({ image }) => (
  <>
    <Image src={image.path} width={500} height={300} alt={image.title} />
    <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                    
    {/* Title */}
    <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-20'>
      <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
        <div className='delay-100'>{image.isLiveProject ? 'Live' : 'Work'}</div>
        <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>{image.isLiveProject ? 'PROJECT' : 'in PROGRESS'}</div>
        <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
      </div>
    </div>
  </>
);

export default WorkSlider;
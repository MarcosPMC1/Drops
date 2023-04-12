import Header from '@/components/Header'
import LogoLoja from '../img/logo_loja.jpg'
import Image from 'next/image'
import Card from '@/components/Card';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import {AiOutlineArrowRight} from 'react-icons/ai'


const home = () => {
  return (
    <div>
        <Header />
        <div className='p-16 w-full'>
          <div className='bg-[#FBD350] rounded-xl p-10 flex flex-row gap-36'>
            <Link href='/' className='flex flex-col gap-5 px-5 w-1/6'>
              <div className='flex flex-row items-center justify-between'>
                <h3>Visite a loja</h3>
                <AiOutlineArrowRight />
              </div>
              <Image src={LogoLoja} alt='Loja'/>
            </Link>
            <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}>
              <SwiperSlide><Card title='Camisa Retro' /></SwiperSlide>
              <SwiperSlide><Card title='Camisa Retro' /></SwiperSlide>
              <SwiperSlide><Card title='Camisa Retro' /></SwiperSlide>
              <SwiperSlide><Card title='Camisa Retro' /></SwiperSlide>
              <SwiperSlide><Card title='Camisa Retro' /></SwiperSlide>
              <SwiperSlide><Card title='Camisa Retro' /></SwiperSlide>
              <SwiperSlide><Card title='Camisa Retro' /></SwiperSlide>
              <SwiperSlide><Card title='Camisa Retro' /></SwiperSlide>

            </Swiper>
          </div>
        </div>
    </div>
  )
}

export default home
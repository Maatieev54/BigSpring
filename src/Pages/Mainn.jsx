import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Mainn() {
  return (
    <>
      <main>
        {/* MAIN-1 */}
        <section id='main-1' className='w-full min-h-screen'>
          <div className='mx-auto w-full pt-20 text-center'>
            <h1 className='text-3xl md:text-5xl font-semibold  md:w-[60%] mx-auto'>Let us solve your critical website development challenges</h1>
            <p className='text-[#777777] mx-auto md:w-[50%] py-6 w-[90%] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque
              totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus.</p>
            <div id='image' className='mx-auto md:w-[50%] w-[90%] pt-11 overflow-hidden object-contain'>
              <img src="https://themewagon.github.io/bigspring/images/banner-art.svg" alt="main-1 img" />
            </div>
          </div>
        </section>

        {/* MAIN-2 */}
        <section id='main-2' className='w-full  bg-[#EDF6F5] min-h-screen md:min-h-auto '>
          <h2 className='text-center text-3xl md:text-4xl  font-medium pt-12.5 w-[90%] mx-auto '>Something You Need To Know</h2>
          <div className='  grid  w-[90%] mx-auto gap-4 md:gap-7 lg:grid-cols-3 pt-4 md:grid-cols-2 justify-items-center py-12'>
            <div className=' bg-white h-45 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center  shadow  hover:shadow-xl transition-all duration-300'>
              <div id='img' className='w-8'>
                <img src="https://themewagon.github.io/bigspring/images/code.svg" alt="" />
              </div>
              <div id='txt' className='w-[80%]'>
                <p className='font-bold'>Clean Code</p>
                <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
              </div>
            </div>
            <div className='  bg-white h-45 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center  shadow  hover:shadow-xl transition-all duration-300'>
              <div id='img' className='w-8'>
                <img src="https://themewagon.github.io/bigspring/images/oop.svg" alt="" />
              </div>
              <div id='txt' className='w-[80%]'>
                <p className='font-bold'>Object Oriented</p>
                <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
              </div>
            </div>
            <div className=' bg-white h-45 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center  shadow  hover:shadow-xl transition-all duration-300'>
              <div id='img' className='w-8'>
                <img src="https://themewagon.github.io/bigspring/images/user-clock.svg" alt="" />
              </div>
              <div id='txt' className='w-[80%]'>
                <p className='font-bold'>24h Service</p>
                <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
              </div>
            </div>

            <div className=' bg-white h-45 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center  shadow  hover:shadow-xl transition-all duration-300'>
              <div id='img' className='w-8'>
                <img src="https://themewagon.github.io/bigspring/images/love.svg" alt="" />
              </div>
              <div id='txt' className='w-[80%]'>
                <p className='font-bold'>Value for Money</p>
                <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
              </div>
            </div>
            <div className=' bg-white h-45 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center  shadow  hover:shadow-xl transition-all duration-300'>
              <div id='img' className='w-8'>
                <img src="https://themewagon.github.io/bigspring/images/speedometer.svg" alt="" />
              </div>
              <div id='txt' className='w-[80%]'>
                <p className='font-bold'>Faster Response</p>
                <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
              </div>
            </div>
            <div className=' bg-white h-45 rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center  shadow  hover:shadow-xl transition-all duration-300'>
              <div id='img' className='w-8'>
                <img src="https://themewagon.github.io/bigspring/images/cloud.svg" alt="" />
              </div>
              <div id='txt' className='w-[80%]'>
                <p className='font-bold'>Cloud Support</p>
                <p className='text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil</p>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN-3  */}
        <section id='main-3' className='w-full py-12'>
          <div className='w-[90%] md:w-[85%] mx-auto'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className='mySwiper'
            >
              <SwiperSlide>
                <div className='grid md:grid-cols-2 items-center gap-8 px-4 md:px-10 py-8'>
                  <div className='order-2 md:order-1'>
                    <h2 className='text-2xl md:text-4xl font-bold mb-5'>It is the most advanced digital marketing and it company.</h2>
                    <p className='text-[#777777] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                    <a href='#' className='text-[#0BA8A7] font-medium'>Check it out →</a>
                  </div>
                  <div className='order-1 md:order-2'>
                    <img src='https://themewagon.github.io/bigspring/images/service-slide-1.png' alt='slide-1' className='w-full' />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='grid md:grid-cols-2 items-center gap-8 px-4 md:px-10 py-8'>
                  <div className='order-2 md:order-1'>
                    <h2 className='text-2xl md:text-4xl font-bold mb-5'>It's a team of experienced and skilled people with distributions</h2>
                    <p className='text-[#777777] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                    <a href='#' className='text-[#0BA8A7] font-medium'>Check it out →</a>
                  </div>
                  <div className='order-1 md:order-2'>
                    <img src='https://themewagon.github.io/bigspring/images/service-slide-3.png' alt='slide-2' className='w-full' />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='grid md:grid-cols-2 items-center gap-8 px-4 md:px-10 py-8'>
                  <div className='order-2 md:order-1'>
                    <h2 className='text-2xl md:text-4xl font-bold mb-5'>It is the most advanced digital marketing and it company.</h2>
                    <p className='text-[#777777] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                    <a href='#' className='text-[#0BA8A7] font-medium'>Check it out →</a>
                  </div>
                  <div className='order-1 md:order-2'>
                    <img src='https://themewagon.github.io/bigspring/images/service-slide-1.png' alt='slide-3' className='w-full' />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* MAIN-4  */}
        <section id='main-4' className='w-full py-16 bg-[#EDF6F5]'>
          <div className='w-[90%] md:w-[85%] mx-auto grid md:grid-cols-2 items-center gap-8 px-4 md:px-10'>
            <div>
              <img src='https://themewagon.github.io/bigspring/images/service-slide-2.png' alt='static' className='w-full' />
            </div>
            <div>
              <h2 className='text-2xl md:text-4xl font-bold mb-5'>It is a privately owned Information and cyber security company</h2>
              <p className='text-[#777777] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
              <a href='#' className='text-[#0BA8A7] font-medium'>Check it out →</a>
            </div>
          </div>
        </section>

        {/* MAIN-5  */}
        <section id='main-5' className='w-full py-12'>
          <div className='w-[90%] md:w-[85%] mx-auto'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className='mySwiper'
            >
              <SwiperSlide>
                <div className='grid md:grid-cols-2 items-center gap-8 px-4 md:px-10 py-8'>
                  <div className='order-2 md:order-1'>
                    <h2 className='text-2xl md:text-4xl font-bold mb-5'>It's a team of experienced and skilled people with distributions</h2>
                    <p className='text-[#777777] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                    <a href='#' className='text-[#0BA8A7] font-medium'>Check it out →</a>
                  </div>
                  <div className='order-1 md:order-2'>
                    <img src='https://themewagon.github.io/bigspring/images/service-slide-3.png' alt='slide-1' className='w-full' />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='grid md:grid-cols-2 items-center gap-8 px-4 md:px-10 py-8'>
                  <div className='order-2 md:order-1'>
                    <h2 className='text-2xl md:text-4xl font-bold mb-5'>A company standing different from others</h2>
                    <p className='text-[#777777] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                    <a href='#' className='text-[#0BA8A7] font-medium'>Check it out →</a>
                  </div>
                  <div className='order-1 md:order-2'>
                    <img src='https://themewagon.github.io/bigspring/images/service-slide-1.png' alt='slide-2' className='w-full' />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='grid md:grid-cols-2 items-center gap-8 px-4 md:px-10 py-8'>
                  <div className='order-2 md:order-1'>
                    <h2 className='text-2xl md:text-4xl font-bold mb-5'>It's a team of experienced and skilled people with distributions</h2>
                    <p className='text-[#777777] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                    <a href='#' className='text-[#0BA8A7] font-medium'>Check it out →</a>
                  </div>
                  <div className='order-1 md:order-2'>
                    <img src='https://themewagon.github.io/bigspring/images/service-slide-3.png' alt='slide-3' className='w-full' />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* MAIN-6 */}
        <section id='main-6' className='w-full py-12 bg-[#EDF6F5]'>
          <div className='w-[90%] md:w-[85%] mx-auto'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination]}
              className='mySwiper'
            >
              <SwiperSlide>
                <div className='grid md:grid-cols-2 items-center gap-8 px-4 md:px-10 py-8'>
                  <div>
                    <img src='https://themewagon.github.io/bigspring/images/service-slide-2.png' alt='slide-1' className='w-full' />
                  </div>
                  <div>
                    <h2 className='text-2xl md:text-4xl font-bold mb-5'>It is a privately owned Information and cyber security company</h2>
                    <p className='text-[#777777] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                    <a href='#' className='text-[#0BA8A7] font-medium'>Check it out →</a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='grid md:grid-cols-2 items-center gap-8 px-4 md:px-10 py-8'>
                  <div>
                    <img src='https://themewagon.github.io/bigspring/images/service-slide-1.png' alt='slide-2' className='w-full' />
                  </div>
                  <div>
                    <h2 className='text-2xl md:text-4xl font-bold mb-5'>A company standing different from others</h2>
                    <p className='text-[#777777] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                    <a href='#' className='text-[#0BA8A7] font-medium'>Check it out →</a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='grid md:grid-cols-2 items-center gap-8 px-4 md:px-10 py-8'>
                  <div>
                    <img src='https://themewagon.github.io/bigspring/images/service-slide-2.png' alt='slide-3' className='w-full' />
                  </div>
                  <div>
                    <h2 className='text-2xl md:text-4xl font-bold mb-5'>It is a privately owned Information and cyber security company</h2>
                    <p className='text-[#777777] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur. Leo facilisi nunc viverra tellus. Ac laoreet sit vel consquat.</p>
                    <a href='#' className='text-[#0BA8A7] font-medium'>Check it out →</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* MAIN-7  */}
        <section id='main-7' className='w-full py-16'>
          <h2 className='text-center text-3xl md:text-4xl font-bold w-[90%] md:w-[35%] mx-auto leading-tight'>Experience the best workflow with us</h2>
          <div className='w-full mx-auto pt-10'>
            <img src='https://themewagon.github.io/bigspring/images/banner.svg' alt='banner' className='w-full' />
          </div>
        </section>

        {/* MAIN-8*/}
        <section id='main-8' className='w-full py-16 bg-white'>
          <div className='w-[90%] md:w-[80%] mx-auto bg-white rounded-3xl shadow-lg grid md:grid-cols-2 items-center gap-6 p-8 md:p-12'>
            <div>
              <img src='https://themewagon.github.io/bigspring/images/cta.svg' alt='cta' className='w-full' />
            </div>
            <div className='text-center md:text-left'>
              <h2 className='text-3xl md:text-4xl font-bold mb-4'>Ready to get started?</h2>
              <p className='text-[#777777] mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat tristique eget amet, tempus eu at consectetur.</p>
              <Link className='inline-block py-2.5 px-6 text-sm rounded-3xl font-semibold text-white border border-[#0BA8A7] bg-[#0BA8A7] hover:scale-105 transition-all' to={'/Contact'}>Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Mainn

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { Autoplay, Pagination, Navigation } from "swiper";
const Slider = () => {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
            <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://img.freepik.com/free-photo/happy-kids-playing-city-s-street-sunny-summer-s-day-front-modern-building-group-happy-childrens-teenagers-having-fun-together-concept-friendship-childhood-summer-holidays_155003-25104.jpg?w=740&t=st=1698908391~exp=1698908991~hmac=a3439a26f53b5c957f56e8577f3424249d9b489ee7abb5584a63892da356b71b'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Unleash Summer Adventure</h2>
                            <p className="text-white">Get ready for an unforgettable summer adventure filled with fun and learning. Our summer school vacation learning program offers a wide range of engaging courses and activities to keep students excited about education during the break. With expert instructors and a curriculum designed to spark curiosity, your child will explore new subjects and build skills. </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://img.freepik.com/free-photo/students-reading-book-together_1098-1148.jpg?w=740&t=st=1698908718~exp=1698909318~hmac=1761193efb0802a16bc5294e5db4824df0619b148a1848f76b76180d6f885806'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Ignite the Joy of Learning</h2>
                            <p className="text-white">At our summer school vacation learning program, we believe in igniting the joy of learning. We offer diverse courses that empower students to embrace education as an adventure. Our experienced educators are not just teachers; they are mentors, encouraging critical thinking and problem-solving.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://lmstheme.wpenginepowered.com/wp-content/uploads/2014/08/course14.jpg'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Explore, Create, Innovate</h2>
                            <p className="text-white">This summer, unleash your child&apos;s creativity and innovation with our vacation learning program. We offer a wide array of courses, from STEM subjects to the arts, designed to stimulate young minds and nurture the next generation of innovators. Your child will engage in hands-on experiments, projects, and artistic expression under the guidance of skilled instructors. </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://wpocean.com/html/tf/eduko/assets/images/popular/img-6.jpg'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Safety and Well-Being Assured</h2>
                            <p className="text-white">We prioritize the safety and well-being of your child above all else. Our summer school vacation learning program is committed to providing a secure and nurturing environment. Our staff is highly trained to ensure a safe experience for all students. We maintain rigorous health and safety protocols and offer modern facilities that support physical and emotional well-being.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://www.samanthasbell.com/wp-content/uploads/2015/06/ART-CLASS.jpg'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Create Lifelong Memories</h2>
                            <p className="text-white">We prioritize the safety and well-being of your child above all else. Our summer school vacation learning program is committed to providing a secure and nurturing environment. Our staff is highly trained to ensure a safe experience for all students. We maintain rigorous health and safety protocols and offer modern facilities that support physical and emotional well-being.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;
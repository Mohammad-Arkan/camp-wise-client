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
                    <img src={'https://demo.bosathemes.com/html/educator/assets/img/educator-img12.jpg'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Bug Observation Box</h2>

                            
                            <p className="text-white">This bug observation box by Barley and Birch is easy and educational. Find out what types of bugs live nearby by catching them and observing them for a little while. The mesh side provides lots of air for the bugs, so you don&apos;t need to worry about hurting them. Just catch, observe, and release! Decorate your box with crafty flowers and leaves. Don&apos;t forget to put some real ones inside for the bugs to munch on while they&apos;re there.</p>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://ingridkuhn.com/themes/alphabet-bs5.3/img/slide4.jpg'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Nature Suncatcher Craft</h2>


                            <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://html.merku.love/shelly/assets/img/img4.jpg'} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Clay Leaf Bowl</h2>


                            <p className="text-white">Our clay leaf bowl would make an excellent summer camp craft for kids. With some air-dry clay, leaves, and a bit of paint, you can make and decorate your own bowl to your liking. Use it at home to hold change, keys, jewelry, or give it to someone as a gift.</p>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://media.istockphoto.com/id/1218718894/photo/happy-kids-jumping-and-playing-in-city-street.jpg?s=612x612&w=0&k=20&c=G0_J6yO0OoUk7n4rmawwulTe8lm4-HXpx7qhQNTrWG8='} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Watermelon Card</h2>


                            <p className="text-white">Tell someone they&apos;re one in a melon with this totally adorable watermelon card from The Best Ideas for Kids. What a fun project for kids who&apos;ve gone away to summer camp who are perhaps missing their family or friends. Of course, you can make it for your own backyard summer camp, too.
</p>

                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="carousel-item relative w-full h-[70vh]">
                    <img src={'https://media.istockphoto.com/id/1193612058/photo/group-of-elementary-age-students-going-to-class.jpg?s=612x612&w=0&k=20&c=5TMUh0DBjjB6FyT6EsCKO38EiVW8S0Qtsjjzm0LgwYQ='} className="w-full object-cover" />
                    <div className="absolute flex items-center top-0 bottom-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-3/5 ml-12'>
                            <h2 className='text-5xl text-white font-bold'>Ice Cream Painted Rocks</h2>


                            <p className="text-white">Don&apos;t you love all the fun ways you can paint rocks to make something cool? These ice cream painted rocks from Projects with Kids are perfect for summer. Provide some flat rocks, paint, and paint pens, and get to work making silly little ice creams with faces. Their watermelon painted rocks are super cute, too!

</p>

                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;
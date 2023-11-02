import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";



const Testimonials = () => {
    const testimonials = [
        {
            name: "John Smith",
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27bljOp7csEgqYmbaTscZMpsT9X9TyqCXYLE-8ZvKvLHneqjcmELnj8gn65Ha2wOzG4s&usqp=CAU',
            "content": "I couldn't be happier with the service provided by [Company Name]. Their attention to detail and commitment to customer satisfaction is unmatched. I highly recommend them!",
        },
        {
            name: "Michael Anderson",
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66CdKosbqDnWFL3O-UlmOmUkCWjpLheOeXA&usqp=CAU',
            "content": "I've been a loyal customer of [Company Name] for years, and their consistent quality and professionalism never cease to amaze me. Their service is second to none.",
        },
        {
            name: "Sarah Johnson",
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKWjj7pHqWe73zxjoXJYKBeKN9nNaZLn-spQHlZWparDEu5v87dlMoyc1PJcjNNraa3G0&usqp=CAU',
            "content": "Working with [Company Name] has been a game-changer for my business. Their expertise and dedication to excellence have significantly improved our bottom line."
        },
        {
            name: "Emily Davis",
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJu92HrW2Ye6NRdBhIHWJIoZk1yyeSdGK4Cg&usqp=CAU',
            "content": "I can't thank [Company Name] enough for their outstanding support and products. Their team goes above and beyond to ensure customer satisfaction. They have my full trust and recommendation.",
        }
        // Add more testimonials...
    ];

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}

            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
        >
            {
                testimonials.map((item, i) => <SwiperSlide key={i}>

                    <div className="hero h-[60vh]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1624436048867-3cab158ec71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)" }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <div className="avatar">
                                    <div className="w-24 rounded-full ring-8 ring-offset-base-100 ring-offset-4">
                                        <img src={item.photo} />
                                    </div>
                                </div>
                                <h1 className="mb-5 text-5xl text-white font-bold">{item.name}</h1>
                                <p className="mb-5 text-slate-100">{item.content}</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>)
            }
        </Swiper>
    );
};

export default Testimonials;

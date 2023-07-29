import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import BlurImage from "../BlurImage";



export default function Budbo() {

  const wrapperRef = useRef(null);
  const weAreRef = useRef(null);
  const imgRef = useRef(null);
  const img2Ref = useRef(null);
  const phoneRef = useRef(null);
  const textCarouselRef = useRef(null);
  const textCarouselRef1 = useRef(null);
  const textCarouselRef2 = useRef(null);
  const textCarouselRef3 = useRef(null);

  useEffect(() => {
    const [carouselTimeline, scrollTrigger] = Carousel();
    const [textCarouselTimeline, textCarouselScrollTrigger] = textCarousel();

    return () => {
      scrollTrigger && scrollTrigger.kill();
      carouselTimeline && carouselTimeline.progress(1);
      textCarouselScrollTrigger && textCarouselScrollTrigger.kill();
      textCarouselTimeline && textCarouselTimeline.progress(1);
    }
  }, [wrapperRef])

  const Carousel = () => {
    const carouselTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } })
    const carouselTextX = imgRef.current.clientWidth - window.innerWidth + 1440
    const height = wrapperRef.current.clientHeight;
    const percent = window.innerWidth >= 1000 ? "500%" : "700%";

    carouselTimeline
      .to(imgRef.current, { x: -(carouselTextX), duration: 5 })
      .to(img2Ref.current, { x: carouselTextX, duration: 5 }, "<")
      .from(phoneRef.current, { y: height, duration: 2 }, "<+=3.5")
      .to(phoneRef.current, { bottom: -10, duration: 0.3 });

    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'bottom bottom',
      end: percent,
      scrub: 0,
      pin: true,
      animation: carouselTimeline,
    })
    return [carouselTimeline, scrollTrigger]
  }

  const textCarousel = () => {
    const textCarouselTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const percent = window.innerWidth >= 1000 ? "200%" : "400%";
    textCarouselTimeline
      .fromTo(
        textCarouselRef1.current,
        {
          opacity: 1,
          translateY: 0
        },
        {
          opacity: 0,
          translateY: `-100%`,
          duration: 1
        },
        1
      )
      .fromTo(
        textCarouselRef2.current,
        {
          opacity: 0,
          translateY: 0
        },
        {
          opacity: 1,
          translateY: -textCarouselRef1.current.clientHeight,
          duration: 1
        },
        "<+=2"
      )
      .to(
        textCarouselRef2.current,
        {
          opacity: 0,
          translateY: -textCarouselRef1.current.clientHeight - textCarouselRef2.current.clientHeight,
          duration: 1
        },
        "<+=2"
      )
      .fromTo(
        textCarouselRef3.current,
        {
          opacity: 0,
          translateY: -textCarouselRef1.current.clientHeight0
        },
        {
          opacity: 1,
          translateY: -textCarouselRef1.current.clientHeight - textCarouselRef2.current.clientHeight,
          duration: 1
        },
        "<+=1"
      )
      .to(
        textCarouselRef.current,
        {
          x: 0,
          duration: 2
        }
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'bottom bottom',
      end: percent,
      scrub: 0,
      animation: textCarouselTimeline,
    });
    return [textCarouselTimeline, scrollTrigger];
  }

  return (
    <div ref={wrapperRef} className="w-[100vw] h-[100vh] overflow-hidden flexx flex-col text-center font-sysui pt-24">
      <div ref={weAreRef} className="text-[40px] lg:text-[60px] lg:mt-2 mt-[33%]">
        <span>
          We are
        </span>&nbsp;
        <span className="italic text-[60px] lg:text-[90px] font-medium bg-linear bg-clip-text text-transparent">
          Budbo
        </span>
      </div>
      <div className="h-[20px] md:h-[30px] lg:h-[45px]">
        <div ref={textCarouselRef} className="flex flex-col">
          <p ref={textCarouselRef1} className="text-[16px] md:text-[24px] lg:text-[30px] ">...and we&apos;ve been expecting you! Join the Revolution, invest today!</p>
          <p ref={textCarouselRef2} className="text-[16px] md:text-[24px] lg:text-[30px] ">&apos;Tinder&apos; for buying cannabis? Yea, we did that.</p>
          <p ref={textCarouselRef3} className="text-[16px] md:text-[24px] lg:text-[30px] ">We&apos;ve been expecting you! Join the Revolution, invest today!</p>
        </div>
      </div>
      <div className="flex flex-col k lg:gap-[108px] gap-4 mt-10">
        <div ref={imgRef} className="flex lg:gap-[45px] gap-3 items-center justify-center w-[1080%] lg:w-[360%]">
          <BlurImage
            src="/about/budbo/Rectangle 120.jpg"
            alt="leaderboard"
            width={293}
            height={200}
          />
          <BlurImage
            src="/about/budbo/Rectangle 122.jpg"
            alt="leaderboard"
            width={210}
            height={257}
          />
          <BlurImage
            src="/about/budbo/Rectangle 125.jpg"
            alt="leaderboard"
            width={293}
            height={200}
          />
          <BlurImage
            src="/about/budbo/Rectangle 126.jpg"
            alt="leaderboard"
            width={210}
            height={257}
          />
          <BlurImage
            src="/about/budbo/Rectangle 127.jpg"
            alt="leaderboard"
            width={293}
            height={200}
          />
          <BlurImage
            src="/about/budbo/Rectangle 134.jpg"
            alt="leaderboard"
            width={293}
            height={200}
          />
          <BlurImage
            src="/about/budbo/Screen Shot 2022-12-21 at 1.57 1.png"
            alt="leaderboard"
            width={690}
            height={175}
          />
          <BlurImage
            src="/about/budbo/Screen Shot 2022-12-21 at 1.57 2.png"
            alt="leaderboard"
            width={686}
            height={175}
          />
          <BlurImage
            src="/about/budbo/Screen Shot 2022-12-21 at 1.57 3.png"
            alt="leaderboard"
            width={698}
            height={184}
          />
          <BlurImage
            src="/about/budbo/Screen Shot 2022-12-21 at 1.54 1.png"
            alt="leaderboard"
            width={698}
            height={184}
          />
          <BlurImage
            src="/about/budbo/Screen Shot 2022-12-21 at 1.54 2.png"
            alt="leaderboard"
            width={696}
            height={184}
          />
          <BlurImage
            src="/about/budbo/Screen Shot 2022-12-21 at 1.54 3.png"
            alt="leaderboard"
            width={691}
            height={181}
          />
        </div>
        <div ref={img2Ref} className="relative lg:left-[-260%] left-[-980%] flex lg:gap-[45px] gap-3 items-center justify-center w-[1080%] lg:w-[360%]">


          <BlurImage
            src="/about/budbo/Screen Shot 2022-12-21 at 2.15 2.png"
            alt="leaderboard"
            width={691}
            height={181}
          />

          <BlurImage
            src="/about/budbo/Screen Shot 2022-12-21 at 2.15 1.png"
            alt="leaderboard"
            width={690}
            height={175}
          />
          <BlurImage
            src="/about/budbo/Screen Shot 2022-12-21 at 1.56 2.png"
            alt="leaderboard"
            width={686}
            height={175}
          />
          <BlurImage
            src="/about/budbo/Screen Shot 2022-12-21 at 1.56 2.png"
            alt="leaderboard"
            width={691}
            height={181}
          />

          <BlurImage
            src="/about/budbo/Screen Shot 2022-12-21 at 1.56 7.png"
            alt="leaderboard"
            width={698}
            height={184}
          />
          <BlurImage
            src="/about/budbo/Screen Shot 2022-12-21 at 2.07 1.png"
            alt="leaderboard"
            width={696}
            height={184}
          />
          <BlurImage
            src="/about/budbo/Rectangle 138.jpg"
            alt="leaderboard"
            width={293}
            height={200}
          />

          <BlurImage
            src="/about/budbo/Rectangle 128.jpg"
            alt="leaderboard"
            width={293}
            height={198}
          />
          <BlurImage
            src="/about/budbo/Rectangle 130.png"
            alt="leaderboard"
            width={210}
            height={258}
          />
          <BlurImage
            src="/about/budbo/Rectangle 132.png"
            alt="leaderboard"
            width={293}
            height={198}
          />
          <BlurImage
            src="/about/budbo/Rectangle 131.png"
            alt="leaderboard"
            width={210}
            height={258}
          />
          <BlurImage
            src="/about/budbo/Rectangle 129.png"
            alt="leaderboard"
            width={210}
            height={198}
          />
        </div>
        <div ref={phoneRef} className="absolute bottom-[-10px] left-0 right-0 items-end justify-center mb-0 pb-0">
          <BlurImage
            src="/about/puff 4.png"
            alt="leaderboard"
            width={789}
            height={789}
          />
        </div>
      </div>
    </div>
  )
};
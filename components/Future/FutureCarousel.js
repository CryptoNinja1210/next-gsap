import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BlurImage from "../BlurImage";

const { useRef, useEffect } = require("react");

const FutureCarousel = () => {

  const IMAGES = [
    {
      src: "/screenshot/homebook 2.png",
      alt: "Purple Line",
      w: 875,
      h: 419,
      id: 'one'
    },
    {
      src: "/screenshot/Image.png",
      alt: "Purple Line",
      w: 201,
      h: 408,
      id: 'two'
    },
    {
      src: "/screenshot/connectbook5 3.png",
      alt: "Purple Line",
      w: 875,
      h: 419,
      id: 'three'
    },
    {
      src: "/screenshot/connectphone 2.png",
      alt: "Purple Line",
      w: 201,
      h: 408,
      id: 'four'
    },
    {
      src: "/screenshot/traxbook 2.png",
      alt: "Purple Line",
      w: 875,
      h: 419,
      id: 'five'
    },
    {
      src: "/screenshot/map 3.png",
      alt: "Purple Line",
      w: 201,
      h: 408,
      id: 'six'
    },
  ]

  const containerRef = useRef(null);
  const imagesRef = useRef(null);
  // const textRef = useRef(null);

  useEffect(() => {
    const [carouselTimeline, scrollTrigger] = Carousel();

    return () => {
      scrollTrigger && scrollTrigger.kill();
      carouselTimeline && carouselTimeline.progress(1);
    }
  }, [containerRef])

  const Carousel = () => {
    const carouselTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const carouselTextX = imagesRef.current.clientWidth - window.innerWidth
    carouselTimeline
      .to(imagesRef.current, { x: -(carouselTextX ), duration: 1 });

    // const width = `${imagesRef.current.clientWidth / window.innerHeight}%`
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "200%",
      scrub: 0,
      pin: true,
      animation: carouselTimeline,
    })
    return [carouselTimeline, scrollTrigger]
  }

  return (
    <div  ref={containerRef}  className="relative bg-black dark:bg-black text-white text-center font-sysui items-stretch flex flex-col h-[100vh] w-[100vw]">
      <h1 className="text-[38px] lg:text-[70px] text-center font-semibold m-auto">
        Your future awaits...
      </h1>
      <div ref={imagesRef} className="flex flex-nowrap m-auto w-[800%] lg:w-[400%]">
        {IMAGES.map((x, i) => (
          <div key={"carousel_" + x.id}>
            <BlurImage
              src={x.src}
              alt="Purple Line"
              width={x.w}
              height={x.h}
              className="object-cover"
            />
          </div>
        ))}
        {IMAGES.map((x, i) => (
          <div key={"carousel_2_" + x.id}>
            <BlurImage
              src={x.src}
              alt="Purple Line"
              width={x.w}
              height={x.h}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default FutureCarousel;

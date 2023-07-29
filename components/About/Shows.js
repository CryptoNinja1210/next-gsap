import { Linear } from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image"
import { useEffect, useRef } from "react";
import BlurImage from "../BlurImage";

const Shows = () => {
  const wrapperRef = useRef(null);
  const fadingImgRef = useRef([]);
  const bookRef = useRef([]);

  useEffect(() => {
    const [fadingImgTimeline0, fadingImgScrollTrigger0] = fadingImg(0);
    const [fadingImgTimeline1, fadingImgScrollTrigger1] = fadingImg(1);
    const [fadingImgTimeline2, fadingImgScrollTrigger2] = fadingImg(2);
    const [fadingImgTimeline3, fadingImgScrollTrigger3] = fadingImg(3);
    const [fadingImgTimeline4, fadingImgScrollTrigger4] = fadingImg(4);
    const [fadingImgTimeline5, fadingImgScrollTrigger5] = fadingImg(5);
    const [fadingImgTimeline6, fadingImgScrollTrigger6] = fadingImg(6);
    const [fadingImgTimeline7, fadingImgScrollTrigger7] = fadingImg(7);
    const [fadingImgTimeline8, fadingImgScrollTrigger8] = fadingImg(8);
    const [revealBookTimeline0, scrollTrigger0] = revealBook(0);
    const [revealBookTimeline1, scrollTrigger1] = revealBook(1);
    return () => {
      fadingImgScrollTrigger0 && fadingImgScrollTrigger0.kill();
      fadingImgTimeline0 && fadingImgTimeline0.progress(1);
      fadingImgScrollTrigger1 && fadingImgScrollTrigger1.kill();
      fadingImgTimeline1 && fadingImgTimeline1.progress(1);
      fadingImgScrollTrigger2 && fadingImgScrollTrigger2.kill();
      fadingImgTimeline2 && fadingImgTimeline2.progress(1);
      fadingImgScrollTrigger3 && fadingImgScrollTrigger3.kill();
      fadingImgTimeline3 && fadingImgTimeline3.progress(1);
      fadingImgScrollTrigger4 && fadingImgScrollTrigger4.kill();
      fadingImgTimeline4 && fadingImgTimeline4.progress(1);
      fadingImgScrollTrigger5 && fadingImgScrollTrigger5.kill();
      fadingImgTimeline5 && fadingImgTimeline5.progress(1);
      fadingImgScrollTrigger6 && fadingImgScrollTrigger6.kill();
      fadingImgTimeline6 && fadingImgTimeline6.progress(1);
      fadingImgScrollTrigger7 && fadingImgScrollTrigger7.kill();
      fadingImgTimeline7 && fadingImgTimeline7.progress(1);
      fadingImgScrollTrigger8 && fadingImgScrollTrigger8.kill();
      fadingImgTimeline8 && fadingImgTimeline8.progress(1);
      scrollTrigger0 && scrollTrigger0.kill();
      revealBookTimeline0 && revealBookTimeline0.progress(1);
      scrollTrigger1 && scrollTrigger1.kill();
      revealBookTimeline1 && revealBookTimeline1.progress(1);

    }
  },[wrapperRef])

  const fadingImg = (index) => {
    const fadingImgTimeline = gsap.timeline({
      defaults: { ease: Linear.easeNone }
    });
    fadingImgTimeline
      .fromTo(
        fadingImgRef.current[index],
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1
        }
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: fadingImgRef.current[index],
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: fadingImgTimeline
    });
    return [fadingImgTimeline, scrollTrigger];
  }

  const revealBook = (index) => {
    const revealBookTimeline = gsap.timeline({
      defaults: { ease: Linear.easeNone }
    });
    revealBookTimeline
      .from(
        bookRef.current[index],
        {
          rotateX: 90,
          duration: 1
        }
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: bookRef.current[index],
      start: "top center+=400px",
      end: "center center",
      scrub: 0,
      animation: revealBookTimeline
    });
    return [revealBookTimeline, scrollTrigger];
  }

  return (
    <div ref={wrapperRef} className="relative lg:top-0 top-[-350px] my-40">
      <div ref={(ref) => (fadingImgRef.current[0] = ref)} className="absolute top-[-200px] lg:top-6 left-[19%] ">
        <BlurImage
          src="/about/Main User Dropdown.png"
          alt="main-user dropdown"
          width={303}
          height={428}
        />
      </div>
      <div ref={(ref) => (fadingImgRef.current[1] = ref)} className="absolute top-[278px] left-[32%] ">
        <BlurImage
          src="/about/Dropdowns.png"
          alt="dropdowns"
          width={303}
          height={304}
        />
      </div>
      <div ref={(ref) => (fadingImgRef.current[2] = ref)} className="absolute top-[0px] left-[21.3%] z-[-1]">
        <BlurImage
          src="/about/circle.svg"
          alt="circle bg"
          width={1095}
          height={1094}
        />
      </div>
      <div ref={(ref) => (bookRef.current[0] = ref)} className="w-[550px] lg:w-[1439px] absolute top-[640px] lg:top-[112px] right-3 lg:left-[44%] ">
        <BlurImage
          src="/about/connectbook5 4.png"
          alt="com"
          width={1439}
          height={689}
        />
      </div>
      <div ref={(ref) => (fadingImgRef.current[3] = ref)} className="lg:w-[241px] w-[159px] absolute top-[800px] lg:top-[665px] left-[26.6%] ">
        <BlurImage
          src="/about/map 4.png"
          alt="phone"
          width={241}
          height={488}
        />
      </div>
      <div ref={(ref) => (fadingImgRef.current[4] = ref)} className="absolute top-[964px] left-[70%] lg:left-[65%] ">
        <BlurImage
          src="/about/map 4.png"
          alt="phone2"
          width={241}
          height={488}
        />
      </div>
      <div ref={(ref) => (fadingImgRef.current[5] = ref)} className="absolute top-[1272px] left-[14.67%] ">
        <BlurImage
          src="/about/Popular Products.png"
          alt="products"
          width={731}
          height={488}
        />
      </div>
      <div ref={(ref) => (fadingImgRef.current[6] = ref)} className="lg:w-[354px] w-[230px] absolute top-[1570px] right-[10%] lg:right-[12%] ">
        <BlurImage
          src="/about/Heat Zone.png"
          alt="heat zone"
          width={354}
          height={636}
        />
      </div>
      <div ref={(ref) => (bookRef.current[1] = ref)} className="lg:w-[1439px] w-[789px] absolute top-[2000px] lg:top-[2106px] lg:right-[43.25%] ">
        <BlurImage
          src="/about/connectbook5 4.png"
          alt="com2"
          width={1439}
          height={689}
        />
      </div>
      <div ref={(ref) => (fadingImgRef.current[7] = ref)} className="absolute top-[1617px] left-[31.7%] z-[-1]">
        <BlurImage
          src="/about/circle.svg"
          alt="circle bg"
          width={1095}
          height={1099}
        />
      </div>
      <div ref={(ref) => (fadingImgRef.current[8] = ref)} className="absolute top-[2431px] left-[15%] lg:left-[53.5%] ">
        <BlurImage
          src="/about/Dashboard Chart Card.png"
          alt="chart card"
          width={354}
          height={560}
        />
      </div>
    </div>
  )
}

export default Shows;
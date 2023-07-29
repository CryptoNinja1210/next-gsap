import { Icon } from '@iconify/react';
import Acount from "../Growth/Account";
import { useEffect, useRef } from "react";
import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BlurImage from "../BlurImage";

const We = () => {
  const fadingImgRef = useRef([]);
  const bookRef = useRef([]);

  useEffect(() => {
    const [fadingImgTimeline0, scrollTrigger0] = fadingImg(0);
    const [fadingImgTimeline1, scrollTrigger1] = fadingImg(1);
    const [fadingImgTimeline2, scrollTrigger2] = fadingImg(2);
    const [fadingImgTimeline3, scrollTrigger3] = fadingImg(3);
    const [fadingImgTimeline4, scrollTrigger4] = fadingImg(4);
    const [fadingImgTimeline5, scrollTrigger5] = fadingImg(5);
    const [fadingImgTimeline6, scrollTrigger6] = fadingImg(6);
    const [fadingImgTimeline7, scrollTrigger7] = fadingImg(7);
    const [revealBookTimeline0, revealBookScrollTrigger0] = revealBook(0);
    const [revealBookTimeline1, revealBookScrollTrigger1] = revealBook(1);
    const [revealBookTimeline2, revealBookScrollTrigger2] = revealBook(2);
    return () =>{
      scrollTrigger0 && scrollTrigger0.kill();
      fadingImgTimeline0 && fadingImgTimeline0.progress(1);
      scrollTrigger1 && scrollTrigger1.kill();
      fadingImgTimeline1 && fadingImgTimeline1.progress(1);
      scrollTrigger2 && scrollTrigger2.kill();
      fadingImgTimeline2 && fadingImgTimeline2.progress(1);
      scrollTrigger3 && scrollTrigger3.kill();
      fadingImgTimeline3 && fadingImgTimeline3.progress(1);
      scrollTrigger4 && scrollTrigger4.kill();
      fadingImgTimeline4 && fadingImgTimeline4.progress(1);
      scrollTrigger5 && scrollTrigger5.kill();
      fadingImgTimeline5 && fadingImgTimeline5.progress(1);
      scrollTrigger6 && scrollTrigger6.kill();
      fadingImgTimeline6 && fadingImgTimeline6.progress(1);
      scrollTrigger7 && scrollTrigger7.kill();
      fadingImgTimeline7 && fadingImgTimeline7.progress(1);
      revealBookScrollTrigger0 && revealBookScrollTrigger0.kill();
      revealBookTimeline0 && revealBookTimeline0.progress(1);
      revealBookScrollTrigger1 && revealBookScrollTrigger1.kill();
      revealBookTimeline1 && revealBookTimeline1.progress(1);
      revealBookScrollTrigger2 && revealBookScrollTrigger2.kill();
      revealBookTimeline2 && revealBookTimeline2.progress(1);
    }
  },[])

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
    <div id="we" className="dark:bg-white dark:text-white relative h-[100vh] text-center font-sysui ">
      <div>
        <h1 className="lg:text-[60px] text-[40px] font-medium">
          We are
        </h1>
        <h1 className="italic lg:text-[90px] text-[40px] bg-linear bg-clip-text text-transparent">
          The Premier Online Marketplace
        </h1>
        <p className="text-[30px] font-bold mt-10">for Recreational and Medical Cannabis - Shop 1000s of local dispensaries</p>
        <div className="flex my-[270px] justify-center items-center">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-[24px] pointer-events-none">
              <Icon icon="tabler:location-filled" color="#6E2DFA" width="24" height="24" />
            </div>
            <input className="pl-[72px] pr-[240px] px-[24px] py-[28px] lg:w-[773px] w-[395px] h-8 bg-white border-none shadow-md flex rounded-l-[12px] rounded-r-[80px]
            text-[18px] text-black focus:outline-none transition-all font-sysui border-0 outline-none"
              placeholder="Enter your city or address to get started" />
            <button className="absolute inset-y-0  h-[56px] right-[0px] flex items-center px-[24px] py-[16px] transition-all
              rounded-l-[12px] rounded-r-[80px] bg-primary-purple hover:bg-primary-purple50 text-white">
              Start Shopping ➔
            </button>
          </div>
        </div>
        <div className="relative top-[-8840px]">
          <div ref={(ref) => (bookRef.current[0] = ref)} className="overflow-hidden w-[697px] lg:w-[1002px] absolute top-[8300px] left-[50px] lg:left-[50%] pointer-events-none -z-1">
            <BlurImage
              src="/about/homebook 3.png"
              alt="homebook3"
              width={1002}
              height={480}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[0] = ref)} className="absolute top-[8670px] lg:top-[8300px] left-[-33px] lg:left-[340px] pointer-events-none -z-1">
            <BlurImage
              src="/about/summary.png"
              alt="summary"
              width={343}
              height={816}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[1] = ref)}  className="w-[860px] lg:w-[1440px] absolute top-[8900px] left-[200px] lg:right-[-300px] hover:right-[-10px] transition-all duration-1000">
            <BlurImage
              src="/about/reatiler.png"
              alt="reatiler list"
              width={1440}
              height={443}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[2] = ref)} className="absolute lg:top-[8500px] top-[8600px] left-[411px] pointer-events-none z-[-2]">
            <BlurImage
              src="/about/circle.svg"
              alt="circle bg"
              width={700}
              height={700}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[3] = ref)} className="absolute lg:top-[9480px] top-[8700px] right-[560px] pointer-events-none -z-1">
            <BlurImage
              src="/about/account.png"
              alt="account"
              width={300}
              height={276}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[4] = ref)} className="absolute lg:top-[9650px] top-[8700px] right-[185px] pointer-events-none z-[-2]">
            <BlurImage
              src="/about/circle.svg"
              alt="circle bg"
              width={1050}
              height={1050}
            />
          </div>
          <div ref={(ref) => (bookRef.current[1] = ref)} className="absolute lg:top-[9600px] top-[9400px] left-[-26px] pointer-events-none -z-1">
            <BlurImage
              src="/about/retailer.png"
              alt="retailer"
              width={1156}
              height={554}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[5] = ref)} className="absolute lg:top-[9858px] top-[9700px] left-[30%] lg:right-[76px] pointer-events-none -z-1">
            <BlurImage
              src="/about/image 495.png"
              alt="image 495"
              width={870}
              height={403}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[6] = ref)} className="absolute  w-[400px] lg:w-[1200px]  lg:top-[10535px] top-[9000px] left-0 lg:left-1/2 -translate-x-1/2 -z-1">
            <BlurImage
              src="/about/checkout.gif"
              alt="checkout"
              width={1200}
              height={900}
            />
          </div>
        </div>
        <div className="lg:h-[2460px] h-[1000px] w-3/5 border-b-[1px] border-secondary-graylight mx-auto -z-1" />
      </div>
      <div className="relative mt-[220px]  text-center">
        <h2 className="lg:text-[60px] text-[40px]">
          We are
        </h2>
        <h1 className="italic lg:text-[90px] text-[35px] font-medium bg-linear bg-clip-text text-transparent mb-[50px]">
          Software-as-a-Service
        </h1>
        <div ref={(ref) => (bookRef.current[2] = ref)} className="">
          <BlurImage
            src="/about/connectbook5 2.png"
            alt="connectbook5"
            width={1040}
            height={498}
          />
        </div>
        <div className="flex justify-center mt-[100px] mb-[26px]">
          <div className="text-[25px] lg:text-[48px] w-[860px]">
            <span>Explosive potential for revenue growth</span>&nbsp;
            <span className="italic font-medium bg-linear bg-clip-text text-transparent">Saas</span>&nbsp;
            <span>through monthly recurring revenue model</span>
          </div>
        </div>
        <Acount />
      </div>
    </div>
  )
};

export default We;

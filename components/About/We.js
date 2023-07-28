import Image from "next/image";
import { Icon } from '@iconify/react';
import Acount from "../Growth/Account";
import { useEffect, useRef } from "react";
import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
      start: "top bottom",
      end: "center center",
      scrub: 0,
      animation: revealBookTimeline
    });
    return [revealBookTimeline, scrollTrigger];
  }

  return (
    <div className="relative text-center font-sysui my-[130px]">
      <div>
        <h2 className="text-[60px] leading-4">
          We are
        </h2>
        <h1 className="italic text-[90px] font-medium bg-linear bg-clip-text text-transparent">
          The Premier Online Marketplace
        </h1>
        <p className="text-[30px]">for Recreational and Medical Cannabis - Shop 1000s of local dispensaries</p>
        <div className="flex my-[270px] justify-center items-center">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-[24px] pointer-events-none">
              <Icon icon="tabler:location-filled" color="#6E2DFA" width="24" height="24" />
            </div>
            <input className="pl-[72px] pr-[240px] px-[24px] py-[28px] w-[773px] bg-white border-none shadow-md flex rounded-l-[12px] rounded-r-[80px]
            text-[18px] text-black focus:outline-none transition-all font-sysui border-0 outline-none"
              placeholder="Enter your city or address to get started" />
            <button className="absolute inset-y-[12px] right-[12px] flex items-center px-[24px] py-[16px] transition-all
              rounded-l-[12px] rounded-r-[80px] bg-primary-purple hover:bg-primary-purple50 text-white">
              Start Shopping ➔
            </button>
          </div>
        </div>
        <div className="relative top-[-8840px]">
          <div ref={(ref) => (bookRef.current[0] = ref)} className="absolute top-[8300px] right-[60px] pointer-events-none -z-1">
            <Image
              src="/about/homebook 3.png"
              alt="homebook3"
              width={1002}
              height={480}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[0] = ref)} className="absolute top-[8700px] left-[340px] pointer-events-none -z-1">
            <Image
              src="/about/summary.png"
              alt="summary"
              width={343}
              height={816}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[1] = ref)} className="absolute top-[8900px] right-[-400px] hover:right-[-10px] transition-all duration-1000">
            <Image
              src="/about/reatiler.png"
              alt="reatiler list"
              width={1440}
              height={443}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[2] = ref)} className="absolute top-[8500px] left-[411px] pointer-events-none z-[-2]">
            <Image
              src="/about/circle.svg"
              alt="circle bg"
              width={700}
              height={700}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[3] = ref)} className="absolute top-[9480px] right-[560px] pointer-events-none -z-1">
            <Image
              src="/about/account.png"
              alt="account"
              width={300}
              height={276}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[4] = ref)} className="absolute top-[9650px] right-[185px] pointer-events-none z-[-2]">
            <Image
              src="/about/circle.svg"
              alt="circle bg"
              width={1050}
              height={1050}
            />
          </div>
          <div ref={(ref) => (bookRef.current[1] = ref)} className="absolute top-[9800px] left-[-26px] pointer-events-none -z-1">
            <Image
              src="/about/retailer.png"
              alt="retailer"
              width={1156}
              height={554}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[5] = ref)} className="absolute top-[9858px] right-[76px] pointer-events-none -z-1">
            <Image
              src="/about/image 495.png"
              alt="image 495"
              width={870}
              height={403}
            />
          </div>
          <div ref={(ref) => (fadingImgRef.current[6] = ref)} className="absolute top-[10435px] left-1/2 -translate-x-1/2 -z-1">
            <Image
              src="/about/checkout.gif"
              alt="checkout"
              width={1200}
              height={900}
            />
          </div>
        </div>
        <div className="h-[2460px] w-3/5 border-b-[1px] border-secondary-graylight mx-auto -z-1" />
      </div>
      <div className="relative my-[120px]  text-center">
        <h2 className="text-[60px] leading-4">
          We are
        </h2>
        <h1 className="italic text-[90px] font-medium bg-linear bg-clip-text text-transparent mb-[120px]">
          Software-as-a-Service
        </h1>
        <div ref={(ref) => (bookRef.current[2] = ref)} className="">
          <Image
            src="/about/connectbook5 2.png"
            alt="connectbook5"
            width={1040}
            height={498}
          />
        </div>
        <div className="flex justify-center mt-[100px] mb-[26px]">
          <div className="text-[48px] w-[860px]">
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

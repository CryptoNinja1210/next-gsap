import { Linear } from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const { default: Image } = require("next/image")

const WeTop = () => {
  const wrapperRef = useRef(null);
  const spanRef = useRef(null);
  const bookRef = useRef(null);
  const leftPhone = useRef(null);
  const rightPhone = useRef(null);

  useEffect(() => {

    const [stopScreenTimeline, stopScreenTrigger] = stopScreen();
    const [revealPhoneTimeline, scrollTrigger] = revealPhone();

    return () => {
      stopScreenTrigger && stopScreenTrigger.kill();
      stopScreenTimeline && stopScreenTimeline.progress(1);
      scrollTrigger && scrollTrigger.kill();
      revealPhoneTimeline && revealPhoneTimeline.progress(1);
    }
  },[wrapperRef])

  const stopScreen = () => {
    const stopScreenTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    stopScreenTimeline
      .to( spanRef.current, { x: 0, } );
    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "200%",
      scrub: 0,
      pin: true,
      animation: stopScreenTimeline,
    })
    return [stopScreenTimeline, scrollTrigger];
  }

  const revealPhone = () => {
    const revealPhoneTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const halfBookWidth = bookRef.current.clientWidth / 2;
    const leftPhoneInitialWidth = leftPhone.current.clientWidth / 2;
    const rightPhoneInitialWidth = rightPhone.current.clientWidth / 2;
    revealPhoneTimeline
      .from(
        bookRef.current,
        {
          width: halfBookWidth,
          duration: 0.5,
        }
      )
      .from(
        leftPhone.current,
        {
          width: leftPhoneInitialWidth,
          translateX: 300,
          translateY: -60,
          opacity: 0.7,
          duration: 1,
        }
      )
      .from(
        rightPhone.current,
        {
          width: rightPhoneInitialWidth,
          translateX: -300,
          translateY: -60,
          opacity: 0.7,
          duration: 1,
        },
        "<"
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "150%",
      scrub: 0,
      animation: revealPhoneTimeline,
    });
    return [revealPhoneTimeline, scrollTrigger];
  }
  return (
		<div ref={wrapperRef} className="w-full h-[100vh] text-center font-sysui pt-[130px] flex flex-col justify-center">
      <div ref={spanRef} className="w-[100vw] flex flex-col justify-center items-center">
        <h2 className="text-[35px] md:text-[45px] lg:text-[68px]">
          We are
        </h2>
        <h1 className="italic text-[35px] md:text-[45px] lg:text-[68px] font-medium bg-linear bg-clip-text text-transparent">
          Web3
        </h1>
        <p className="text-[25px] md:text-[30px] lg:text-[40px]">Rewards ecosystem to give back and incentivize our users</p>
      </div>
      <div className="w-full flex my-auto justify-center items-baseline">
        <div ref={leftPhone} className="z-40 w-[80px] md:w-[110px] lg:w-[158px] h-[358px]">
          <Image
            src="/about/leaderboard 2.png"
            alt="left phone - leaderboard"
            width={158}
            height={358}
          />
        </div>
        <div ref={bookRef} className="z-50 w-[500px] md:w-[750px] lg:w-[1017px] h-[487px]">
          <Image
            src="/about/userbook.png"
            alt="center notebook - userbook"
            width={1017}
            height={487}
          />
        </div>
        <div ref={rightPhone} className="z-40  w-[80px] md:w-[110px] lg:w-[158px] h-[358px]">
          <Image
            src="/about/driver2 2.png"
            alt="right phone - driver2"
            width={158}
            height={358}
          />
        </div>
      </div>
    </div>
  )
}

export default WeTop;

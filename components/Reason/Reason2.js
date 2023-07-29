import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import BlurImage from "../BlurImage";

const Reason2 = () => {

  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const [revealImgTimeline, revealImgScrollTrigger] = revealImg();
    return () => {
      revealImgScrollTrigger && revealImgScrollTrigger.kill();
      revealImgTimeline && revealImgTimeline.progress(1);
    }
  })

  const revealImg = () => {
    const revealImgTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const halfWidth = imgRef.current.clientWidth / 2;
    revealImgTimeline
      .from(
        imgRef.current,
        {
          opacity: 0,
          width: halfWidth,
          duration: 1
        }
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top bottom",
      end: "center bottom",
      scrub: 0,
      animation: revealImgTimeline
    });
    return [revealImgTimeline, scrollTrigger];
  }

  return (
    <div ref={wrapperRef} className="w-full flex flex-col items-center text-center gap-5 px-5">
      <h2 ref={textRef} className="text-[32px] w-full font-semibold leading-none">
        Reason #2 – Budbo is the first holistic ecosystem that touches every stakeholder of the cannabis industry.
      </h2>
      <div ref={imgRef} className="flex justify-center items-stretch w-full my-auto">
        <BlurImage
          src="/reason/Table.png"
          alt="traxchain"
          width={1120}
          height={638}
        />
      </div>
    </div>
  )
}

export default Reason2;

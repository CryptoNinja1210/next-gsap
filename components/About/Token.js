import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import BlurImage from "../BlurImage";

const Token = () => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const [tokenTimeline, tokenScrollTrigger] = magnifierTokenImg();

    return () => {
      tokenScrollTrigger && tokenScrollTrigger.kill();
      tokenTimeline && tokenTimeline.progress(1);
    }
  })

  const magnifierTokenImg = () => {
    const tokenTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const tokenY = (window.innerHeight - imgRef.current.clientHeight) / 2;
    tokenTimeline
      .from(
        imgRef.current,
        {
          width: 0,
          height: 0,
          opacity: 0,
          rotateZ: 360,
          duration: 1
        }
      );
    //   .to(
    //     imgRef.current,
    //     {
    //       opacity: 0,
    //       duration: 0.5
    //     }
    //   );
    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "center center",
      end: "150%",
      scrub: 0,
      pin: true,
      animation: tokenTimeline,
    })
    return [tokenTimeline, scrollTrigger];
  }
  return (
    <div ref={wrapperRef} className="h-[50vh] w-[100vw] flex justify-center items-center">
      <div ref={imgRef} className="pointer-events-none lg:w-[404px] lg:h-[404px] w-[204px] h-[204px]">
        <BlurImage
          src="/about/token.png"
          alt="budbo token"
          width={404}
          height={404}
          key={'token'}
        />
      </div>
    </div>
  );
};

export default Token;

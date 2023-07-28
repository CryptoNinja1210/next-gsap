import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Title = ({ clientHeight }) => {
  const targetSection = useRef(null);
  const quoteRef = useRef(null);
  const ownerClient = useRef(null);

  useEffect(() => {
    const [stopTimeline, scrollTrigger] = stopTitle();

    return () => {
      scrollTrigger && scrollTrigger.kill();
      stopTimeline && stopTimeline.progress(1);
    }
  }, [quoteRef, targetSection]);

  const stopTitle = () => {
    const stopTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    stopTimeline
      .to(
        ownerClient.current,
        {
          translateY: '-50%',
          duration: 1
        }
      )
      .to(
        ownerClient.current.querySelector('#owner-the'),
        {
          opacity: 0,
          duration: 0.5
        },
        "<"
      )
      .fromTo(
        ownerClient.current.querySelector('#owner-your'),
        {
          opacity: 0,
          duration: 1
        },
        {
          opacity: 1,
          duration: 1
        },
        "<"
      )
      .to(
        quoteRef.current,
        {
          x: 0,
          duration: 1
        }
      )
      ;
    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top top",
      end: "150%",
      scrub: 0,
      pin: true,
      animation: stopTimeline,
    });
    return [stopTimeline, scrollTrigger];
  }

  return (
    <section className="text-center text-[50px] md:text-[100px] lg:text-[140px] w-full h-[100vh] relative select-none flex flex-col items-center justify-center font-medium" ref={targetSection}>
      <div
        ref={quoteRef}
        className="w-full"
      >
        <div className="">
          <span className="italic">Together</span>
          <span>, we</span>
        </div>
        <div className="flex justify-center italic">
          <span>pioneer</span>&nbsp;
          <span id="owner" className="relative h-[140px] text-purple">
            <div ref={ownerClient} className="flex flex-col">
              <span id="owner-the" className="">the</span>
              <span id="owner-your" className="">your</span>
            </div>
          </span>
          &nbsp;<span>future</span>
        </div>
      </div>
    </section>
  );
};

export default Title;

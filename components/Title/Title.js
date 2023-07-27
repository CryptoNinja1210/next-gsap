import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Title = ({ clientHeight }) => {
  const targetSection = useRef(null);
  const quoteRef = useRef(null);
  const ownerThe = useRef(null);
  const ownerYour = useRef(null);

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
      .from(
        targetSection.current,
        { opacity: 0, duration: 0.5, stagger: 0.5 }
      )
      .from(
        quoteRef.current.querySelector("#owner-your"),
        {
          height: 0,
          fontSize: 0,
          opacity: 0,
          duration: 1,
        },
        1
      )
      .to(
        quoteRef.current.querySelector("#owner-the"),
        {
          height: 0,
          fontSize: 0,
          opacity: 0,
          duration: 1,
        }
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "bottom bottom",
      end: "100%",
      scrub: 0,
      pin: true,
      animation: stopTimeline,
    });
    return [stopTimeline, scrollTrigger];
  }

  return (
    <section className="w-full h-[100vh] relative select-none" ref={targetSection}>
      <div
        className="py-80 section-container"
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
        >
          <p className="text-[120px]">
            <span className="italic">Together</span>
            <span>, we</span>
          </p>
          <p className="text-[140px] flex justify-center italic">
            <span>pioneer</span>&nbsp;
            <span id="owner" className="relative bg-linear bg-clip-text text-transparent grid">
              <span ref={ownerThe} id="owner-the" className="">the</span>
              <span ref={ownerYour} id="owner-your" className="">your</span>
            </span>
            &nbsp;<span>future</span>
          </p>
        </h1>
      </div>
    </section>
  );
};

export default Title;

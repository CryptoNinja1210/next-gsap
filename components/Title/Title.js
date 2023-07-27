import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Title = ({ clientHeight }) => {
  const targetSection = useRef(null);
  const quoteRef = useRef(null);
  const ownerClient = useRef(null);

  useEffect(() => {
    const [stopTimeline, scrollTrigger] = stopTitle();
    // const [textCarouselTimeline, textCarouselScrollTrigger] = textCarousel();

    return () => {
      scrollTrigger && scrollTrigger.kill();
      stopTimeline && stopTimeline.progress(1);
      // textCarouselScrollTrigger && textCarouselScrollTrigger.kill();
      // textCarouselTimeline && textCarouselTimeline.progress(1);
    }
  }, [quoteRef, targetSection]);

  const stopTitle = () => {
    const stopTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    stopTimeline
      .from(
        targetSection.current,
        { opacity: 0, duration: 1, stagger: 0.5 }
      )
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
      start: "bottom bottom",
      end: "150%",
      scrub: 0,
      pin: true,
      animation: stopTimeline,
    });
    return [stopTimeline, scrollTrigger];
  }

  // const textCarousel = () => {
  //   const carouselTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
  //   carouselTimeline
  //     .fromTo(
  //       ownerClient.current,
  //       {
  //         translateY: 0,
  //         duration: 1,
  //       },
  //       {
  //         translateY: -20,
  //         duration: 1,
  //       },
  //       1
  //     );
  //   const scrollTrigger = ScrollTrigger.create({
  //     trigger: targetSection.current,
  //     start: "bottom bottom",
  //     end: "100%",
  //     scrub: 0,
  //     animation: carouselTimeline,
  //   });
  //   return [carouselTimeline, scrollTrigger];
  // }

  return (
    <section className="w-full h-[100vh] relative select-none flex flex-col items-center justify-center" ref={targetSection}>
      <h1
        ref={quoteRef}
        className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center w-full"
      >
        <p className="text-[120px]">
          <span className="italic">Together</span>
          <span>, we</span>
        </p>
        <p className="text-[140px] flex justify-center italic">
          <span>pioneer</span>&nbsp;
          <span id="owner" className="relative h-[140px] text-purple">
            <div ref={ownerClient} className="flex flex-col">
              <span id="owner-the" className="">the</span>
              <span id="owner-your" className="">your</span>
            </div>
          </span>
          &nbsp;<span>future</span>
        </p>
      </h1>
    </section>
  );
};

export default Title;

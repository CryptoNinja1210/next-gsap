import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import BlurImage from "../BlurImage";

const Logo = () => {
  const wrapperRef = useRef(null);
  const logoRef = useRef(null);
  const phone_1 = useRef([]);
  const logoTextRef = useRef(null);

  useEffect(() => {
    const [stopScreenTimeline, stopScreenScrollTrigger] = stopScreen();
    const [revealLogoTimeline, revealLogoScrollTrigger] = revealLogo();
    const [revealPhoneTimeline1, revealPhoneScrollTrigger1] = revealPhone(0);
    const [revealPhoneTimeline2, revealPhoneScrollTrigger2] = revealPhone(1);
    const [revealPhoneTimeline3, revealPhoneScrollTrigger3] = revealPhone(2);
    const [revealPhoneTimeline4, revealPhoneScrollTrigger4] = revealPhone(3);
    const [revealPhoneTimeline5, revealPhoneScrollTrigger5] = revealPhone(4);
    const [revealPhoneTimeline6, revealPhoneScrollTrigger6] = revealPhone(5);
    const [revealPhoneTimeline7, revealPhoneScrollTrigger7] = revealPhone(6);
    const [revealPhoneTimeline8, revealPhoneScrollTrigger8] = revealPhone(7);

    return () => {
      stopScreenScrollTrigger && stopScreenScrollTrigger.kill();
      stopScreenTimeline && stopScreenTimeline.progress(1);
      revealLogoScrollTrigger && revealLogoScrollTrigger.kill();
      revealLogoTimeline && revealLogoTimeline.progress(1);
      revealPhoneScrollTrigger1 && revealPhoneScrollTrigger1.kill();
      revealPhoneTimeline1 && revealPhoneTimeline1.progress(1);
      revealPhoneScrollTrigger2 && revealPhoneScrollTrigger2.kill();
      revealPhoneTimeline2 && revealPhoneTimeline2.progress(1);
      revealPhoneScrollTrigger3 && revealPhoneScrollTrigger3.kill();
      revealPhoneTimeline3 && revealPhoneTimeline3.progress(1);
      revealPhoneScrollTrigger4 && revealPhoneScrollTrigger4.kill();
      revealPhoneTimeline4 && revealPhoneTimeline4.progress(1);
      revealPhoneScrollTrigger5 && revealPhoneScrollTrigger5.kill();
      revealPhoneTimeline5 && revealPhoneTimeline5.progress(1);
      revealPhoneScrollTrigger6 && revealPhoneScrollTrigger6.kill();
      revealPhoneTimeline6 && revealPhoneTimeline6.progress(1);
      revealPhoneScrollTrigger7 && revealPhoneScrollTrigger7.kill();
      revealPhoneTimeline7 && revealPhoneTimeline7.progress(1);
      revealPhoneScrollTrigger8 && revealPhoneScrollTrigger8.kill();
      revealPhoneTimeline8 && revealPhoneTimeline8.progress(1);
    }

  }, [wrapperRef])

  const stopScreen = () => {
    const stopScreenTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    stopScreenTimeline
      .to(wrapperRef.current, { x: 0 });
    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "bottom bottom",
      end: "250%",
      scrub: 0,
      pin: true,
      animation: stopScreenTimeline,
    })
    return [stopScreenTimeline, scrollTrigger];
  }

  const revealLogo = () => {
    const logoX = (window.innerHeight - logoRef.current.clientHeight) / 2;
    const revealLogoTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealLogoTimeline
      .from(
        logoRef.current,
        {
          opacity: 0,
          width: 0,
          height: 0,
          duration: 5,
        }
      )
      .fromTo(
        logoTextRef.current,
        {
          opacity: 0,
          translateY: 250,
        },
        {
          opacity: 1,
          translateY: 300,
          duration: 3,
        },
        11
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "bottom bottom",
      end: "240%",
      scrub: 0,
      animation: revealLogoTimeline,
    })
    return [revealLogoTimeline, scrollTrigger];
  }

  const rotateViewportX = window.innerWidth > window.innerHeight ? (window.innerWidth - window.innerHeight)/2 : 0;
  const revealPhone = (e) => {
    const revealPhoneTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealPhoneTimeline
      .from(
        phone_1.current[e],
        {
          translateX: window.innerWidth * 0.6,
          translateY: 400,
          scale: 0.02,
          // x: window.innerWidth,
          // y: window.innerHeight,
          opacity: 1,
          transformOrigin: "100% 100%",
          duration: 2,
          rotateZ: 90,
          // translateX: rotateViewportX,
        },
        e * 4.3
      )
      .fromTo(
        phone_1.current[e],
        {
          transformOrigin: "100% 100%",
          rotationZ: 0,
          // translateX: rotateViewportX,
        },
        {
          transformOrigin: "50% 50%",
          rotationZ: -45,
          duration: 1,
          // translateX: rotateViewportX,
        }
      )
      .to(
        phone_1.current[e],
        {
          transformOrigin: "50% 50%",
          rotationZ: -90,
          duration: 1,
        }
      )
      .to(
        phone_1.current[e],
        {
          transformOrigin: "50% 50%",
          rotationZ: -135,
          duration: 1,
        }
      )
      .to(
        phone_1.current[e],
        {
          transformOrigin: "50% 50%",
          rotationZ: -180,
          duration: 1,
        }
      )
      .to(
        phone_1.current[e],
        {
          transformOrigin: "50% 50%",
          rotationZ: -380,
          duration: 5,
        }
      )
      .to(
        phone_1.current[e],
        {
          translateX: -window.innerWidth * 0.75,
          translateY: 400,
          scale: 0.02,
          opacity: 1,
          duration: 2,
          rotateZ: -405,
        }
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "bottom bottom",
      end: "220%",
      scrub: 0,
      animation: revealPhoneTimeline,
    })
    return [revealPhoneTimeline, scrollTrigger];
  }

  // console.log("rotateViewportX",window.innerWidth > window.innerHeight ? (window.innerWidth - window.innerHeight)/2 : 0, "rotateViewportY", window.innerWidth < window.innerHeight ? (window.innerHeight - window.innerWidth)/2 : 0)

  return (
    <div ref={wrapperRef} className="text-center relative h-[100vh] w-[100vw] flex flex-col justify-center items-center">
      <div className={`relative ${window.innerWidth > window.innerHeight ? ` h-[100vh] w-[100vh] ` : ` h-[100vw] w-[100vw] `} flex flex-col justify-center items-center`}>
        <div ref={logoRef} id="rotatingCenter_owl" className="z-50 object-cover w-[150px] md:w-[200px] h-[157px] md:h-[209px]">
          <BlurImage
            src="/logo.svg"
            alt="Logo"
            width={560}
            height={585}
            className="m-auto"
          />
        </div>
        <div ref={logoTextRef} id="logo-text" className="absolute mx-auto mb-[120px] w-[200px] md:w-[400px] ">
          <BlurImage
            src="/logo_txt_only.svg"
            alt="Purple "
            width={476}
            height={200}
            className="m-auto"
          />
        </div>
        {[...Array(8)].map((_, index) => (
          <div key={index} ref={(ref) => (phone_1.current[index] = ref)} className={`z-40 absolute inset-y-0 inset-x-[${Math.max(0, Math.abs(window.innerWidth - window.innerHeight) / 2)}px] w-[60px] md:w-[120px] lg:w-[180px]`}>
          
            <BlurImage
              src="/screenshot/map 3.png"
              alt="Logo Phone"
              width={201}
              height={405}
            />
          </div>
        ))}
      </div>
    </div>
  )
};

export default Logo;

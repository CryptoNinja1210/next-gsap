import { Linear } from "gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import BlurImage from "../BlurImage";

const  	We1 = () => {

  const wrapperRef = useRef(null);
	const fadingImgRef = useRef([]);

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
    const [fadingImgTimeline9, fadingImgScrollTrigger9] = fadingImg(9);
    const [fadingImgTimeline10, fadingImgScrollTrigger10] = fadingImg(10);
    const [fadingImgTimeline11, fadingImgScrollTrigger11] = fadingImg(11);
    const [fadingImgTimeline12, fadingImgScrollTrigger12] = fadingImg(12);
    const [fadingImgTimeline13, fadingImgScrollTrigger13] = fadingImg(13);
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
      fadingImgScrollTrigger9 && fadingImgScrollTrigger9.kill();
      fadingImgTimeline9 && fadingImgTimeline9.progress(1);
      fadingImgScrollTrigger10 && fadingImgScrollTrigger10.kill();
      fadingImgTimeline10 && fadingImgTimeline10.progress(1);
      fadingImgScrollTrigger11 && fadingImgScrollTrigger11.kill();
      fadingImgTimeline11 && fadingImgTimeline11.progress(1);
      fadingImgScrollTrigger12 && fadingImgScrollTrigger12.kill();
      fadingImgTimeline12 && fadingImgTimeline12.progress(1);
      fadingImgScrollTrigger13 && fadingImgScrollTrigger13.kill();
      fadingImgTimeline13 && fadingImgTimeline13.progress(1);

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

	return (
		<div className="w-full text-center font-sysui">
			<div className="relative h-[1700px] top-[-300px] lg:top-0">
				<div ref={(ref) => (fadingImgRef.current[0] = ref)} className="absolute lg:top-[60px] top-1 left-[16%] pointer-events-none">
					<BlurImage
						src="/about/coins/bitcoin.png"
						alt="bitcoin"
						width={190}
						height={190}
						className="w-[120px] lg:w-[190px] h-[120px] lg:h-[190px]"
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[1] = ref)} className="absolute top-[1390px] lg:top-[240px] left-[22%] pointer-events-none">
					<BlurImage
						src="/about/Current APR.png"
						alt="bitcoin"
						width={336}
						height={460}
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[2] = ref)} className="absolute top-[190px] lg:top-[120px] right-[21%] pointer-events-none">
					<BlurImage
						src="/about/Your Crypto Wallet.png"
						alt="bitcoin"
						width={732}
						height={384}
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[3] = ref)} className="absolute top-[190px] lg:top-[210px] left-[22%] pointer-events-none z-[-1]">
					<BlurImage
						src="/about/circle.svg"
						alt="bitcoin"
						width={724}
						height={724}
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[4] = ref)} className="absolute top-[130px] lg:top-[455px] right-[19%] z-[-1] pointer-events-none">
					<BlurImage
						src="/about/coins/tether-coin.png"
						alt="bitcoin"
						width={102}
						height={102}
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[5] = ref)} className="absolute top-[1750px] lg:top-[700px] left-[34%] pointer-events-none">
					<BlurImage
						src="/about/coins/budbo-coin.png"
						alt="bitcoin"
						width={152}
						height={152}
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[6] = ref)} className="absolute top-[1850px] lg:top-[620px] left-[8%] lg:left-[42%] pointer-events-none flex flex-col gap-[25px]">
					<BlurImage
						src="/about/owl5-1 1.gif"
						alt="bitcoin"
						width={342}
						height={235}
					/>
					<BlurImage
						src="/about/Exchange-rate.png"
						alt="bitcoin"
						width={342}
						height={48}
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[7] = ref)} className="absolute top-[560px] right-[18%] pointer-events-none">
					<BlurImage
						src="/about/dropdown.png"
						alt="bitcoin"
						width={343}
						height={832}
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[8] = ref)} className="absolute top-[330px] lg:top-[1000px] right-[14%] pointer-events-none -z-1">
					<BlurImage
						src="/about/coins/sol.png"
						alt="bitcoin"
						width={160}
						height={160}
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[9] = ref)} className="absolute top-[530px] lg:top-[970px] left-[17%] pointer-events-none">
					<BlurImage
						src="/about/Your Referal Link & Code.png"
						alt="bitcoin"
						width={732}
						height={384}
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[10] = ref)} className="absolute top-[430px] lg:top-[440px] left-[19%] pointer-events-none">
					<BlurImage
						src="/about/Exchange-rate.png"
						alt="bitcoin"
						width={332}
						height={70}
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[11] = ref)} className="absolute top-[1130px] right-[10px] lg:top-[1420px] lg:left-[38%] pointer-events-none">
					<BlurImage
						src="/about/coins/binance.png"
						alt="bitcoin"
						width={160}
						height={160}
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[12] = ref)} className="absolute top-[430px] lg:top-[1310px] left-[23%] pointer-events-none -z-1">
					<BlurImage
						src="/about/coins/eth-coin.png"
						alt="bitcoin"
						width={152}
						height={152}
					/>
				</div>
				<div ref={(ref) => (fadingImgRef.current[13] = ref)} className="absolute top-[430px] lg:top-[1520px] right-[770px] pointer-events-none -z-1">
					<BlurImage
						src="/about/budbo 1.gif"
						alt="bitcoin"
						width={160}
						height={118}
					/>
				</div>
			</div>
		</div>
	)
};

export default We1;

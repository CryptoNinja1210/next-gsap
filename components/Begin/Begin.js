import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import BlurImage from "../BlurImage";

const Begin = ({  }) => {

	const wrapperRef = useRef(null);
	const leftPhone = useRef(null);
	const rightPhone = useRef(null);
	const topleftText = useRef(null);
	const toprightText = useRef(null);
	const leftsideText = useRef(null);
	const rightsideText = useRef(null);
	const middlesideText = useRef(null);
	const middleExitText = useRef(null);

	useEffect(() => {
		
	const stopPhone = () => {
		const scrollTrigger = ScrollTrigger.create({
			trigger: wrapperRef.current,
			start: "bottom bottom",
			end: `350%`,
			scrub: 0,
			pin: true,
		});
		return scrollTrigger;
	}

		const [revealPhoneTimeline, revealScrollTrigger] = getRevealSt();
		const [topTextTimeline, topTextScrollTrigger] = getTopText();
		const stopPhoneScrollTrigger = stopPhone();
		const [hidingTopTextTimeline, hidingTopTextScrollTrigger] = hidingTop();
		const [revealsideTextTimeline, revealsideTextScrollTrigger] = revealsideText();

		return () => {
			revealScrollTrigger && revealScrollTrigger.kill();
			revealPhoneTimeline && revealPhoneTimeline.progress(1);
			topTextScrollTrigger && topTextScrollTrigger.kill();
			topTextTimeline && topTextTimeline.progress(1);
			stopPhoneScrollTrigger && stopPhoneScrollTrigger.kill();
			hidingTopTextScrollTrigger && hidingTopTextScrollTrigger.kill();
			hidingTopTextTimeline && hidingTopTextTimeline.progress(1);
			revealsideTextScrollTrigger && revealsideTextScrollTrigger.kill();
			revealsideTextTimeline && revealsideTextTimeline.progress(1);
		}
	});

	const fontSize_big = `${1.5*window.innerWidth/1508 + 1644/1508}rem`

	const getRevealSt = () => {
		const revealPhoneTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
		revealPhoneTimeline
			.from(
				leftPhone.current,
				{
					y: window.innerHeight,
					opacity: 0,
					duration: 1,
				},
			)
			.from(
				rightPhone.current,
				{
					y: window.innerHeight,
					opacity :0,
					duration: 1,
				},
				"<"
			)
		const scrollTrigger = ScrollTrigger.create({
			trigger: wrapperRef.current,
			start: "top bottom",
			end: "top top",
			scrub: 0,
			animation: revealPhoneTimeline,
		});
		return [revealPhoneTimeline, scrollTrigger];
	}

	const getTopText = () => {
		const topTextTimeline = gsap.timeline({
			defaults: { ease: Linear.easeNone },
		});
		topTextTimeline
			.fromTo(
				topleftText.current,
				{ fontSize: 0, },
				{ fontSize: fontSize_big, duration: 1, },
			)
			.fromTo(
				toprightText.current,
				{ fontSize: 0, },
				{ fontSize: fontSize_big, duration: 1, },
				"<"
			);
		const scrollTrigger = ScrollTrigger.create({
			trigger: wrapperRef.current,
			start: "center bottom",
			end: "bottom bottom",
			scrub: 0,
			animation: topTextTimeline,
		});
		return [topTextTimeline, scrollTrigger];
	}


	const hidingTop = () => {
		const hidingTopText = gsap.timeline({ defaults: { ease: Linear.easeNone } });
		hidingTopText
			.fromTo(
				topleftText.current,
				{ fontSize: fontSize_big, translateY: 0, duration: 1, },
				{ fontSize: 0, opacity: 0, translateY: leftPhone.current.clientHeight/2, duration: 1, },
				1
			)
			.fromTo(
				toprightText.current,
				{ fontSize: fontSize_big, translateY: 0, duration: 1, },
				{ fontSize: 0, opacity: 0, translateY: leftPhone.current.clientHeight/2, duration: 1, },
				"<"
			);
		const scrollTrigger = ScrollTrigger.create({
			trigger: wrapperRef.current,
			start: "bottom bottom",
			end: "35%",
			scrub: 0,
			animation: hidingTopText,
		});
		return [hidingTopText, scrollTrigger];
	}

	const revealLeftsideTextTranslate = window.innerWidth > 1200 ? {
		translateX: -350, //leftPhone && leftPhone.current && leftPhone.current.clientWidth/2,
		translateY: 0,
	} : {
		translateX: 0,
		translateY: -200,
	}

	const revealRightsideTextTranslate = window.innerWidth > 1200 ? {
		translateX: 300, //rightPhone && rightPhone.current && rightPhone.current.clientWidth/2,
		translateY: 0,
	} : {
		translateX: -50,
		translateY: -200,
	}

	const leftAndRightHidingText = window.innerWidth > 1200 ? {
		translateX: 0, //rightPhone && rightPhone.current && rightPhone.current.clientWidth/2,
		translateY: 0,
	} : {
		translateX: 0, //rightPhone && rightPhone.current && rightPhone.current.clientWidth/2,
		translateY: 100,
	}

	const revealsideText = () => {
		const revealsideText = gsap.timeline({ defaults: { ease: Linear.easeNone } });
		revealsideText
			.fromTo(
				leftsideText.current,
				{ fontSize: 0, opacity: 0, duration: 1, translateX: 0, translateY: 0 },
				{ fontSize: fontSize_big, opacity: 1, duration: 0.5, ...revealLeftsideTextTranslate },
				0.5
			)
			.fromTo(
				rightsideText.current,
				{ fontSize: 0, opacity: 0, duration: 1, translateX: 0, translateY: 0 },
				{ fontSize: fontSize_big, opacity: 1, duration: 0.5, ...revealRightsideTextTranslate },
				"<"
			)
			.to(
				leftsideText.current,
				{ fontSize: 0, opacity: 0, ...leftAndRightHidingText, duration: 1, },
				2
			)
			.to(
				rightsideText.current,
				{ fontSize: 0, opacity: 0, ...leftAndRightHidingText, duration: 1, },
				"<"
			)
			.fromTo(
				middlesideText.current,
				{ fontSize: fontSize_big / 2, opacity: 0, },
				{ fontSize: fontSize_big, opacity: 1, duration: 0.5, },
				"<+=0.5"
			)
			.fromTo(
				middlesideText.current,
				{ fontSize: fontSize_big, },
				{ fontSize: fontSize_big / 2, opacity: 0, duration: 1.5, },
				"<+=1"
			)
			.to(
				leftPhone.current,
				{
					x: - window.innerWidth,
					duration: 1,
				},
				"<+=1.5"
			)
			.to(
				rightPhone.current,
				{
					x: window.innerWidth,
					duration: 2,
				},
				"<"
			)
			.fromTo(
				middleExitText.current,
				{ fontSize: 24, opacity: 0, skewY: 0, rotateY: 0, },
				{ fontSize: window.innerWidth >1200 ? 120 : 50, opacity: 1, skewY: -40, rotateY: -60, duration: 0.5, },
				"<"
			)
			.to(
				middleExitText.current,
				{ translateY: -window.innerHeight, duration: 1, skewY: 40, rotateY: 0, },
				"<+=0.3"
			)
			;
		const scrollTrigger = ScrollTrigger.create({
			trigger: wrapperRef.current,
			start: "bottom bottom",
			end: "350%",
			scrub: 0,
			animation: revealsideText,
		});
		return [revealsideText, scrollTrigger];
	}

	return (
		<div ref={wrapperRef} className={`text-[${1.5*window.innerWidth/1508 + 1644/1508}rem] bg-transparent relative w-[100vw] h-[100vh] font-normal leading-normal flex flex-row justify-between items-end gap-[50px] overflow-hidden`}>
			<div ref={leftPhone} id="left-phone" className="relative left-[-55%] lg:left-0 lg:bottom-0 bottom-[30%] flex flex-col text-right gap-5 scale-125 translate-x-20 translate-y-10">
				<span ref={topleftText} className="text-3xl lg:text-5xl translate-x-10 md:translate-x-0 pr-5 whitespace-nowrap">
					Recession-proof
				</span>
				<div className="lg:w-full lg:h-full  w-[300px] h-[250px]">
					<BlurImage
						// src="/begin/cart_5.png"
						src="/begin/left_1.png"
						alt="Left_phone"
						className="object-contain z-40"
						// width={512}
						// height={687}
						width={768}
						height={636}
					/>
				</div>
				<span ref={leftsideText} className="z-30 absolute lg:right-9 right-[10%] top-[210px] lg:top-[138px] whitespace-nowrap text-4xl lg:text-5xl">
					Let&apos;s begin
				</span>
			</div>
			<div ref={middlesideText} className="absolute bottom-[60%] lg:bottom-[20%] right-[30%] lg:right-[40%]">
				<span className="text-5xl">together</span>
			</div>
			<p ref={middleExitText} className="absolute translate-y-[80px] w-full h-full z-50 pt-[20%] flex justify-center items-center whitespace-nowrap text-4xl lg:text-5xl">
				Public exit experience
			</p>
			<div ref={rightPhone} id="right-phone" className="relative lg:right-0 right-[37%] bottom-[30%] lg:bottom-[40%] flex flex-col text-left gap-5" style={{ transform: "translateY(35%)" }}>
				<span ref={toprightText} className="pl-5 whitespace-nowrap text-4xl lg:text-5xl">
					your portfolio
				</span>
				<div className="lg:w-full lg:-full w-[380px] h-[400px]">
					<BlurImage
						// src="/begin/puff_6.png"
						src="/begin/right_1.png"
						alt="Right_phone"
						className="object-contain z-40"
						// width={380}
						// height={510}
						width={792}
						height={844}
					/>
				</div>
				<span ref={rightsideText} className=" text-5xl z-30 absolute lg:left-9 left-[20%] top-[210px] lg:top-[138px] whitespace-nowrap">
					your adventure
				</span>
			</div>
		</div>
	);
};

export default Begin;

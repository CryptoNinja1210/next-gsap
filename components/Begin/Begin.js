import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Begin = ({ isDesktop, clientHeight }) => {

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
		const [revealTimeline, revealScrollTrigger] = getRevealSt();
		const [topTextTimeline, topTextScrollTrigger] = getTopText();
		const [stopPhoneTimeline, stopPhoneScrollTrigger] = stopPhone();
		const [hidingTopTextTimeline, hidingTopTextScrollTrigger] = hidingTop();
		const [revealsideTextTimeline, revealsideTextScrollTrigger] = revealsideText();

		return () => {
			revealScrollTrigger && revealScrollTrigger.kill();
			revealTimeline && revealTimeline.progress(1);
			topTextScrollTrigger && topTextScrollTrigger.kill();
			topTextTimeline && topTextTimeline.progress(1);
			stopPhoneScrollTrigger && stopPhoneScrollTrigger.kill();
			stopPhoneTimeline && stopPhoneTimeline.progress(1);
			hidingTopTextScrollTrigger && hidingTopTextScrollTrigger.kill();
			hidingTopTextTimeline && hidingTopTextTimeline.progress(1);
			revealsideTextScrollTrigger && revealsideTextScrollTrigger.kill();
			revealsideTextTimeline && revealsideTextTimeline.progress(1);
		}
	}, [wrapperRef]);

	const fontSize_big = window.innerWidth > 1200 ? 48 : 24;

	const getRevealSt = () => {
		const revealPhone = gsap.timeline({ defaults: { ease: Linear.easeNone } });
		revealPhone
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
			end: "bottom bottom",
			scrub: 0,
			animation: revealPhone,
		});
		return [revealPhone, scrollTrigger];
	}

	const getTopText = () => {
		const topText = gsap.timeline({
			defaults: { ease: Linear.easeNone },
		});
		topText
			.from(
				topleftText.current,
				{ fontSize: 0, height: 0, marginRight: 120, duration: 1, }
			)
			.from(
				toprightText.current,
				{ fontSize: 0, height: 0, marginLeft: 50, duration: 1, },
				"<"
			);
		const scrollTrigger = ScrollTrigger.create({
			trigger: wrapperRef.current,
			start: "center bottom",
			end: "bottom bottom",
			scrub: 0,
			animation: topText,
		});
		return [topText, scrollTrigger];
	}

	const stopPhone = () => {
		const stopPhone = gsap.timeline({
			defaults: { ease: Linear.easeNone },
		});
		const leftPhoneY = window.innerHeight - leftPhone.current.clientHeight;
		const rightPhoneY = window.innerHeight - rightPhone.current.clientHeight;
		stopPhone
			.to(
				leftPhone.current.querySelector("Image"),
				{
					y: leftPhoneY
				}
			)
			.to(
				rightPhone.current.querySelector("Image"),
				{
					y: rightPhoneY
				},
				"<"
			);
		const scrollTrigger = ScrollTrigger.create({
			trigger: wrapperRef.current,
			start: "bottom bottom",
			end: `350%`,
			scrub: 0,
			pin: true,
			animation: stopPhone,
		});
		return [stopPhone, scrollTrigger];
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
				{ fontSize: 20, opacity: 0, width: 0, },
				{ fontSize: fontSize_big, opacity: 1, width: 300, duration: 0.5, },
				"<+=0.5"
			)
			.fromTo(
				middlesideText.current,
				{ fontSize: fontSize_big, },
				{ fontSize: 20, opacity: 0, width: 0, y: 0, duration: 1.5, },
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
		<div ref={wrapperRef} className="text-2xl md:text-3xl lg:text-5xl bg-transparent relative w-[100vw] h-[100vh] font-normal leading-normal flex flex-row justify-center items-end gap-[50px] p-auto overflow-hidden">
			<div ref={leftPhone} id="left-phone" className=" flex flex-col text-right gap-5">
				<span ref={topleftText} className=" pr-5 whitespace-nowrap">
					Recession-proof
				</span>
				<Image
					src="/begin/cart_5.png"
					alt="Left_phone"
					className="object-contain z-40"
					width={512}
					height={687}
				/>
				<span ref={leftsideText} className="z-30 absolute right-9 top-[138px] whitespace-nowrap">
					Let&apos;s begin
				</span>
			</div>
			<div ref={middlesideText} className="z-50 flex justify-center items-center align-middle mb-[150px] p-0 left-[-50px] whitespace-nowrap">
				<span>together</span>
			</div>
			<p ref={middleExitText} className="absolute w-full h-full flex z-50 pt-[20%] justify-center items-center  whitespace-nowrap text-2xl md:text-3xl lg:text-5xl">
				Public exit experience
			</p>
			<div ref={rightPhone} id="right-phone" className=" flex flex-col text-left gap-5">
				<span ref={toprightText} className="pl-5 whitespace-nowrap">
					your portfolio
				</span>
				<Image
					src="/begin/puff_6.png"
					alt="Right_phone"
					className="object-contain z-40"
					width={380}
					height={510}
				/>
				<span ref={rightsideText} className="z-30 absolute left-9 top-[138px] whitespace-nowrap">
					your adventure
				</span>
			</div>
		</div>
	);
};

export default Begin;

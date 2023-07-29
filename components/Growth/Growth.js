import Account from "./Account";
import { useEffect, useRef } from "react";
import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BlurImage from "../BlurImage";

const Growth = () => {
	const explosiveTitle = useRef(null);

	useEffect(() => {

		const [revealTextTimeline, scrollTrigger] = revealText();

		return () => {
			scrollTrigger && scrollTrigger.kill();
			revealTextTimeline && revealTextTimeline.progress(1);
		}
	},[])

	const revealText = () => {
		const revealTextTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
		revealTextTimeline
			.to(
				explosiveTitle.current,
				{
					scaleX: 1,
					skewY: -15,
					duration: 1
				}
			)
			.to(
				explosiveTitle.current,
				{
					y: -200,
					scaleX: 0.7,
					skewY: 20,
					duration: 1
				}
			)
			// .to(

			// )
			;
		const scrollTrigger = ScrollTrigger.create({
			trigger: explosiveTitle.current,
			start: "top bottom",
			end: "100%",
			scrub: 0,
			animation: revealTextTimeline,
		});
		return [revealTextTimeline, scrollTrigger];
	}
	return (
		<>
			<div className=" my-[100px] font-normal font-sysui text-center relative">
				<h6 ref={explosiveTitle} className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] text-center mb-16 bg-linear bg-clip-text text-transparent font-passion ">
					Explosive revenue growth
				</h6>
				<Account />
			</div>
			<div className="relative lg:py-[100px] font-normal leading-normalfont-sysui text-center">
				<h1 className="lg:px-[4rem] text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] lg:my-[220px]" id="saas-model">
					Proven SaaS model • Patent-pending technology
				</h1>
				<h5 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] mb-[30px]">Don&apos;t miss another opportunity</h5>
				<div className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] mb-[95px]">
					<span>Invest with confidence in the next</span>&nbsp;
					<span className="bg-linear bg-clip-text text-transparent italic font-medium">Big thing</span>
				</div>
				<p className="text-[1.5rem] md:text-[2rem] font-bold lg:text-[1.5rem] xl:text-[2rem] mb-[22px]">Its only just a pipe dream, until you do it.</p>
				<button className="px-[28px] py-[6px] rounded-full text-primary-purple border-[2px] border-primary-purple">
					<p className="text-[16px] font-bold">Take control of your future now</p>
					<p className="text-[13px]">Invest for as little as $195</p>
				</button>
				<div id="left-phone"
					className="absolute lg:w-[912px] w-[250px] lg:left-[-30%] left-[-58%] md:left-[-48%] lg:top-[750px] top-[110px]">
					<BlurImage
						src="/begin/cart_5.png"
						alt="Left phone"
						width={912}
						height={912}
					/>
				</div>
				<div id="right-phone"
					className="absolute lg:w-[672px] w-[150px] lg:right-[-18%] right-[-35%] md:right-[-25%] lg:top-[865px] top-[120px]">
					<BlurImage
						// className="absolute right-[100px]"
						src="/begin/puff_6.png"
						alt="Right phone"
						width={672}
						height={672}
					/>
				</div>
			</div>
		</>
	);
};

export default Growth;

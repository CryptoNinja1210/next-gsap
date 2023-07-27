import Image from "next/image";
import Lottie from "lottie-react";
import animatedCheckbox from "./checkbox.json"
import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const interactivity = {
	mode: "scroll",
	actions: [
		{
			visibility: [0, 0.25],
			type: "stop",
			frames: [0],
		},
		{
			visibility: [0.25, 0.75],
			type: "seek",
			frames: [0, 55],
		}
	]
}

const choices = [
	'Explosive revenue growth potential',
	'Proven SaaS model',
	'Diverse and experienced team',
	'Public exit experience',
	'Patent-pending technology',
	'Your future begins'
]

const Future = ({ }) => {

	return (
		<div className="bg-black text-white py-[20px] text-center font-sysui">
			<h2 className="text-[60px] font-semibold mt-[120px] mb-[90px]">Start your adventure.</h2>
			<div className="w-full">
				<div className="flex flex-col lg:h-[240px] content-center flex-wrap justify-start">
					{choices.map((choice, i) =>
						<div className="flex gap-[22px] items-center" key={"choice_" + i}>
							<Lottie
								animationData={animatedCheckbox}
								style={{ height: 75 }}
								interactivity={interactivity}
							/>
							<p>{choice}</p>
						</div>
					)}
				</div>
			</div>
			<div className="lg:my-[80px] my-5">
				<Image
					src="/screenshot/owlanim.gif"
					alt="Owl Animation"
					width={382}
					height={253}
					className="m-auto flex lg:w-[764px]"
				/>
			</div>
			<div className="text-center lg:py-[34px] py-[64px] justify-center relative z-10">
				<h3 className="lg:text-[80px] text-4xl font-semibold py-8 lg:py-[60px]">Invest with confidence today</h3>
				<button className="h-[52px] lg:h-[80px] px-[48px] bg-primary-purple
					hover:bg-primary-purple50 transition-all rounded-xl">I’m joining the Budbo Team</button>
			</div>
			<div className="-translate-y-full -z-1  lg:h-[375px] h-[232px">
				{/* <Image
					src="/investors/invest today.svg"
					alt=""
					width={3000}
					height={375}
					className="lg:h-[475px] h-[232px] w-[90%] m-auto"
				/> */}
			</div>
		</div>
	);
};

export default Future;

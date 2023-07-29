import Lottie from "lottie-react";
import animatedCheckbox from "./checkbox.json"
import BlurImage from "../BlurImage";


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
		<div className= "bg-black dark:bg-black text-white  text-center font-sysui w-[100vw] pb-10">
			<h2 className="lg:text-[60px] text-[40px] font-semibold pt-[120px] mb-[90px]">Start your adventure.</h2>
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
				<BlurImage
					src="/screenshot/owlanim.gif"
					alt="Owl Animation"
					width={382}
					height={253}
					className="m-auto flex lg:w-[764px]"
				/>
			</div>
			<div className="px-4 flex justify-center text-center relative z-10 lg:py-[34px] py-[64px] my-auto">
				<div className=" m-auto p-5 rounded-3xl flex flex-col gap-[30px] md:gap-[50px] lg:gap-[100px]  bg-linear bg-opacity-50">
					<h3 className="lg:text-[80px] text-4xl font-semibold ">Invest with confidence today</h3>
					<button className="h-[52px] lg:h-[80px] px-[48px] m-auto bg-primary-purple hover:bg-primary-purple50 transition-all rounded-xl">
						I&apos;m joining the Budbo Team
					</button>
				</div>
			</div>
		</div>
	);
};

export default Future;

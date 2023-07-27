import Image from "next/image";
import Account from "./Account";

const Growth = () => {
	return (
		<>
			<div className="my-[100px] font-normal leading-normal font-sysui text-center relative">
				<h6 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] text-center mb-16" id="begin-precession">
					Explosive revenue growth
				</h6>
				<Account />
			</div>
			<div className="relative py-[100px] font-normal leading-normal font-sysui text-center">
				<h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] my-[220px]" id="saas-model">
					Proven SaaS model • Patent-pending technology
				</h1>
				<h5 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] mb-[40px]">Don&apos;t miss another opportunity</h5>
				<div className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] mb-[95px]">
					<span>Invest with confidence in the next</span>&nbsp;
					<span className="bg-linear bg-clip-text text-transparent italic font-medium">Big thing</span>
				</div>
				<p className="text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2rem] mb-[22px]">Its only just a pipe dream, until you do it.</p>
				<button className="px-[28px] py-[6px] rounded-full text-primary-purple border-[2px] border-primary-purple">
					<p className="text-[16px] font-bold">Take control of your future now</p>
					<p className="text-[13px]">Invest for as little as $195</p>
				</button>
				<div id="left-phone"
					className="absolute left-[-13%] top-[3400px]">
					<Image
						src="/begin/cart 5.png"
						alt="Left phone"
						width={window.innerWidth * .5}
						height={window.innerWidth * .5}
					/>
				</div>
				<div id="right-phone"
					className="absolute right-[-10%] top-[3635px]">
					<Image
						// className="absolute right-[100px]"
						src="/begin/puff 6.png"
						alt="Right phone"
						width={window.innerWidth * .4}
						height={window.innerWidth * .4}
					/>
				</div>
			</div>
		</>
	);
};

export default Growth;

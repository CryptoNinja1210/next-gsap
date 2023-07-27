import Image from "next/image";
// import { Icon } from '@iconify/react';

const We1 = () => {
	return (
		<div className="w-full text-center font-sysui mt-[130px]">
			<div className="relative top-[-18480px] h-[2000px]">
				<div className="absolute top-[18540px] left-[16%] pointer-events-none">
					<Image
						src="/about/coins/bitcoin.png"
						alt="bitcoin"
						width={190}
						height={190}
						className="w-[120px] lg:w-[190px] h-[120px] lg:h-[190px]"
					/>
				</div>
				<div className="absolute top-[18720px] left-[22%] pointer-events-none">
					<Image
						src="/about/Current APR.png"
						alt="bitcoin"
						width={336}
						height={460}
					/>
				</div>
				<div className="absolute top-[18600px] right-[21%] pointer-events-none">
					<Image
						src="/about/Your Crypto Wallet.png"
						alt="bitcoin"
						width={732}
						height={384}
					/>
				</div>
				<div className="absolute top-[18690px] left-[22%] pointer-events-none">
					<Image
						src="/about/circle.svg"
						alt="bitcoin"
						width={724}
						height={724}
					/>
				</div>
				<div className="absolute top-[18935px] right-[19%] z-[-1] pointer-events-none">
					<Image
						src="/about/coins/tether-coin.png"
						alt="bitcoin"
						width={102}
						height={102}
					/>
				</div>
				<div className="absolute top-[19180px] left-[34%] pointer-events-none">
					<Image
						src="/about/coins/budbo-coin.png"
						alt="bitcoin"
						width={152}
						height={152}
					/>
				</div>
				<div className="absolute top-[19100px] left-[42%] pointer-events-none flex flex-col gap-[25px]">
					<Image
						src="/about/owl5-1 1.gif"
						alt="bitcoin"
						width={342}
						height={235}
					/>
					<Image
						src="/about/Exchange-rate.png"
						alt="bitcoin"
						width={342}
						height={48}
					/>
				</div>
				<div className="absolute top-[19040px] right-[26%] pointer-events-none">
					<Image
						src="/about/dropdown.png"
						alt="bitcoin"
						width={343}
						height={832}
					/>
				</div>
				<div className="absolute top-[19580px] right-[21%] pointer-events-none -z-1">
					<Image
						src="/about/coins/sol.png"
						alt="bitcoin"
						width={160}
						height={160}
					/>
				</div>
				<div className="absolute top-[19450px] left-[17%] pointer-events-none">
					<Image
						src="/about/Your Referal Link & Code.png"
						alt="bitcoin"
						width={732}
						height={384}
					/>
				</div>
				<div className="absolute top-[19920px] left-[19%] pointer-events-none">
					<Image
						src="/about/Exchange-rate.png"
						alt="bitcoin"
						width={332}
						height={70}
					/>
				</div>
				<div className="absolute top-[19900px] left-[38%] pointer-events-none">
					<Image
						src="/about/coins/binance.png"
						alt="bitcoin"
						width={160}
						height={160}
					/>
				</div>
				<div className="absolute top-[19790px] left-[23%] pointer-events-none -z-1">
					<Image
						src="/about/coins/eth-coin.png"
						alt="bitcoin"
						width={152}
						height={152}
					/>
				</div>
				<div className="absolute top-[20000px] right-[770px] pointer-events-none -z-1">
					<Image
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

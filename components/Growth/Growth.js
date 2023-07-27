import Image from "next/image";
import Account from "./Account";

const Growth = () => {
  return (
  <>
    <div className="py-[100px] h-[1200px] font-normal leading-normal font-sysui text-center relative">
      <h6 className="text-[80px] text-center mb-16" id="begin-precession">
        Explosive revenue growth
      </h6>
      <Account />
    </div>
    <div className="py-[300px] h-[1612px] font-normal leading-normal font-sysui text-center relative">
      <h1 className="text-[65px] mb-[143px]" id="saas-model">
        Proven SaaS model • Patent-pending technology
      </h1>
      <h5 className="text-[80px] mb-[90px]">Don&apos;t miss <b>another</b> opportunity</h5>
      <h6 className="text-[50px] mb-[95px]">
        <span>Invest with confidence in the next</span>&nbsp;
        <span className="bg-linear bg-clip-text text-transparent italic font-medium">Big thing</span>
      </h6>
      <p className="text-[40px] font-bold mb-[100px]">Its only just a pipe dream, until you do it.</p>
      <button className="px-[28px] py-[6px] rounded-full text-primary-purple border-[2px] border-primary-purple">
        <p className="text-[16px] font-bold">Take control of your future now</p>
        <p className="text-[13px]">Invest for as little as $195</p>
      </button>

      <div id="left-phone1"
        className="absolute left-[-18%] bottom-[300px]">
        <Image
          src="/begin/left_1.png"
          alt="Left phone"
          width={786}
          height={636}
        />
      </div>
      <div id="right-phone1"
        className="absolute right-[-18%] bottom-[90px]">
        <Image
          src="/begin/right_1.png"
          alt="Right phone"
          width={792}
          height={844}
        />
      </div>
    </div>
  </>
  );
};

export default Growth;

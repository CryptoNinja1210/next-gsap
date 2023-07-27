import Image from "next/image";
import { Icon } from '@iconify/react';
import Acount from "../Growth/Account";

const We = () => {
  return (
    <div className="relative text-center font-sysui my-[130px]">
      <div>
        <h2 className="text-[60px] leading-4">
          We are
        </h2>
        <h1 className="italic text-[90px] font-medium bg-linear bg-clip-text text-transparent">
          The Premier Online Marketplace
        </h1>
        <p className="text-[30px]">for Recreational and Medical Cannabis - Shop 1000s of local dispensaries</p>
        <div className="flex my-[270px] justify-center items-center">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-[24px] pointer-events-none">
              <Icon icon="tabler:location-filled" color="#6E2DFA" width="24" height="24" />
            </div>
            <input className="pl-[72px] pr-[240px] px-[24px] py-[28px] w-[773px] bg-white border-none shadow-md flex rounded-l-[12px] rounded-r-[80px]
            text-[18px] text-black focus:outline-none transition-all font-sysui border-0 outline-none"
              placeholder="Enter your city or address to get started" />
            <button className="absolute inset-y-[12px] right-[12px] flex items-center px-[24px] py-[16px] transition-all
              rounded-l-[12px] rounded-r-[80px] bg-primary-purple hover:bg-primary-purple50 text-white">
              Start Shopping ➔
            </button>
          </div>
        </div>
        <div className="relative top-[-8840px]">
          <div className="absolute top-[8300px] right-[60px] pointer-events-none -z-1">
            <Image
              src="/about/homebook 3.png"
              alt="homebook3"
              width={1002}
              height={480}
            />
          </div>
          <div className="absolute top-[8700px] left-[340px] pointer-events-none -z-1">
            <Image
              src="/about/summary.png"
              alt="summary"
              width={343}
              height={816}
            />
          </div>
          <div className="absolute top-[8900px] right-[-400px] hover:right-[-10px] transition-all duration-1000">
            <Image
              src="/about/reatiler.png"
              alt="reatiler list"
              width={1440}
              height={443}
            />
          </div>
          <div className="absolute top-[8500px] left-[411px] pointer-events-none z-[-2]">
            <Image
              src="/about/circle.svg"
              alt="circle bg"
              width={700}
              height={700}
            />
          </div>
          <div className="absolute top-[9480px] right-[560px] pointer-events-none -z-1">
            <Image
              src="/about/account.png"
              alt="account"
              width={300}
              height={276}
            />
          </div>
          <div className="absolute top-[9650px] right-[185px] pointer-events-none z-[-2]">
            <Image
              src="/about/circle.svg"
              alt="circle bg"
              width={1050}
              height={1050}
            />
          </div>
          <div className="absolute top-[9800px] left-[-26px] pointer-events-none -z-1">
            <Image
              src="/about/retailer.png"
              alt="retailer"
              width={1156}
              height={554}
            />
          </div>
          <div className="absolute top-[9858px] right-[76px] pointer-events-none -z-1">
            <Image
              src="/about/image 495.png"
              alt="image 495"
              width={870}
              height={403}
            />
          </div>
          <div className="absolute top-[10435px] left-1/2 -translate-x-1/2 -z-1">
            <Image
              src="/about/checkout.gif"
              alt="checkout"
              width={1200}
              height={900}
            />
          </div>
        </div>
        <div className="h-[2460px] w-3/5 border-b-[1px] border-secondary-graylight mx-auto -z-1" />
      </div>
      <div className="relative my-[120px]  text-center">
        <h2 className="text-[60px] leading-4">
          We are
        </h2>
        <h1 className="italic text-[90px] font-medium bg-linear bg-clip-text text-transparent mb-[120px]">
          Software-as-a-Service
        </h1>
        <Image
          src="/about/connectbook5 2.png"
          alt="connectbook5"
          width={1040}
          height={498}
        />
        <div className="flex justify-center mt-[100px] mb-[26px]">
          <div className="text-[48px] w-[860px]">
            <span>Explosive potential for revenue growth</span>&nbsp;
            <span className="italic font-medium bg-linear bg-clip-text text-transparent">Saas</span>&nbsp;
            <span>through monthly recurring revenue model</span>
          </div>
        </div>
        <Acount />
      </div>
    </div>
  )
};

export default We;

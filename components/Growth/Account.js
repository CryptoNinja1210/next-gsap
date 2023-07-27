
import Image from "next/image";

export default function Acount() {

  return (
    <div>
      <div className="relative">
        <div>
          <h3 id="revenue-count" className="mt-[33px] text-[5rem] sm:text-[6rem] md:text-[8rem] font-bold italic">1,000+</h3>
          <div className="h-[4.5rem] w-[60%] sm:w-[45%] lg:w-[35%] relative bg-linear skew-x-[-20deg] m-auto z-[-1]"></div>
          <div id="revenue-description" className="mt-[-4.5rem] py-[.5rem]">
            <div id="revenue-laboratories">
              <h6 className="text-[2rem] font-bold italic text-white leading-none mb-[.5rem]">Laboratories</h6>
              <p className="text-[1rem] text-white leading-none">($1.1billion global industry CAGR 15.4%)</p>
            </div>
          </div>
        </div>

        <h3 id="revenue-count" className="text-[5rem] sm:text-[6rem] md:text-[8rem] font-bold italic">8,500+</h3>
        <div className="h-[4.5rem] w-[60%] sm:w-[45%] lg:w-[35%] relative bg-linear skew-x-[-20deg] m-auto z-[-1]"></div>
        <div id="revenue-description" className="mt-[-4.5rem] py-[.5rem]">
          <div id="revenue-growers">
            <h6 className="text-[2rem] font-bold italic text-white leading-none mb-[.5rem]">Growers</h6>
            <p className="text-[1rem] text-white leading-none">($1.8 billion globally, CAGR 21.4%)</p>
          </div>
        </div>

        <h3 id="revenue-count" className="text-[5rem] sm:text-[6rem] md:text-[8rem] font-bold italic">40,000+</h3>
        <div className="h-[4.5rem] w-[80%] sm:w-[60%] lg:w-[50%] relative bg-linear skew-x-[-20deg] m-auto z-[-1]"></div>
        <div id="revenue-description" className="mt-[-4.5rem] py-[.5rem]">
          <div id="revenue-dispensaries">
            <h6 className="text-[2rem] font-bold italic text-white leading-none mb-[.5rem]">Dispensaries and Retailers</h6>
            <p className="text-[1rem] text-white leading-none">($13.2 billion globally, CAGR 25.5%)</p>
          </div>
        </div>

        <h3 id="revenue-count" className="text-[5rem] sm:text-[6rem] md:text-[8rem] font-bold italic">100,000+</h3>
        <div className="h-[4.5rem] w-[80%] sm:w-[60%] lg:w-[50%] relative bg-linear skew-x-[-20deg] m-auto z-[-1]"></div>
        <div id="revenue-description" className="mt-[-4.5rem] py-[.5rem]">
          <div id="revenue-product">
            <h6 className="text-[2rem] font-bold italic text-white leading-none mb-[.5rem]">Product Manufacturers</h6>
            <p className="text-[1rem] text-white leading-none">($18.38 billion globally, CAGR 21.15%)</p>
          </div>
        </div>

        <div className="">
          <h3 id="revenue-count" className="text-[5rem] sm:text-[6rem] md:text-[8rem] font-bold italic">289,000,000+</h3>
          <div className="h-[4.5rem] w-[90%] sm:w-[80%] lg:w-[70%] relative bg-linear skew-x-[-20deg] m-auto z-[-1]"></div>
          <div id="revenue-description" className="mt-[-4.5rem] py-[.5rem]">
            <div id="revenue-consumers">
              <h6 className="text-[2rem] font-bold italic text-white leading-none mb-[.5rem]">Consumers and Patients</h6>
              <p className="text-[1rem] text-white leading-none">($323.9 billion globally, CAGR 21.4%)</p>
            </div>
          </div>
        </div>

        <div className="absolute left-[15vw] top-[15%]">
          <Image
            src="/coin.svg"
            alt="BUBO Coin"
            width={window.innerWidth > 1024 ? 100 : 60}
            height={window.innerWidth > 1024 ? 100 : 60}
          />
        </div>
        <div className="absolute right-[12vw] top-[42%] rotate-45 opacity-80">
          <Image
            src="/coin.svg"
            alt="BUBO Coin"
            width={window.innerWidth > 1024 ? 80 : 50}
            height={window.innerWidth > 1024 ? 80 : 50}
          />
        </div>
        <div className="absolute left-[10vw] top-[75%] -rotate-45 opacity-30">
          <Image
            src="/coin.svg"
            alt="BUBO Coin"
            width={window.innerWidth > 1024 ? 25 : 15}
            height={window.innerWidth > 1024 ? 25 : 15}
          />
        </div>
        <div className="absolute right-[15vw] top-[90%] -rotate-45 opacity-30">
          <Image
            src="/coin.svg"
            alt="BUBO Coin"
            width={window.innerWidth > 1024 ? 25 : 15}
            height={window.innerWidth > 1024 ? 25 : 15}
          />
        </div>
        <h2 className="text-[60px] lg:text-[100px] font-bold bg-linear bg-clip-text text-transparent
        absolute left-[8vw] top-[25%]">$</h2>
        <h2 className="text-[60px] lg:text-[100px] font-bold bg-linear bg-clip-text text-transparent
        absolute right-[20vw] top-[12%]">$</h2>
        <h2 className="text-[50px] lg:text-[80px] font-bold bg-linear bg-clip-text text-transparent
        absolute right-[15vw] top-[30%] opacity-80">$</h2>
        <h2 className="text-[20px] lg:text-[40px] font-bold bg-linear bg-clip-text text-transparent
        absolute right-[25vw] top-[45%] opacity-40">$</h2>
        <h2 className="text-[15px] lg:text-[30px] font-bold bg-linear bg-clip-text text-transparent
        absolute left-[15vw] top-[90%] opacity-20">$</h2>
      </div>
    </div>
  )
}



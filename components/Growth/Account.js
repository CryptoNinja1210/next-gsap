
import Image from "next/image";

export default function Acount () {

  return (
    <div>
      <div >
      <div>
        <h3 id="revenue-count" className="mt-[33px] text-[128px] font-bold italic">1,000+</h3>
        <Image
          className="mt-[-25px] m-auto inset-0 z-[-1] object-cover w-[720px] h-[66px]"
          src="/purple line.svg"
          alt="Purple Line"
          width={608}
          height={66}
        />
        <div id="revenue-description" className=" my-[-74px]">
          <div id="revenue-laboratories">
            <h6 className="text-[30px] font-bold italic text-white">Laboratories</h6>
            <p className="text-[14px] text-white">($1.1billion global industry CAGR 15.4%)</p>
          </div>
        </div>
      </div>

      <h3 id="revenue-count" className="mt-[33px] text-[128px] font-bold italic">8,500+</h3>
        <Image
          className="mt-[-25px] m-auto inset-0 z-[-1] object-cover"
          src="/purple line.svg"
          alt="Purple Line"
          width={623}
          height={66}
      />
      <div id="revenue-description" className="my-[-74px]">
        <div id="revenue-growers">
          <h6 className="text-[30px] font-bold italic text-white">Growers</h6>
          <p className="text-[14px] text-white">($1.8 billion globally, CAGR 21.4%)</p>
        </div>
      </div>

        <h3 id="revenue-count" className="mt-[33px] text-[128px] font-bold italic">40,000+</h3>
        <Image
          className="mt-[-25px] h-[66px] m-auto inset-0 z-[-1] object-cover"
          src="/purple line.svg"
          alt="Purple Line"
          width={669}
          height={66}
      />
      <div id="revenue-description" className="my-[-74px]">
        <div id="revenue-dispensaries">
          <h6 className="text-[30px] font-bold italic text-white">Dispensaries and Retailers</h6>
          <p className="text-[14px] text-white">($13.2 billion globally, CAGR 25.5%)</p>
        </div>
      </div>

      <h3 id="revenue-count" className="mt-[33px] text-[128px] font-bold italic">100,000+</h3>
        <Image
          className="mt-[-25px] h-[66px] m-auto inset-0 z-[-1] object-cover"
          src="/purple line.svg"
          alt="Purple Line"
          width={669}
          height={66}
      />
      <div id="revenue-description" className="my-[-74px]">
        <div id="revenue-product">
          <h6 className="text-[30px] font-bold italic text-white">Product Manufacturers</h6>
          <p className="text-[14px] text-white">($18.38 billion globally, CAGR 21.15%)</p>
        </div>
      </div>

      <div className="mb-4">
      <h3 id="revenue-count" className="mt-[33px] text-[128px] font-bold italic">289,000,000+</h3>
        <Image
          className="mt-[-25px] h-[66px] m-auto inset-0 z-[-1] object-cover"
          src="/purple line.svg"
          alt="Purple Line"
          width={1070}
          height={59}
      />
      <div id="revenue-description" className="my-[-74px]">
        <div id="revenue-consumers">
          <h6 className="text-[30px] font-bold italic text-white">Consumers and Patients</h6>
          <p className="text-[14px] text-white">($323.9 billion globally, CAGR 21.4%)</p>
        </div>
      </div>
      </div>

      <div id="effects" className="w-screen relative top-[-3380px]">
        <div className="absolute left-[250px] top-[2480px]">
          <Image
            src="/coin.svg"
            alt="BUBO Coin"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute right-[220px] top-[2780px] rotate-45 opacity-80">
          <Image
            src="/coin.svg"
            alt="BUBO Coin"
            width={80}
            height={80}
          />
        </div>
        <div className="absolute left-[200px] top-[3080px] -rotate-45 opacity-30">
          <Image
            src="/coin.svg"
            alt="BUBO Coin"
            width={25}
            height={25}
          />
        </div>
        <div className="absolute right-[300px] top-[3180px] -rotate-45 opacity-30">
          <Image
            src="/coin.svg"
            alt="BUBO Coin"
            width={25}
            height={25}
          />
        </div>
        <h2 className="text-[100px] font-bold bg-linear bg-clip-text text-transparent
        absolute left-[120px] top-[2580px]">$</h2>
        <h2 className="text-[100px] font-bold bg-linear bg-clip-text text-transparent
        absolute right-[280px] top-[2380px]">$</h2>
        <h2 className="text-[80px] font-bold bg-linear bg-clip-text text-transparent
        absolute right-[230px] top-[2600px] opacity-80">$</h2>
        <h2 className="text-[40px] font-bold bg-linear bg-clip-text text-transparent
        absolute right-[370px] top-[2780px] opacity-40">$</h2>
        <h2 className="text-[30px] font-bold bg-linear bg-clip-text text-transparent
        absolute left-[240px] top-[3160px] opacity-20">$</h2>
      </div>
      </div>
    </div>
  )
}



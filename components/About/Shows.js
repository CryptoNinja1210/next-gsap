import Image from "next/image"

const Shows = () => {
  return (
    <div className="relative my-40">
      <div className="absolute top-6 left-[19%] ">
        <Image
          src="/about/Main User Dropdown.png"
          alt="main-user dropdown"
          width={303}
          height={428}
        />
      </div>
      <div className="absolute top-[278px] left-[32%] ">
        <Image
          src="/about/Dropdowns.png"
          alt="dropdowns"
          width={303}
          height={304}
        />
      </div>
      <div className="absolute top-[0px] left-[21.3%] z-[-1]">
        <Image
          src="/about/circle.svg"
          alt="circle bg"
          width={1095}
          height={1094}
        />
      </div>
      <div className="absolute top-[112px] left-[44%] ">
        <Image
          src="/about/connectbook5 4.png"
          alt="com"
          width={1439}
          height={689}
        />
      </div>
      <div className="absolute top-[665px] left-[26.6%] ">
        <Image
          src="/about/map 4.png"
          alt="phone"
          width={241}
          height={488}
        />
      </div>
      <div className="absolute top-[964px] left-[65%] ">
        <Image
          src="/about/map 4.png"
          alt="phone2"
          width={241}
          height={488}
        />
      </div>
      <div className="absolute top-[1272px] left-[14.67%] ">
        <Image
          src="/about/Popular Products.png"
          alt="products"
          width={731}
          height={488}
        />
      </div>
      <div className="absolute top-[1570px] left-[62%] ">
        <Image
          src="/about/Heat Zone.png"
          alt="heat zone"
          width={354}
          height={636}
        />
      </div>
      <div className="absolute top-[2106px] right-[43.25%] ">
        <Image
          src="/about/connectbook5 4.png"
          alt="com2"
          width={1439}
          height={689}
        />
      </div>
      <div className="absolute top-[1617px] left-[31.7%] z-[-1]">
        <Image
          src="/about/circle.svg"
          alt="circle bg"
          width={1095}
          height={1099}
        />
      </div>
      <div className="absolute top-[2431px] left-[53.5%] ">
        <Image
          src="/about/Dashboard Chart Card.png"
          alt="chart card"
          width={354}
          height={560}
        />
      </div>
    </div>
  )
}

export default Shows;
import { Icon } from "@iconify/react";
import Team from "./Team";
import Reason2 from "./Reason2";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BlurImage from "../BlurImage";

const Reason = () => {
  const bookRef = useRef([]);
  const handphoneRef = useRef([]);
  const superChargeRef = useRef(null);
  const superChargeTextRef = useRef(null);
  const superChargeImgRef = useRef(null);
  const superChargeDescriptionRef = useRef(null);

  useEffect(() => {
    const [revealBookTimeline0, revealBookScrollTrigger0] = revealBook(0);
    const [revealBookTimeline1, revealBookScrollTrigger1] = revealBook(1);
    const [revealBookTimeline2, revealBookScrollTrigger2] = revealBook(2);
    const [revealBookTimeline3, revealBookScrollTrigger3] = revealBook(3);
    const [revealSuperImgTimeline, revealSuperImgScrollTrigger] = revealSuperCharge();

    return () => {
      revealBookScrollTrigger0 && revealBookScrollTrigger0.kill();
      revealBookTimeline0 && revealBookTimeline0.progress(1);
      revealSuperImgScrollTrigger && revealSuperImgScrollTrigger.kill();
      revealSuperImgTimeline && revealSuperImgTimeline.progress(1);
      revealBookScrollTrigger1 && revealBookScrollTrigger1.kill();
      revealBookTimeline1 && revealBookTimeline1.progress(1);
      revealBookScrollTrigger2 && revealBookScrollTrigger2.kill();
      revealBookTimeline2 && revealBookTimeline2.progress(1);
      revealBookScrollTrigger3 && revealBookScrollTrigger3.kill();
      revealBookTimeline3 && revealBookTimeline3.progress(1);
    }
  })

  const fadingImg = (index) => {
    const fadingImgTimeline = gsap.timeline({
      defaults: { ease: Linear.easeNone }
    });
    fadingImgTimeline
      .fromTo(
        fadingImgRef.current[index],
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1
        }
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: fadingImgRef.current[index],
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: fadingImgTimeline
    });
    return [fadingImgTimeline, scrollTrigger];
  }

  
  const revealSuperCharge = () => {
    const revealSuperTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const halfWidth = superChargeImgRef.current.clientWidth / 2;
    revealSuperTimeline
      .from(
        superChargeTextRef.current,
        {
          opacity: 0,
          duration: 1
        }
      )
      .from(
        superChargeImgRef.current,
        {
          opacity: 0,
          // width: halfWidth,
          duration: 1
        }
      )
      .from(
        superChargeDescriptionRef.current,
        {
          opacity: 0,
          duration: 1
        }
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: superChargeRef.current,
      start: "top center",
      end: "bottom bottom",
      scrub: 0,
      animation: revealSuperTimeline
    });
    return [revealSuperTimeline, scrollTrigger];
  }

  const revealBook = (index) => {
    const revealBookTimeline = gsap.timeline({
      defaults: { ease: Linear.easeNone }
    });
    revealBookTimeline
      .from(
        bookRef.current[index],
        {
          rotateX: 90,
          duration: 1
        }
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: bookRef.current[index],
      start: "top center+=400px",
      end: "center center",
      scrub: 0,
      animation: revealBookTimeline
    });
    return [revealBookTimeline, scrollTrigger];
  }

  return (
    <div id="reason" className="lg:mt-0 bg-black xl:py-[100px] xl:px-[300px] py-10 px-6 text-white font-sysui">
      <div className="bg-reason xl:py-[85px] xl:px-[38px]">
        <h2 className="font-semibold text-[29px] lg:text-[50px] mb-[40px]">Budbo is a global brand in emerging markets<br />and technologies.</h2>
        <p className="max-w-[862px] text-[18px] lg:text-[24px] font-medium">
          We are innovative, stubborn, and find purpose only within the pursuit of our goals. The Budbo suite of cannabis products has outpaced the future with curiosity, sleek user experiences, and an exceptional token reward system.
          <br /><br />
          It&apos;s time to begin your adventure, invest in Budbo today.
        </p>
      </div>
      <div className="mx-auto w-[1100px] border-b-[1px] my-[38px] border-secondary-graylight"></div>
      <div>
        <div className="text-[19px] lg:text-[50px] font-semibold leading-none lg:mx-[80px] my-[40px] r">
          <span>Let&apos;s talk</span>&nbsp;
          <span className=" text-[40px] lg:px-[34px] lg:text-[118px] text-transparent bg-linear bg-clip-text">Reasons</span>&nbsp;
          <span>to invest</span>
        </div>
        <p className="text-[19px] lg:px-[30px] w-full lg:text-[32px] mb-[92px]">
          Reason #1 – Not another Cannabis startup; Budbo is a technology company that has built the ecosystem that benefits dispensaries, growers, manufacturers, couriers, patients, and consumers.
        </p>
        <div className="flex flex-wrap space-y-8 content-center">
          <div className="lg:flex  w-full items-start">
            <div className="mb-8 lg:text-center">
              <p className="bg-linear bg-clip-text text-transparent font-bold text-[38px] lg:text-[42px] leading-none pb-[40px]">
                Your future.<br />
                Your money.<br />
                Your adventure.<br />
                You&apos;re Budbo.<br />
              </p>
              <p className="text-[18px] lg:text-center lg:w-[369px]">
                When you invest in Budbo, you&apos;re investing in a company poised for endless scalability and explosive revenue growth potential.
                <br /><br />
                Budbo is far more than just an app.
                <br />
                It&apos;s the first step of your new journey.
              </p>
            </div>
            <div className="w-full h-max flex  justify-center items-start">
              <div ref={(ref) => (bookRef.current[0] = ref)}>
                <BlurImage
                  src="/reason/homebook 1.png"
                  alt="homebook1"
                  width={872}
                  height={418}
                  className="lg:w-[872px] w-[518px]"
                />
              </div>
              <div ref={handphoneRef}>
                <BlurImage
                  src="/reason/Image.png"
                  alt="homephone"
                  width={257}
                  height={416}
                  className="w-[150px] lg:w-[257px]"
                />
              </div>
            </div>
          </div>
          <div className="lg:m-[70%] m-auto flex justify-center my-[32px] gap-[20px]">
            <button className="lg:w-[70px] w-14 lg:h-[70px] h-14 bg-primary-purple opacity-50 rounded-full flex justify-center items-center">
              <Icon icon="teenyicons:arrow-left-solid" color="white" height={24} width={24} />
            </button>
            <button className="lg:w-[70px] w-14 lg:h-[70px] h-14 bg-primary-purple rounded-full flex justify-center items-center">
              <Icon icon="teenyicons:arrow-right-solid" color="white" height={24} width={24} />
            </button>
          </div>
        </div>
        <div ref={superChargeRef} className=" w-full h-[100vh] flex flex-col items-stretch gap-5">
          <h1 ref={superChargeTextRef} className="text-[27px] md:text-[60px] lg:text-[70px] font-semibold leading-none lg:mx-[80px] mt-[40px] lg:text-center p-0">
            Supercharge your portfolio.
          </h1>
          <div className="absolute translate-y-20">
            <BlurImage
              src="/reason/Ellipse 7.svg"
              alt="ellipse"
              width={2068}
              height={714}
              className="flex m-auto"
            />
          </div>
          <div ref={superChargeImgRef} className="flex justify-center relative z-10 pt-10">
            <BlurImage
              src="/reason/checkout 2.png"
              alt="checkout2"
              width={685}
              height={515}
            />
          </div>
          <div ref={superChargeDescriptionRef} className="m-auto lg-text-[36px] text-[20px] lg:px-[135px]">
            <span className="bg-linear bg-clip-text text-transparent">289,000,000</span>
            &nbsp;
            <span>patients and recreational users worldwide can now</span>
            &nbsp;
            <span className="bg-linear bg-clip-text text-transparent">find, order, and have delivered</span>
            &nbsp;
            <span>
              legal cannabis from 1000s of local dispensaries around the world.
              <br />
              This is your opportunity to tap into legalized cannabis sales and industry expansion on a massive scale.
            </span>
          </div>
        </div>
        <div className="lg:pt-[200px]">
          <h1 className="text-[34px] md:text-[60px] lg:text-[70px] font-semibold leading-none lg:mx-[80px] my-[40px] lg:text-center">
            Business intelligence.
          </h1>
          <div className="text-[#97979A] text-[19px] lg:text-[24px] font-medium lg:text-center py-[5px]">
            <span>Built by dispensaries for dispensaries, Budbo‘s retailer dashboard and key analytics <br /></span>&nbsp;
            <span className="bg-linear bg-clip-text text-transparent italic" >empower</span>&nbsp;
            <span>our dispensary clients to sell more products with pro-active decision making.</span>
          </div>
          <div className="lg:flex justify-center items-start my-[40px] w-full">
            <div className="flex overflow-hidden items-end justify-end">
              <div ref={(ref) => (bookRef.current[2] = ref)}>
                <BlurImage
                  src="/reason/connectbook5 1.png"
                  alt="connectbook"
                  width={1178}
                  height={564}
                  className="w-[700px] lg:w-[1178px]"
                />
              </div>
              <div className="absolute lg:translate-x-[-140px] translate-y-[15px] w-[80px] lg:w-[212px]">
                <BlurImage
                  src="/reason/connectphone 1.png"
                  alt="connectphone"
                  width={212}
                  height={427}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="text-[18px] lg:px-[180px]">
            <span>With a database of over</span>
            &nbsp;
            <span className="bg-linear bg-clip-text text-transparent">100,000</span>
            &nbsp;
            <span>target businesses and a successful pilot with</span>
            &nbsp;
            <span className="bg-linear bg-clip-text text-transparent">2,100</span>
            &nbsp;
            <span>dispensaries, Budbo has explosive opportunities for monthly recurring revenue growth from dispensaries, retailers, product manufacturers, brands, and growers. </span>
          </div>
        </div>
        <div className="">
          <h1 className="text-[42px] lg:text-[70px] font-semibold leading-none lg:mx-[80px] my-[40px] text-center">
            Problem solver.
            <br />
            Industry evolver.
          </h1>
          <div className="lg:flex justify-center items-end my-[40px] w-full">
            <div className="flex overflow-hidden items-end justify-end">
              <div ref={(ref) => (bookRef.current[3] = ref)} className="w-[543px] lg:w-[1085px]">
                <BlurImage
                  src="/reason/traxbook 1.png"
                  alt="traxbook"
                  width={1085}
                  height={520}
                />
              </div>
              <div className="absolute lg:translate-x-[-140px] w-[70px] lg:w-[163px] translate-y-[15px]">
                <BlurImage
                  src="/reason/traxchain 1.png"
                  alt="traxchain"
                  width={163}
                  height={330}
                  className=""
                />
              </div>
            </div>
            <div className="lg:translate-x-[-120px] lg:mt-0 mt-10 lg:px-0 px-5">
              <div className="text-[18px] font-medium lg:mb-[150px]">
                Visibility into the entire cannabis supply chain from
                <br />
                <span className="bg-linear bg-clip-text text-transparent text-[45px] lg:text-[54px] italic">seed to soul.</span>
              </div>
              <div className="font-medium text-[16px] lg:pl-[40px]">
                <p className="lg:text-[28px] text-[19px] mb-[30px]">Blockchain powered telematic logistic solutions</p>
                <ul className="list-disc lg:pl-[30px]">
                  <li>Commercial fleet and delivery tracking.</li>
                  <li>Immutable lab results, compliance reporting.</li>
                  <li>Chain of custody.</li>
                  <li>Incredible revenue opportunities from per tracking fees.</li>
                  <li>AgTech and Pharmaceutical crossover</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto w-[1100px]  lg:h-[50px] border-b-[1px] my-10 lg:my-[100px] border-secondary-graylight"></div>
        </div>
        <Reason2 />
        <div className="py-10 lg:py-[100px]">
          <h2 className="text-[32px] font-semibold leading-none lg:px-[156px] text-center mb-[60px]">
            Reason #3 – Exit strategy and exit opportunities.
          </h2>
          <div className="lg:px-[72px] mb-[150px] lg:text-[28px] text-[19px] font-semibold">
            Our aim in approximately two years is to have an annual recurring revenue(ARR) of a minimum of $5 million and a valuation of approximately $45-$50 million, giving Budding Technologies, Inc. the ability to go to market either via a private or public offering, or acquisition.
            <br /><br />
            <ul className="list-disc pl-[40px] md:pl-[70px] lg:pl-[100px]">
              <li>Explosive revenue growth from dispensaries, retailers, growers, manufacturers, and couriers</li>
              <li>Expansion throughout the world with advisors and team members in Canada, Germany, Israel, Thailand, and Portugal.</li>
            </ul>
            <br />
            Budbo is managed by an incredibly experienced team, with executives from Google, Comcast, NetSpend, Harvard trained doctors, cannabis industry veterans, and seasoned financial executives with extensive merger and acquisition experience as well as IPO/Public exit experience.
          </div>
          <Team battle={true}/>
        </div>
      </div>
      <div className="w-full mx-auto bg-reason lg:py-[85px] m-auto">
        <div className="lg:text-center font-semibold text-[45px] lg:text-[64px]">
          <span>Meet your new&nbsp;</span>
          <span className="bg-linear bg-clip-text text-transparent lg:text-[128px] text-[45px]">Team</span>
        </div>
        <h2 className="lg:text-center  text-[18px] lg:text-[32px] mb-[60px]">Experience. Vision. Passion.</h2>
        <div className="relative flex lg:flex-row flex-col justify-center mb-[50px]">
          <div className="w-lg:1/5 w-3/5 flex m-auto">
            <BlurImage
              src="/team/1_active.png"
              alt="team"
              objectFit="contain"
              width={360}
              height={378}
            />
          </div>
          <div className="lg:w-4/5 w-full text-left justify-start lg:px-[48px]">
            <h3 className="text-center lg:text-start text-4xl lg:text-[50px]">Luke Patterson</h3>
            <h5 className="text-center lg:text-start my-5 lg:text-[28px] text-4xl text-primary-purple">CEO (Co-Founder)</h5>
            <p className="p-0 m-0 font-medium text-[20px] w-full text-primary-graydark50">
              A data-driven entrepreneur with true grit, Luke has decades of experience in the software industry. His works have been featured in Yahoo, TechCrunch, Complex, and Business Insider. As CEO and founder of his previous software venture in the restaurant and bar industry, Luke oversaw and directed every facet of the organization which ultimately resulted in its acquisition.
            </p>
          </div>
        </div>
        <Team />
      </div>
      <div className="lg:p-[12px]">
        <div className="w-full lg:text-[64px] text-[28px] font-semibold my-[24px]">
          <span>Team member</span>
          &nbsp;
          <span className="bg-linear bg-clip-text text-transparent">SPOTLIGHT</span>
        </div>
        <div className="lg:flex flex-row-reverse justify-center items-center gap-[60px]">
          <div className="lg:w-1/2 p-auto m-auto">
            <BlurImage
              src="/team/Dr Uma Image.png"
              alt="team"
              width={632}
              height={470}
            />
          </div>
          <div className="lg:w-1/2 lg:text-[28px] text-[19px]">
            <div>
              Our patent-pending product matching feature is on the cutting edge of scientific research.  The AI driven algorithm is improving everyday with the help of one of Budbo&apos;s key members, Dr. Uma Dhanablan.
              <br /><br />
              <ul className="list-disc pl-[36px]">
                <li>Dr. Dhanabalan is a highly respected and educated physician and known to most as Dr Uma. She completed her Bachelor of Arts degree with High Honors from Rutgers University and her Medical Degree from the University of Medicine & Dentistry in Newark, New Jersey. </li>
                <br />
                <li>She completed her Family Practice Residency at the Medical University of South Carolina, in Charleston, South Carolina. She has her Master&apos;s in Public Health and completed her Occupational & Environmental Medicine Residency and Fellowship in Heavy Metals at the Harvard School of Public Health in Boston, Massachusetts. She is a Fellow of the American Academy of Family Physicians.</li>
                <br />
                <li>She is a Diplomat in Cannabinoid Medicine Certified by the American Academy of Cannabinoid Medicine, and a Medical Review Officer Certified by  Medical Review Officer Certification Council. </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;

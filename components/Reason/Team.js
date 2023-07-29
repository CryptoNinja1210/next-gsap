import { Icon } from "@iconify/react";
import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import BlurImage from "../BlurImage";

const members = [
  {
    file: '1',
    name: 'Luke Patterson',
    role: 'CEO'
  },
  {
    file: '2',
    name: 'Gary Heitz',
    role: 'COO'
  },
  {
    file: '3',
    name: 'Jacob Patterson',
    role: 'CTO'
  },
  {
    file: '4',
    name: 'Nick Heldreth',
    role: 'CMO'
  },
  {
    file: '5',
    name: 'Stephen Rosen',
    role: 'CFO'
  },
  {
    file: '6',
    name: 'Virgil Grant',
    role: 'Advisor'
  },
  {
    file: '7',
    name: 'Dr. Uma Dhanabalan',
    role: 'MD MPH FAAFP MRO CMS'
  },
  {
    file: '8',
    name: 'Teran Ramsey',
    role: 'Advisor'
  }
]

const Team = ({ battle }) => {
  const wrapperRef = useRef(null);
  const teamPhoto = useRef(null);
  const battleText = useRef(null);

  useEffect(() => {
    if(battle) {
      const [togglingTeamImgTimeline, togglingTeamImgTrigger] = revealBattleText();
      return () => {
        togglingTeamImgTrigger && togglingTeamImgTrigger.kill();
        togglingTeamImgTimeline && togglingTeamImgTimeline.progress(1);
      }
    }
    return null
  }, [battle, wrapperRef])
  const revealBattleText = () => {
    const battleTimeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    battleTimeline
      .to(
        teamPhoto.current,
        {
          opacity: 0.5,
          duration: 1
        },
        1
      )
      .fromTo(
        battleText.current,
        {
          opacity: 0
        },
        {
          opacity: 1,
          fontSize: 52,
          duration: 1
        },
        "<"
      );
    const scrollTrigger = ScrollTrigger.create({
      trigger: teamPhoto.current,
      start: "top center",
      end: "bottom center",
      scrub: 0,
      animation: battleTimeline
    });
    return [battleTimeline, scrollTrigger];
  }
  return (
    <div ref={wrapperRef} className="relative">
      <p ref={battleText} className={`text-white font-passion z-10 w-full text-[47px] mt-3 text-center absolute ${battle ? 'block' : 'hidden'}`}>Battle tested and forged in <span className="bg-linear bg-clip-text text-transparent">fire</span></p>
      <div ref={teamPhoto} className="w-full grid grid-cols-4 lg:grid-cols-8 grid-flow-row gap-0 text-center">
        {members.map(item =>
          <div key={'client_' + item.file} className="">
            <BlurImage
              src={`/team/${item.file}.png`}
              alt="team"
              width={135}
              height={140}
            />
            <div className="text-[14px] font-semibold leading-[20px] bg-linearblack text-center flex flex-col">
              <span>{item.name}</span>
              <span className="text-primary-purple text-[12px]">{item.role}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;

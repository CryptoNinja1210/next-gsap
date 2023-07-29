import { useState, useEffect } from "react";
import { gsap } from "gsap";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Scripts from "@/components/Scripts/Scripts";

import Meta from "@/components/Seo/Meta";
import Loader from "@/components/Loader/Loader";
import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";
import Begin from "@/components/Begin/Begin";
import Growth from "@/components/Growth/Growth";
import Logo from "@/components/About/Logo";
import Role from "@/components/About/Role";
import We from "@/components/About/We";
import Token from "@/components/About/Token";
import We1 from "@/components/About/We1";
import Reason from "@/components/Reason/Reason1";
import Investors from "@/components/Investors/Investors";
import Future from "@/components/Future/Future";
import Footer from "@/components/Footer/Footer";
// import Saas from "@/components/Saas/Saas";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import WeTop from "@/components/About/WeTop";
import FutureCarousel from "@/components/Future/FutureCarousel";
import Budbo from "@/components/About/Budbo";
import Shows from "@/components/About/Shows";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2700);
  }, []);

  useEffect(() => {
    const result =
      typeof window.orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    window.history.scrollRestoration = "manual";

    setIsDesktop(result);
    setClientHeight(window.innerHeight);
    setClientWidth(window.innerWidth);
  }, [isDesktop, clientHeight]);

  return (
    <>
      <Meta>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-screen overflow-hidden">
            <Header />
            <ProgressIndicator />
            {/* <Cursor isDesktop={isDesktop} /> */}
            <Title />
            <Begin />
            <Growth />
            <Logo />
            <Role />
            <We />
            <div className="lg:h-[5200px] h-[3800px]" />
            <Shows />
            <div className="h-[3000px]"/>
            <Token />
            <WeTop />
            <We1 />
            <Budbo />
            <Reason />
            <Investors />
            <FutureCarousel />
            <Future />
            <Footer />
            <Scripts />
          </div>
        )}
      </Meta>
    </>
  );
}

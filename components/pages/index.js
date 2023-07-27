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
          <>
            <Header />
            <ProgressIndicator />
            {/* <Cursor isDesktop={isDesktop} /> */}
            <main className="w-[100vw] overflow-hidden">
              <div className="fixed top-0 left-0 h-screen w-screen -z-1"></div>
              <Title clientHeight={clientHeight} />
              <Begin />
              <Growth />
              <Logo />
              {/* <div className="relative">
                <Role/>
                <We/>
                <Token/>
                <We1/>
                <Reason/>
                <Investors/>
                <Future/>
              </div> */}
            </main>
            <Footer />
            <Scripts />
          </>
        )}
      </Meta>
    </>
  );
}

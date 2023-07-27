import Image from "next/image";


const Footer = () => {
  return (
    <footer className="lg:px-[280px] px-16 font-sysui mb-10">
      <div className="h-[52px] border-b-[1px] border-secondary-graylight mb-[47px]"/>
      <div className="flex justify-start items-center gap-[10px] md:gap-[40px] mb-[40px]">
        <Image
            src="/logo_txt.svg"
            alt=""
            width={150}
            height={70}
            className="md:w-36 md:h-16 w-24 "
        />
        <div className="">
          <button className="flex flex-nowrap items-center h-16 px-[20px] lg:px-[40px] bg-primary-purple w-[130px] lg:w-[210px]
          hover:bg-primary-purple50 transition-all rounded-xl text-white">Invest now ➔</button></div>
        <h5 className="text-sm lg:text-[24px]">Invest in Budbo, and together we will pioneer the future!</h5>
      </div>
      <div className="text-divrimary-graydark50mb-[135px]">
        <ul className="list-disc">
          <li>Investments in private companies are particularly risky and may result in total loss of invested capital. Past performance of a security or a company does not guarantee future results or returns.</li>
          <li>Additional information about companies fundraising via Regulation Crowdfunding (CF) can be found by searching the EDGAR database.</li>
          <li>Private placements are speculative investments in which an investor could potentially lose the entire investment. The risks associated with a private placement are stated in its private placement memorandum (“PPM”). Investors considering investing in a private placement should fully review the PPM, and if appropriate, consult a legal or financial professional prior to making an investment decision.</li>
          <li>Offers to sell securities can only be made through official offering documents that contain important information about the investment and the issuers, including risks. Investors should carefully read the offering documents. Investors should conduct their own due diligence and are encouraged to consult with their tax, legal and financial advisors.</li>
          <li>Investors should verify any issuer information they consider important before making an investment.</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

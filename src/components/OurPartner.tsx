import PolkadotLogo from "@images/polkadot-logo.png";
import SubWalletLogo from "@images/subwallet-logo.png";

const OurPartner = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-between ~gap-5/10 ~px-[1rem]/[6.875rem]">
      <div className="flex flex-col">
        <h1 className="font-extrabold uppercase text-primary-text ~text-2xl/5xl">
          Our
          <span className="gradient-text"> partner</span>
        </h1>
        <p className="text-sm text-primary-text">
          Join the next wave of Web3 commerce
        </p>
      </div>
      <div className="flex w-full items-center justify-between ~gap-4/20 md:w-fit md:justify-start">
        <img
          className="w-auto ~h-12/[5.625rem]"
          src={PolkadotLogo}
          alt="XssetHub"
        />
        <img
          className="w-auto ~h-12/[5.625rem]"
          src={SubWalletLogo}
          alt="XssetHub"
        />
      </div>
    </div>
  );
};

export default OurPartner;

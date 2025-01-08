import Hero from "@components/Hero";
import OurPartner from "@components/OurPartner";
import PaymentSovereignty from "@components/PaymentSovereignty";
import Reference from "@components/Reference";
import MainLayout from "@layouts/MainLayout";

import PolkadotAsset from "@images/polkadot-asset.png";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <PaymentSovereignty />
      <div className="relative flex h-fit w-full flex-col gap-[5.375rem]">
        <img
          className="absolute size-full object-cover object-left-top -z-[1]"
          src={PolkadotAsset}
          alt="XssetHub"
        />
        <OurPartner />
        <Reference />
      </div>
    </MainLayout>
  );
}

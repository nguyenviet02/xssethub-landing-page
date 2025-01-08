import { Button } from "@ui/button";

const Hero = () => {
  return (
    <div className="hero-backgroundImage flex h-fit w-full flex-col justify-center gap-7 bg-contain ~px-[1rem]/[6.875rem] ~py-[4.875rem]/[8.25rem] md:bg-cover">
      <div className="flex w-full max-w-[840px] flex-col font-extrabold uppercase ~text-2xl/5xl">
        <h1 className="text-primary-text">OpenPay for eCommerce</h1>
        <h1 className="text-primary-text">OpenSource for Polkadot</h1>
        <h1 className="gradient-text">Stably through AssetHub</h1>
      </div>

      <p className="w-full max-w-[567px] text-sm font-medium text-primary-text">
        XssetHub, Polkadot's pioneering open payment protocol, brings secure
        stablecoin transactions to global e-commerce. By leveraging AssetHub's
        USDT/USDC, which delivers instant settlements with near-zero fees,
        accessible to all businesses.
      </p>

      <div className="flex w-full flex-wrap items-center gap-4">
        <Button
          asChild
          className="h-[46px] rounded-[20px] bg-[#280936] px-8 py-3 text-base font-bold uppercase text-white"
        >
          <a href="#">App coming soon</a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-[46px] rounded-[20px] border border-primary px-8 py-3 text-base font-bold uppercase text-primary hover:bg-primary hover:text-white"
        >
          <a href="#">Xssethub pay doc</a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;

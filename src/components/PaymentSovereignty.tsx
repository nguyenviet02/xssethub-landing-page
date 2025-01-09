import FastPatternImage from "@images/fast-pattern.png";
import DirectPatternImage from "@images/direct-pattern.png";
import EasyPatternImage from "@images/easy-pattern.png";
import EePatternImage from "@images/ee-pattern.png";
import FastBgImage from "@images/fast-bg.png";
import DirectBgImage from "@images/direct-bg.png";
import EasyBgImage from "@images/easy-bg.png";
import EeBgImage from "@images/ee-bg.png";

const PaymentSovereignty = () => {
  const dataList = [
    {
      title: "FAST",
      description:
        'Settle your transactions immediately. Xssethub can process up to 60,000 transactions per second — and has been  called the potential "Visa of the digital asset  ecosystem"',
      pattern: FastPatternImage,
      bgImage: FastBgImage,
    },
    {
      title: "DIRECT",
      description:
        "Avoid intermediaries and their high fees. XssetHub Pay is the first open, direct merchant-to-consumer payment rail",
      pattern: DirectPatternImage,
      bgImage: DirectBgImage,
    },
    {
      title: "Easy",
      description:
        "Your dev can set up the Xssethub Pay SDK inminutes, so you can start doing business with the millions who hold USDC or other AssetHub-based stablecoins.",
      pattern: EasyPatternImage,
      bgImage: EasyBgImage,
    },
    {
      title: "Energy Efficient",
      description:
        "XssetHub transactions use the same energy as about two Google searches, and the entire  network is carbon neutral.",
      pattern: EePatternImage,
      bgImage: EeBgImage,
    },
  ];

  return (
    <section className="flex w-full flex-col ~gap-6/20 ~px-[1rem]/[6.875rem]">
      <div className="flex w-full flex-col">
        <h1 className="font-extrabold uppercase text-primary-text ~text-2xl/5xl">
          / Redefining
        </h1>
        <h1 className="gradient-text font-extrabold uppercase ~text-2xl/5xl">
          payment sovereignty
        </h1>
        <p className="mt-4 text-sm font-medium text-primary-text">
          XssetHub, Polkadot's pioneering open payment protocol, brings secure
          stablecoin transactions
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(287px,1fr))] gap-4">
        {dataList.map((data) => {
          return (
            <section
              key={data.title}
              className="group relative flex h-full min-h-[22.375rem] cursor-default flex-col gap-6 overflow-hidden rounded-xl border border-[#F6F1F1] bg-gradient-to-r from-[#FFFFFF33] to-[#FFFFFF7D] px-4 py-12 drop-shadow-[0px_4px_30px_rgba(250,_237,_255,_1)] backdrop-blur-sm hover:drop-shadow-none hover:backdrop-blur-none"
            >
              <h2 className="flex items-center text-[2rem] font-extrabold uppercase leading-8 text-primary">
                {data.title}
              </h2>
              <p className="group-hover:animate-goUp text-sm text-primary-text opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {data.description}
              </p>
              <div className="absolute inset-0 flex">
                <img
                  className="absolute bottom-0 left-0 -z-[1] opacity-100 group-hover:animate-fadeOut"
                  src={data.pattern}
                  alt="XssetHub"
                />
                <img
                  src={data.bgImage}
                  className="absolute bottom-0 left-0 -z-[1] size-full object-cover opacity-0 group-hover:animate-fadeIn"
                  alt="XssetHub"
                />
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default PaymentSovereignty;

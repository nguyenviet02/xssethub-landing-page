import ArrowInsertIcon from "@icons/arrow-insert.svg";
import { Button } from "@ui/button";

const Reference = () => {
  const references = [
    {
      key: "1",
      title: "Access to XssetHub",
      buttonTitle: "Development Kit",
      href: "#",
    },
    {
      key: "2",
      title: "See  XssetHub’s vision for the future",
      buttonTitle: "Learn more",
      href: "#",
    },
    {
      key: "3",
      title: "XssetHub enabled Shopify available soon",
      buttonTitle: "Learn more",
      href: "#",
    },
    {
      key: "4",
      title: "Developers, learn about payments on XssetHub",
      buttonTitle: "Learn more",
      href: "#",
    },
  ];
  return (
    <div className="mb-[82px] flex flex-col items-center ~gap-[3.5rem]/[4.875rem]">
      <div className="grid grid-cols-1 gap-4 ~px-[1rem]/[6.875rem] md:grid-cols-2">
        {references.map((reference) => {
          return (
            <a key={reference.key} href={reference.href}>
              <div className="flex h-fit min-h-[195px] flex-col justify-center gap-4 rounded-xl border border-[#E6E6E6] bg-[#E6E6E633] backdrop-blur-[30px] ~px-4/[1.875rem] hover:bg-[#7916F321]">
                <h2 className="font-extrabold leading-[2.375rem] text-primary-text ~text-[1.5rem]/[2rem]">
                  {reference.title}
                </h2>
                <button className="flex items-center font-medium leading-7 text-primary ~text-[0.875rem]/[1.25rem]">
                  {reference.buttonTitle}
                  <img
                    src={ArrowInsertIcon}
                    alt="XssetHub"
                    className="size-[30px]"
                  />
                </button>
              </div>
            </a>
          );
        })}
      </div>
      <Button className="h-[46px] min-w-[286px] rounded-[20px] bg-[#280936] px-8 py-3 text-base font-bold uppercase text-white sm:w-fit">
        <a href="#">App coming soon</a>
      </Button>
    </div>
  );
};

export default Reference;

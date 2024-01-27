import React from "react";
import {Accordion, AccordionItem, Image, Link} from "@nextui-org/react";
import {RightArrowIcon} from "./RightArrowIcon";


const SideNavbar = () =>  {

    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-medium",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-12 flex items-center",
        indicator: "text-medium",
        content: "text-small px-2 !py-0",
      };
    
      const defaultContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    

return (
    <>
    <div className="hidden overflow-visible relative z-10 lg:block lg:col-span-3 mt-8 pr-4">
        <div className="lg:fixed lg:top-20 mt-2 z-0 lg:h-[calc(100vh-121px)]">
            <div dir="ltr" className="relative overflow-hidden h-full lg:max-h-[calc(100vh_-_64px)]" role="tree" tabIndex="-1"> 
                
                <div data-radix-scroll-area-viewport="" className="h-full w-full rounded-[inherit] pb-28" >
                    <div className="sidebar_area">                        
                        <Accordion
                        showDivider={false}
                        className="p-2 flex flex-col gap-1 w-full max-w-[230px]"
                        variant="shadow"
                        itemClasses={itemClasses}
                        
                        >
                        <AccordionItem
                            indicator={<RightArrowIcon />}
                            key="1"
                            aria-label="Launchpad"
                            startContent={<Image alt="Launchpad" height={20} width={20} radius="sm" src="/images/rocket-launch.png" />}
                            title={<Link color="foreground" href="#">Launchpad</Link>}
                            className=""
                        ></AccordionItem>
                        <AccordionItem
                            indicator={<RightArrowIcon />}
                            key="2"
                            aria-label="LP Locker"
                            startContent={<Image alt="LP" height={20} width={20} radius="sm" src="/images/secure.png" />}
                            title="LP Locker"
                        >
                        </AccordionItem>
                        <AccordionItem
                            indicator={<RightArrowIcon />}
                            key="3"
                            aria-label="Token Vesting"
                            classNames={{ subtitle: "text-warning" }}
                            startContent={<Image alt="vesting" height={20} width={20} radius="sm" src="/images/investment.png" />}
                            title="Token Vesting"
                        ></AccordionItem>
                        <AccordionItem
                            indicator={<RightArrowIcon />}
                            key="4"
                            aria-label="Airdrop Planner"
                            classNames={{ subtitle: "text-danger" }}
                            startContent={<Image alt="airdrop" height={20} width={20} radius="sm" src="/images/parachute.png" />}
                            title="Airdrop Planner"
                        >
                        </AccordionItem>
                        <AccordionItem
                            indicator={<RightArrowIcon />}
                            key="5"
                            aria-label="Token Creator"
                            classNames={{ subtitle: "text-danger" }}
                            startContent={<Image alt="creator" height={26} width={26} radius="sm" src="/images/high-voltage.png" />}
                            title="Token Creator"
                        >
                        </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default SideNavbar
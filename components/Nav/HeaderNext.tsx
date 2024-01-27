import React, {useState}  from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Image} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.jsx";
import {AcmeLogo} from "./AcmeLogo.jsx";

export default function HeaderNext() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} height={16} width={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} height={16} width={16} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} height={16} width={16} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} height={16} width={16} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} height={16} width={16} />,
    server: <Server className="text-success" fill="currentColor" size={30} height={16} width={16} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} height={16} width={16} />,
  };
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const delay = 100;
  return (
    <Navbar isBordered maxWidth="lg">
      <NavbarBrand>
      <AcmeLogo />
        <p className="font-bold text-inherit text-large pl-2">HaloNode</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <Dropdown
        isOpen={isOpen}
        >
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                onMouseEnter={() => {
                    clearTimeout(timeoutId);
                    setIsOpen(true);
                  }}
                  onMouseLeave={() => {
                    const id = setTimeout(() => setIsOpen(false), delay);
                    setTimeoutId(id);
                  }}
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-medium"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Explorer
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            onMouseEnter={() => {
                clearTimeout(timeoutId);
                setIsOpen(true);
              }}
              onMouseLeave={() => {
                setIsOpen(false);
              }}
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description=""
              startContent=<Image alt="Launchpad" height={26} width={26} radius="sm" src="/images/rocket-launch.png" />
            >
            <Link color="foreground" href="https://explorer.halonode.top">Mainnet</Link>
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description=""
              startContent=<Image alt="LP" height={26} width={26} radius="sm" src="/images/secure.png" />
            >
            <Link color="foreground" href="https://explorer.halonode.top">Testnet</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>

          <Link color="foreground" href="https://explorer.halonode.top">Networks</Link>

        </NavbarItem>
        <NavbarItem>

        <Link color="foreground" href="https://explorer.halonode.top">Services</Link>

      </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="mailto:admin@halonode.top" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

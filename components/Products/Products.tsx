import React from "react";
import { useRouter } from 'next/router'
import {Card, CardHeader, CardBody, CardFooter, Image, Button, Link} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import {Spacer} from "@nextui-org/react";


export default function Products() {
  const { basePath, pathname } = useRouter()
  return (

  <div className="max-w-[1024px] gap-2 grid grid-cols-12 grid-rows-1 px-10">
    <h4 className="text-white font-medium text-large pb-1 pt-1">Testnet</h4>
    <Divider className="w-full col-span-12"  />

    <Card isFooterBlurred className="col-span-12 sm:col-span-3 h-[200px] min-w-[220px] text-left">
      <CardHeader className="absolute  flex-col gap-1 pt-6">
      <Image
          alt="logo"
          height={40}
          radius="sm"
          src="/images/artela.png"
          width={40}
          className="flex gap-10"
        />
        <div className="flex flex-col">
          <h4 className="text-white font-medium text-large pb-1 pt-1">ARTELA</h4>
        </div>
      </CardHeader>
      <Image
        isBlurred
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover !opacity-15"
        src="https://nextui.org/images/card-example-4.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Services</Link></Button>
        <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Explorer</Link></Button>
        <Button radius="full" size="sm"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Delegate</Link></Button>
      </CardFooter>
    </Card>
    
    <Card isFooterBlurred className="col-span-12 sm:col-span-3 h-[200px] min-w-[220px] text-left ">
      <CardHeader className="absolute flex-col gap-1 pt-6">
      <Image
          alt="logo"
          height={40}
          radius="sm"
          src="/images/arkeo.png"
          width={40}
          className="flex gap-10"
        />
        <div className="flex flex-col">
          <h4 className="text-white font-medium text-large pb-1 pt-1">ARKEO</h4>
        </div>
      </CardHeader>
      <Image
        isBlurred
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover !opacity-15"
        src="https://nextui.org/images/card-example-4.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Services</Link></Button>
        <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Explorer</Link></Button>
        <Button radius="full" size="sm"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Delegate</Link></Button>
      </CardFooter>
    </Card>
    
    <Card isFooterBlurred className="col-span-12 sm:col-span-3 h-[200px] min-w-[220px] text-left ">
      <CardHeader className="absolute flex-col gap-1 pt-6">
      <Image
          alt="logo"
          height={40}
          radius="sm"
          src="/images/babylon.png"
          width={40}
          className="flex gap-10"
        />
        <div className="flex flex-col">
          <h4 className="text-white font-medium text-large pb-1 pt-1">BABYLON</h4>
        </div>
      </CardHeader>
      <Image
        isBlurred
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover !opacity-15"
        src="https://nextui.org/images/card-example-4.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Services</Link></Button>
        <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Explorer</Link></Button>
        <Button radius="full" size="sm"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Delegate</Link></Button>
      </CardFooter>
    </Card>
    
    <Card isFooterBlurred className="col-span-12 sm:col-span-3 h-[200px] min-w-[220px] text-left ">
      <CardHeader className="absolute flex-col gap-1 pt-6">
      <Image
          alt="logo"
          height={40}
          radius="sm"
          src="/images/cascadia.png"
          width={40}
          className="flex gap-10"
        />
        <div className="flex flex-col">
          <h4 className="text-white font-medium text-large pb-1 pt-1">CASCADIA</h4>
        </div>
      </CardHeader>
      <Image
        isBlurred
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover !opacity-15"
        src="https://nextui.org/images/card-example-4.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Services</Link></Button>
        <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Explorer</Link></Button>
        <Button radius="full" size="sm"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Delegate</Link></Button>
      </CardFooter>
    </Card>

    <Card isFooterBlurred className="col-span-12 sm:col-span-3 h-[200px] min-w-[220px] text-left ">
      <CardHeader className="absolute flex-col gap-1 pt-6">
      <Image
          alt="logo"
          height={40}
          radius="sm"
          src="/images/jackal.png"
          width={40}
          className="flex gap-10"
        />
        <div className="flex flex-col">
          <h4 className="text-white font-medium text-large pb-1 pt-1">JACKAL</h4>
        </div>
      </CardHeader>
      <Image
        isBlurred
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover !opacity-15"
        src="https://nextui.org/images/card-example-4.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Services</Link></Button>
        <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Explorer</Link></Button>
        <Button radius="full" size="sm"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Delegate</Link></Button>
      </CardFooter>
    </Card>

    <Card isFooterBlurred className="col-span-12 sm:col-span-3 h-[200px] min-w-[220px] text-left ">
      <CardHeader className="absolute flex-col gap-1 pt-6">
      <Image
          alt="logo"
          height={40}
          radius="sm"
          src="/images/lava.png"
          width={40}
          className="flex gap-10"
        />
        <div className="flex flex-col">
          <h4 className="text-white font-medium text-large pb-1 pt-1">LAVA</h4>
        </div>
      </CardHeader>
      <Image
        isBlurred
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover !opacity-15"
        src="https://nextui.org/images/card-example-4.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Services</Link></Button>
        <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Explorer</Link></Button>
        <Button radius="full" size="sm"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Delegate</Link></Button>
      </CardFooter>
    </Card>

    <Card isFooterBlurred className="col-span-12 sm:col-span-3 h-[200px] min-w-[220px] text-left ">
      <CardHeader className="absolute flex-col gap-1 pt-6">
      <Image
          alt="logo"
          height={40}
          radius="sm"
          src="/images/union.png"
          width={40}
          className="flex gap-10"
        />
        <div className="flex flex-col">
          <h4 className="text-white font-medium text-large pb-1 pt-1">UNION</h4>
        </div>
      </CardHeader>
      <Image
        isBlurred
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover !opacity-15"
        src="https://nextui.org/images/card-example-4.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Services</Link></Button>
        <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Explorer</Link></Button>
        <Button radius="full" size="sm"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Delegate</Link></Button>
      </CardFooter>
    </Card>

    <Card isFooterBlurred className="col-span-12 sm:col-span-3 h-[200px] min-w-[220px] text-left ">
      <CardHeader className="absolute flex-col gap-1 pt-6">
      <Image
          alt="logo"
          height={40}
          radius="sm"
          src="/images/pryzm.png"
          width={40}
          className="flex gap-10"
        />
        <div className="flex flex-col">
          <h4 className="text-white font-medium text-large pb-1 pt-1">PRYZM</h4>
        </div>
      </CardHeader>
      <Image
        isBlurred
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover !opacity-15"
        src="https://nextui.org/images/card-example-4.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
      <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Services</Link></Button>
        <Button radius="full" size="sm" className="mr-1"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Explorer</Link></Button>
        <Button radius="full" size="sm"><Link color="foreground" size="sm" href="https://explorer.halonode.top">Delegate</Link></Button>
      </CardFooter>
    </Card>
  </div>

  );
}

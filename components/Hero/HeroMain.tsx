import Link from 'next/link'
import { useRouter } from 'next/router'
//import AnnouncementBadge from '../Announcement/Badge'

const HeroMain = () => {
  const router = useRouter()

  return (
    <div className="relative">
      <div className="pt-0 md:pt-0 pb-5 overflow-hidden">
        <div className="relative">
          <div className="mx-auto">
            <div className="mx-auto max-w-2xl lg:col-span-6 lg:flex lg:items-center justify-center text-center">
              <div
                className='relative z-10 appear-first lg:h-auto pt-[0px] lg:pt-[0px] lg:min-h-[300px] flex flex-col items-center justify-center sm:mx-auto md:w-3/4 lg:mx-0 lg:w-full gap-4 lg:gap-8'>
                <div className="flex flex-col items-center">
                  <div className="z-40 w-full flex justify-center mb-0 lg:mb-0">
                   
                  </div>
                  <h1 className="text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#3ECF8E] via-[#3ECF8E] to-[#3ecfb2] block md:ml-0">
                      HaloNode
                    </span>
                  </h1>
                  <p className="pt-2 text-foreground my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg">
                    HaloNode is trusted Proof of Stake validator across Cosmos universe.
                  </p>
                </div>


                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroMain

import DefaultLayout from '../components/Layouts/Default'

import HeaderNext from '../components/Nav/HeaderNext'
import SideNavbar  from '../components/Nav/SideNavbar'
import Products  from '../components/Products/Products'
import HeroMain  from '../components/Hero/HeroMain'

export default function IndexPage() {

    return  (<>
    <div className="relative flex flex-col">
            <HeaderNext  />
            <DefaultLayout>
            <div className="col-span-12 lg:col-span-12 xl:col-span-12 lg:px-0 mt-0">
                <HeroMain />
                <Products />
            </div>
            </DefaultLayout>
    </div>
        </>)
  }
//import Nav from 'components/Nav/index'
//import Footer from 'components/Footer/index'
//import { cn } from 'ui'

type Props = {
  hideHeader?: boolean
  hideFooter?: boolean
  className?: string
  footerClassName?: string
  children: React.ReactNode
}

const DefaultLayout = (props: Props) => {
  const demoProps = {
    
  };
  const {
    hideHeader = false,
    hideFooter = false,
    className = '',
    footerClassName = '',
    children,
  } = props

  return (
    <>
    
    <main className='relative container mx-auto max-w-5xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow min-w-[360px]'>
      <div className="grid grid-cols-12 px-0">
        {children}
      </div>
    </main>
    
    </>
  )
}

export default DefaultLayout
import '../styles/index.css'
//import '@mantine/core/styles.css';
import Head from 'next/head'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
//import { createTheme, MantineProvider } from '@mantine/core'
import {NextUIProvider} from "@nextui-org/react"


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return (<> <NextUIProvider><Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HaloNode | Trusted validator across Cosmos universe and EVM chains.

</title>
  </Head>
    <Component {...pageProps} />
   </NextUIProvider></>)
}
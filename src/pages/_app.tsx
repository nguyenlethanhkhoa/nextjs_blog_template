import RootLayout from "@/layout/blog-layout"
import { makeStore } from "@/lib/store/app.store"
import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import { Provider } from "react-redux"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <Provider store={makeStore()}>
            { getLayout(<Component {...pageProps} />) }
        </Provider>

    )
}

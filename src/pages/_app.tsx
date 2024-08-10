import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import { CartContextProvider } from "../../components/global/CartContext.js";

const font = DM_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </main>
  )
}


 
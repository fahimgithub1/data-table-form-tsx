import { ServicesApi } from '@/store/api/services';
import '@/styles/globals.css'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Provider } from "react-redux";
import store from "./../store/index"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider api={ServicesApi}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApiProvider>
  )
}
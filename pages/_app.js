import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Navbar from '../components/Navbar'
import Loader from "../components/Loader";

import '../styles/globals.css'
import React from 'react'
import 'locomotive-scroll/dist/locomotive-scroll.css'

function MyApp({ Component, pageProps }) {
  const containerRef = useRef(null)

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [])

  return (

    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath`
          // (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <AnimatePresence>
        {loaded ? null : <Loader />}
      </AnimatePresence>
      <main data-scroll-container ref={containerRef}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </LocomotiveScrollProvider>
  )
}

export default MyApp

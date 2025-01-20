'use client'
import React, { createContext} from "react";
import { useState, useCallback, useEffect } from "react";
interface ScrollValue {
  scrollY:number
}
export const ScrollContext = createContext<ScrollValue>({
  scrollY:0
})

export default function ScrollObserver({children}:any) {
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    },[]);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, { passive: true })
    return document.addEventListener('scroll', handleScroll)
    }, [handleScroll]);

  return(
  <>
      <ScrollContext.Provider value={{scrollY}}>
        {children}
      </ScrollContext.Provider>
    </>
  )



}


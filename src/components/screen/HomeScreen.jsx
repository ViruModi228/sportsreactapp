import React from 'react'
import { Navbar2 } from '../navbar/Navbar2'
import { Carousel2 } from '../Carousel/Carousel2'
import { Games2 } from '../Games/Games2'
import { Footer2 } from '../Footer/Footer2'

export const HomeScreen = () => {
  return (
    <div className='main'>
        <Navbar2/>
        <Carousel2/>
        <Games2/>
        <Footer2/>
    </div>
  )
}

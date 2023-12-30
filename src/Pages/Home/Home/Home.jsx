import React from 'react'
import Banner from '../Banner/Banner'
import OurService from '../OurService/OurService'
import Contuct from '../Contuct/Contuct'
import Reviews from '../Reviews/Reviews'

function Home() {
  return (
      <div>
      <Banner></Banner>
      <OurService></OurService>
      <Contuct></Contuct>
      <Reviews></Reviews>
      
    </div>
  )
}

export default Home
import React from 'react'
import Banner from '../Banner/Banner'
import OurService from '../OurService/OurService'
import Contuct from '../Contuct/Contuct'
import Reviews from '../Reviews/Reviews'
import Doctors from '../Doctors/Doctors'

function Home() {
  return (
      <div>
     <Banner></Banner>
     <OurService></OurService>
      <Contuct></Contuct>
      <Reviews></Reviews>
      <Doctors></Doctors>
      
    </div>
  )
}

export default Home
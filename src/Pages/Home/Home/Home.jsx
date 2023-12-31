import React from 'react'
import Banner from '../Banner/Banner'
import OurService from '../OurService/OurService'
import Contuct from '../Contuct/Contuct'
import Reviews from '../Reviews/Reviews'
import Doctors from '../Doctors/Doctors'
import ContuctUs from '../ContuctUs/ContuctUs'

function Home() {
  return (
      <div  className="w-full max-w-screen-xl mx-auto">
     <Banner></Banner>
     <OurService></OurService>
      {/* <Contuct></Contuct>
      <Reviews></Reviews>
      <Doctors></Doctors>
      <ContuctUs></ContuctUs> */}
      
    </div>
  )
}

export default Home
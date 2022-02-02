import React, { useEffect } from 'react'
import BasicLayout from '../layouts/BasicLayout'
import Image from 'next/image'
import LandingCard from '../components/LandingCard'

const Home = () => {

  return (
    <BasicLayout>
      <main>
        <div className="Hero">
          <div className="Hero__logo">
            <Image src='/logo-mijobrands.svg' layout='fill'/>
          </div>

          <div className="Hero__text">
            <h2>Ricardo Marin</h2>
            <h1>Prueba Técnica</h1>
            <p>Desafío para puesto de Frontend Developer, utilizando React en la empresa Mijo! Brands</p>
          </div>
        </div>

        <div className="Cards">
          <LandingCard />
          <LandingCard />
          <LandingCard />
        </div>
      </main>
    </BasicLayout>
  );
}
 
export default Home;
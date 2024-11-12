import React from 'react'
import MainCarousel from '../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel'
import { kurta } from '../../Data/kurta';
import { sarees } from '../../Data/saree';

const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      <div className='scace-y-10 py-20 flex flex-col justify-center '>
      <h3 className='text-lg font-medium text-gray-900 px-30' style={{padding:"30px"}} >Women's Kurti</h3>
        <HomeSectionCarousel data={kurta}/>
        <h3 className='text-lg font-medium text-gray-900' style={{padding:"30px"}}>Saree</h3>
        <HomeSectionCarousel data={sarees}/>
        <h3 className='text-lg font-medium text-gray-900' style={{padding:"30px"}}>Mens's Shirt</h3>
        <HomeSectionCarousel data={kurta}/>
        <h3 className='text-lg font-medium text-gray-900' style={{padding:"30px"}}>Girls Frock</h3>
        <HomeSectionCarousel data={kurta}/>
        <h3 className='text-lg font-medium text-gray-900' style={{padding:"30px"}}>Boy's T-shirts</h3>
        <HomeSectionCarousel data={kurta}/>
      </div>
    </div>
  )
}

export default HomePage

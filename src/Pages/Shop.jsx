import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import {Popular} from '../Components/Popular/Popular'
import { Hero1 } from '../Components/Hero1/Hero1'
import { NewCollections } from '../Components/NewCollections/NewCollections'

export const Shop = () => {
  return (
    <div className='shop'> 
      <Hero/>
      <Hero1/>
      <Popular/>
      <NewCollections/>
    </div>
  )
}

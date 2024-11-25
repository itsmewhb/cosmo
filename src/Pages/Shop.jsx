import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import {Popular} from '../Components/Popular/Popular'
import { Hero1 } from '../Components/Hero1/Hero1'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div> 
      <Hero/>
      <Hero1/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

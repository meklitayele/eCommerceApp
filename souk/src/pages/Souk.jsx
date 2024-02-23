import React from 'react'
import Arrivals from '../components/Arrivals/Arrivals'
import { Categories } from '../components/Categories/Categories'
import { Popular } from '../components/Popular/Popular'

export const Souk = () => {
  return (
     <div>
      <Arrivals/>
      <Popular/>
      <Categories/>
    </div>
  )
}

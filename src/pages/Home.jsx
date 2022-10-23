import React from 'react'
import Mainhero from '../components/mainhero'
import Features from '../components/features'
import Featuredbanner from '../components/featuredbanner'
import Specialoffers from '../components/specialoffers'
import Flashsale from '../components/flashsale'
import Bookonsale from '../components/bookonsale'
import Featuredbooks from '../components/featuredbooks'
const Home = () => {
  return (
  <>
      <Mainhero/>
      <Features/>
      <Featuredbanner/>
      <Specialoffers/>
      <Flashsale/>
      <Bookonsale/>
      <Featuredbooks/>
    </>
  )
}

export default Home
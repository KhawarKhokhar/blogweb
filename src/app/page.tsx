import React from 'react'
import HeroSection from '../components/home/HeroSection'
import LatestPosts from '../components/home/LatestPostSection'
import Categories from '../components/home/CategorySection'
import FeaturedAuthor from '../components/home/FeatureAuthor'
import Newsletter from '../components/home/NewsLetter'
import FinalCTA from '../components/home/FinalCTA'

function Home() {
  return (
    <>
    <HeroSection />
    <LatestPosts />
    <Categories/>
    <FeaturedAuthor/>
    <Newsletter/>
    <FinalCTA/>
    </>
  )
}

export default Home
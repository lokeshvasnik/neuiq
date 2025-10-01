import { homePageData } from '../Utils/data'

import Header from '../components/Header'
import Banner from '../components/Banner'
import ContactFooter from '../components/ContactFooter'
import TestimonalSection from '../components/HomePage/testimonalCarousel/TestimonalSection'
import WhatWeDoSection from '../components/HomePage/whatWeDo/WhatWeDoSection'
import NeuIQEdgeSection from '../components/NeuIQEdgeSection'
import ProblemsWeSolve from '../components/ProblemsWeSolve/ProblemsWeSolve'

export const HomePage = () => {
  
  return (
    <>
     <Header className="sticky top-0 z-50" />
      <div className="hero-background -mt-40 bg-cover bg-center bg-no-repeat h-auto sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[700px]">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <Banner data={homePageData.banner} />
          </div>
        </div>
      </div>
      <NeuIQEdgeSection />
      <ProblemsWeSolve/>
      <WhatWeDoSection />
      <TestimonalSection/>
      <ContactFooter data={homePageData.callToAction} />
    </>

  )
}

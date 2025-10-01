import React from 'react'
import { careersBreadcrumb } from '../Utils/breadcrumbdata'
import Breadcrumb from '../components/Breadcrumb'
import PageBanner from '../components/PageBanner'
import { careerData, performanceData } from '../Utils/data'
import PerformanceTribe from '../components/PerformanceTribe'
import CurrentOpenings from '../components/Careers/CurrentOpenings'

const CareerPage = () => {
  return (
    <>
        {/* <div className="header_banner text-white   ">
            <div className="max-w-full mx-auto lg:px-10 px-4">
                <Breadcrumb breadcrumbData={careersBreadcrumb} />
            </div>
        </div> */}
        <PageBanner data={careerData.banner} />
        <CurrentOpenings />
        <PerformanceTribe data={performanceData.career} />
    </>
  )
}

export default CareerPage
import DataInsightWhatWeDo from '../components/DataInsight/DataInsightWhatWeDo'
import MigrateModer from '../components/DataMigration/MigrateModer'
import {  datatoinsightBreadcrumb } from '../Utils/breadcrumbdata'
import Breadcrumb from '../components/Breadcrumb'
import PageBanner from '../components/PageBanner'
import ContactUsForm from '../components/ContactUsForm'
import WhyChooseUsSection from '../components/DataEngineeringPage/WhyChooseUsSection'
import { dataInsightsData } from '../Utils/data'

const DataInsight = () => {
  return (
    <>
         <div className='header_banner text-white'>
            <div className="max-w-full mx-auto lg:px-10 px-4">
              <Breadcrumb breadcrumbData={datatoinsightBreadcrumb}/>
            </div>
          </div>
        <PageBanner data={dataInsightsData.banner} />
        <DataInsightWhatWeDo data={dataInsightsData.whatWeDo} bgColor={'#fff'}/>
        <MigrateModer data={dataInsightsData.DataModernization}/>
        <WhyChooseUsSection data={dataInsightsData.whyChooseUs}/>
        <ContactUsForm longText={true} title={'Supercharge your business with a modern data foundation'}/>
    </>
  )
}


export default DataInsight
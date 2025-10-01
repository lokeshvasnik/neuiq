
import DataWhatWeDo from '../components/DataAI/DataWhatWeDo'
import Breadcrumb from '../components/Breadcrumb'
import { dataforaiBreadcrumb } from '../Utils/breadcrumbdata'
import MigrateModer from '../components/DataMigration/MigrateModer'
import PageBanner from '../components/PageBanner'
import ContactUsForm from '../components/ContactUsForm'
import WhyChooseUsSection from '../components/DataEngineeringPage/WhyChooseUsSection'
import { dataAIData } from '../Utils/data'

const DataAIPage = () => {
  return (
    <>
           <div className='header_banner text-white'>
            <div className="max-w-full mx-auto lg:px-10 px-4">
              <Breadcrumb breadcrumbData={dataforaiBreadcrumb}/>
            </div>
          </div>
        <PageBanner data={dataAIData.banner} />

        <DataWhatWeDo data={dataAIData.whatWeDo} bgColor='#fff'/>
        <MigrateModer data={dataAIData.dataModernization}/>
        <WhyChooseUsSection data={dataAIData.whyChooseUs}/>
        <ContactUsForm title={'Supercharge your business with a modern data foundation'} longText={true}/>
        {/* <DataAIMigrateModern data={dataaimigratemodern}/> */}
    </>
  )
}

export default DataAIPage
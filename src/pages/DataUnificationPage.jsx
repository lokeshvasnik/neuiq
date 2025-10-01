
// import Capabilties from "../components/AdvisoryPage/Capabilties";
import Breadcrumb from "../components/Breadcrumb";
import ContactUsForm from "../components/ContactUsForm";
import WhyChooseUsSection from "../components/DataEngineeringPage/WhyChooseUsSection";
import MigrateModer from "../components/DataMigration/MigrateModer";
import PageBanner from "../components/PageBanner";
import { dataUnificationBreadcrumb } from "../Utils/breadcrumbdata";
import { dataUnificationData } from "../Utils/data";

const DataUnificationPage = () => {
  return (
    <>
      <div className="header_banner text-white">
        <div className="max-w-full mx-auto lg:px-10 px-4">
          <Breadcrumb breadcrumbData={dataUnificationBreadcrumb} />
        </div>
      </div>
      <PageBanner data={dataUnificationData.banner} />
      {/* <Capabilties data={dataUnificationData.capabilities} bgColor={'#fff'} icons={true}/> */}
      <MigrateModer data={dataUnificationData.migratemodern}/>
      <WhyChooseUsSection data={dataUnificationData.whyChooseUse}/>
      <ContactUsForm longText={true} title={'Supercharge your business with a modern data foundation'}/>
    </>
  );
};

export default DataUnificationPage;

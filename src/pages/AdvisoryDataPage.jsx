
import Breadcrumb from "../components/Breadcrumb";
import { advisoryBreadcrumb } from "../Utils/breadcrumbdata";
import { advisoryData, customerExperienceData } from "../Utils/data";
import OurServices from "../components/AdvisoryPage/AdvisoryData/OurServices";
import ContactUsForm from "../components/ContactUsForm";
import PageBanner from '../components/PageBanner'
import AdvisoryEmployeeExp from '../components/AdvisoryPage/AdvisoryEmployeeExp/AdvisoryEmployeeExp'

const AdvisoryDataPage = () => {
  return (
    <>
      <div className="header_banner text-white">
        <div className="max-w-full mx-auto lg:px-10 px-4"> 
          <Breadcrumb breadcrumbData={advisoryBreadcrumb} />
        </div>
      </div>

      <PageBanner data={advisoryData.banner} />
      {/* <OurServices /> */}
      <AdvisoryEmployeeExp data={advisoryData} cardsPerRow={4}/>
      <ContactUsForm />
    </>
  );
};

export default AdvisoryDataPage;

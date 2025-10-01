
import AdvisoryUserExp from "../components/AdvisoryPage/AdvisoryUserExp/AdvisoryUserExp";
import Breadcrumb from "../components/Breadcrumb";
import {  advisoryUserBreadcrumb } from "../Utils/breadcrumbdata";
import ContactUsForm from "../components/ContactUsForm";
import PageBanner from "../components/PageBanner";
import { UserExperienceData } from "../Utils/data";

const AdvisoryUser = () => {
  return (
    <div>
      <div className="header_banner text-white">
        <div className="max-w-full mx-auto lg:px-10 px-4">
          <Breadcrumb breadcrumbData={advisoryUserBreadcrumb} />
        </div>
      </div>

      <PageBanner data={UserExperienceData.banner} />
      <AdvisoryUserExp data={UserExperienceData.ourServices}/>
      <ContactUsForm />
    </div>
  );
};

export default AdvisoryUser;

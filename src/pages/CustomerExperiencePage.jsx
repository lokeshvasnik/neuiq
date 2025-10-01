import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { customerExperienceBreadcrumb } from "../Utils/breadcrumbdata";
import AdvisoryEmployeeExp from '../components/AdvisoryPage/AdvisoryEmployeeExp/AdvisoryEmployeeExp'
import ContactUsForm from "../components/ContactUsForm";
import { customerExperienceData,  } from "../Utils/data";
import PageBanner from "../components/PageBanner";


const CustomerExperiencePage = () => {
  return (
    <div>
      <div className="header_banner text-white ">
        <div className="max-w-full mx-auto lg:px-10 px-4">
          <Breadcrumb breadcrumbData={customerExperienceBreadcrumb} />
        </div>
      </div>

      <PageBanner data={customerExperienceData.banner} />
      <AdvisoryEmployeeExp data={customerExperienceData}/>
      <ContactUsForm />
    </div>
  );
};

export default CustomerExperiencePage;

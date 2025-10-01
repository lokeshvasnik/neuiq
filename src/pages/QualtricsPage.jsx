import React from "react";
import ContactUsForm from "../components/ContactUsForm";
import PageBanner from "../components/PageBanner";
import { qualtricsData } from "../Utils/data";
import Breadcrumb from "../components/Breadcrumb";
import { qualtricsBreadcrumb } from "../Utils/breadcrumbdata";
import Challengesweneed from "../components/AdvisoryPage/Challengesweneed";
import QualtricsCounts from "../components/QualtricsPage/QualtricsCounts";
import ServiceSolution from "../components/QualtricsPage/ServiceSolution";

const QualtricsPage = () => {
  return (
    <>
      <div className="header_banner text-white   ">
        <div className="max-w-full mx-auto lg:px-10 px-4">
          <Breadcrumb breadcrumbData={qualtricsBreadcrumb} />
        </div>
      </div>

      <PageBanner data={qualtricsData.banner} />
      <QualtricsCounts data={qualtricsData.qualtricsCounts}/>
      <Challengesweneed data={qualtricsData.challengesweneed} />
      <ServiceSolution data={qualtricsData.serviceSolution}/>
      <ContactUsForm />
    </>
  );
};

export default QualtricsPage;

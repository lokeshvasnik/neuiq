
import WhatWeDo from "../components/DataMigration/WhatWeDo";
import MigrateModer from "../components/DataMigration/MigrateModer";
import Breadcrumb from "../components/Breadcrumb";
import ContactUsForm from "../components/ContactUsForm";
import { dataMigrationModernBreadcrumb } from "../Utils/breadcrumbdata";

import PageBanner from "../components/PageBanner";
import WhyChooseUsSection from "../components/DataEngineeringPage/WhyChooseUsSection";
import { dataModernization } from "../Utils/data";

const DataMigrationModernPage = () => {
  return (
    <>
      <div className="header_banner text-white">
        <div className="max-w-full mx-auto lg:px-10 px-2">
          <Breadcrumb breadcrumbData={dataMigrationModernBreadcrumb} />
        </div>
      </div>

      <PageBanner data={dataModernization.banner} />
      <WhatWeDo data={dataModernization.whatwedo} bgColor="#fff"/>
      <MigrateModer data={dataModernization.dataModernization} />
      <WhyChooseUsSection data={dataModernization.whyChooseUs}/>
      <ContactUsForm />
    </>
  );
};

export default DataMigrationModernPage;

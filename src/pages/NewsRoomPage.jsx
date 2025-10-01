import { newsroomBreadcrumb } from "../Utils/breadcrumbdata";
import { newsroomData } from "../Utils/data";

import ContactUsForm from "../components/ContactUsForm";
import Breadcrumb from "../components/Breadcrumb";
import PageBanner from "../components/PageBanner";
import CdoSection from "../components/NewsRoom/CdoSection";

const NewsRoomPage = () => {
  return (
    <>
      <div className="header_banner text-white   ">
        <div className="max-w-full mx-auto lg:px-10 px-4">
          <Breadcrumb breadcrumbData={newsroomBreadcrumb} />
        </div>
      </div>
      <PageBanner data={newsroomData.banner} />
      <CdoSection data={newsroomData.cdoSectionData}/>
      <ContactUsForm />
    </>
  );
};

export default NewsRoomPage;

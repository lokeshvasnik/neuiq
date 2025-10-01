import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import AdvisoryPage from "./pages/AdvisoryPage";
import { HomePage } from "./pages/HomePage";
import UnderDevelopment from "./pages/UnderDevelopment";
import { PATH } from "./Utils/constants";
import AdvisoryEmployee from "./pages/AdvisoryEmployee";
import AdvisoryUser from "./pages/AdvisoryUser";
import AdvisoryDataPage from "./pages/AdvisoryDataPage";
import CustomerExperiencePage from "./pages/CustomerExperiencePage";
import ScrollToTop from "./ScrollToTop";
import DataMigrationModernPage from "./pages/DataMigrationModernPage";
import DataEngineering from "./pages/DataEngineering";
import DataAIPage from "./pages/DataAIPage";
import DataUnificationPage from "./pages/DataUnificationPage";
import DataInsightPage from "./pages/DataInsightPage";
import QualtricsPage from "./pages/QualtricsPage";
import QualtricsXmService from "./pages/QualtricsXmService";


import TechServices from "./pages/TechServices";
import Aireadiness from "./pages/Aireadiness";
import AdvisoryData from "./pages/AdvisoryData";
import AdvisoryCustomerExperience from "./pages/AdvisoryCustomerExperience";
import AdvisoryUserExperience from "./pages/AdvisoryUserExperience";
import DataUnification from "./pages/DataUnification";
import DataModernization from "./pages/DataModernization";
import DataforAI from "./pages/DataforAI";
import DatatoInsights from "./pages/DatatoInsights";
import Contactus from "./pages/Contactus";

// import NewsRoomPage from "./pages/NewsRoomPage";
import NewsRoom from "./pages/NewsRoom";
// import CareerPage from "./pages/CareerPage";
import Careers from "./pages/Careers";
import JobApplication from "./pages/JobApplication";
import AboutUs from "./pages/AboutUs";
import ReactLenis from "lenis/react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <>
      <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.4,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2
      }}>
        <ScrollToTop /> {/* ✅ Ensures scrolling to the top on route ch anges */}
        <Routes>
          <Route path={PATH.home} element={<Layout><HomePage /></Layout>} />
          <Route path={PATH.advisory} element={<Layout><AdvisoryPage /></Layout>} />
          <Route path={PATH.advisorydata} element={<Layout><AdvisoryDataPage /></Layout>} />
          <Route path={PATH.customerExperience} element={<Layout><CustomerExperiencePage /></Layout>} />
          <Route path={PATH.advisoryemployee} element={<Layout><AdvisoryEmployee /></Layout>} />
          <Route path={PATH.advisoryuser} element={<Layout><AdvisoryUser /></Layout>} />
          <Route path={PATH.dataModernization} element={<Layout><DataMigrationModernPage /></Layout>} />
          <Route path={PATH.dataEngineering} element={<Layout><DataEngineering /></Layout>} />
          <Route path={PATH.dataai} element={<Layout><DataAIPage /></Layout>} />
          <Route path={PATH.datainsight} element={<Layout><DataInsightPage /></Layout>} />
          <Route path={PATH.dataUnification} element={<Layout><DataUnificationPage /></Layout>} />
          <Route path={PATH.QualtricsPage} element={<Layout><QualtricsPage /></Layout>} />
          <Route path={PATH.TechServices} element={<Layout><TechServices /></Layout>} />
          <Route path={PATH.Aireadiness} element={<Layout><Aireadiness /></Layout>} />
          <Route path={PATH.AdvisoryUserExperience} element={<Layout><AdvisoryUserExperience /></Layout>} />
          <Route path={PATH.DataUnification} element={<Layout><DataUnification /></Layout>} />
          <Route path={PATH.DataModernization} element={<Layout><DataModernization /></Layout>} />
          <Route path={PATH.DataforAI} element={<Layout><DataforAI /></Layout>} />
          <Route path={PATH.DatatoInsights} element={<Layout><DatatoInsights /></Layout>} />
          <Route path={PATH.AdvisoryData} element={<Layout><AdvisoryData /></Layout>} />
          <Route path={PATH.AdvisoryCustomerExperience} element={<Layout><AdvisoryCustomerExperience /></Layout>} />
          <Route path={PATH.QualtricsXmService} element={<Layout><QualtricsXmService /></Layout>} />
          {/* <Route path={PATH.newsroom} element={<Layout><NewsRoomPage /></Layout>} /> */}
          <Route path={PATH.NewsRoom} element={<Layout><NewsRoom /></Layout>} />
          {/* <Route path={PATH.careers} element={<Layout><CareerPage /></Layout>} /> */}
          <Route path={PATH.Careers} element={<Layout><Careers /></Layout>} />
          <Route path={PATH.jobApplication} element={<Layout><JobApplication /></Layout>} />
          <Route path={PATH.Contactus} element={<Layout><Contactus /></Layout>} />
          <Route path={PATH.aboutus} element={<Layout><AboutUs /></Layout>} />
          <Route path={PATH.privacyPolicy} element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path={PATH.cookiePolicy} element={<Layout><CookiePolicy /></Layout>} />
          <Route path={PATH.TermsAndConditions} element={<Layout><TermsAndConditions /></Layout>} />
          <Route path="*" element={<Layout><UnderDevelopment /></Layout>} />
        </Routes>
      </ReactLenis>
    </>
  );
}

export default App;

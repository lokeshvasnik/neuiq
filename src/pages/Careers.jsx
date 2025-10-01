import { useEffect } from "react";
import CurrentOpenings from "../components/Careers/CurrentOpenings";
import LifeatNeuiqSection from "../components/Careers/LifeatNeuiqSection";
import Header from "../components/Header";

const Careers = () => {


  useEffect(() => {
    // dynamically inject Zoho script
    const script = document.createElement("script");
    script.src =
      "https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js";
    script.async = true;
    script.onload = () => {
      // initialize Zoho widget after script loads
      if (window.rec_embed_js) {
        window.rec_embed_js.load({
          widget_id: "rec_job_listing_div",
          page_name: "Careers",
          source: "CareerSite",
          site: "https://neuiq.zohorecruit.in",
          brand_color: "#6875E2",
          empty_job_msg: "No current Openings",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Header className="sticky top-0 z-50" />

      <div className="careers-background -mt-40 bg-cover bg-center bg-no-repeat h-[450px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[700px]">
        <div className="text-white">
          <div className="lg:px-10 px-4 sm:px-6 pt-40 max-w-full mx-auto">
            <div className="lg:px-0 py-10 max-w-full mx-auto">
              <div className="flex sm:flex-row flex-col-reverse text-left md:items-center gap-4 lg:min-h-[500px]">
                <div className="sm:w-full">
                  {/* Title */}
                  <h1 className="text-3xl sm:text-6xl sm:leading-[4.5rem] lg:leading-[4.5rem] font-bold whitespace-pre-line">
                    CAREERS
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-full mx-auto lg:px-10 px-4">
        <div className="my-10">
          <h3 className="sm:text-4xl text-2xl  font-bold sm:mb-4 mb-3">Current Openings</h3>
          <p className="sm:text-lg text-base">Whether you’re a problem solver or a creative thinker, a specialist or a generalist, amplify your potential with NeuIQ.</p>
        </div>
      </div>

      {/* This is where Zoho jobs will be injected */}
      <div className="embed_jobs_head embed_jobs_with_style_1">
        <link
          rel="stylesheet"
          href="https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css"
          type="text/css"
        />
        <div className="embed_jobs_head2">
          <div className="embed_jobs_head3">
            <div id="rec_job_listing_div"></div>
          </div>
        </div>
      </div>

      <LifeatNeuiqSection />
    </>
  );
};

export default Careers;

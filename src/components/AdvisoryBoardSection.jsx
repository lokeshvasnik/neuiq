import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaLinkedin } from "react-icons/fa";
import { icons } from "../Utils/icons";

import "swiper/css";
import "swiper/css/pagination";

const advisoryBoardData = [
  {
    name: "David Williams",
    title: "Chairman & CEO, MRE Capital",
    image: icons.davidImage,
    linkedin: "https://www.linkedin.com/in/davidwilliams17/",
    profile: (
      <>
        David successfully transformed <b>Merkle</b> from a $2.5M data processing firm into a global performance marketing leader with <b>10,000+ employees and $1B+ in revenue</b>. He steered its sale to <b>Dentsu</b> in 2016, completing his exit in 2020.
        <br></br>
        <br></br>
        Today David leads <b>MRE capital</b>, a family office focused on real state and private equity. He invests in industries ranging from quick-service restaurants (Quality Brand Group) to e-commerce (Whitebox) and business services (Sandler).
      </>
    ),
  },
  {
    name: "Craig Dempster",
    title: "CEO, Trilliad",
    image: icons.craigImage,
    linkedin: "https://www.linkedin.com/in/craigdempster/",
    profile: (
      <>
        Craig brings over 25 years of leadership in marketing technology services, with deep expertise in growth, transformation, and global expansion. He is currently <b>CEO of Trilliad</b>, a Growth Services Provider helping organizations unlock performance at scale.
        <br></br>
        <br></br>
        Previously, Craig served as <b>Global CEO of Merkle</b>, where he scaled data and digital businesses, led 15+ acquisitions, and grew the company to <b>14,000 employees, $2B+ in revenue, and $400M+ EBITDA</b>.
      </>
    ),
  },
  {
    name: "Robert Chatwani",
    title: "President, Docusign",
    image: icons.robertImage,
    linkedin: "https://www.linkedin.com/in/chatwani/",
    profile: (
      <>
        Robert brings over two decades of leadership in marketing, growth, and digital transformation. He is currently <b>President and GM of Growth at DocuSign</b>. Previously, he served as <b>CMO at Atlassian, CRO at Spring</b>, and <b>CMO of eBay North America</b>, where he drove brand, performance, and customer marketing for 100M+ customers.
        <br></br>
        <br></br>
        Beyond his executive roles, Robert is recognized for building high-performing teams, driving customer-centric innovation, and shaping go-to-market strategies that deliver both growth and lasting brand impact.
      </>
    ),
  },
  // Add more as needed...
];

const AdvisoryBoardSection = () => {
  return (
    <>
      <div className="bg-white text-black lg:px-10 px-4 py-5 pt-0 max-w-full mx-auto leadership-section">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4">Advisory Board</h2>
        <p className="text-base sm:text-lg mb-6 mt-8">
          NeuIQ is guided by a stellar advisory board of highly accomplished entrepreneurs and professionals with proven track records in building high-performance teams, fostering a culture of innovation and excellence, and scaling successful global companies.
        </p>
      </div>
      <section className="bg-white text-black lg:pb-10">
        <div className="max-w-full mx-auto px-5 md:px-5 lg:px-10">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={true}
            speed={2000}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="news-swiper md:!py-12"
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {advisoryBoardData.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden rounded-2xl h-full border border-gray-300 shadow-sm md:mx-0 mx-2">
                  <div className="flip-card group h-[550px] md:h-[450px] perspective">
                    <div className="flip-card-inner group-hover:flip-card-flipped">
                      {/* Front */}
                      <div className="flip-card-front rounded-2xl overflow-hidden shadow-lg bg-white h-full">
                        <div className="w-full h-full md:h-80 relative">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                        <div className="p-4">
                          <h3 className="text-[#00B2C6] font-bold text-lg mb-1 uppercase">
                            {member.name}
                          </h3>
                          <p className="text-sm text-black font-semibold uppercase">
                            {member.title}
                          </p>
                        </div>
                      </div>

                      {/* Back */}
                      <div className="flip-card-back rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-md p-6 flex flex-col justify-evenly border h-full">
                        <div>
                          <h3 className="text-[#00B2C6] font-bold text-xl mb-1 uppercase">
                            {member.name}
                          </h3>
                          <p className="text-sm text-black font-semibold uppercase mb-4">
                            {member.title}
                          </p>
                          <p className="text-sm text-gray-800 mb-2 whitespace-pre-line">
                            {member.profile}
                          </p>
                              {member.linkedin && (
                          <div className="mt-5 md:mt-6">
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2">
                              <FaLinkedin size={30} color="#0077B5" />
                            </a>
                          </div>
                        )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AdvisoryBoardSection;

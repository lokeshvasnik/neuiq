import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { icons } from "../Utils/icons";
import { LiaTimesSolid } from "react-icons/lia";

const leadershipSections = [
  {
    members: [
      {
        name: "Sunil Mirani",
        shortName: "Sunil",
        designation: "Chairman",
        shortDesignation: "Chairman",
        image: icons.sunilImage,
        detailImage: icons.sunilImage,
        description: (
          <>
            Sunil is the <b>guiding spirit behind NeuIQ,</b> with 30+ years of global leadership. Renowned for building trusted partnerships and scaling ventures, he combines vision with execution to drive lasting impact.<br></br>
            <br></br>
            As a Co-Founder of <b>Ugam Solutions</b>, he scaled it into a <b>4,000 strong analytics powerhouse</b> before its acquisition by Merkle/Dentsu. At NeuIQ, he shapes vision and culture while mentoring the next chapter of growth.
          </>
        ),


        linkedin: "https://www.linkedin.com/in/sunilmirani/",
      },
      {
        name: "Naeem Harnekar",
        shortName: "Naeem",
        designation: "Chief Executive Officer",
        shortDesignation: "Chief Executive Officer",
        image: icons.naeemImage,
        detailImage: icons.naeemImage,
        description: (
          <>
            Naeem Harnekar is the co-founder of NeuIQ, where he leads with a
            simple belief: the future belongs to companies that can turn{" "}
            <b>data into decisions and AI into advantage </b>. With over two
            decades of experience driving transformation across global
            enterprises, Naeem has seen first-hand the gap between what
            technology promises and what businesses actually achieve. NeuIQ was
            born to close that gap.
          </>
        ),
        descriptionTwo: (
          <>
            At NeuIQ, Naeem’s focus is on blending the{" "}
            <b>agility of a startup</b> with the{" "}
            <b>maturity of a global enterprise.</b> He champions a culture of
            curiosity, collaboration, and bold thinking — ensuring every client
            engagement not only delivers immediate value but also builds
            long-term capability.
          </>
        ),

        linkedin: "https://www.linkedin.com/in/naeemharnekar/",
      },
      {
        name: "Lancy Dsouza",
        shortName: "Lancy",
        designation: "Chief Financial Officer",
        shortDesignation: "Chief Financial Officer",
        image: icons.leadership_1,
        detailImage: icons.leadership_1,
        description: (
          <>
            As Chief Financial Officer of NeuIQ, Lancy brings a sharp focus on{" "}
            <b>
              financial discipline, scalable growth, and strategic investment
            </b>
            . With <b>20+ years of experience</b>, he has built a reputation for
            turning complex financial frameworks into engines of clarity and
            confidence.
          </>
        ),
        descriptionTwo: (
          <>
            At NeuIQ, Lancy ensures that every decision balances short-term
            agility with long-term sustainability. By championing transparency,
            accountability, and trust, he helps build an environment where
            NeuIQ’s people thrive and where clients know they have a partner
            committed to sustainable, transformational outcomes.
          </>
        ),

        linkedin: "https://www.linkedin.com/in/lancy-dsouza-87553a58/",
      },
      {
        name: "Julie Gandhi",
        shortName: "Julie",
        designation: "SVP of Customer Success",
        shortDesignation: "CLIENT SUCCESS",
        image: icons.julieImage,
        detailImage: icons.julieImage,
        description: (
          <>
            As a <b>Client Success leader</b> at NeuIQ, Julie brings{" "}
            <b>20+ years of experience</b> in enterprise transformation, AI
            enablement, and data engineering. Having served as both a client and
            a strategic partner, she offers a{" "}
            <b>unique perspective on solving complex challenges</b>.
          </>
        ),
        descriptionTwo: (
          <>
            Julie is recognized for building{" "}
            <b>trusted relationships with global enterprises</b>, aligning
            business models, platforms, and AI-driven solutions to achieve
            measurable outcomes across the customer and user journey.
          </>
        ),

        linkedin: "https://www.linkedin.com/in/julie-gandhi-3649544/",
      },
      {
        name: "Rodney Lobo",
        shortName: "Rodney",
        designation: "SVP of Growth",
        shortDesignation: "GROWTH",
        image: icons.rodneyImage,
        detailImage: icons.rodneyImage,
        description: (
          <>
            Rodney is a <b>dynamic growth leader</b> with expertise across Data,
            Analytics, Market Research, and AI. He has built enduring client
            partnerships rooted in <b>trust and delivery excellence</b>,
            consistently driving measurable outcomes and long-term impact.
          </>
        ),
        descriptionTwo: (
          <>
            At NeuIQ, Rodney combines{" "}
            <b>strategic foresight with disciplined execution</b> to uncover
            opportunities, scale innovation, and fuel business expansion. Widely
            respected for his <b>client-first approach</b>, he plays an
            instrumental role in shaping NeuIQ’s growth story.
          </>
        ),

        linkedin: "https://www.linkedin.com/in/rodney-lobo/",
      },
      {
        name: "Jitesh Marlecha",
        shortName: "Jitesh",
        designation: "SVP of Growth",
        shortDesignation: "GROWTH",
        image: icons.jiteshImage,
        detailImage: icons.jiteshImage,
        description: (
          <>
            As <b>SVP, Growth</b> at NeuIQ, Jitesh brings{" "}
            <b>20+ years of experience</b> across data, technology, and
            enterprise consulting. Known for building trusted client
            partnerships, he combines strategic vision with hands-on
            problem-solving to deliver measurable outcomes.
          </>
        ),
        descriptionTwo: (
          <>
            At NeuIQ, Jitesh champions <b>collaboration and innovation</b>,
            working closely with clients to unlock opportunities and create
            lasting value. His leadership plays a pivotal role in shaping
            NeuIQ’s growth trajectory and long-term impact.
          </>
        ),

        linkedin: "https://www.linkedin.com/in/jitesh-marlecha-86127919/",
      },
      {
        name: "Hiren Mange",
        shortName: "Hiren",
        designation: <>SVP of Technology Services</>,
        shortDesignation: "TECH SERVICES",
        image: icons.hirenImage,
        detailImage: icons.hirenImage,
        description: (
          <>
            As <b>SVP, Technology Services</b> at NeuIQ, Hiren brings{" "}
            <b>20+ years of experience</b> in Cloud, Data, Media, and MarTech
            services. Over his career, he has built and led large-scale teams
            that deliver innovative, high-impact solutions for global enterprise
            clients.
          </>
        ),
        descriptionTwo: (
          <>
            Recognized for blending{" "}
            <b>deep technical expertise with strategic leadership</b>, Hiren
            drives operational excellence, shapes scalable technology platforms,
            and ensures solutions deliver measurable business outcomes. He
            inspires teams to innovate, stretch boundaries, and consistently
            achieve at the highest level.
          </>
        ),

        linkedin: "https://www.linkedin.com/in/hirenmange/",
      },
      {
        name: "Gaurav Jain",
        shortName: "Gaurav",
        designation: "SVP OF TECHNOLOGY SERVICES",
        shortDesignation: "TECH SERVICES",
        image: icons.gauravImage,
        detailImage: icons.gauravImage,
        description: (
          <>
            Gaurav brings <b>20+ years of leadership</b> in technology services,
            driving AI enablement, customer experience, and enterprise
            transformation to deliver measurable outcomes. As a key member of
            NeuIQ leadership team, he leads technology implementation that helps
            clients scale AI innovation and accelerate transformation.
          </>
        ),
        descriptionTwo: (
          <>
            Known for blending{" "}
            <b>deep tech expertise with a people-first approach</b>, he has
            built global practices, forged partnerships, and guided teams to
            deliver sustainable growth.
          </>
        ),

        linkedin: "https://www.linkedin.com/in/gaurav-jain-30289115/",
      },
      {
        name: "Sonia Thakurani",
        shortName: "Sonia",
        designation: "SVP of Data Engineering & AI Services",
        shortDesignation: "DATA & AI SERVICES",
        image: icons.soniaImage,
        detailImage: icons.soniaImage,
        description: (
          <>
            Sonia leads <b>Data Engineering and AI Services</b> at NeuIQ,
            driving transformative solutions that turn complex data into
            actionable insights. With a proven track record of delivering{" "}
            <b>high-impact enterprise solutions</b>, she specializes in shaping
            scalable AI architectures, modernizing data and analytics platforms,
            and enabling organizations to harness intelligence across operations
            and customer experiences.
          </>
        ),
        descriptionTwo: (
          <>
            At NeuIQ, Sonia inspires teams to innovate and solve complex
            challenges, ensuring that every engagement delivers measurable
            business value.
          </>
        ),

        linkedin: "https://www.linkedin.com/in/sonia-thakurani-97b5868/",
      },
      {
        name: "Narayan Venkatishvaran",
        shortName: "Narayan",
        designation: "SVP of Operations",
        shortDesignation: "OPERATIONS",
        image: icons.narayanImage,
        detailImage: icons.narayanImage,
        description: (
          <>
            Narayan is <b>Operations Leader</b> at NeuIQ, thriving on solving
            complex challenges and building scalable systems. With{" "}
            <b>20+ years of experience</b> leading global teams, he designs
            processes that balance efficiency with agility.
          </>
        ),
        descriptionTwo: (
          <>
            A <b>Six Sigma Black Belt</b>, Narayan applies a results-driven
            approach while fostering collaboration and continuous improvement.
            His leadership ensures that{" "}
            <b>strategy consistently translates into execution</b>, making
            operations a strong backbone for NeuIQ’s growth.
          </>
        ),

        linkedin: "https://www.linkedin.com/in/narayan-venkatishvaran-39856b6/",
      },
      {
        name: "Mohammed Lokhandwala",
        shortName: "Mohammed",
        designation: "SVP of People & Culture",
        shortDesignation: "PEOPLE & CULTURE",
        image: icons.mohammedImage,
        detailImage: icons.mohammedImage,
        description: (
          <>
            Mohammed is a <b>People & Culture leader</b> at NeuIQ, shaping
            workplaces where people feel valued, inspired, and challenged to
            grow. With <b>22+ years of experience in HR</b>, he brings a
            people-first approach to hiring, policy design, and leadership
            development.
          </>
        ),
        descriptionTwo: (
          <>
            Known for <b>listening deeply and designing practical policies</b>,
            Mohammed has built inclusive environments where employees thrive and
            innovate. At NeuIQ, he balances strategy with empathy, ensuring
            culture and capability grow hand in hand.
          </>
        ),

        linkedin: "https://www.linkedin.com/in/lokhandwalamohammed/",
      },
    ],
  },
];

const LeadershipSection = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  return (
    <div
      className="lg:px-10 px-4 md:py-10 pt-0 max-w-full mx-auto"
    >
      {/* Sections */}
      {leadershipSections.map((section, i) => (
        <div key={i} style={{ marginBottom: "50px" }}>
          <h3
            style={{
              color: "#00B2C6",
              fontWeight: "700",
              fontSize: "22px",
              marginBottom: "24px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            {/* {section.title} */}
          </h3>

          {/* Simple Grid */}
          <div
            className="flex flex-wrap gap-10 justify-center md:justify-start max-w-[1440px]">
            {section.members.map((leader, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedLeader(leader)}
                className="cursor-pointer text-center w-full sm:w-[280px] md:w-[320px] lg:w-[350px]"
              >
                {/* Image */}
                <div
                  className="w-full h-[400px] sm:h-[320px] md:h-[350px] rounded-xl shadow-md mb-3"
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Name and Designation */}
                <div>
                  <div className="font-bold text-lg text-cyan-600 uppercase">
                    {leader.shortName}
                  </div>
                  <div className="font-bold text-sm sm:text-base text-black uppercase mt-1">
                    {leader.shortDesignation}
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedLeader && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 sm:p-6"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="bg-white rounded-xl w-full max-w-4xl flex flex-col md:flex-row shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Image */}
            <div className="w-full md:w-2/5">
              <img
                src={selectedLeader.detailImage}
                alt={selectedLeader.name}
                className="w-full h-64 sm:h-64 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-3/5 p-4 sm:p-6 md:p-8 text-left">
              <h4 className="text-cyan-600 font-bold text-xl sm:text-2xl md:text-3xl mb-2 uppercase">
                {selectedLeader.name}
              </h4>
              <p className="font-bold text-sm sm:text-base md:text-lg mb-4 uppercase">
                {selectedLeader.designation}
              </p>
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                  {selectedLeader.description}
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-800">
                  {selectedLeader.descriptionTwo}
                </p>
              </div>
              {selectedLeader.linkedin && (
                <a
                  href={selectedLeader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-[#0077B5] text-2xl sm:text-3xl md:text-4xl"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-none border-none text-2xl sm:text-3xl font-bold text-gray-600 hover:text-gray-800 cursor-pointer"
              aria-label="Close Modal"
            >
              <LiaTimesSolid className="text-white md:text-black" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default LeadershipSection;

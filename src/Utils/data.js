import { PATH } from "./constants";
import { icons } from "./icons";

// Menu data
export const menu = [
  {
    label: "What We Do",
    path: PATH.whatWeDo,
    links: [
      {
        name: "Advisory",
        path: PATH.advisory,
        sublinks: [
          { name: "AI Readiness", path: PATH.Aireadiness },
          { name: "Data", path: PATH.AdvisoryData },
          {
            name: "Customer Experience",
            path: PATH.AdvisoryCustomerExperience,
          },
          { name: "User Experience", path: PATH.AdvisoryUserExperience },
        ],
      },
      {
        name: "Data Engineering",
        path: PATH.dataEngineering,
        sublinks: [
          { name: "Data Unification", path: PATH.DataUnification },
          { name: "Data Modernization", path: PATH.DataModernization },
          { name: "Data for AI", path: PATH.DataforAI },
          { name: "Data to Insights", path: PATH.DatatoInsights },
        ],
      },
      {
        name: "Tech Services",
        path: PATH.TechServices,
      },
    ],
  },
  {
    label: "Partnerships",
    path: "#",
    links: [{ name: "Qualtrics", path: PATH.QualtricsXmService }],
  },
  {
    label: "Company",
    path: "#",
    links: [
      { name: "About NeuIQ", path: PATH.aboutus },
      { name: "Newsroom", path: PATH.NewsRoom },
    ],
  },

  { label: "Careers", path: PATH.Careers },

  { label: "Contact Us", path: PATH.Contactus },
];

// Home page data
export const homePageData = {
  banner: {
    title: "START WITH YOUR DATA. \n ACTIVATE WITH AI. \nLEAD WITH ADVANTAGE.",
    subtitle:
      "Data Engineering and AI Orchestration services to transform your operations and customer experience. \n So you can innovate faster, operate smarter, and lead with confidence.",
    boldLines: [2], // bold the 3rd line
    contactUs: true,
  },
  neuiqEdgeData: {
    title: "WE ARE PURPOSE BUILT",
    description: "DATA ENGINEERING, AI ENABLED TECH SERVICES PARTNER",
    cardData: [
      {
        title: "Focus on what moves the needle",
        description:
          "Prioritize high-impact AI use cases. Align data, operations, customer experience, and user experience strategies to support scalable solutions. Build a roadmap that delivers measurable outcomes, rooted in clarity, not hype.",
      },
      {
        title: "Make your data work for intelligent AI",
        description:
          "Unify fragmented data across silos and modernize legacy pipelines. Build a foundation where AI can thrive and insights flow seamlessly. Turn raw data into reliable intelligence that powers faster decisions, smarter operations, and measurable business growth.",
      },
      {
        title: "From architecture to activation",
        description:
          "Deploy AI, automation, and enterprise platforms with speed and precision. Build intelligent workflows, integrate the right tools, and scale what matters across CX & Operations. Optimize for long-term impact.",
      },
    ],
  },
  whatWeDoData: {
    title: "OUR SERVICES",
    description:
      "We guide organizations on their digital transformation journey by offering expertise in experience management and enterprise operations, addressing critical data needs, implementing and managing AI-powered platforms to achieve maximum impact.",
    cardData: [
      {
        title: "ADVISORY",
        image: icons.advisory,
        list: [
          { label: "AI Readiness", navigation: PATH.Aireadiness },
          { label: "Data", navigation: PATH.AdvisoryData },
          {
            label: "Customer Experience",
            navigation: PATH.AdvisoryCustomerExperience,
          },
          { label: "User Experience", navigation: PATH.AdvisoryUserExperience },
        ],
        navigation: PATH.advisory,
      },
      {
        title: "DATA ENGINEERING",
        image: icons.data_engineering,
        list: [
          { label: "Data Unification", navigation: PATH.DataUnification },
          { label: "Data Modernization", navigation: PATH.DataModernization },
          { label: "Data for AI", navigation: PATH.DataforAI },
          { label: "Data to Insights", navigation: PATH.DatatoInsights },
        ],
        navigation: PATH.dataEngineering,
      },
      {
        title: "TECH SERVICES",
        image: icons.techservices,
        list: [
          { label: "Implementation", navigation: "/" },
          { label: "Engineering", navigation: "/" },
          { label: "AI Enablement", navigation: "/" },
          { label: "Managed Services", navigation: "/" },
        ],
        navigation: PATH.TechServices,
      },
    ],
  },
  newIqInTheNewsData: {
    title: "NEUIQ IN THE NEWS",
    carouselData: [
      {
        title: "Celebrating the Launch of NeuIQ. Where Our Journey Begins",
        image: icons.carousel_1,
      },
      {
        title:
          "Accelerating AI Vision: Sonia Thakurani Joins NeuIQ as Lead AI Strategist",
        image: icons.carousel_2,
      },
      {
        title:
          "NeuIQ Forges Key Partnership with Trilliad a Growth Service Provider",
        image: icons.carousel_3,
      },
      {
        title: "NeuIQ Partners with Qualtrics to Elevate Experience Management",
        image: icons.carousel_4,
      },
      {
        title: "Leading with Purpose: Proud Gold Sponsor of the X4 Summit",
        image: icons.carousel_5,
      },
      {
        title: "Beyond Beginnings: Expanding into Our Second Office",
        image: icons.carousel_6,
      },
      {
        title: "NeuIQ at the Forefront of Data and AI at the 3rd IT Conference",
        image: icons.carousel_7,
      },
    ],
  },
  callToAction: {
    title: "LET'S CO-CREATE \n VALUE TOGETHER",
    bgImage: icons.homePageContactFooter,
  },
};

// Advisory > Main Page
export const advisoryMainPageData = {
  banner: {
    title: "ADVISORY TO POWER \n YOUR NEXT LEAP",
    subtitle:
      "Action-oriented guidance to help you unlock the full potential of your data. From AI readiness to experience design, \n we guide enterprises at every step of their data and digital evolution.",
    boldLines: [0, 1],
    contactUs: true,
  },
  challengesweneed: {
    title: "Challenges <br/> We Help Solve",
    image: icons.challenges,
    data: [
      {
        description:
          "Mapping customer journeys to identify pain points and opportunities",
      },
      {
        description:
          "Visualizing the end-to-end customer experience across touchpoints and identify friction points",
      },
      {
        description:
          "Fostering a motivated workforce by tracking employee engagement and optimizing EX programs",
      },
      {
        description:
          "Providing actionable recommendations to enhance the user experience",
      },
      {
        description:
          "Ensuring a successful international launch with rolling research",
      },
      {
        description:
          "Providing actionable recommendations to enhance the user experience",
      },
      {
        description:
          "Visualizing the end-to-end customer experience across touchpoints and identify friction points",
      },
    ],
  },
  capabilities: {
    title: "OUR CAPABILITIES",
    cardData: [
      {
        title: "AI READINESS",
        image: icons.ai_readiness_icon,
        Link: PATH.Aireadiness,
        desc: `Evaluate your readiness to adopt AI at scale. Across data, use cases, tooling, and governance. We also support change enablement to align people, processes, and culture for sustainable AI impact.`,
      },
      {
        title: "DATA",
        image: icons.advisory_data_icon,
        Link: PATH.AdvisoryData,
        desc: `We help you build a modern, business-aligned data foundation. Covering strategy and governance, architecture, quality, discovery, and analytics readiness.`,
      },
      {
        title: "CUSTOMER EXPERIENCE",
        image: icons.advisory_customer_experience_icon,
        Link: PATH.AdvisoryCustomerExperience,
        desc: `Redesign customer journeys with insight and intention. Our CX advisory helps you identify friction points, unlock value from feedback, and create experience strategies that drive loyalty and growth.`,
      },
      {
        title: "USER EXPERIENCE",
        image: icons.advisory_user_experience_icon,
        Link: PATH.AdvisoryUserExperience,
        desc: `We help teams uncover deep user insights through qualitative and quantitative research. From need-finding to usability testing, we guide product and design decisions with evidence. Not assumptions.`,
      },
    ],
  },
  callToAction: {
    title: "Get Expert Guidance on\nYour Next Big Move",
    bgImage: icons.advisoryPageContactFooter,
  },
  hexagonMake: {
    data: [  { title: 'SLOW SILOED, OR UNSUSTAINABLE TRANSFORMATION INITIATIVES', description: "Whether it's tech modernization, data productization, or AI scaling. We help accelerate progress, unlock hidden value, and enable enterprise-wide impact." },
    { title: 'UNCLEAR AI PRIORITIES & ROADMAP', description: 'Struggling to align AI investments with business goals? We help define the right use cases, build vs. buy decisions, and adoption strategies tailored to your needs.' },
    { title: 'FRAGMENTED & FRUSTRATING USER EXPERIENCES', description: 'Streamline digital experiences across touchpoints. Bridging UX gaps to ensure intuitive, consistent, and outcome-driven user journeys.' },
    { title: 'DISPARATE & UNUSABLE DATA SYSTEMS', description: 'We address fragmented, siloed, or non-AI-ready data by designing scalable data architectures that power faster, smarter decision-making.' },
    { title: 'UNDERPERFORMING CX PROGRAMS', description: 'From strategy to activation, we help reimagine customer experience programs to deliver faster insights, proactive actions, and measurable improvement in metrics like NPS.' },
    { title: 'POOR INTEGRATION OF AI INTO WORKFLOWS', description: 'Many companies deploy AI tools, but few operationalize them. We guide integration of AI into core workflows to drive measurable business impact.' },
  ]}
   
};

// Tech Services > Main Page
export const techServicesMainPage = {
  banner: {
    title: "PREPARE FOR \n PEAK PEFORMANCE",
    subtitle:
      "Equip your business with expert Implementation, Engineering, AI Enablement,  \n  and Managed Services, ensuring you have the support to master every stage of your journey.",
    boldLines: [0, 1],
    contactUs: true,
  },
  capabilities: {
    title: "OUR CAPABILITIES",
    cardData: [
      {
        title: "IMPLEMENTATION",
        image: icons.tech_ser_implementation,
        desc: `Bringing big ideas to life takes more than strategy. It takes disciplined delivery. We implement enterprise platforms, AI tools, and automation solutions that are built to scale and made to work.`,
      },
      {
        title: "ENGINEERING",
        image: icons.tech_ser_eng,
        desc: `To support innovation, you need infrastructure that adapts. We design and develop robust systems, APIs, and workflows that connect tools, teams, and outcomes across the enterprise.`,
      },
      {
        title: "AI ENABLEMENT",
        image: icons.tech_ser_AI_enab,
        desc: `AI delivers impact when integrated into real processes. We help identify high-leverage use cases, activate copilots and models, and operationalize AI across customer experience and operations.`,
      },
      {
        title: "MANAGED SERVICES",
        image: icons.tech_ser_mang_serv,
        desc: `Transformation doesn’t stop at launch. From ongoing support to continuous improvement, we manage your platforms, automation, and AI to ensure long-term performance and adaptability.`,
      },
    ],
  },
  callToAction: {
    title: "BUILD WITH SPEED. \n OPERATE WITH CONFIDENCE.",
    bgImage: icons.techServicesPageContactFooter,
  },
};

// Data Engineering > Main Page
export const dataengineeringPage = {
  banner: {
    title: "YOUR PATH TO AI \n STARTS WITH THE \n RIGHT DATA CLIMB",
    subtitle:
      "Data Engineering and AI Orchestration services to transform your operations and customer experience. \n So you can innovate faster, operate smarter, and lead with confidence.",
    boldLines: [0, 1, 2],
    contactUs: true,
  },
  capabilities: {
    title: "OUR CAPABILITIES",
    cardData: [
      {
        title: "DATA UNIFICATION",
        image: icons.data_uni_icons,
        Link: PATH.DataUnification,
        desc: `Break down data silos across systems, formats, and business units. We build centralized pipelines and golden records that create a single source of truth across your enterprise.`,
      },
      {
        title: "DATA MODERNIZATION",
        image: icons.data_gif_icon,
        desc: `Re-architect your legacy systems with cloud-native platforms like Snowflake, Databricks, and Microsoft Fabric. We help you move from batch ETL to scalable, real-time data pipelines.`,
        Link: PATH.DataModernization,
      },
      {
        title: "DATA FOR AI",
        image: icons.customer_experience_icon,
        desc: `AI is only as good as the data behind it. We ensure your data is labeled, structured, and enriched to feed AI models. Supporting everything from foundation models to custom ML.`,
        Link: PATH.DataforAI,
      },
      {
        title: "DATA TO INSIGHTS",
        image: icons.data_to_insight,
        desc: `Enable business users with reliable, GPT Powered, self-serve analytics. We build governed data layers and reporting ecosystems that turn raw data into actionable dashboards and KPIs.`,
        Link: PATH.DatatoInsights,
      },
    ],
  },
  callToAction: {
    title: "MODERNIZE YOUR DATA. \n MAXIMIZE YOUR IMPACT",
    bgImage: icons.dataEngPageContactFooter,
  },
};

// Advisory > Employee Experience Page
export const EmployeeExpPageData = {
  banner: {
    title: "Employee Experience",
    subtitle:
      "Empowering People, Elevating Performance : Crafting Exceptional Employee Experiences",
    description:
      "Empowering People, Elevating Performance : Crafting Exceptional Employee Experiences",
    image: icons.advisoryemployee,
  },
  ourServices: {
    title: "Our Services",
    data: [
      {
        title: "Advisory",
        description: [
          "We focus on helping organizations design and implement strategies that enhance every stage of the employee journey. By aligning culture, technology, and processes, our advisory services create a seamless, engaging, and productive work environment.",
          " <strong>Our experts help you analyze current challenges, identify opportunities for improvement,</strong> and deliver tailored solutions to boost employee satisfaction, retention, and performance. ",
          "From onboarding to growth and retention, we ensure organizations foster a people-first culture that drives business success.",
        ],
        image: icons.service_1,
      },
      {
        title: "Implementation",
        description: [
          "We focus on turning strategies into action by deploying the tools, technologies, and processes needed to enhance the employee journey. ",
          "We help organizations <strong>implement solutions that streamline workflows, improve engagement, and create seamless experiences across every touchpoint </strong> — from onboarding to development and retention.",
          "<strong>By integrating platforms, optimizing processes, and aligning systems with business goals </strong> we enable organizations to deliver a productive, people-first environment that drives employee satisfaction and organizational success.",
        ],
        image: icons.service_2,
      },
      {
        title: "Ongoing XM Services",
        description: [
          "<strong>We provide continuous support</strong> to ensure your employee experience initiatives remain effective, scalable, and aligned with evolving business needs.",
          "<strong>We offer proactive management, optimization, and maintenance of EX platforms, tools, and processes to drive</strong> consistent engagement and satisfaction.",
          "By monitoring performance, addressing challenges, and implementing enhancements, we help organizations sustain a seamless, productive, and people-centric workplace, enabling long-term success and measurable outcomes.",
        ],
        image: icons.service_3,
      },
    ],
  },
};

// Advisory > Advisory data Page
export const advisoryData = {
  title: "Our Services",
  // description:"",
  banner: {
    title: "Extract value from your data with the right strategy",
    description:
      "Build scalable AI-enabled data ecosystem to drive meaningful impact",
    image: icons.advisoryDatabanner,
  },
  data: [
    {
      title: "Data Vision and Goals",
      description: [
        "For the success of a data engineering project focus is needed on crafting a clear and actionable Data Goals so that every milestone is driven by a clear data strategy.",
        "</br>This includes:</br><ol><li>1. Collaborating with stakeholders</li><li>2. Craft a data vision- with measure impact</li><li>3. Clear and exhaustive documentation</li></ol>",
      ],
      // image: icons.data,
      image: icons.service_1,
      Link: "",
    },
    {
      title: "Data Maturity & Architecture Optimization",
      description: [
        "As part of Data Strategy services, for every project, we help access the data maturity.",
        "For long running projects, Through a thorough evaluation of existing data infrastructure, we design and optimize data architecture that is scalable, flexible, and aligned with business needs.",
      ],
      image: icons.service_2,
      Link: "",
    },
    {
      title: "Data Governance",
      description: [
        "As part of our Data Strategy Services, we emphasize robust Data Governance to ensure the integrity, security, and compliance of data throughout the lifecycle of a project. Our approach to data governance involves establishing clear policies, processes, and roles for data management, ensuring that data is accurate, consistent, and accessible to the right stakeholders.",
      ],
      image: icons.service_3,
      Link: "",
    },
    {
      title: "Data Strategy Roadmap",
      description: [
        "By identifying key data priorities, assessing current capabilities, and setting actionable goals, we provide a structured approach to data transformation that guides the organization from vision to execution.",
        "Our data strategy roadmap ensures that organizations are equipped with the tools and frameworks necessary to achieve both immediate project success and long-term data-driven growth.",
      ],
      image: icons.service_4,
      Link: "",
    },
  ],
};

// Advisory > Customer Experience Page
export const customerExperienceData = {
  title: "Our Services",
  // description:"",
  banner: {
    title: "Customer Experience",
    description:
      "We craft exceptional experiences that inspire and elevate human connection",
    image: icons.customer_experience,
  },
  data: [
    {
      title: "Advisory",
      description: [
        "We enable businesses to strengthen customer loyalty, improve satisfaction, and drive revenue growth while aligning customer experience initiatives with overall business objectives.",
        "We help organizations <strong>design, implement, and optimize strategies</strong> to enhance customer interactions across all touchpoints. Our services focuses on understanding customer needs, mapping their journey, and identifying pain points to create seamless, personalized experiences. By leveraging data-driven insights, advanced technologies, and best practices.",
      ],
      image: icons.service_1,
      Link: "",
    },
    {
      title: "Implementation",
      description: [
        "We help you turn your CX strategies into actionable, impactful outcomes by deploying the right tools, technologies, and processes.",
        "Our services includes <strong>implementing and integrating CX platforms, harnessing its capabilities,</strong> optimizing customer journey workflows, and aligning organizational practices with the desired experience vision.",
        "It also includes <strong>engineering expertise required towards building custom solutions, developing APIs</strong> for omnichannel engagement and more.",
      ],
      image: icons.service_2,
      Link: "",
    },
    {
      title: "Ongoing XM Services",
      description: [
        "We simplify the complexities of managing CX platform resources. From tight deadlines to skill gaps, <strong>our expert team provides flexible, reliable services</strong> to fast-track your projects and maximize platform value.",
        "With deep expertise in CX technologies and best practices, we not only accelerate outcomes but also empower your team with confidence and knowledge.",
        "Companies trust NeuIQ for <strong>dedicated XM services and specialized staff augmentation</strong>, ensuring their goals are met on time and with precision.",
      ],
      image: icons.service_3,
      Link: "",
    },
  ],
};

// Advisory > User Experience Page
export const UserExperienceData = {
  banner: {
    title: "User Experience",
    subtitle: [
      "Embracing Continuous Improvement...",
      "Designing Seamless Experiences...",
    ],
    description:
      "<span class='mb-3 inline-block leading-tight'>Embracing Continuous</br> Improvement...</span> </br> <span class='mb-3 inline-block leading-tight'>Designing Seamless</br> Experiences...</span></br> <span><q><i class='font-bold'>That Delight and Inspire</i></q><span>",
    italicText: "<That Delight and Inspire",
    image: icons.user_experience,
  },
  ourServices: {
    title: "Our Services",
    data: [
      {
        title: "Advisory",
        description: [
          "We help organizations design and optimize intuitive, user-centric experiences that drive engagement and satisfaction. ",
          " <strong>Our team of Global UXR's analyze user behaviors, identify pain points, and provide strategic guidance </strong>  to enhance digital and physical touchpoints.",
          "By aligning design, functionality, and business goals, we deliver tailored solutions that improve usability, streamline interactions, and create meaningful connections, ensuring exceptional experiences that resonate with users and deliver measurable results.",
        ],
        image: icons.service_1,
      },
      {
        title: "Implementation",
        description: [
          "We ensure seamless deployment and optimization of top user experience platforms to deliver intuitive, engaging, and efficient solutions. ",
          " <strong>Our experts specialize in configuring, customizing, and integrating leading UX tools </strong> to meet your unique business needs.",
          "From design implementation to platform alignment, we focus on enhancing usability, streamlining workflows, and driving user adoption. Allowing organizations to unlock the full potential of their UX investments.",
        ],
        image: icons.service_2,
      },
      {
        title: "Ongoing XM Services",
        description: [
          "We provide ongoing support to help organizations continuously understand user needs, behaviors, and preferences.",
          "<strong>Our team of Global UXR's conducts in-depth research, including usability testing, user interviews, and data analysis ,</strong> to uncover actionable insights that drive design and strategy decisions.",
          "By managing the research process end-to-end, we enable organizations to stay user-focused, identify opportunities for improvement, and deliver experiences that are intuitive, impactful, and aligned with evolving user expectations.",
        ],
        image: icons.service_3,
      },
    ],
  },
};

// Data Engineering Page
export const dataEngineeringData = {
  banner: {
    title: "Build powerful data platforms that deliver faster insights",
    description:
      "We design and implement scalable AI-enabled data ecosystem to drive meaningful impact",
    image: icons.dataEngineeringPoly,
    // image: icons.data_engineering,
  },
  challengesweneed: {
    title: "Challenges <br/> We Help Solve",
    image: icons.challenges_data_eng,
    data: [
      {
        description:
          "Mapping customer journeys to identify pain points and opportunities",
      },
      {
        description:
          "Visualizing the end-to-end customer experience across touchpoints and identify friction points",
      },
      {
        description:
          "Fostering a motivated workforce by tracking employee engagement and optimizing EX programs",
      },
      {
        description:
          "Providing actionable recommendations to enhance the user experience",
      },
      {
        description:
          "Ensuring a successful international launch with rolling research",
      },
      {
        description:
          "Mapping customer journeys to identify pain points and opportunities",
      },
      {
        description:
          "Visualizing the end-to-end customer experience across touchpoints and identify friction points",
      },
    ],
  },
  capabilities: {
    title: "What We Do",
    subtitle: "Capabilities",
    image: icons.lightbulbWhite,
    cardData: [
      {
        title: "Data Unification",
        description: [
          "We help you bring all your data together to transform it into your strategic asset ensuring accuracy, consistency, and actionable insights.",
          "Our expertise spans leading cloud platforms like AWS, Snowflake, Apache Airflow, Talend, Trifacta, dbt, and Databricks, enabling us to deliver scalable and efficient solutions.",
          "By automating task scheduling, error management, and performance monitoring 24/7, we ensure seamless data operations that empower your business to make smarter, faster decisions. ",
        ],
        image: icons.data_unification_card,
        // image: icons.service_1,
        Link: PATH.dataUnification,
      },
      {
        title: "Data Modernization",
        description: [
          "We specialize in AI-enabled data migration and modernization services to help your business stay ahead in a data-driven world.",
          "Our methodical approach includes testing with pilot projects, migrating data incrementally, and seamlessly transitioning workloads to modern platforms by decommissioning legacy systems with minimal disruption.",
          "Trust us to transform your data infrastructure into a future-ready foundation that enhances scalability, performance, and innovation.",
        ],
        image: icons.data_modernization_card,
        // image: icons.service_1,
        Link: PATH.dataModernization,
      },
      {
        title: "Data for AI",
        description: [
          "We empower businesses to unlock the true potential of AI with tailored data engineering solutions.",
          "From mapping use cases to your data assets to designing a robust data infrastructure, we ensure your data is clean, organized, and ready for your planned AI solution, giving your organization the impetus for AI innovation.",
          "Our expertise includes preparing high-quality training datasets, augmenting data for improved accuracy, and help deploying AI models seamlessly into your operations.",
        ],
        image: icons.data_ai_card,
        // image: icons.service_1,
        Link: PATH.dataai,
      },
      {
        title: "Data to Insights",
        description: [
          "We turn your data into actionable insights that drive business performance. By mapping key performance indicators (KPIs) to your data, we design intuitive AI enabled dashboards that provide a clear, real-time view of your operations.",
          "Our end-to-end approach integrates, cleans, and organizes your data, storing it in a secure warehouse with automated updates for seamless accessibility. With real-time alerts and continuous monitoring, we ensure your organization is always equipped to make informed, data-driven decisions with closed feedback loops.",
        ],
        image: icons.data_insight_card,
        // image: icons.service_1,
        Link: PATH.datainsight,
      },
    ],
  },
};

// Data Engineering > Data Unification Page
export const dataUnificationData = {
  banner: {
    title: "Modern data stacks for the modern enterprise",
    description: "The Foundation for AI-Powered Transformation",
    image: icons.data_unification_banner,
  },
  capabilities: {
    title: "What We Do",
    subtitle: "Capabilities",
    image: icons.lightbulb,
    cardData: [
      {
        title: "Assessment & Strategy Development",
        description: [
          "Every data unification journey begins with a comprehensive assessment of your current data infrastructure, identifying gaps, inefficiencies, and opportunities, be it cost or performance.",
          "Leveraging cutting-edge technologies and platforms such as AWS, Snowflake, Databricks, Talend, and Airflow, we craft a tailored roadmap designed to align with your unique business objectives.</br>This includes:",
          "<ol><li>1. Current Infrastructure Analysis - Sources, Volumes, Painpoints</li><li>2. Business needs alignment</li><li>3. Technology Recommendation and Plan</li></ol>",
        ],
        // image: icons.data,
        image: icons.service_1,
        Link: "",
      },
      {
        title: "Data Integration & Consolidation",
        description: [
          "We specialize in transforming fragmented, disconnected data into a centralized, cohesive system, enabling your organization to unlock its full potential. Using advanced data engineering tools and platforms, we ensure seamless integration and consolidation of your data, setting the foundation for innovation and scale.",
          "This is done by:",
          "<ol><li>1. Integrating diverse sources</li><li>2. Advanced data transformation</li><li>3. Centralized storage</li><li>4. Automated workflows and Orchestration</li></ol>",
        ],
        // image: icons.customerexperience,
        image: icons.service_2,
        Link: "",
      },
      {
        title: "Data Governance",
        description: [
          "As organizations handle ever-growing volumes of data, ensuring consistency, accuracy, and security across the data pipeline is critical for maintaining operational efficiency and meeting regulatory requirements. Robust governance protocols keep your data clean, secure, and compliant— using:",
          "<ol><li>1. Data standardization</li><li>2. MDM</li><li>3. Access Controls</li><li>4. Data quality monitoring</li><li>5. Governance automation</li></ol>",
        ],
        // image: icons.employeeexprience,
        image: icons.service_3,
        Link: "",
      },
      {
        title: "Managed Services",
        description: [
          "DataOps is more than just a process—it’s an ongoing, multi-stage commitment to ensuring that your data infrastructure runs seamlessly and efficiently.",
          "Our DataOps Managed Services are designed to keep your data pipelines optimized, reliable, and future-ready. From continuous monitoring and resource optimization to regular maintenance and upgrades, we take the burden of managing complex data systems off your plate, allowing your teams to focus on innovation and insights.",
        ],
        // image: icons.userexprience,
        image: icons.service_4,
        Link: "",
      },
    ],
  },
  migratemodern: {
    title: "Modernize data with NeuIQ",
    leftsection: {
      description:
        "We’ve migrated and modernized large data systems for numerous large enterprises – the wealth of insights and industrial awareness gained during this journey enables us to provide highly optimized data modernization services to our customers.",
      image: icons.dataModernizInfographic,
    },
    rightsection: {
      description:
        "We enable organizations to leverage modern data technologies while helping them continuously scale with a strong emphasis on technical debt reduction.",
      image: icons.dataModernizInfographic,
    },
  },
  whyChooseUse: {
    title: "Why choose us?",
    data: [
      {
        title: "Reduce technical debt with our modernization framework",
      },
      {
        title:
          "Leverage self-service data ingestions within 30% lesser timeframes",
      },
      {
        title:
          "Automated code conversions accelerate data pipeline builds by 40%",
      },
    ],
  },
};

// Data Engineering > Data modernization Page
export const dataModernization = {
  banner: {
    title: "Modern data stacks for the modern enterprise",
    description: "Transforming Legacy Systems for a Future-Ready Enterprise",
    image: icons.data_modernization_banner,
  },
  whatwedo: {
    data: [
      {
        title: "Assessment and Architecting",
        description: [
          "We believe that the foundation of any successful data modernization and migration strategy begins with a comprehensive Assessment and Architecting phase. Before embarking on a migration journey, it’s crucial to fully understand your existing data landscape and design an architecture that supports future growth, innovation, and efficiency. </br>This includes:",
          " <ul><li>1. Technology Stack Evaluation</li> <li>2. Data Flow Analysis </li> <li>3. Set Success Metrics </li> <li>4. Tailored Data Architecure Design </li> <li>5. Clear Strategy with risk mitigation </li></ul>",
        ],
        // image: icons.data,
        image: icons.service_1,
        Link: "",
      },
      {
        title: "Methodologies",
        description: [
          "Every data migration project is unique, and the path to modernization must be tailored to your specific needs and goals. Our approach to Data Migration Methodologies is built on years of experience, a deep understanding of industry best practices, and a focus on minimizing disruption while maximizing value.",
          "Based on the goal, We build on methodologies like:",
          " <ul><li>1. Lift and Shift Migration</li> <li>2. Replatforming </li> <li>3. Refactoring (Re-architecting) </li> <li>4. Phased </li> <li>5. Hybrid </li></ul>",
        ],
        // image: icons.data,
        image: icons.service_2,
        Link: "",
      },
      {
        title: "Data Replication",
        description: [
          "Maintaining data integrity, availability, and consistency is critical during data migration and modernization projects. Our Data Replication services ensure that your data is transferred and synchronized smoothly, whether you are migrating between environments or need to establish real-time data replication for business continuity.",
          " This is done through:",
          " <ul><li>1. Cloud migrations - Synchronized source and target </li> <li>2. Disaster recovery and high availability </li> <li>3. Batch Replication </li> </ul>",
        ],
        // image: icons.data,
        image: icons.service_3,
        Link: "",
      },
      {
        title: "Pipeline Refactoring",
        description: [
          "Pipeline refactoring is the process of redesigning and optimizing your existing data pipelines to improve their performance, scalability, and maintainability. As businesses migrate to new platforms or modernize their data systems, old pipelines often need to be revamped to meet the requirements of new technologies, increased data volume, and advanced analytics",
          " Important considerations:",
          " <ul><li>1. Integration with new/existing systems</li> <li>2. Impact on data quality </li> <li>3. Performance and scalability testing </li> <li>4. Data observability - Data Lineage </li> </ul>",
        ],
        // image: icons.data,
        image: icons.service_4,
        Link: "",
      },
    ],
  },
  dataModernization: {
    title: "Modernize data with NeuIQ",
    leftsection: {
      description:
        "We’ve migrated and modernized large data systems for numerous large enterprises – the wealth of insights and industrial awareness gained during this journey enables us to provide highly optimized data modernization services to our customers.",
      image: icons.dataModernizInfographic,
    },
    rightsection: {
      description:
        "We enable organizations to leverage modern data technologies while helping them continuously scale with a strong emphasis on technical debt reduction.",
      image: icons.dataModernizInfographic,
    },
  },
  whyChooseUs: {
    title: "Why choose us?",
    data: [
      {
        title: "Reduce technical debt with our modernization framework",
      },
      {
        title:
          "Leverage self-service data ingestions within 30% lesser timeframes",
      },
      {
        title:
          "Automated code conversions accelerate data pipeline builds by 40%",
      },
    ],
  },
};

// Data Engineering > Data AI Page
export const dataAIData = {
  banner: {
    title: "Modern data stacks for the modern enterprise",
    description: "Data engineering to help unlock the power of AI",
    image: icons.data_ai_banner,
  },
  whatWeDo: {
    title: "What We Do",
    data: [
      {
        title: "Data Collection and Integration",
        description: [
          "We specialize in data collection and transformation using cutting-edge AI-enabled services that ensure your data is ready for high-performance machine learning models. ",
          "By leveraging AI-powered tools, we streamline the process of preparing data for your AI applications, ensuring consistency, accuracy, and scalability across your datasets.",
          "</br>This includes:",
          " <ul><li>1. Data Collection & Integration</li> <li>2. Data Preprocessing & Transformation </li> <li>3. Feature Engineering & Selection </li> </ul>",
        ],
        // image: icons.data,
        image: icons.service_1,
        Link: "",
      },
      {
        title: "Data Architecture & Storage",
        description: [
          "We design and implement scalable data architecture and storage solutions that are tailored to meet the demands of AI-driven applications.",
          "</br>This includes:",
          " <ul><li>1. Vector Database Development: Designing and building vector databases to store and retrieve embeddings for similarity search</li> <li>2. Cloud & On-Premise Data Architecture: Developing scalable data lakes, warehouses, and real-time data processing architectures to support large volumes of AI-ready data </li> </ul>",
        ],
        // image: icons.data,
        image: icons.service_2,
        Link: "",
      },
      {
        title: "Data Labelling and Annotation",
        description: [
          "Data labeling and annotation services provide the accurate and detailed data required to train your AI models effectively. ",
          " Our team uses a combination of manual and automated techniques to label and annotate various types of data—such as images, text, audio, and video—ensuring that each data point is enriched with the appropriate context. ",
          " Depending on your use-case, we tailor our approach to meet the unique needs of your AI application be it object detection in images, sentiment analysis in text, or speech-to-text transcription in audio.",
        ],
        // image: icons.data,
        image: icons.service_3,
        Link: "",
      },
      {
        title: "Monitoring & Improvement",
        description: [
          "We provide comprehensive monitoring and improvement services to ensure that your AI models maintain peak performance over time.",
          " With our proactive monitoring and improvement approach, we help you maintain high-quality data, crucial for driving accurate, actionable insights.",
          "</br>This includes:",
          " <ul><li>1. Real time data quality monitoring dashboards</li> <li>2. Optimize data pipelines as needed for cost and efficiencies </li>  </ul>",
        ],
        // image: icons.data,
        image: icons.service_4,
        Link: "",
      },
    ],
  },
  dataModernization: {
    title: "Modernize data with NeuIQ",
    leftsection: {
      description:
        "We’ve migrated and modernized large data systems for numerous large enterprises – the wealth of insights and industrial awareness gained during this journey enables us to provide highly optimized data modernization services to our customers.",
      image: icons.dataModernizInfographic,
    },
    rightsection: {
      description:
        "We enable organizations to leverage modern data technologies while helping them continuously scale with a strong emphasis on technical debt reduction.",
      image: icons.dataModernizInfographic,
    },
  },
  whyChooseUs: {
    title: "Why choose us?",
    data: [
      {
        title: "Reduce technical debt with our modernization framework",
      },
      {
        title:
          "Leverage self-service data ingestions within 30% lesser timeframes",
      },
      {
        title:
          "Automated code conversions accelerate data pipeline builds by 40%",
      },
    ],
  },
};

// Data Engineering > Data Insights Page
export const dataInsightsData = {
  banner: {
    title: "Modern data stacks for the modern enterprise",
    description: "Transform Raw data to Business Insights",
    image: icons.data_insight_banner,
  },
  whatWeDo: {
    data: [
      {
        title: "Objectives and KPI Mapping",
        description: [
          "<ul><li>1. We understand business objectives, Kpi's that need reporting, frequency of reports and the heirarchy of consumption of reports</li> <li>2. Understand the data ecosystem to map the data points to the KPI's. Identify and gaps where needed. </li> <li>3. Document and update the Data flow diagrams including report access and heirarchy flows.</li> </ul>",
        ],
        // image: icons.data,
        image: icons.service_1,
        Link: "",
      },
      {
        title: "Data Ecosystem",
        description: [
          "We help businesses build a robust data ecosystem that seamlessly integrates, processes, and delivers actionable insights.",
          "</br>This includes:",
          " <ul><li>1. Connecting disparate data sources </li> <li>2.  Leverage AI tools for data cleaning and transformations </li> <li>3. Build orchestration for automated data updates</li> </ul>",
        ],
        // image: icons.data,
        image: icons.service_2,
        Link: "",
      },
      {
        title: "Design and Build Dashboards",
        description: [
          "We specialize in <strong>designing and building dashboards</strong> that transform complex data into clear, actionable business insights using leading platforms like Power BI and Tableau.  ",
          " Our team works closely with you to create intuitive, interactive dashboards and storyboards that provide real-time visibility into key metrics and trends, including critical triggers.",
          "From executive-level overviews to granular analysis, we help build dashboards to deliver the right data to the right people at the right time, empowering your decision-making.",
        ],
        // image: icons.data,
        image: icons.service_3,
        Link: "",
      },
      {
        title: "AI based querying of Data",
        description: [
          "The strength of any insights solution is its ability to speak to a non-technical user. We enable your dashboards to answer queries of users, through a user friendly interface powered by LLM's.",
          " Using technologies like Streamlit, we enable businesses to interact with their data in real time using Natural Language queries.",
        ],
        // image: icons.data,
        image: icons.service_4,
        Link: "",
      },
    ],
  },
  DataModernization: {
    title: "Modernize data with NeuIQ",
    leftsection: {
      description:
        "We’ve migrated and modernized large data systems for numerous large enterprises – the wealth of insights and industrial awareness gained during this journey enables us to provide highly optimized data modernization services to our customers.",
      image: icons.dataModernizInfographic,
    },
    rightsection: {
      description:
        "We enable organizations to leverage modern data technologies while helping them continuously scale with a strong emphasis on technical debt reduction.",
      image: icons.dataModernizInfographic,
    },
  },
  whyChooseUs: {
    title: "Why choose us?",
    data: [
      {
        title: "Reduce technical debt with our modernization framework",
      },
      {
        title:
          "Leverage self-service data ingestions within 30% lesser timeframes",
      },
      {
        title:
          "Automated code conversions accelerate data pipeline builds by 40%",
      },
    ],
  },
};

export const techTransformData = {
  banner: {
    title: "Get the flexibility and value you need from technology",
    description:
      "Optimizing enterprise operations and enhancing experiences via tailored tech services",
    image: icons.techTransformBanner,
  },
  whyTechTransformation: {
    title: "Why technology transformation matters",
    cardData: [
      {
        number: "5X",
        symbol: "",
        description:
          "the revenue growth when leaders double down on investments in technology and innovation",
      },
      {
        number: "57",
        symbol: "%",
        description:
          "of CIO/CTOs are primarily focusing investment on revenue growth as opposed to cutting costs",
      },
      {
        number: "61",
        symbol: "%",
        description:
          "of CIOs are focusing on an overall business transformation, versus a single function, in 2024",
      },
      {
        number: "70",
        symbol: "%",
        description:
          "of enterprise transformation projects fail to meet expectations",
      },
    ],
  },
  challengesweneed: {
    title: "Challenges <br/> We Help Solve",
    image: icons.challenges_tech_service,
    data: [
      {
        description:
          "Tech debt to tech value. Tailored roadmaps for technology transformation",
      },
      {
        description:
          "Replace outdated technologies with scalable, cost-efficient platforms, ensuring future-ready operations",
      },
      {
        description:
          "Seamless integration of new tech with existing systems, reducing complexity & minimizing downtime",
      },
      {
        description:
          "Cost-effective transformations, keeping projects within budget and delivering measurable results",
      },
      {
        description:
          "Filling critical talent gaps and accelerating transformation projects",
      },
      {
        description:
          "Replace outdated technologies with scalable, cost-efficient platforms, ensuring future-ready operations",
      },
      {
        description:
          "Seamless integration of new tech with existing systems, reducing complexity & minimizing downtime",
      },
    ],
  },
  capabilities: {
    title: "What We Do",
    subtitle: "Capabilities",
    image: icons.lightbulbWhite,
    cardData: [
      {
        title: "Implementation",
        description: [
          "Our Customer Experience (CX) Advisory Services are consulting services aimed at helping organizations design, implement, and optimize strategies and practices that enhance every interaction customers have with their brand.",
          "These services focus on delivering seamless, engaging, and personalized experiences to drive customer satisfaction, loyalty, and long-term business growth.",
        ],
        // image: icons.data,
        image: icons.service_1,
        Link: "",
      },
      {
        title: "Engineering",
        description: [
          "We help organizations create and enhance workplace experiences that drive employee engagement, satisfaction, and productivity.",
          "These services focus on understanding employees' needs and crafting strategies, processes, and systems that foster a positive, inclusive, and fulfilling work environment.",
        ],
        // image: icons.customerexperience,
        image: icons.service_2,
        Link: "",
      },
      {
        title: "AI Enablement",
        description: [
          "We help organizations create and enhance workplace experiences that drive employee engagement, satisfaction, and productivity.",
          "These services focus on understanding employees' needs and crafting strategies, processes, and systems that foster a positive, inclusive, and fulfilling work environment.",
        ],
        // image: icons.employeeexprience,
        image: icons.service_3,
        Link: "",
      },
      {
        title: "Managed Services",
        description: [
          "These services focus on understanding employees' needs and crafting strategies, processes, and systems that foster a positive, inclusive, and fulfilling work environment.",
        ],
        // image: icons.userexprience,
        image: icons.service_4,
        Link: "",
      },
    ],
  },
  whatAchieve: {
    title: "What you’ll achieve",
    cardData: [
      {
        image: icons.support,
        title: "A tech strategy everyone supports",
        description:
          "Create a coalition for change with a plan that also fires up your business, tech and finance teams.",
      },
      {
        image: icons.spend,
        title: "Total transparency on where your tech spend is going",
        description:
          "With a clear view, you can decide where to reduce, redistribute and expand your tech investments.",
      },
      {
        image: icons.architecture,
        title: "A vision for your future architecture",
        description:
          "Get the outcomes your business needs while continuously transforming your organization at scale.",
      },
    ],
  },
};

export const qualtricsData = {
  banner: {
    title: "QUALTRICS XM SERVICES",
    subtitle: "Your Partner in Experience Management",
    image: icons.qualtricsBanner,
    boldLines: [0],
    contactUs: true,
  },
  qualtricsCounts: [
    {
      title: "9+ Years",
      image: "",
      description: "Qualtrics Experience",
    },
    {
      title: "300+",
      image: "",
      description: "XM Implementations",
    },
    {
      title: "",
      image: icons.certified_partner,
      description: "Across CX, EX, BX, XM Discover",
    },
    {
      title: "",
      image: icons.earth,
      description: "Americas, APAC, EMEA",
    },
  ],
  challengesweneed: {
    title: "Challenges <br/> We Help Solve",
    image: icons.challenges,
    data: [
      {
        description:
          "Seamless Qualtrics implementation, reducing downtime and ensuring faster time-to-value.",
      },
      {
        description:
          "Historical data & projects migration to Qualtrics's ecosystem",
      },
      {
        description:
          "Training programs, user onboarding, and change management services to drive Qualtrics adoption",
      },
      {
        description:
          "Filling critical talent gaps and accelerating adoption and consumption of your Qualtrics investments",
      },
      {
        description:
          "Seamless Qualtrics implementation, reducing downtime and ensuring faster time-to-value.",
      },
      {
        description:
          "Historical data & projects migration to Qualtrics's ecosystem",
      },
      {
        description:
          "Seamless Qualtrics implementation, reducing downtime and ensuring faster time-to-value.",
      },
    ],
  },
  capabilities: {
    cardData: [
      {
        title: "ADVISORY",
        image: icons.qualtrics_advisory, // Replace with actual image path
        desc: `Tailored advisory solutions to build a world-class experience management practice.
      - XM Maturity Assessment
      - XM Governance & Strategy
      - Customer Journey Mapping
      - Program Design
      - Survey & Metrics Design
      - Insights Reporting
      - Action Planning
      - Coaching & Training and more...`,
      },
      {
        title: "IMPLEMENTATION",
        image: icons.qualtrics_implementation, // Replace with actual image path
        desc: `Fast-track Qualtrics platform adoption with flexible, expert-led delivery.
      - Full-scale Qualtrics Platform Implementation
      - Survey Design & Distribution Strategy
      - Custom Workflows, Automations, and Integrations
      - Dashboarding, Reporting, and Alerts Setup and more...`,
      },
      {
        title: "ENGINEERING & AI ENABLEMENT",
        image: icons.qualtrics_eng_ai, // Replace with actual image path
        desc: `Extend the value of Qualtrics with connected data and intelligence layers
      - Integrate Qualtrics with CRMs, ERPs, Data Lakes & CDPs
      - Build custom connectors, ETL pipelines, and APIs
      - Use AI/ML to automate insight extraction from open text
      - Adopt and enable Qualtrics’ built-in AI features
      - Automation workflows and more...`,
      },
      {
        title: "XM MANAGED SERVICES",
        image: icons.qualtrics_managed_services, // Replace with actual image path
        desc: `Tailored advisory solutions to build a world-class experience management practice.
      - Ongoing Program Management and Survey Ops
      - Panel Management and Sampling Services
      - Dashboard & Reporting Maintenance
      - Experience Data Quality Monitoring
      - Continuous Experience Benchmarking & Optimization and more...`,
      },
    ],
  },
  useCases: {
    useCaseData: [
      {
        title: "Our executive team wants metrics tied to business outcomes",
        content:
          "Leadership is demanding more than dashboards. They want proof of impact. Experience metrics must evolve beyond sentiment to clearly demonstrate how they influence business outcomes like revenue growth, churn reduction, or employee productivity.",
      },
      {
        title:
          "Experience programs are live, but fail to influence daily decisions",
        content:
          "Surveys are launched and dashboards built, but business teams aren’t using them to act. Organizations must close the loop with targeted nudges, workflows, and accountability to turn insights into routine behaviors.",
      },
      {
        title: "AI features in Qualtrics are underutilized or misunderstood",
        content:
          "Teams often don’t trust or understand Qualtrics's AI Features. Organizations must demystify these features and embed them into analysis workflows to extract their full value.",
      },
      {
        title:
          "Lack of integration between Qualtrics and operational systems delays action",
        content:
          "Without real-time data flow between Qualtrics and platforms like Salesforce, Workday, or Zendesk, feedback loops remain broken. Organizations must connect feedback to frontline workflows to accelerate issue resolution.",
      },
      {
        title:
          "Inconsistent metric definitions across departments lead to multiple versions of the truth",
        content:
          "Disparate survey structures and KPI interpretations hinder cross-functional alignment. Organizations must standardize experience metrics and reporting frameworks to drive clarity and trust in insights.",
      },
      {
        title: "Our XM program needs constant tuning, but no one owns it",
        content:
          "XM isn’t a one-and-done project. If internal teams are overwhelmed, one should utilize services partner for ongoing program management, running diagnostics, refreshing surveys, supporting teams, and ensuring your program stays aligned with shifting goals.",
      },
    ],
  },
};

export const newsroomData = {
  banner: {
    title: "Newsroom",
    image: icons.newsroombanner,
  },
  cdoSectionData: {
    itemsPerPage: 6,
    noDataText: "There are no openings currently.",
    tabs: [
      { label: "NeuIQ in the News", title: "newsroom" },
      { label: "Press releases", title: "Press Release" },
      { label: "Featured blogs", title: "Featured Blogs" },
    ],
    cdoData: {
      newsroom: [
        {
          image: icons.trilliadLogo,
          description:
            "Exciting Partnership: NeuIQ and Trilliad Driving the AI-Powered Future of Growth Services.",
          time: "",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7350623826549817344",
        },
        {
          image: icons.short_logo,
          description:
            "NeuIQ’s New Innovation Hub Is Here! Our Second Office Opens to Drive the Next Wave in Data & AI.",
          time: "",
          link: "https://www.linkedin.com/posts/neuiqai_ai-data-innovationhub-activity-7366869682961682434-uW5g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAPG4IkBF2gekoP6RGfooKrgW2usX9lGavI",
        },
        {
          image: icons.qualtricsLogo,
          description:
            "From Signals to Outcomes: NeuIQ x Qualtrics Workshops Driving Smarter, AI-Ready Experiences.",
          time: "",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7364702109042143232",
        },
        {
          image: icons.digitalConfexLogo,
          description:
            "NeuIQ at the Forefront of Data and AI at the 3rd Information Technology Conference 2025.",
          time: "",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7359161969171492864",
        },
        {
          image: icons.short_logo,
          description: `From Silos to Symbiosis! NeuIQ's series on "7 Steps to the AI-Connected Future of CX"`,
          time: "",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7363578822249619458",
        },
        {
          image: icons.neelavImage,
          description: "",
          time: "",
          link: "https://www.linkedin.com/posts/neuiqai_were-pleased-to-welcome-neelav-das-to-the-activity-7374076607097032705-lYHl?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAPG4IkBF2gekoP6RGfooKrgW2usX9lGavI", 
          fullImage: true,
        },
      ],
    },
  },
  cdoData: [
    {
      image: icons.cdoIcon,
      description:
        "Sonia Thakurani recognized as 40 under forty data leaders of 2024 by CDO magazine",
      link: "#",
    },
    {
      image: icons.cdoIcon,
      description:
        "Sonia Thakurani recognized as 40 under forty data leaders of 2024 by CDO magazine",
      link: "#",
    },
    {
      image: icons.cdoIcon,
      description:
        "Sonia Thakurani recognized as 40 under forty data leaders of 2024 by CDO magazine",
      link: "#",
    },
    {
      image: icons.cdoIcon,
      description:
        "Sonia Thakurani recognized as 40 under forty data leaders of 2024 by CDO magazine",
      link: "#",
    },
    {
      image: icons.cdoIcon,
      description:
        "Sonia Thakurani recognized as 40 under forty data leaders of 2024 by CDO magazine",
      link: "#",
    },
    {
      image: icons.cdoIcon,
      description:
        "Sonia Thakurani recognized as 40 under forty data leaders of 2024 by CDO magazine",
      link: "#",
    },
  ],
};

export const careerData = {
  banner: {
    title: "Careers",
    description: "Unlock your potential and advance your career",
    image: icons.careerbanner,
  },
  currentOpenings: {
    title: "Current Openings",
    description:
      "Whether you’re a problem solver or a creative thinker, a specialist or a generalist, amplify your potential with NeuIQ.",
    tabTitle: "Filter by location:",
    itemsPerPage: 5,
    noDataText: "There are no openings currently.",
    countries: ["India", "USA"],
    allJobs: {
      India: [
        {
          id: "1",
          position: "AI Engineer",
          experience: "3 – 4 yrs",
          location: "Mumbai, India",
          team: "Data and AI",
          reports_to: "SVP - Data and AI",
          roleOverview:
            "We are seeking a talented and motivated AI Developer to join our team. In this role, you will be responsible for designing, building, deploying, and managing AI agents that operate on client data. You will work closely with clients and internal teams toensure the AI agents are optimized, reliable, and deliver measurable value. This is a hands-on role that requires a strong technical background, problem-solving skills, and a passion for AI innovation.",
          // applyLink: "#",
          employment_type: "Full-time",
          jobs_summary:
            "We are looking for a talented Software Engineer with 2 yrs of experience. You will be responsible for developing scalable and maintainable applications.",
          key_responsibilities: [
            "Build AI agents tailored to client requirements using state-of-the-art AI/ML techniques.",
            "Develop and fine-tune machine learning models, natural language processing (NLP) systems, and other AI components.",
            "Integrate AI agents with client systems and data pipelines.",
            "Deploy AI agents into production environments, ensuring scalability and reliability.",
            "Implement monitoring systems to track agent performance, detect failures, and ensure uptime.",
            "Proactively manage AI agents to address failures, performance bottlenecks, and data drift.",
            "Continuously optimize AI models and systems to improve accuracy, efficiency, and client outcomes.",
            "Collaborate with clients to understand evolving needs and update AI agents accordingly",
            "Work closely with cross-functional teams, including data scientists, engineers, and product managers.",
            "Communicate technical concepts and solutions to non-technical stakeholders.",
            "Provide regular updates and reports on agent performance and improvements.",
            "Stay up-to-date with the latest advancements in AI/ML technologies and tools.",
            "Experiment with new approaches to enhance the capabilities of AI agents.",
          ],
          keySkills: [
            {
              category: "Technical Expertise",
              items: [
                "Proficiency in programming languages such as Python, Java, or C++.",
                "Strong experience with AI/ML frameworks like TensorFlow, PyTorch, or Hugging Face.",
                "Familiarity with NLP, reinforcement learning, and other AI techniques.",
                "Experience with cloud platforms (e.g., AWS, Azure, GCP) and containerization tools (e.g., Docker, Kubernetes).",
              ],
            },
            {
              category: "Data Handling and Integration",
              items: [
                "Expertise in working with structured and unstructured data.",
                "Experience with data preprocessing, feature engineering, and data pipeline development.",
                "Knowledge of APIs, databases, and ETL processes.",
              ],
            },
            {
              category: "Deployment and Monitoring",
              items: [
                "Hands-on experience deploying AI models into production environments.",
                "Familiarity with monitoring tools (e.g., Prometheus, Grafana) and logging frameworks.",
                "Understanding of CI/CD pipelines and DevOps practices.",
              ],
            },
            {
              category: "Problem-Solving and Analytical Skills",
              items: [
                "Strong ability to troubleshoot and resolve technical issues.",
                "Analytical mindset with a focus on delivering measurable results.",
              ],
            },
          ],
          whyNeuIQ: [
            {
              category: "Culture of Innovation",
              items: [
                "Join a team that values creativity, experimentation, and disruption in the tech industry.",
              ],
            },
            {
              category: "Growth Opportunities",
              items: [
                "NeuIQ is committed to helping our team members grow their skills and careers through learning and development.",
              ],
            },
            {
              category: "Work-Life Balance",
              items: [
                "Flexible work options, including [remote/hybrid/on-site], ensuring you can thrive both personally and professionally.",
              ],
            },
            {
              category: "Diversity and Inclusion",
              items: [
                "At NeuIQ, we celebrate differences and foster a culture where everyone feels valued and heard.",
              ],
            },
          ],
          statement:
            "NeuIQ is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity, sexual orientation, national origin, genetics, disability, age, or veteran status.",
        },
        {
          id: "2",
          position: "Sr. Data Engineer",
          experience: "5 – 10 yrs",
          location: "Mumbai OR Remote, India",
          team: "Technology Services",
          reports_to: "VP- Technology Services",
          roleOverview:
            "We are seeking an experienced Data Engineer to design, develop, and maintain large-scale data solutions. The role involves working with structured and unstructured data, implementing data pipelines, and optimizing database systems to support business intelligence, analytics, and reporting needs. You will collaborate with cross-functional teams to translate business requirements into scalable technical solutions, leveraging cloud technologies and modern data engineering tools.",
          // applyLink: "#",
          employment_type: "Full-time",
          jobs_summary:
            "We are looking for a talented Software Engineer with 2 yrs of experience. You will be responsible for developing scalable and maintainable applications.",
          key_responsibilities: [
            "Design, develop, and maintain data pipelines for data acquisition, transformation, and integration.",
            "Work with structured and unstructured data for large-scale data warehousing and analytics solutions.",
            "Implement data models (relational, star, snowflake schemas) and integrate new data sources into existing architecture.",
            "Utilize cloud-based technologies (e.g., Google Cloud Platform, BigQuery, Airflow) for data processing and management.",
            "Optimize SQL queries, scripts, and data workflows for performance and scalability.",
            "Collaborate with stakeholders to gather data requirements and ensure solutions meet business needs.",
            "Maintain high standards of data quality, security, and compliance.",
            "Support reporting and BI tools, enabling business teams to access actionable insights.",
            "Work within Agile/Scrum methodologies using tools like JIRA.",
          ],
          keySkills: [
            {
              category: "",
              items: [
                "Bachelor's degree or higher in Computer Science, Engineering, Statistics, Mathematics, or related field.",
              ],
            },
            {
              category: "",
              items: [
                "8+ years of experience in data warehousing development, data acquisition, transformation, and cleaning.",
              ],
            },
            {
              category: "",
              items: [
                "4+ years of experience with cloud-based technologies such as Google Cloud Platform, Airflow, and BigQuery.",
              ],
            },
            {
              category: "",
              items: [
                "Proficiency in SQL scripting and optimization of complex queries.",
              ],
            },
            {
              category: "",
              items: [
                "Strong experience in data modeling, including relational, star, and snowflake schemas.",
              ],
            },
            {
              category: "",
              items: [
                "Proficiency in programming languages such as Python and UNIX shell scripting.",
              ],
            },
            {
              category: "",
              items: [
                "Experience with reporting, database environments, and OLAP business intelligence applications.",
              ],
            },
            {
              category: "",
              items: ["Familiarity with Agile/Scrum tools such as JIRA."],
            },
            {
              category: "",
              items: [
                "Strong analytical and problem-solving skills with the ability to map business needs to technical requirements.",
              ],
            },
            {
              category: "",
              items: [
                "Excellent verbal and written communication skills, with the ability to work effectively with technical and non-technical stakeholders.",
              ],
            },
            {
              category: "",
              items: ["Telecom industry knowledge is a plus."],
            },
            {
              category: "",
              items: [
                "Ability to work independently with minimal oversight and manage multiple priorities in a fast-paced environment.",
              ],
            },
            {
              category: "",
              items: ["Availability to work during EST business hours."],
            },
          ],
          whyNeuIQ: [
            {
              category: "Culture of Innovation",
              items: [
                "Join a team that values creativity, experimentation, and disruption in the tech industry.",
              ],
            },
            {
              category: "Growth Opportunities",
              items: [
                "NeuIQ is committed to helping our team members grow their skills and careers through learning and development.",
              ],
            },
            {
              category: "Work-Life Balance",
              items: [
                "Flexible work options, including [remote/hybrid/on-site], ensuring you can thrive both personally and professionally.",
              ],
            },
            {
              category: "Diversity and Inclusion",
              items: [
                "At NeuIQ, we celebrate differences and foster a culture where everyone feels valued and heard.",
              ],
            },
          ],
          statement:
            "NeuIQ is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity, sexual orientation, national origin, genetics, disability, age, or veteran status.",
        },
      ],
      // USA: [
      //   {
      //     id: "1",
      //     position: "Software Engineer",
      //     experience: "2 yrs",
      //     team:"Data Engineering",
      //     location: "USA",
      //     // applyLink: "#",
      //     employment_type: "Full-time",
      //     jobs_summary:
      //       "We are seeking a Software Engineer with 2 years of experience to build scalable web applications.",
      //     key_responsibilities: [
      //       "Develop and maintain high-quality applications.",
      //       "Collaborate with cross-functional teams.",
      //       "Optimize applications for performance and scalability.",
      //     ],
      //     skills_qualifications: [
      //       "Proficiency in JavaScript, React.js, and Node.js.",
      //       "Experience with cloud services and REST APIs.",
      //       "Strong problem-solving skills.",
      //     ],
      //     soft_skills: [
      //       "Excellent communication and teamwork skills.",
      //       "Ability to work in a fast-paced environment.",
      //       "Self-motivated and detail-oriented.",
      //     ],
      //     why_join_us: [
      //       "Opportunities to work on cutting-edge technology.",
      //       "Collaborative and innovative work culture.",
      //       "Competitive salary and benefits.",
      //     ],
      //   },
      //   {
      //     id: "2",
      //     position: "Mechanical Engineer",
      //     experience: "4 yrs",
      //     location: "USA",
      //     team:"Implementation Engineer",
      //     // applyLink: "#",
      //     employment_type: "Full-time",
      //     jobs_summary:
      //       "We are hiring a Mechanical Engineer with 4 years of experience in product design and manufacturing.",
      //     key_responsibilities: [
      //       "Design and develop mechanical components.",
      //       "Conduct analysis and testing for product improvements.",
      //       "Collaborate with cross-functional teams to enhance designs.",
      //     ],
      //     skills_qualifications: [
      //       "Proficiency in CAD software and mechanical design.",
      //       "Strong analytical and problem-solving skills.",
      //       "Experience in manufacturing processes.",
      //     ],
      //     soft_skills: [
      //       "Strong collaboration and teamwork skills.",
      //       "Excellent communication and leadership abilities.",
      //       "Ability to work under pressure and meet deadlines.",
      //     ],
      //     why_join_us: [
      //       "Opportunities to work on innovative mechanical designs.",
      //       "Competitive compensation and benefits.",
      //       "Supportive and growth-focused work environment.",
      //     ],
      //   },
      //   {
      //     id: "3",
      //     position: "Marketing Manager",
      //     experience: "5 yrs",
      //     location: "USA",
      //     team:"Agency Services",
      //     // applyLink: "#",
      //     employment_type: "Full-time",
      //     jobs_summary:
      //       "Seeking a Marketing Manager with 5 years of experience to drive marketing strategies and campaigns.",
      //     key_responsibilities: [
      //       "Develop and execute marketing plans.",
      //       "Analyze market trends and customer insights.",
      //       "Manage brand positioning and promotional activities.",
      //     ],
      //     skills_qualifications: [
      //       "Expertise in digital marketing strategies.",
      //       "Strong knowledge of SEO, PPC, and content marketing.",
      //       "Excellent analytical and leadership skills.",
      //     ],
      //     soft_skills: [
      //       "Exceptional communication and presentation skills.",
      //       "Ability to lead and inspire teams.",
      //       "Creative problem-solving and adaptability.",
      //     ],
      //     why_join_us: [
      //       "Opportunities to work with top brands.",
      //       "Performance-based incentives and bonuses.",
      //       "Dynamic and creative work environment.",
      //     ],
      //   },
      //   {
      //     id: "4",
      //     position: "Financial Analyst",
      //     experience: "3 yrs",
      //     location: "USA",
      //     team:"Financial",
      //     // applyLink: "#",
      //     employment_type: "Full-time",
      //     jobs_summary:
      //       "Hiring a Financial Analyst with 3 years of experience to analyze financial data and drive business decisions.",
      //     key_responsibilities: [
      //       "Analyze financial statements and market trends.",
      //       "Develop financial models and forecasts.",
      //       "Provide insights to optimize financial performance.",
      //     ],
      //     skills_qualifications: [
      //       "Proficiency in Excel, financial modeling, and data analysis.",
      //       "Knowledge of accounting principles and financial software.",
      //       "Strong analytical and problem-solving abilities.",
      //     ],
      //     soft_skills: [
      //       "Excellent attention to detail.",
      //       "Strong communication and presentation skills.",
      //       "Ability to work in a fast-paced and dynamic environment.",
      //     ],
      //     why_join_us: [
      //       "Opportunities for professional growth and advancement.",
      //       "Competitive salary and benefits package.",
      //       "Work with a team of financial experts.",
      //     ],
      //   },
      // ],
      // Canada: [
      //   {
      //     id: "1",
      //     position: "AI Researcher",
      //     experience: "3 yrs",
      //     location: "Canada",
      //     team:"Research & Development",
      //     // applyLink: "#",
      //     employment_type: "Full-time",
      //     jobs_summary:
      //       "We are seeking an AI Researcher with 3 years of experience in developing advanced AI models and algorithms.",
      //     key_responsibilities: [
      //       "Conduct research on AI and machine learning models.",
      //       "Develop innovative AI-based solutions.",
      //       "Collaborate with cross-functional teams to implement AI technologies.",
      //     ],
      //     skills_qualifications: [
      //       "Expertise in machine learning, deep learning, and AI frameworks.",
      //       "Strong analytical and research skills.",
      //       "Experience with Python, TensorFlow, and PyTorch.",
      //     ],
      //     soft_skills: [
      //       "Strong problem-solving and analytical skills.",
      //       "Excellent communication and teamwork abilities.",
      //       "Ability to work in a fast-paced research environment.",
      //     ],
      //     why_join_us: [
      //       "Opportunities to work on groundbreaking AI projects.",
      //       "Collaborative research environment.",
      //       "Competitive salary and benefits package.",
      //     ],
      //   },
      // ],
      // UK: [
      //   {
      //     id: "1",
      //     position: "Graphic Designer",
      //     experience: "3 yrs",
      //     location: "UK",
      //     team:"Agency Services",
      //     // applyLink: "#",
      //     employment_type: "Full-time",
      //     jobs_summary:
      //       "We are looking for a creative Graphic Designer with 3 years of experience. You will be responsible for designing visual content for digital and print media.",
      //     key_responsibilities: [
      //       "Create and design digital and print materials.",
      //       "Develop graphics for branding, marketing, and social media.",
      //       "Collaborate with the marketing team to ensure cohesive visuals.",
      //     ],
      //     skills_qualifications: [
      //       "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
      //       "Strong understanding of design principles and typography.",
      //       "Experience in UX/UI design is a plus.",
      //     ],
      //     soft_skills: [
      //       "Creative mindset with strong attention to detail.",
      //       "Excellent communication and teamwork skills.",
      //       "Ability to work on multiple projects under tight deadlines.",
      //     ],
      //     why_join_us: [
      //       "Work on exciting and creative design projects.",
      //       "Collaborative and innovative team culture.",
      //       "Competitive salary and professional growth opportunities.",
      //     ],
      //   },
      //   {
      //     id: "2",
      //     position: "Software Engineer",
      //     experience: "4 yrs",
      //      team:"Data Engineering",
      //     location: "UK",
      //     // applyLink: "#",
      //     employment_type: "Full-time",
      //     jobs_summary:
      //       "Seeking a skilled Software Engineer with 4 years of experience to develop and maintain scalable applications.",
      //     key_responsibilities: [
      //       "Design, develop, and test software applications.",
      //       "Collaborate with cross-functional teams to deliver high-quality software.",
      //       "Optimize and refactor code for performance and scalability.",
      //     ],
      //     skills_qualifications: [
      //       "Proficiency in JavaScript, React, and Node.js.",
      //       "Experience with RESTful APIs and microservices architecture.",
      //       "Knowledge of Agile methodologies and CI/CD pipelines.",
      //     ],
      //     soft_skills: [
      //       "Strong analytical and problem-solving skills.",
      //       "Excellent teamwork and communication abilities.",
      //       "Ability to work independently and in a team environment.",
      //     ],
      //     why_join_us: [
      //       "Work on innovative and cutting-edge technologies.",
      //       "Flexible working hours and remote options available.",
      //       "Opportunities for professional growth and mentorship.",
      //     ],
      //   },
      //   {
      //     id: "3",
      //     position: "Marketing Manager",
      //     experience: "5 yrs",
      //     location: "UK",
      //     team:"Agency Services",
      //     // applyLink: "#",
      //     employment_type: "Full-time",
      //     jobs_summary:
      //       "We are hiring a Marketing Manager with 5 years of experience to lead our marketing initiatives and drive brand growth.",
      //     key_responsibilities: [
      //       "Develop and execute marketing strategies to increase brand awareness.",
      //       "Oversee digital marketing campaigns and social media presence.",
      //       "Analyze market trends and customer insights to optimize campaigns.",
      //     ],
      //     skills_qualifications: [
      //       "Proficiency in SEO, SEM, and digital advertising platforms.",
      //       "Strong project management and analytical skills.",
      //       "Experience in content marketing and brand storytelling.",
      //     ],
      //     soft_skills: [
      //       "Creative and strategic thinking abilities.",
      //       "Strong leadership and team management skills.",
      //       "Excellent communication and presentation skills.",
      //     ],
      //     why_join_us: [
      //       "Join a dynamic and fast-growing company.",
      //       "Work with a passionate and innovative team.",
      //       "Competitive salary with performance-based incentives.",
      //     ],
      //   },
      //   {
      //     id: "4",
      //     position: "Financial Analyst",
      //     experience: "3 yrs",
      //     location: "UK",
      //     team:"Financial",
      //     // applyLink: "#",
      //     employment_type: "Full-time",
      //     jobs_summary:
      //       "Seeking a detail-oriented Financial Analyst with 3 years of experience to assess financial data and support decision-making.",
      //     key_responsibilities: [
      //       "Analyze financial statements and reports.",
      //       "Create financial models to forecast business performance.",
      //       "Assist in budgeting, risk analysis, and investment planning.",
      //     ],
      //     skills_qualifications: [
      //       "Strong knowledge of financial analysis tools and techniques.",
      //       "Proficiency in Excel, financial modeling, and data visualization.",
      //       "Experience with ERP systems and financial software.",
      //     ],
      //     soft_skills: [
      //       "Attention to detail and strong analytical skills.",
      //       "Excellent problem-solving and critical-thinking abilities.",
      //       "Ability to communicate complex financial concepts clearly.",
      //     ],
      //     why_join_us: [
      //       "Work in a collaborative and supportive finance team.",
      //       "Opportunities for career growth and professional development.",
      //       "Competitive salary and comprehensive benefits package.",
      //     ],
      //   },
      //   {
      //     id: "5",
      //     position: "HR Manager",
      //     experience: "6 yrs",
      //     location: "UK",
      //     team:"Agency Services",
      //     // applyLink: "#",
      //     employment_type: "Full-time",
      //     jobs_summary:
      //       "We are looking for an experienced HR Manager with 6 years of experience to lead HR operations and strategy.",
      //     key_responsibilities: [
      //       "Develop and implement HR policies and procedures.",
      //       "Oversee recruitment, training, and employee engagement initiatives.",
      //       "Ensure compliance with employment laws and company policies.",
      //     ],
      //     skills_qualifications: [
      //       "Strong understanding of HR best practices and labor laws.",
      //       "Experience with HR software and payroll systems.",
      //       "Proficiency in conflict resolution and performance management.",
      //     ],
      //     soft_skills: [
      //       "Excellent leadership and organizational skills.",
      //       "Strong interpersonal and communication abilities.",
      //       "Ability to manage multiple HR functions effectively.",
      //     ],
      //     why_join_us: [
      //       "Join a company with a strong commitment to employee growth.",
      //       "Work in a positive and collaborative work environment.",
      //       "Competitive salary and attractive benefits package.",
      //     ],
      //   },
      // ],
      Singapore: [],
    },
  },
  LifeatnewIqData: {
    title: "NEUIQ IN THE NEWS",
    carouselData: [
      {
        // title: "Celebrating the Launch of NeuIQ. Where Our Journey Begins",
        image: icons.carousel_1,
      },
      {
        // title: "Accelerating AI Vision: Sonia Thakurani Joins NeuIQ as Lead AI Strategist",
        image: icons.carousel_2,
      },
      {
        // title: "NeuIQ Forges Key Partnership with Trilliad a Growth Service Provider",
        image: icons.carousel_3,
      },
      {
        // title: "NeuIQ Partners with Qualtrics to Elevate Experience Management",
        image: icons.carousel_4,
      },
      {
        // title: "Leading with Purpose: Proud Gold Sponsor of the X4 Summit",
        image: icons.carousel_5,
      },
      {
        // title: "Beyond Beginnings: Expanding into Our Second Office",
        image: icons.carousel_6,
      },
      {
        // title: "NeuIQ at the Forefront of Data and AI at the 3rd IT Conference",
        image: icons.carousel_7,
      },
    ],
  },
};

export const aboutUsData = {
  banner: {
    title: "Transforming businesses with data engineering and AI",
    description:
      "We believe that clean, structured data managed through scalable pipelines is essential for successful AI and unlocking transformative business outcomes.",
    image: icons.about_banner,
  },
  ourValue: {
    title: "Our values",
    description: "",
    cardData: [
      {
        title: "Customer Focus",
        description:
          "Know the customer to understand the end goal so that you can set and manage expectations skillfully.",
        image: icons.value_1,
      },
      {
        title: "Team Player",
        description:
          "Put the team before self, be supportive, respectful of others, and disciplined in all your actions.",
        image: icons.value_2,
      },
      {
        title: "Ownership and Accountability",
        description:
          "Act as an owner of the end results, take initiative, honor commitments and communicate.",
        image: icons.value_3,
      },
      {
        title: "Continuous Learning",
        description:
          "Know what you don't know. Learn pragmatically and be aligned to your learning strategy.",
        image: icons.value_4,
      },
    ],
  },
  TransformativeJourney: {
    title: "The compelling drive to embark on this transformative journey...",
    description: [
      'Most AI solutions struggle to deliver tangible business outcomes—not because AI itself is flawed, but because many strategies are too generic. Consulting giants often apply a "one-size-fits-all" approach, which overlooks the complexities of data and fails to address the unique challenges of businesses. The real problem lies in messy data pipelines, lack of tailored strategies, and poor execution.',
      "Sunil and Naeem saw an emerging issue: mid-sized businesses, with valuable data, were falling behind in the AI race. They couldn’t afford the high-priced consultants, yet they lacked the expertise to clean, structure, and leverage their data effectively. It was clear that the market needed something different—an AI partner who understood the practical realities of smaller businesses and could deliver customized, affordable solutions.",
      "Determined to make AI accessible and effective for these underrepresented markets, Sunil and Naeem teamed up with experts from their past ventures—professionals with deep knowledge in experience management, cloud infrastructure, data engineering, and AI. Together, they founded <strong>NeuIQ</strong> with one bold mission: <strong>To simplify AI adoption, enabling businesses to unlock their full potential without breaking the bank or sacrificing quality.</strong>",
      "<strong>At NeuIQ, it’s not just about implementing AI—it’s about implementing it right.</strong>",
    ],
  },
  globalPresence: {
    title: "Global presence",
    description:
      "Our agile data teams and global delivery centers provide impactful, round the clock data engineering and data science services to 25+ Fortune 500 clients across geographies and timezones.",
    image: icons.global_presence,
  },
};

export const performanceData = {
  career: {
    title: "Can’t find the role you’re looking for?",
    description: `Send your profile to <a href="mailto:careers@NeuIQ.com" class="underline">careers@NeuIQ.com</a><br />and we’ll get back to you.`,
    image: icons.about_banner,
  },
};

export const problemsWeAreSolvingForThem = {
  data: [
    {
      number: "01",
      title: "Automating Text Analytics for CX",
      desc1:
        "A leading enterprise partnered with us to automate their text analytics workflows. Reducing manual effort, improving accuracy, and scaling insights across the business.",
      desc2:
        "We enabled automated theme detection, refined categorization, and built scalable models that turned unstructured customer feedback into actionable intelligence. By focusing on unclassified inputs and redesigning topic structures, we closed existing gaps and created a future-ready analytics foundation.",
      impact:
        "Reduced manual analysis time by 60% while uncovering 3x more actionable insights.",
      image: icons.automating_text_analytics_for_cx,
    },
    {
      number: "02",
      title: "Ask-AI Interface for Customer Feedback",
      desc1:
        "A global product organization engaged us to design a natural language interface that lets product managers query customer feedback directly, just like using a search bar.",
      desc2:
        "By integrating AI-driven query handling into dashboards and workflows, managers could ask natural questions (“What are top pain points for new users?”) and receive instant, contextual insights. This transformed static reporting into interactive discovery, accelerating product planning and decision-making.",
      impact:
        "Cut reporting cycles from weeks to minutes, boosting product planning speed.",
      image: icons.ask_ai_interface_for_customer_feedback,
    },
    {
      number: "03",
      title: "Predictive Forecasting for Project Management",
      desc1:
        "A global enterprise partnered with us to strengthen project oversight by embedding AI-powered forecasting into their delivery workflows.",
      desc2:
        "We built predictive models that highlighted schedule risks, resource bottlenecks, and milestone slippages before they occurred. This enabled project managers to take proactive action, reallocate resources, and communicate early with stakeholders. The result - fewer surprises, higher predictability, and projects delivered with greater confidence.",
      impact:
        "Improved cost-to-serve by 60%+ and reduced unplanned delays by half.",
      image: icons.predictive_forecasting_for_project_management,
    },
    {
      number: "04",
      title: "Transforming CX to Turn NPS Around",
      desc1:
        "A leading telecom provider partnered with us to transform their CX programs for faster insights and better outcomes.",
      desc2:
        "We redesigned the CX architecture, accelerated sentiment analysis, & enabled proactive interventions to shift NPS from negative to positive. Driving continuous optimization with scale, speed, and expertise.",
      image: icons.transforming_cx_to_turn_nps_around,
    },
    {
      number: "05",
      title: "Igniting AI-Powered CX with Qualtrics",
      desc1:
        "Many Qualtrics customers struggle with CX setup, platform adoption, and underused AI features. We support them end-to-end, from CX design and migration to implementation and AI enablement.",
      desc2:
        "Our Ignite AI Workshop delivers a clear roadmap, stronger adoption, and measurable ROI.",
      image: icons.igniting_ai_powered_cx_with_qualtrics,
    },
    {
      number: "06",
      title: "Scaling Enterprise Operations with AI Agents",
      desc1:
        "Enterprise teams face bottlenecks, inconsistent delivery, and over-reliance on senior staff.",
      desc2:
        "We’re building AI Agents to automate decisions and streamline workflows. From RFPs to project setup, campaign insights, and training content. Empowering teams to work faster and smarter.",
      image: icons.scaling_operations_with_ai_agents,
    },
    {
      number: "07",
      title: "Streamlining Data Ops for Monetization",
      desc1:
        "A global insights provider is struggling with slow and manual data processing. Delaying insights, decision-making, and the activation of data monetization assets.",
      desc2:
        "Automating the Qualtrics-to-Databricks pipeline with AI-driven workflows to democratize insights and enable real-time dashboards, daily reporting, and scalable distribution. Driving monetization via Databricks and Snowflake Marketplace.",
      image: icons.streamlining_data_ops_for_monetization,
    },
    {
      number: "08",
      title: "Automating Experience Platform Migration",
      desc1:
        "To meet evolving data privacy requirements, our client needed to split its Qualtrics platform across EU and Americas regions.",
      desc2:
        "We built a secure, automated migration platform that transferred 250+ programs, 3M+ records, and 500+ assets. Cutting downtime, reducing risk, and enabling future-ready CX operations.",
      image: icons.automating_experience_platform_migration,
    },
  ],
};

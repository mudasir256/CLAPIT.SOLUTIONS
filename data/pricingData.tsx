import { PricingData } from "@/components/types";
import BuildFullProjectIcon from "@/public/svg/BuildFullProjectIcon";
import StartWithMVPIcon from "@/public/svg/StartWithMVPIcon";
import UpdateProductIcon from "@/public/svg/UpdateProductIcon";
import EstimateProjectIcon from "@/public/svg/EstimateProjectIcon";
import EstimateTeamIcon from "@/public/svg/EstimateTeamIcon";
import DigitalMarketingIcon from "@/public/svg/DigitalMarketingIcon";

export const pricingData: PricingData = {
  title: "Estimate The Cost Of Project",
  title2: "Estimate The Cost Of  Digital Marketing Project",
  subtitle: "Please Choose the cooperative model",
  options: [
    {
      icon: "GrServices",
      title: "Estimate your Project cost",
      link: "/pricing/calculate-outsource",
      price: undefined,
      features: [],
      svg: <EstimateProjectIcon />,
    },
    {
      icon: "MdOutlineMiscellaneousServices",
      title: "Estimate tech team cost",
      link: "/pricing/team-extension",
      price: undefined,
      features: [],
      svg: <EstimateTeamIcon />,
    },
    {
      icon: "GrServices",
      title: "Estimate marketing cost",
      link: "/pricing/marketing",
      price: undefined,
      features: [],
      svg: <DigitalMarketingIcon className="w-52 h-28" />,
    },
  ],
  costCalculator: {
    stepOneTitle: "What would you like to do?",
    stepOneOptions: [
      {
        title: "Build Full Product",
        icon: <BuildFullProjectIcon />,
        // link: '/pricing/calculate-outsource'
      },
      {
        title: "Start with MVP",
        icon: <StartWithMVPIcon />,
        // link: '/pricing/team-extension'
      },
      {
        title: "Update Product",
        icon: <UpdateProductIcon />,
        // link: '/pricing/team-extension'
      },
    ],
    stepTwoTitle: "What do you already have?",
    stepTwoOptions: [
      {
        title: "I have only an idea",
        // link: '/pricing/calculate-outsource'
      },
      {
        title: "I have MVP",
        // link: '/pricing/team-extension'
      },
      {
        title: "I have a design",
        // link: '/pricing/team-extension'
      },
      {
        title: "I have a produect, but it is not finished",
        // link: '/pricing/team-extension'
      },
    ],
    stepThreeTitle: "Plateform type",
    stepThreeOptions: [
      {
        title: "Web & Mobile",
        // link: '/pricing/calculate-outsource'
      },
      {
        title: "Mobile",
        // link: '/pricing/team-extension'
      },
      {
        title: "Desktop Software",
        // link: '/pricing/team-extension'
      },
      {
        title: "Web",
        // link: '/pricing/team-extension'
      },
    ],
    stepFourTitle: "Choose your industry",
    stepFourOptions: [
      {
        title: "Healthcare",
        // link: '/pricing/calculate-outsource'
      },
      {
        title: "E-commerce",
        // link: '/pricing/team-extension'
      },
      {
        title: "Education",
        // link: '/pricing/team-extension'
      },
      {
        title: "Real Estate",
        // link: '/pricing/team-extension'
      },
      {
        title: "Travel",
        // link: '/pricing/team-extension'
      },
      {
        title: "Finance",
        // link: '/pricing/team-extension'
      },
      {
        title: "Healthcare",
        // link: '/pricing/team-extension'
      },
      {
        title: "Other",
        // link: '/pricing/team-extension'
      },
    ],
    stepFiveTitle: "Software & Hi-tech solution type",
    stepFiveSubTitle: "You can select multiple options",
    stepFiveOptions: [
      {
        title: "Solution Engineering",
        // link: '/pricing/calculate-outsource'
      },
      {
        title: "Innovation Services",
        // link: '/pricing/team-extension'
      },
      {
        title: "Integration Services",
        // link: '/pricing/team-extension'
      },
      {
        title: "Cybersecurity Services",
        // link: '/pricing/team-extension'
      },
      {
        title: "Cloud",
        // link: '/pricing/team-extension'
      },
      {
        title: "Other",
        // link: '/pricing/team-extension'
      },
    ],
    stepSixTitle: "When do you want to start the project?",
    stepSixOptions: [
      {
        title: "Immediately",
        subtitle: "(as soon as possible)",
        // link: '/pricing/calculate-outsource'
      },
      {
        title: "Standard need",
        subtitle: "(within 1 month)",
        // link: '/pricing/team-extension'
      },
      {
        title: "There is no hurry",
        subtitle: "(from 3 months)",
        // link: '/pricing/team-extension'
      },
    ],
  },
  teamCostCalculator: {
    stepOneTitle: "Please choose technologies",
    stepOneOptions: [
      {
        title: "Web",
        webStacks: [
          "JS",
          "TS",
          "React",
          "Next",
          "Vue",
          "Nuxt",
          "Svelte",
          "Sveltekit",
          "Astro",
          "Remix",
          "Python",
          "FastAPI",
          "Django",
          "Flask",
          "Node",
          "Express",
          "Nest",
          "Koa",
          "Hapi",
          "Laravel",
        ],
        // link: '/pricing/calculate-outsource',
      },
      {
        title: "Mobile",
        mobileStacks: [
          "Flutter",
          "Swift",
          "Kotlin",
          "Android",
          "iOS",
          "Xamarin",
          "Ionic",
          "Flutter",
          "React Native",
        ],
        // link: '/pricing/team-extension'
      },
      {
        title: "DevOps",
        devopsStacks: [
          "AWS",
          "Azure",
          "Google Cloud",
          "Heroku",
          "Digital Ocean",
          "Vercel",
          "Netlify",
        ],
        // link: '/pricing/team-extension'
      },
      {
        title: "Databases",
        databasesStacks: [
          "MySQL",
          "PostgreSQL",
          "Oracle",
          "MongoDB",
          "Redis",
          "SQLite",
          "Cassandra",
          "CouchDB",
        ],
        // link: '/pricing/team-extension'
      },
      {
        title: "ERP",
        erpStacks: ["SAP", "Oracle", "Microsoft", "Google"],
        // link: '/pricing/team-extension'
      },
    ],
    stepTwoTitle: "Do you need other specialists?",
    stepTwoOptions: [
      {
        title: "Project Manager",
        // link: '/pricing/calculate-outsource'
      },
      {
        title: "UI/UX Designer",
        // link: '/pricing/team-extension'
      },
      {
        title: "DevOps",
        // link: '/pricing/team-extension'
      },
      {
        title: "Back-end Developer",
        // link: '/pricing/team-extension'
      },
      {
        title: "Front-end Developer",
        // link: '/pricing/team-extension'
      },
      {
        title: "Quality Assurance",
        // link: '/pricing/team-extension'
      },
      {
        title: "Mobile Developer",
        // link: '/pricing/team-extension'
      },
      {
        title: "Other",
        // link: '/pricing/team-extension'
      },
    ],
    stepThreeTitle: "How fast do you need an extension?",
    stepThreeOptions: [
      {
        title: "Build Full Product",
        icon: <BuildFullProjectIcon />,
      },
      {
        title: "Start with MVP",
        icon: <StartWithMVPIcon />,
      },
      {
        title: "Update Product",
        icon: <UpdateProductIcon />,
      },
    ],
    stepFiveSubTitle: undefined,
    stepSixTitle: "",
    stepSixOptions: "",
  },
  reactStacks: [],
  vueStacks: [],
  angularStacks: [],
  description: undefined,
  svg: undefined,
  data: {
    heading: "Unlimited creative services for a flat monthly fee",
    subheading:
      "We take care of all your creative and marketing needs. No inefficient freelancers. No lengthy hiring procedures. No complex contracts. Just exceptional work delivered on time!",
    button: {
      text: "BOOK A CALL",
      link: "#",
    },
    awards: [
      {
        logo: "InfluencerMarketingHub",
        title: "Best UX/UI Agencies for SME and Enterprise brands globally",
      },
      {
        logo: "Upwork",
        title: "100% Job Success Among top providers for enterprises",
      },
      {
        logo: "sortlist",
        title: "Best Web Design Agencies",
      },
      {
        logo: "Clutch",
        title: "Top 1 Graphic Design Companies 2024",
      },
      {
        logo: "Clutch",
        title: "Top Graphic Designers in the United States",
      },
      {
        logo: "Clutch",
        title: "Top Graphic Designers in the United Kingdom",
      },
      {
        logo: "Clutch",
        title: "Top Graphic Designers in Western Europe",
      },
      {
        logo: "Clutch",
        title: "Top Web Design Companies 2024",
      },
    ],
  },
  marketingPlans: {
    "1 month": [
      {
        category: "Visual",
        title: "Graphic Design",
        description: "Professional graphic designs for all your day-to-day marketing and branding needs.",
        price: "$999",
        per: "PER MONTH",
        badge2: "🔥 Popular",
        features: [
          "Banner Ads",
          "Social Media Creatives",
          "Blog Graphics",
          "Clothing & Merchandise Design",
          "Packaging & Label",
          "Additional graphics as needed",
        ],
        buttonText: "GET STARTED",
        highlight: false,
      },
      {
        category: "Creative Suite",
        badge1: "Creative Suite",
        badge2: "🔥 Popular",
        title: "Graphic & Brand Design + UX/UI + Motion",
        description:
          "Complete creative suite with custom graphics, web solutions, UI/UX design, and motion graphics, all tailored to elevate your brand and business.",
        price: "$1899",
        per: "PER MONTH",
        features: [
          "Landing Page & Website Design",
          "Presentation & Pitch Deck Design",
          "UI/UX & Mobile App Design",
          "Logo & Brand Guide",
          "Explainer & Promo Videos",
          "GIFs & Logo Animation",
          "2D Animations",
          "Additional graphics as needed",
        ],
        buttonText: "GET STARTED",
        highlight: true,
      },
      {
        category: "Build",
        title: "No-Code Development",
        description:
          "Professional no-code solutions for quick, dependable, and scalable web development and design.",
        price: "$2499",
        per: "PER MONTH",
        badge1: "Creative Suite",
        features: [
          "WebFlow Development",
          "WordPress Development",
          "WIX Development",
          "Custom Graphics & Design",
          "UX/UI Design Services",
          "Motion Graphics & Animation",
        ],
        buttonText: "GET STARTED",
        highlight: false,
      },
    ],
    "3 months": [
      {
        category: "Visual",
        title: "Graphic Design",
        description: "Professional graphic designs for all your day-to-day marketing and branding needs.",
        price: "$899",
        per: "PER MONTH",

        badge2: "🔥 Popular",
        features: [
          "Banner Ads",
          "Social Media Creatives",
          "Blog Graphics",
          "Clothing & Merchandise Design",
          "Packaging & Label",
          "Additional graphics as needed",
        ],
        buttonText: "GET STARTED",
        highlight: false,
      },
      {
        category: "Creative Suite",
        badge1: "Creative Suite",
        badge2: "🔥 Popular",
        title: "Graphic & Brand Design + UX/UI + Motion",
        description:
          "Complete creative suite with custom graphics, web solutions, UI/UX design, and motion graphics, all tailored to elevate your brand and business.",
        price: "$1709",
        per: "PER MONTH",
        features: [
          "Landing Page & Website Design",
          "Presentation & Pitch Deck Design",
          "UI/UX & Mobile App Design",
          "Logo & Brand Guide",
          "Explainer & Promo Videos",
          "GIFs & Logo Animation",
          "2D Animations",
          "Additional graphics as needed",
        ],
        buttonText: "GET STARTED",
        highlight: true,
      },
      {
        category: "Build",
        title: "No-Code Development",
        description:
          "Professional no-code solutions for quick, dependable, and scalable web development and design.",
        price: "$2249",
        per: "PER MONTH",
        badge1: "Creative Suite",

        features: [
          "WebFlow Development",
          "WordPress Development",
          "WIX Development",
          "Custom Graphics & Design",
          "UX/UI Design Services",
          "Motion Graphics & Animation",
        ],
        buttonText: "GET STARTED",
        highlight: false,
      },
    ],
    "6 months": [
      {
        category: "Visual",
        title: "Graphic Design",
        description: "Professional graphic designs for all your day-to-day marketing and branding needs.",
        price: "$799",
        per: "PER MONTH",
        badge1: "Creative Suite",
        features: [
          "Banner Ads",
          "Social Media Creatives",
          "Blog Graphics",
          "Clothing & Merchandise Design",
          "Packaging & Label",
          "Additional graphics as needed",
        ],
        buttonText: "GET STARTED",
        highlight: false,
      },
      {
        category: "Creative Suite",
        badge1: "Creative Suite",
        badge2: "🔥 Popular",
        title: "Graphic & Brand Design + UX/UI + Motion",
        description:
          "Complete creative suite with custom graphics, web solutions, UI/UX design, and motion graphics, all tailored to elevate your brand and business.",
        price: "$1519",
        per: "PER MONTH",
        features: [
          "Landing Page & Website Design",
          "Presentation & Pitch Deck Design",
          "UI/UX & Mobile App Design",
          "Logo & Brand Guide",
          "Explainer & Promo Videos",
          "GIFs & Logo Animation",
          "2D Animations",
          "Additional graphics as needed",
        ],
        buttonText: "GET STARTED",
        highlight: true,
      },
      {
        category: "Build",
        title: "No-Code Development",
        description:
          "Professional no-code solutions for quick, dependable, and scalable web development and design.",
        price: "$1999",
        per: "PER MONTH",
        badge1: "Creative Suite",
        features: [
          "WebFlow Development",
          "WordPress Development",
          "WIX Development",
          "Custom Graphics & Design",
          "UX/UI Design Services",
          "Motion Graphics & Animation",
        ],
        buttonText: "GET STARTED",
        highlight: false,
      },
    ],
  },

  marketingPlansIncludedServices: {
    "Graphic design": [
      "Display Ads",
      "Banner Ads",
      "Social Media Ad Graphics",
      "Social Media Images",
      "Social Media Covers",
      "Blog Graphics",
      "Print or Digital Brochures",
      "Flyers, Booklets & Posters",
      "Product Mock-ups",
      "Business Cards",
      "Clothing & Merchandise Design",
      "Packaging & Label",
    ],
    "Graphic & Brand Design + UX/UI": [
      "Website Icons/Graphics",
      "Stickers",
      "Custom Illustrations",
      "Basic Photo Editing",
      "Landing Page Design",
      "Website Design",
      "IOS & Android App Design",
      "Email Graphics",
      "Infographic Design",
      "Presentation & Pitch Deck Design",
      "eBooks",
      "Mobile App Design",
    ],
    "No-Code Development": [
      "UI/UX Design",
      "Logo & Brand Guide",
      "Social Media Video Ads",
      "Feed & Story Videos",
      "Explainer Videos",
      "Animated Videos",
      "GIFs",
      "Logo Animation",
      "Video Editing",
      "WebFlow",
      "WordPress",
      "WIX",
      "And much more...",
    ],
  },
  features: [
    { icon: "\u267E", text: "Unlimited design requests" },
    { icon: "\u267B", text: "Unlimited revisions" },
    { icon: "\ud83d\udcc2", text: "Unlimited brand profiles" },
    { icon: "\ud83d\uddc2", text: "Native source files included" },
    { icon: "\ud83d\udcbc", text: "Dedicated Art Director" },
    { icon: "\ud83d\udc64", text: "Dedicated Project Manager" },
    { icon: "\ud83d\udc68\u200d\ud83c\udf93", text: "Middle+/Senior Level Designers" },
    { icon: "\ud83d\udcac", text: "Real-time collaboration tools" },
    { icon: "\ud83d\udcc2", text: "Trello project management" },
    { icon: "\ud83d\udcb2", text: "7-day money-back guarantee" },
    { icon: "\u274c", text: "Cancel anytime, no questions asked" },
  ],
};

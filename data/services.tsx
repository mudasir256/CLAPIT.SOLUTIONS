import { Service } from "@/components/types";
import { IMAGES } from "@/public/images";
import {
  FrontendIcon,
  BackendIcon,
  MobileIcon,
  CSSIcon,
  HTMLIcon,
  JSIcon,
  ReactIcon,
  VueIcon,
  NextjsIcon,
  PythonIcon,
  NodejsIcon,
  FlutterIcon,
  PWAIcon,
  ReactNativeIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  JavaIcon,
  MySQLIcon,
  AndroidIcon,
  FigmaIcon,
  AdobeIllustratorIcon,
  AdobePhotoshopIcon,
  CanvaIcon,
  HubSpotIcon,
  MailchimpIcon,
  ActiveIcon,
  GoogleAnalyticsIcon,
  SemrushIcon,
  AhrefsIcon,
  HotjarIcon,
  MeltwaterIcon,
  BrandwatchIcon,
  CisionIcon,
  BuzzSumoIcon,
  HootsuiteIcon,
  UpfluenceIcon,
  HeepsyIcon,
  CreatorIQIcon,
  SproutSocialIcon,
  GoogleAdsIcon,
  MetaAdsIcon,
  TikTokAdsIcon,
  LinkedInAdsIcon,
  MixpanelIcon,
  KlaviyoIcon,
  ZapierIcon,
  NotionIcon,
  ClickFunnelsIcon,
  WebflowIcon,
  ZeplinIcon,
  StorybookIcon,
  SketchIcon,
  SwiftIcon,
  KotlinIcon,
  FirebaseIcon,
  ExpressIcon,
  BitriseIcon,
  AppiumIcon,
  BrowserStackIcon,
  JestIcon,
  SupabaseIcon,
  VercelIcon,
  HerokuIcon,
  StripeIcon,
  BigCommerceIcon,
  MagentoIcon,
  PayPalIcon,
  ShopifyIcon,
  WooCommerceIcon,
  TensorFlowIcon,
  PyTorchIcon,
  ScikitLearnIcon,
  OpenAIIcon,
  HuggingFaceIcon,
  DockerIcon,
} from "@/components/icons/TechIcons";

import {
  FaPalette as CrelloIcon,
  FaPlay as LottieFilesIcon,
  FaBrain as CohereIcon,
  FaCloud as AWSSageMakerIcon,
  FaCloudversify as GCPVertexAIIcon,
  FaChartBar as MLflowIcon,
  FaSearch,
  FaBullseye,
  FaPaintBrush,
  FaCommentDots,
  FaRegFileAlt,
  FaRocket,
  FaChartLine,
  FaMapMarkedAlt,
  FaChartBar,
  FaPalette,
  FaBullhorn,
  FaLightbulb,
  FaSitemap,
  FaPenFancy,
  FaHamburger,
  FaTshirt,
  FaHardHat,
  FaHome,
  FaCouch,
  FaMobileAlt,
  FaHeadphonesAlt,
  FaFlask,
  FaCalendarAlt,
  FaTachometerAlt,
  FaProjectDiagram,
  FaUsers,
  FaEnvelopeOpenText,
  FaComments,
  FaExclamationTriangle,
  FaShoppingCart,
  FaNewspaper,
  FaShieldAlt,
  FaFolderOpen,
  FaRedo,
  FaWallet,
  FaGoogle,
  FaFacebookF,
  FaMailBulk,
  FaSyncAlt,
  FaChartPie,
  FaClipboardList,
  FaCogs,
  FaFileAlt,
  FaMicrophone,
  FaCheckCircle,
  FaClock,
  FaBroadcastTower,
  FaUserCheck,
  FaClipboardCheck,
  FaMailchimp,
  FaVial,
  FaPuzzlePiece,
  FaFont,
  FaBookOpen,
  FaBoxOpen,
  FaDrawPolygon,
  FaLaptopCode,
  FaTrademark,
  FaSwatchbook,
  FaLayerGroup,
  FaShoppingBag,
  FaPencilRuler,
  FaImages,
  FaDraftingCompass,
  FaGlobe,
  FaPaintRoller,
  FaWrench,
  FaMoneyBill,
  FaTruck,
  FaBolt,
  FaFootballBall,
  FaBalanceScale,
  FaPlaneDeparture,
  FaHospital,
  FaBrain,
  FaRobot,
  FaPlug,
  FaPenNib,
  FaServer,
  FaDatabase,
  FaLock,
  FaSync,
  FaBell,
  FaApple,
  FaAndroid,
  FaTools,
  FaStore,
  FaCloudUploadAlt,
  FaVrCardboard,
  FaLink,
  FaCloud,
  FaMoneyBillWave,
  FaRoad,
  FaBug,
  FaLifeRing,
  FaPoll,
  FaCreditCard,
  FaRedoAlt,
  FaBoxes,
  FaDumbbell,
  FaCog,
  FaCode,
  FaUserFriends,
} from "react-icons/fa";

export const services: Service[] = [
  {
    id: "ai-brand-strategy",
    title: "Brand Strategy",
    seoTitle: "AI-Enhanced Brand Strategy Solutions | Identity Development & Market Positioning",
    seoDescription: "Develop distinctive brands through AI-informed strategy, communication frameworks, visual identity systems, and audience engagement approaches. Adaptive branding methodologies for emerging businesses and established organizations.",
    seoKeywords: "brand strategy consulting, AI brand development, identity creation, brand positioning, visual identity systems, strategic marketing, brand communication, AI branding solutions, CLAPIT SOLUTIONS",
    seoImage: IMAGES.BrandStrategy,
    Industry: ["RegTech", "Healthcare"],
    icon: <FaPalette className="text-white" size={26} />,
    technologyTitle: "Advanced Methodologies for Brand Recognition Enhancement",
    technologyDescription: "We integrate creative vision, artificial intelligence, and analytical insights to construct brand identities that connect with target audiences and adapt to business evolution.",
    image: IMAGES.BrandStrategy,
    href: "/services/ai-brand-strategy",
    category: "marketing",
    description: "Comprehensive brand strategy services spanning foundational development to visual narrative creation, ensuring enduring influence and meaningful audience relationships.",
    technologies: [
      {
        title: "Market Intelligence Analysis",
        description: "Comprehensive examination of audience characteristics and competitive landscape to identify distinctive positioning opportunities.",
        icon: <FaChartBar className="text-mediumDark" />,
      },
      {
        title: "Visual Identity Systems",
        description: "Establish memorable visual foundations through logo development, color schemes, and typography that embody brand character.",
        icon: <FaPalette className="text-dark" />,
      },
      {
        title: "Brand Communication Framework",
        description: "Develop unified messaging approaches and tonal consistency that establish credibility across all customer interaction points.",
        icon: <FaBullhorn className="text-dark" />,
      },
      {
        title: "Experience Alignment",
        description: "Ensure every customer interaction reflects brand values through intuitive interfaces and thoughtful design details.",
        icon: <FaLightbulb className="text-dark" />,
      },
      {
        title: "Brand Structure Organization",
        description: "Systematic arrangement of products and services for clear customer comprehension and decision-making.",
        icon: <FaSitemap className="text-dark" />,
      },
      {
        title: "Content Planning Strategy",
        description: "Develop content roadmaps that articulate brand narrative while achieving objectives through search optimization and industry leadership.",
        icon: <FaPenFancy className="text-dark" />,
      },
      {
        title: "Performance Measurement",
        description: "Monitor effectiveness and refine approaches using empirical data to continuously enhance brand influence.",
        icon: <FaChartLine className="text-dark" />,
      },
    ],
    subServices: {
      heading: "Developing Memorable Brands That Foster Emotional Engagement",
      description: "We synchronize brand purpose with audience perception—shaping how customers experience your brand across every interaction channel.",
      items: [
        {
          id: 1,
          title: "Brand Assessment & Discovery",
          description: "Thorough evaluation of current brand standing, audience perception, and competitive environment to identify expansion potential.",
          icon: <FaSearch className="text-dark" />,
        },
        {
          id: 2,
          title: "Market Positioning & Communication",
          description: "Define unique value propositions and craft messaging that captures attention and builds confidence.",
          icon: <FaBullseye className="text-dark" />,
        },
        {
          id: 3,
          title: "Visual Identity Creation",
          description: "Develop aesthetically pleasing, scalable visual systems that maintain brand consistency across all platforms.",
          icon: <FaPaintBrush className="text-dark" />,
        },
        {
          id: 4,
          title: "Brand Voice Development",
          description: "Establish authentic communication style and methods for connecting with customers across various channels.",
          icon: <FaCommentDots className="text-dark" />,
        },
        {
          id: 5,
          title: "Brand Standards Documentation",
          description: "Provide comprehensive guidelines for maintaining visual and verbal consistency across all applications.",
          icon: <FaRegFileAlt className="text-dark" />,
        },
        {
          id: 6,
          title: "Brand Launch Implementation",
          description: "Execute brand introduction with maximum visibility and ensure complete alignment across all elements.",
          icon: <FaRocket className="text-dark" />,
        },
        {
          id: 7,
          title: "Brand Evolution Management",
          description: "Maintain brand relevance through ongoing refinement based on performance metrics and market changes.",
          icon: <FaChartLine className="text-dark" />,
        },
        {
          id: 8,
          title: "Competitive Landscape Analysis",
          description: "Understand market position and identify opportunities for differentiation from industry competitors.",
          icon: <FaMapMarkedAlt className="text-dark" />,
        },
      ],
    },
    techCapabilities: {
      heading: "AI-Enhanced Solutions for Brand Development and Implementation",
      items: [
        {
          id: 1,
          title: "Design & Visualization Platforms",
          icon: <FigmaIcon />,
          technologies: [
            { name: "Figma", icon: <FigmaIcon color={"#f84b07"} /> },
            { name: "Adobe Illustrator", icon: <AdobeIllustratorIcon color={"#f84b07"} /> },
            { name: "Photoshop", icon: <AdobePhotoshopIcon color={"#f84b07"} /> },
            { name: "Canva", icon: <CanvaIcon color={"#f84b07"} /> },
            { name: "Zeplin", icon: <ZeplinIcon color={"#f84b07"} /> },
          ],
        },
        {
          id: 2,
          title: "Marketing Automation & CRM Systems",
          icon: <HubSpotIcon />,
          technologies: [
            { name: "HubSpot", icon: <HubSpotIcon color={"#f84b07"} /> },
            { name: "Mailchimp", icon: <MailchimpIcon color={"#f84b07"} /> },
            { name: "ActiveCampaign", icon: <ActiveIcon color={"#f84b07"} /> },
            { name: "Klaviyo", icon: <KlaviyoIcon color={"#f84b07"} /> },
            { name: "Zapier", icon: <ZapierIcon color={"#f84b07"} /> },
          ],
        },
        {
          id: 3,
          title: "Analytics, Search Optimization & Advertising",
          icon: <GoogleAnalyticsIcon />,
          technologies: [
            { name: "Google Analytics", icon: <GoogleAnalyticsIcon color={"#f84b07"} /> },
            { name: "SEMrush", icon: <SemrushIcon color={"#f84b07"} /> },
            { name: "Ahrefs", icon: <AhrefsIcon color={"#f84b07"} /> },
            { name: "Hotjar", icon: <HotjarIcon color={"#f84b07"} /> },
            { name: "Google Ads", icon: <GoogleAdsIcon color={"#f84b07"} /> },
            { name: "Meta Ads", icon: <MetaAdsIcon color={"#f84b07"} /> },
          ],
        },
        {
          id: 4,
          title: "AI-Powered Brand Development",
          icon: <OpenAIIcon />,
          technologies: [
            { name: "OpenAI", icon: <OpenAIIcon color={"#f84b07"} /> },
            { name: "Hugging Face", icon: <HuggingFaceIcon color={"#f84b07"} /> },
            { name: "Scikit-learn", icon: <ScikitLearnIcon color={"#f84b07"} /> },
          ],
        },
        {
          id: 5,
          title: "Campaign Implementation Platforms",
          icon: <WebflowIcon />,
          technologies: [
            { name: "Webflow", icon: <WebflowIcon color={"#f84b07"} /> },
            { name: "ClickFunnels", icon: <ClickFunnelsIcon color={"#f84b07"} /> },
            { name: "Notion", icon: <NotionIcon color={"#f84b07"} /> },
          ],
        },
      ],
    },
    industry: {
      heading: "Supporting Brand Identity Development Across Multiple Sectors",
      paragraph: "From healthcare to retail, our branding methodologies adjust to industry-specific requirements while strengthening brand trust, recognition, and audience connection.",
      industries: [
        {
          icon: <FaHamburger className="text-dark" />,
          title: "Food & Beverage",
          href: "/industries/marketing/food-beverage-digital-marketing-using-ai",
          description: "Create compelling food brand identities that generate consumer interest while establishing credibility.",
        },
        {
          icon: <FaTshirt className="text-dark" />,
          title: "Fashion & Apparel",
          href: "/industries/marketing/fashion-digital-marketing-using-ai",
          description: "Develop style-oriented brand systems that express identity and inspire customer relationships.",
        },
        {
          icon: <FaPaintBrush className="text-dark" />,
          title: "Industrial Products",
          href: "/industries/marketing/paint-chemical-digital-marketing-using-ai",
          description: "Build innovative brand identities that communicate product quality and safety standards effectively.",
        },
        {
          icon: <FaHardHat className="text-dark" />,
          title: "Construction Services",
          href: "/industries/marketing/construction-digital-marketing-using-ai",
          description: "Create strategic brand identities that demonstrate reliability and specialized expertise.",
        },
        {
          icon: <FaHome className="text-dark" />,
          title: "Real Estate Services",
          href: "/industries/marketing/real-estate-digital-marketing-using-ai",
          description: "Develop compelling brand identities that establish credibility and build client confidence.",
        },
        {
          icon: <FaCouch className="text-dark" />,
          title: "Home Furnishings",
          href: "/industries/marketing/furniture-digital-marketing-using-ai",
          description: "Create distinctive brand identities that reflect lifestyle preferences and aesthetic appeal.",
        },
      ],
    },
    faq: {
      title: "Common Inquiries",
      subtitle: "Addressing frequent questions about brand strategy services.",
      faqs: [
        {
          title: "What constitutes a brand strategy and its significance?",
          answer: "Consider it your brand's operational blueprint—defining identity, core values, and communication methods. It ensures consistency, builds credibility, and creates market differentiation.",
        },
        {
          title: "What components are included in brand strategy services?",
          answer: "We encompass all elements from market positioning and messaging to visual identity and implementation planning—all customized to business objectives.",
        },
        {
          title: "What is the typical duration for brand strategy projects?",
          answer: "Projects generally require 4–6 weeks, depending on research depth and planning complexity before implementation begins.",
        },
        {
          title: "Do you provide strategy implementation support?",
          answer: "Certainly! We provide ongoing assistance to activate your brand across digital assets, marketing initiatives, and team training.",
        },
        {
          title: "How is success measured and tracked?",
          answer: "We monitor key indicators—brand awareness, engagement metrics, conversion rates, and customer loyalty—then apply insights for continuous enhancement.",
        },
        {
          title: "When should brand strategy updates occur?",
          answer: "Schedule annual reviews, or during significant business changes like product introductions, market expansion, or organizational mergers.",
        },
      ],
    },
  },
  {
    id: "ai-social-media-management",
    title: "Social Media Management",
    seoTitle: "AI-Enhanced Social Media Management | Engagement Growth & Performance Optimization",
    seoDescription: "Expand your brand presence through AI-informed social media management. We handle content development, advertising campaigns, performance analytics, and audience development across major social platforms.",
    seoKeywords: "social media management, AI social tools, Facebook advertising, Instagram strategy, LinkedIn campaigns, TikTok management, social media services, content planning, engagement analytics, CLAPIT SOLUTIONS",
    seoImage: IMAGES.SocialMediaMarketing,
    icon: <FaBullhorn className="text-white" size={26} />,
    technologyTitle: "Intelligent Solutions for Social Media Achievement",
    technologyDescription: "We employ data-informed approaches, AI technologies, and automation platforms to execute high-impact campaigns, manage content ecosystems, and monitor return on investment with precision.",
    href: "/services/ai-social-media-management",
    description: "From content creation to community interaction, our social media management services facilitate authentic brand growth.",
    category: "marketing",
    image: IMAGES.SocialMediaMarketing,
    technologies: [
      {
        title: "Advanced Analytics & Intelligence",
        description: "Monitor audience preferences and content performance to inform real-time strategic decisions.",
        icon: <FaChartBar className="text-mediumDark" />,
      },
      {
        title: "AI-Optimized Targeting & Automation",
        description: "Leverage artificial intelligence to reach appropriate audiences with personalized content that drives action.",
        icon: <FaBullseye className="text-dark" />,
      },
      {
        title: "Multi-Platform Management",
        description: "Coordinate all social channels through unified dashboards—eliminating platform-switching inefficiencies.",
        icon: <FaMobileAlt className="text-mediumDark" />,
      },
      {
        title: "Social Monitoring & Sentiment Assessment",
        description: "Maintain awareness of conversations about your brand and industry across social channels.",
        icon: <FaHeadphonesAlt className="text-dark" />,
      },
      {
        title: "Comparative Testing & Enhancement",
        description: "Experiment with different approaches to identify optimal audience engagement methods.",
        icon: <FaFlask className="text-dark" />,
      },
      {
        title: "Automated Content Scheduling",
        description: "Maintain consistent content flow without daily manual posting requirements.",
        icon: <FaCalendarAlt className="text-dark" />,
      },
      {
        title: "Custom Performance Dashboards",
        description: "Access visual reporting that highlights effective strategies and areas requiring attention.",
        icon: <FaTachometerAlt className="text-dark" />,
      },
    ],
    subServices: {
      heading: "Engage. Expand. Convert. Performance-Driven Social Media.",
      description: "We combine strategic planning with creative execution to transform social presence into conversion engines—delivering campaigns that resonate, convert, and scale.",
      items: [
        {
          id: 1,
          title: "Social Strategy & Advisory",
          description: "Define objectives, select appropriate platforms, and develop content plans aligned with brand identity and audience.",
          icon: <FaProjectDiagram className="text-dark" />,
        },
        {
          id: 2,
          title: "Content Development & Campaign Execution",
          description: "From captions and graphics to video content and stories—we create engaging, conversion-oriented content.",
          icon: <FaPenFancy className="text-dark" />,
        },
        {
          id: 3,
          title: "Paid Social Campaigns",
          description: "Execute targeted advertising campaigns that reach appropriate audiences and deliver measurable business outcomes.",
          icon: <FaBullhorn className="text-dark" />,
        },
        {
          id: 4,
          title: "Analytics, Reporting & Optimization",
          description: "Monitor performance, identify successful approaches, and continuously enhance social media results.",
          icon: <FaChartLine className="text-dark" />,
        },
      ],
    },
    techCapabilities: {
      heading: "AI-Enhanced Tools for Social Media Excellence",
      items: [
        {
          id: 1,
          title: "Creative & Design Solutions",
          icon: <FigmaIcon />,
          technologies: [
            { name: "Figma", icon: <FigmaIcon color={"#f84b07"} /> },
            { name: "Canva", icon: <CanvaIcon color={"#f84b07"} /> },
            { name: "Adobe Illustrator", icon: <AdobeIllustratorIcon color={"#f84b07"} /> },
            { name: "Adobe Photoshop", icon: <AdobePhotoshopIcon color={"#f84b07"} /> },
          ],
        },
        {
          id: 2,
          title: "Scheduling & Engagement Platforms",
          icon: <ZapierIcon />,
          technologies: [
            { name: "Buffer", icon: <ZapierIcon color={"#f84b07"} /> },
            { name: "Hootsuite", icon: <HootsuiteIcon color={"#f84b07"} /> },
            { name: "Later", icon: <SproutSocialIcon color={"#f84b07"} /> },
            { name: "Sprout Social", icon: <SproutSocialIcon color={"#f84b07"} /> },
          ],
        },
        {
          id: 3,
          title: "Analytics & Social Advertising",
          icon: <GoogleAnalyticsIcon />,
          technologies: [
            { name: "Google Analytics", icon: <GoogleAnalyticsIcon color={"#f84b07"} /> },
            { name: "Meta Ads", icon: <MetaAdsIcon color={"#f84b07"} /> },
            { name: "LinkedIn Ads", icon: <LinkedInAdsIcon color={"#f84b07"} /> },
            { name: "TikTok Ads", icon: <TikTokAdsIcon color={"#f84b07"} /> },
          ],
        },
        {
          id: 4,
          title: "AI Content & Copy Solutions",
          icon: <OpenAIIcon />,
          technologies: [
            { name: "OpenAI", icon: <OpenAIIcon color={"#f84b07"} /> },
            { name: "Scikit-learn", icon: <ScikitLearnIcon color={"#f84b07"} /> },
            { name: "Hugging Face", icon: <HuggingFaceIcon color={"#f84b07"} /> },
          ],
        },
      ],
    },
    industry: {
      heading: "Social Media Solutions Across Diverse Industry Verticals",
      paragraph: "From culinary to financial technology, we assist brands in building loyal communities, increasing visibility, and achieving results through customized social strategies.",
      industries: [
        {
          icon: <FaHamburger className="text-dark" />,
          title: "Food & Beverage",
          href: "/industries/marketing/food-beverage-digital-marketing-using-ai",
          description: "We develop visually appealing campaigns that stimulate appetite and encourage repeat patronage.",
        },
        {
          icon: <FaTshirt className="text-dark" />,
          title: "Fashion & Apparel",
          href: "/industries/marketing/fashion-digital-marketing-using-ai",
          description: "From trending video content to seasonal collections, we help fashion brands maintain relevance and drive sales through creative storytelling.",
        },
        {
          icon: <FaPaintBrush className="text-dark" />,
          title: "Industrial Products",
          href: "/industries/marketing/paint-chemical-digital-marketing-using-ai",
          description: "We transform technical products into relatable offerings through educational content and instructional videos that generate industry interest.",
        },
        {
          icon: <FaHardHat className="text-dark" />,
          title: "Construction Services",
          href: "/industries/marketing/construction-digital-marketing-using-ai",
          description: "We simplify complex services through visual storytelling and project showcases that establish trust with prospective clients.",
        },
        {
          icon: <FaHome className="text-dark" />,
          title: "Real Estate Services",
          href: "/industries/marketing/real-estate-digital-marketing-using-ai",
          description: "Virtual property tours and community-focused content help real estate brands generate qualified leads and local market awareness.",
        },
        {
          icon: <FaCouch className="text-dark" />,
          title: "Home Furnishings",
          href: "/industries/marketing/furniture-digital-marketing-using-ai",
          description: "We elevate furniture brands with curated lifestyle content and commerce-enabled social campaigns that drive sales conversion.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Comprehensive information about our social media management services.",
      faqs: [
        {
          title: "What does social media management service encompass?",
          answer: "We manage all aspects from strategy development and content creation to scheduling, community engagement, paid campaigns, and performance analytics across major platforms.",
        },
        {
          title: "Do you handle content creation?",
          answer: "Yes! Our team manages all creative components—copywriting, visual design, video production, captions—all optimized for specific platform requirements.",
        },
        {
          title: "Which social platforms do you support?",
          answer: "We work with Facebook, Instagram, LinkedIn, TikTok, X (Twitter), YouTube, Pinterest, and additional platforms. We concentrate on channels where your target audience is most active.",
        },
        {
          title: "Can you manage paid advertising campaigns?",
          answer: "Absolutely. We plan and execute paid campaigns utilizing Meta Ads, TikTok Ads, LinkedIn Ads, and Google Ads—continuously optimized for maximum performance.",
        },
        {
          title: "What timeframe should we anticipate for results?",
          answer: "Organic growth typically requires several weeks to build momentum, while paid campaigns can demonstrate results within days. We continuously monitor and refine to ensure consistent growth.",
        },
        {
          title: "How do you measure performance and success?",
          answer: "We focus on critical metrics—reach, engagement, conversion rates, and return on investment. You receive regular reports with clear insights and actionable recommendations.",
        },
      ],
    },
  },
  {
    id: "ai-pr-influencer-marketing",
    title: "PR & Influencer Marketing",
    seoTitle: "AI-Optimized PR & Influencer Marketing Solutions | Trust Building & Visibility Enhancement",
    seoDescription: "Utilize AI-driven public relations and influencer marketing to accelerate brand growth. We manage media outreach, influencer collaborations, and real-time analytics to establish credibility and maximize return on investment.",
    seoKeywords: "PR and influencer marketing, AI influencer identification, brand visibility enhancement, earned media strategies, paid campaign management, reputation management, content creator partnerships, social media public relations, influencer outreach, CLAPIT SOLUTIONS",
    seoImage: IMAGES.PRInfluencerMarketing,
    icon: <FaUserFriends className="text-white" size={26} />,
    technologyTitle: "Amplifying Brand Reach Through Strategic PR & Influencer Collaborations",
    technologyDescription: "We integrate creative narrative development, data-informed influencer matching, and powerful analytical tools to execute impactful public relations and influencer marketing initiatives.",
    image: IMAGES.PRInfluencerMarketing,
    href: "/services/ai-pr-influencer-marketing",
    category: "marketing",
    description: "We develop compelling narratives and influencer partnerships that drive awareness, establish trust, and facilitate growth for your brand.",
    technologies: [
      {
        title: "Influencer Identification",
        description: "Utilize intelligent AI tools to locate influencers who genuinely connect with your audience and share brand values.",
        icon: <FaSearch className="text-dark" />,
      },
      {
        title: "Campaign Performance Analytics",
        description: "Track campaign effectiveness with real-time dashboards that display performance metrics and adjustment requirements.",
        icon: <FaChartBar className="text-mediumDark" />,
      },
      {
        title: "Collaborative Content Creation",
        description: "Work closely with content creators to produce authentic material that feels natural and drives genuine engagement.",
        icon: <FaPenFancy className="text-dark" />,
      },
      {
        title: "Social Conversation Monitoring",
        description: "Stay informed about brand discussions and public sentiment across all digital platforms.",
        icon: <FaHeadphonesAlt className="text-dark" />,
      },
      {
        title: "Media Relationship Development",
        description: "Connect with prominent journalists and editors to secure media placements that enhance credibility.",
        icon: <FaNewspaper className="text-dark" />,
      },
      {
        title: "Reputation Monitoring",
        description: "Protect brand image by identifying potential risks early and managing them proactively.",
        icon: <FaShieldAlt className="text-dark" />,
      },
      {
        title: "Media Asset Development",
        description: "Create professional media materials that facilitate journalist coverage of your stories.",
        icon: <FaFolderOpen className="text-dark" />,
      },
    ],
    subServices: {
      heading: "Drive Awareness, Establish Trust, and Influence at Scale",
      description: "We assist brands in controlling their narrative across traditional and digital platforms—combining public relations expertise with influencer collaboration to maximize reach and credibility.",
      items: [
        {
          id: 1,
          title: "PR Strategy & Media Planning",
          description: "Create customized PR roadmaps focused on appropriate media outlets and touchpoints for brand objectives.",
          icon: <FaProjectDiagram className="text-dark" />,
        },
        {
          id: 2,
          title: "Influencer Campaign Management",
          description: "We handle all aspects from creator identification to onboarding, briefing, and performance tracking.",
          icon: <FaUsers className="text-dark" />,
        },
        {
          id: 3,
          title: "Press Release Development & Distribution",
          description: "Write compelling narratives and position them before target audiences through trusted media channels.",
          icon: <FaEnvelopeOpenText className="text-dark" />,
        },
        {
          id: 4,
          title: "Social Amplification",
          description: "Enhance PR and influencer content across social channels for maximum reach and impact.",
          icon: <FaBullhorn className="text-dark" />,
        },
        {
          id: 5,
          title: "Influencer Content Strategy",
          description: "Shape content themes and narrative angles that maintain consistency across all creator partnerships.",
          icon: <FaComments className="text-dark" />,
        },
        {
          id: 6,
          title: "Crisis & Reputation Management",
          description: "Prepare for potential challenges with transparent messaging and media management strategies.",
          icon: <FaExclamationTriangle className="text-dark" />,
        },
        {
          id: 7,
          title: "PR Monitoring & Reporting",
          description: "Track media mentions, influencer reach, and sentiment through comprehensive, understandable dashboards.",
          icon: <FaChartLine className="text-dark" />,
        },
        {
          id: 8,
          title: "Affiliate & Influencer Commerce",
          description: "Transform influence into measurable sales through performance-based campaigns and affiliate marketing.",
          icon: <FaShoppingCart className="text-dark" />,
        },
      ],
    },
    techCapabilities: {
      heading: "Intelligent Platforms & Tools for PR & Influencer Achievement",
      items: [
        {
          id: 1,
          title: "Media Outreach & Monitoring",
          icon: <MeltwaterIcon />,
          technologies: [
            { name: "Meltwater", icon: <MeltwaterIcon color={"#f84b07"} /> },
            { name: "Brandwatch", icon: <BrandwatchIcon color={"#f84b07"} /> },
            { name: "Cision", icon: <CisionIcon color={"#f84b07"} /> },
            { name: "BuzzSumo", icon: <BuzzSumoIcon color={"#f84b07"} /> },
          ],
        },
        {
          id: 2,
          title: "Influencer Platforms",
          icon: <HeepsyIcon />,
          technologies: [
            { name: "Upfluence", icon: <UpfluenceIcon color={"#f84b07"} /> },
            { name: "Heepsy", icon: <HeepsyIcon color={"#f84b07"} /> },
            { name: "CreatorIQ", icon: <CreatorIQIcon color={"#f84b07"} /> },
          ],
        },
        {
          id: 3,
          title: "Campaign Analytics",
          icon: <GoogleAnalyticsIcon />,
          technologies: [
            { name: "Google Analytics", icon: <GoogleAnalyticsIcon color={"#f84b07"} /> },
            { name: "Sprout Social", icon: <SproutSocialIcon color={"#f84b07"} /> },
            { name: "Hootsuite", icon: <HootsuiteIcon color={"#f84b07"} /> },
          ],
        },
      ],
    },
    industry: {
      heading: "Assisting Brands Across Industries in Driving Visibility & Influence",
      paragraph: "We customize PR and influencer strategies for each industry's distinctive voice—whether launching products, scaling services, or managing public reputation.",
      industries: [
        {
          icon: <FaHamburger className="text-dark" />,
          title: "Food & Beverage",
          href: "/industries/marketing/food-beverage-digital-marketing-using-ai",
          description: "We collaborate with culinary creators and media outlets to generate excitement, reviews, and shareable content.",
        },
        {
          icon: <FaTshirt className="text-dark" />,
          title: "Fashion & Apparel",
          href: "/industries/marketing/fashion-digital-marketing-using-ai",
          description: "Secure features in prominent style publications and partner with trendsetters to maintain fashion brand visibility.",
        },
        {
          icon: <FaPaintBrush className="text-dark" />,
          title: "Industrial Products",
          href: "/industries/marketing/paint-chemical-digital-marketing-using-ai",
          description: "We simplify complex products through influencer-led demonstrations and educational content that builds confidence.",
        },
        {
          icon: <FaHardHat className="text-dark" />,
          title: "Construction Services",
          href: "/industries/marketing/construction-digital-marketing-using-ai",
          description: "Establish authority through thought leadership placements and expert commentary in industry publications.",
        },
        {
          icon: <FaHome className="text-dark" />,
          title: "Real Estate Services",
          href: "/industries/marketing/real-estate-digital-marketing-using-ai",
          description: "Leverage influencers and media to showcase properties and highlight community narratives.",
        },
        {
          icon: <FaCouch className="text-dark" />,
          title: "Home Furnishings",
          href: "/industries/marketing/furniture-digital-marketing-using-ai",
          description: "Collaborate with interior design creators and design publications to position your brand as a home design leader.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Common inquiries about PR & Influencer Marketing addressed.",
      faqs: [
        {
          title: "How do you select appropriate influencers for a brand?",
          answer: "We combine AI-powered discovery with personal evaluation to choose influencers who authentically align with your audience and brand voice.",
        },
        {
          title: "Do you provide both paid and earned media services?",
          answer: "Yes, we manage both influencer campaigns and traditional media coverage to provide a balanced combination of paid and organic visibility.",
        },
        {
          title: "What types of outcomes can we anticipate?",
          answer: "We track meaningful metrics including reach, engagement, website traffic, earned media value, and conversion rates to demonstrate genuine campaign impact.",
        },
        {
          title: "Is public relations still relevant in the digital era?",
          answer: "More than ever! PR establishes trust and authority that supports your search optimization and social efforts—particularly when integrated with influencer marketing.",
        },
      ],
    },
  },
  {
    id: "ai-performance-marketing",
    title: "Performance Marketing",
    seoTitle: "AI-Optimized Performance Marketing Solutions | Paid Advertising, Conversion Optimization & ROI Maximization",
    seoDescription: "Achieve scalable growth through our AI-enhanced performance marketing services. We optimize paid advertisements, landing pages, and conversion funnels to deliver measurable outcomes including leads, sales, and conversions.",
    seoKeywords: "performance marketing, AI marketing solutions, conversion rate optimization, paid advertising, retargeting strategies, Google Ads management, Meta Ads optimization, ROI-focused marketing, PPC campaign management, CRO services, CLAPIT SOLUTIONS",
    seoImage: IMAGES.PerformanceMarketing,
    image: IMAGES.PerformanceMarketing,
    href: "/services/ai-performance-marketing",
    category: "marketing",
    description: "Maximize marketing investment efficiency with our comprehensive performance marketing strategies focused on tangible, trackable outcomes.",
    icon: <FaChartLine className="text-white" size={26} />,
    technologyTitle: "Data-Informed Advertising That Delivers Quantifiable Results",
    technologyDescription: "We assist brands in accelerating growth through ROI-focused performance marketing strategies. From paid advertising to conversion optimization, our methodology ensures payment only for genuine outcomes—clicks, leads, and sales.",
    technologies: [
      {
        title: "Paid Advertising Management",
        description: "Launch and optimize high-converting advertisements on Google, Meta, LinkedIn, and TikTok that reach ideal customers.",
        icon: <FaBullhorn className="text-dark" />,
      },
      {
        title: "Conversion Rate Optimization & Landing Page Enhancement",
        description: "Transform more visitors into customers by refining copy, design, and user experience through continuous testing.",
        icon: <FaFlask className="text-dark" />,
      },
      {
        title: "Retargeting Campaigns",
        description: "Re-engage interested visitors with personalized advertisements that remind them of your brand's value proposition.",
        icon: <FaRedo className="text-dark" />,
      },
      {
        title: "Email & Funnel Automation",
        description: "Create automated email sequences that nurture prospects and guide them toward purchase decisions.",
        icon: <FaEnvelopeOpenText className="text-dark" />,
      },
      {
        title: "Analytics & Attribution Modeling",
        description: "Understand precise revenue sources through advanced tracking and clear reporting mechanisms.",
        icon: <FaChartLine className="text-dark" />,
      },
      {
        title: "Budget & ROI Optimization",
        description: "Continuously monitor expenditure to scale successful initiatives and eliminate underperforming elements.",
        icon: <FaWallet className="text-dark" />,
      },
    ],
    subServices: {
      heading: "Scalable Campaigns. Measurable Outcomes.",
      description: "Our performance marketing team integrates creative development, strategic planning, and analytical capabilities to drive bottom-line growth through channel-specific optimizations and revenue-focused planning.",
      items: [
        {
          id: 1,
          title: "Google & YouTube Advertising",
          description: "Search, shopping, and video campaigns that drive qualified traffic and convert high-intent users.",
          icon: <FaGoogle className="text-dark" />,
        },
        {
          id: 2,
          title: "Meta & TikTok Campaigns",
          description: "Engaging short-form creative content and performance advertisements for Meta, Instagram, and TikTok audiences.",
          icon: <FaFacebookF className="text-dark" />,
        },
        {
          id: 3,
          title: "Conversion Optimization",
          description: "We enhance click-to-sale flow across landing pages, forms, popups, and checkout processes.",
          icon: <FaRocket className="text-dark" />,
        },
        {
          id: 4,
          title: "Performance Email Marketing",
          description: "Behavior-based campaigns and lead scoring that automatically move users through conversion funnels.",
          icon: <FaMailBulk className="text-dark" />,
        },
        {
          id: 5,
          title: "Retargeting & Remarketing",
          description: "Custom audience segmentation based on behavior and intent, across web and social platforms.",
          icon: <FaSyncAlt className="text-dark" />,
        },
        {
          id: 6,
          title: "Funnel Planning & Testing",
          description: "We design, test, and optimize multi-step funnels that align content, advertisements, and calls-to-action.",
          icon: <FaSitemap className="text-dark" />,
        },
        {
          id: 7,
          title: "Budget Scaling & Cost Control",
          description: "We scale successful campaigns and manage acquisition costs through algorithmic budget allocation.",
          icon: <FaChartPie className="text-dark" />,
        },
        {
          id: 8,
          title: "Reporting & Real-Time Insights",
          description: "Custom dashboards and weekly reports that highlight successes, challenges, and optimization opportunities.",
          icon: <FaClipboardList className="text-dark" />,
        },
      ],
    },
    techCapabilities: {
      heading: "Performance Technology Stack We Utilize",
      items: [
        {
          id: 1,
          title: "Advertising Channels",
          icon: <FaBullhorn className="text-dark" />,
          technologies: [
            { name: "Google Ads", icon: <GoogleAdsIcon color="#f84b07" /> },
            { name: "Meta Ads", icon: <MetaAdsIcon color="#f84b07" /> },
            { name: "TikTok Ads", icon: <TikTokAdsIcon color="#f84b07" /> },
            { name: "LinkedIn Ads", icon: <LinkedInAdsIcon color="#f84b07" /> },
          ],
        },
        {
          id: 2,
          title: "Analytics & Reporting",
          icon: <FaChartBar className="text-mediumDark" />,
          technologies: [
            { name: "Google Analytics", icon: <GoogleAnalyticsIcon color="#f84b07" /> },
            { name: "Hotjar", icon: <HotjarIcon color="#f84b07" /> },
            { name: "Mixpanel", icon: <MixpanelIcon color="#f84b07" /> },
          ],
        },
        {
          id: 3,
          title: "Automation & CRM",
          icon: <FaCogs className="text-dark" />,
          technologies: [
            { name: "Klaviyo", icon: <KlaviyoIcon color="#f84b07" /> },
            { name: "ActiveCampaign", icon: <ActiveIcon color="#f84b07" /> },
            { name: "Zapier", icon: <ZapierIcon color="#f84b07" /> },
          ],
        },
      ],
    },
    industry: {
      heading: "Performance Marketing Solutions for Every Sector",
      paragraph: "From electronic commerce to real estate, our performance strategies adapt to your industry's sales cycle, seasonal patterns, and objectives—delivering measurable return on investment across all channels.",
      industries: [
        {
          icon: <FaHamburger className="text-dark" />,
          title: "Food & Beverage",
          href: "/industries/marketing/food-beverage-digital-marketing-using-ai",
          description: "Drive orders and brand loyalty through location-targeted advertisements, visual storytelling, and promotional tracking.",
        },
        {
          icon: <FaTshirt className="text-dark" />,
          title: "Fashion & Apparel",
          href: "/industries/marketing/fashion-digital-marketing-using-ai",
          description: "Fuel online and physical store sales through influencer-style advertisements, product retargeting, and seasonal launches.",
        },
        {
          icon: <FaPaintBrush className="text-dark" />,
          title: "Industrial Products",
          href: "/industries/marketing/paint-chemical-digital-marketing-using-ai",
          description: "Capture business-to-business and consumer demand through demonstration videos, offer funnels, and targeted outreach.",
        },
        {
          icon: <FaHardHat className="text-dark" />,
          title: "Construction Services",
          href: "/industries/marketing/construction-digital-marketing-using-ai",
          description: "Highlight projects, services, and lead capture forms via location-based advertisements and targeted landing pages.",
        },
        {
          icon: <FaHome className="text-dark" />,
          title: "Real Estate Services",
          href: "/industries/marketing/real-estate-digital-marketing-using-ai",
          description: "Convert traffic into property viewings through property-focused creative content and lead qualification funnels.",
        },
        {
          icon: <FaCouch className="text-dark" />,
          title: "Home Furnishings",
          href: "/industries/marketing/furniture-digital-marketing-using-ai",
          description: "Showcase collections and promotions using carousel advertisements, shopping campaigns, and influencer collaborations.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Common performance marketing inquiries addressed.",
      faqs: [
        {
          title: "What components are included in performance marketing services?",
          answer: "We manage all aspects from paid media strategy and advertisement creation to campaign optimization, funnel design, analytics, and reporting across major platforms.",
        },
        {
          title: "How quickly can we anticipate results?",
          answer: "Typically, initial insights from advertising campaigns emerge within 1–2 weeks, with noticeable ROI improvements often appearing within the initial month.",
        },
        {
          title: "Do you manage landing pages or exclusively advertisements?",
          answer: "We handle both! We develop and optimize landing pages to function seamlessly with your advertising campaigns for improved conversion rates.",
        },
        {
          title: "Can we initiate with limited budget allocation?",
          answer: "Absolutely. We customize our strategies to work within your budget parameters and scale upward as we observe positive outcomes.",
        },
      ],
    },
  },
  {
    id: "ai-product-launch",
    title: "Product Launch",
    seoTitle: "AI-Driven Product Launch Solutions | Market Entry Strategy, Influencer Activation & Growth Acceleration",
    seoDescription: "Accelerate market penetration with AI-powered product launch services. We provide market entry strategy, influencer campaigns, landing page development, and growth analytics customized for startups and enterprises.",
    seoKeywords: "product launch strategy, market entry services, startup launch solutions, AI product marketing, pre-launch campaign management, beta testing programs, market entry planning, landing page design, influencer launch strategy, CLAPIT SOLUTIONS",
    seoImage: IMAGES.ProductLaunch,
    image: IMAGES.ProductLaunch,
    href: "/services/ai-product-launch",
    category: "marketing",
    description: "We assist startups and enterprises in successfully launching products through strategic planning, brand narrative development, and high-impact campaigns.",
    icon: <FaRocket className="text-white" size={26} />,
    technologyTitle: "Strategic Product Launch Solutions That Accelerate Market Entry",
    technologyDescription: "From pre-launch preparation to post-launch optimization, our product launch services ensure your offering creates powerful initial impressions. We align marketing, design, technology, and strategy to drive maximum visibility, user adoption, and revenue growth.",
    technologies: [
      {
        title: "Market Entry Strategy",
        description: "We design customized plans that align positioning, messaging, channels, and launch timeline for maximum impact.",
        icon: <FaBullseye className="text-dark" />,
      },
      {
        title: "Campaign Planning & Implementation",
        description: "Create multi-channel campaigns that generate excitement and drive pre-orders across social, email, PR, and influencer channels.",
        icon: <FaRocket className="text-dark" />,
      },
      {
        title: "Landing Page & Registration Flows",
        description: "Build high-converting pages designed to validate demand, establish waitlists, and capture early interest.",
        icon: <FaFileAlt className="text-dark" />,
      },
      {
        title: "Influencer Activation",
        description: "Leverage key creators and early reviews to generate social proof and build anticipation before launch.",
        icon: <FaMicrophone className="text-dark" />,
      },
      {
        title: "Beta Testing & Feedback Collection",
        description: "Test your product with selected users to refine messaging, user flows, and onboarding before full launch.",
        icon: <FaVial className="text-dark" />,
      },
      {
        title: "Analytics & Iterative Improvement",
        description: "Post-launch tracking and feedback mechanisms help you scale successful elements and adjust for real-time success.",
        icon: <FaChartLine className="text-dark" />,
      },
    ],
    subServices: {
      heading: "Launch with Confidence. Scale with Precision.",
      description: "Whether software minimum viable products or direct-to-consumer hardware launches, we help you build pre-launch momentum and post-launch traction with comprehensive launch strategy.",
      items: [
        {
          id: 1,
          title: "Launch Readiness Assessment",
          description: "We evaluate technology, design, and messaging to ensure complete alignment before product introduction.",
          icon: <FaCheckCircle className="text-dark" />,
        },
        {
          id: 2,
          title: "Positioning & Messaging",
          description: "Define unique value proposition and craft compelling narrative that resonates with early adopters and investors.",
          icon: <FaBullhorn className="text-dark" />,
        },
        {
          id: 3,
          title: "Pre-Launch Campaigns",
          description: "Generate excitement and grow waitlists with countdowns, previews, and exclusive early access opportunities.",
          icon: <FaClock className="text-dark" />,
        },
        {
          id: 4,
          title: "Launch Campaign Execution",
          description: "We launch and monitor high-impact campaigns across email, paid media, social, PR, and live events.",
          icon: <FaBroadcastTower className="text-dark" />,
        },
        {
          id: 5,
          title: "Beta Testing & Refinement",
          description: "Collaborate with early adopters to enhance user experience and gather valuable feedback before scaling.",
          icon: <FaUserCheck className="text-dark" />,
        },
        {
          id: 6,
          title: "Email Funnels & Nurturing",
          description: "Automate onboarding, upselling, and feature education through intelligent, segmented email workflows.",
          icon: <FaEnvelopeOpenText className="text-dark" />,
        },
        {
          id: 7,
          title: "Post-Launch Analytics",
          description: "Track key metrics including customer acquisition cost, lifetime value, and engagement to optimize strategy.",
          icon: <FaChartPie className="text-dark" />,
        },
        {
          id: 8,
          title: "Growth-Stage Strategy",
          description: "Support scaling milestones with marketing frameworks, experimentation, and growth campaigns.",
          icon: <FaChartBar className="text-mediumDark" />,
        },
      ],
    },
    techCapabilities: {
      heading: "Launch-Ready Tools & Integrations",
      items: [
        {
          id: 1,
          title: "Planning & Implementation",
          icon: <FaClipboardCheck className="text-dark" />,
          technologies: [
            { name: "Notion", icon: <NotionIcon color="#f84b07" /> },
            { name: "ClickFunnels", icon: <ClickFunnelsIcon color="#f84b07" /> },
            { name: "Webflow", icon: <WebflowIcon color="#f84b07" /> },
          ],
        },
        {
          id: 2,
          title: "CRM & Email Funnels",
          icon: <FaMailchimp className="text-dark" />,
          technologies: [
            { name: "Klaviyo", icon: <KlaviyoIcon color="#f84b07" /> },
            { name: "ActiveCampaign", icon: <ActiveIcon color="#f84b07" /> },
            { name: "HubSpot", icon: <HubSpotIcon color="#f84b07" /> },
          ],
        },
        {
          id: 3,
          title: "Analytics & Testing",
          icon: <FaChartLine className="text-dark" />,
          technologies: [
            { name: "Google Analytics", icon: <GoogleAnalyticsIcon color="#f84b07" /> },
            { name: "Hotjar", icon: <HotjarIcon color="#f84b07" /> },
            { name: "Mixpanel", icon: <MixpanelIcon color="#f84b07" /> },
          ],
        },
      ],
    },
    industry: {
      heading: "Launch Support for Every Industry Vertical",
      paragraph: "From financial technology and fashion to software-as-a-service and sustainability, our launch systems are customized to your audience, lifecycle stage, and growth objectives.",
      industries: [
        {
          icon: <FaHamburger className="text-dark" />,
          title: "Food & Beverage",
          href: "/industries/marketing/food-beverage-digital-marketing-using-ai",
          description: "Launch food brands with creator excitement, timed promotions, and brand-aligned packaging strategy.",
        },
        {
          icon: <FaTshirt className="text-dark" />,
          title: "Fashion & Apparel",
          href: "/industries/marketing/fashion-digital-marketing-using-ai",
          description: "Influencer releases, collaboration launches, and direct-to-consumer campaigns designed for stylish market entry.",
        },
        {
          icon: <FaPaintBrush className="text-dark" />,
          title: "Industrial Products",
          href: "/industries/marketing/paint-chemical-digital-marketing-using-ai",
          description: "Introduce industrial or consumer-grade products to market with thought leadership and demonstration-driven strategy.",
        },
        {
          icon: <FaHardHat className="text-dark" />,
          title: "Construction Services",
          href: "/industries/marketing/construction-digital-marketing-using-ai",
          description: "Service and product launch campaigns focusing on local impact and confidence-building.",
        },
        {
          icon: <FaHome className="text-dark" />,
          title: "Real Estate Services",
          href: "/industries/marketing/real-estate-digital-marketing-using-ai",
          description: "Promote new developments, applications, or technology platforms tailored to purchasers, renters, or agents.",
        },
        {
          icon: <FaCouch className="text-dark" />,
          title: "Home Furnishings",
          href: "/industries/marketing/furniture-digital-marketing-using-ai",
          description: "Plan high-visibility launches for collections, flagship items, and brand repositioning.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Essential information before launching your product.",
      faqs: [
        {
          title: "What product categories do you support for launch?",
          answer: "We support all product types—software-as-a-service tools, mobile applications, eCommerce products, business-to-business platforms, direct-to-consumer brands, and additional categories.",
        },
        {
          title: "How early should we commence launch preparation?",
          answer: "We recommend initiating pre-launch planning at minimum 6–8 weeks in advance to establish proper momentum and secure early traction.",
        },
        {
          title: "Can you collaborate with our internal team or development agency?",
          answer: "Absolutely. We work closely with in-house teams and partners to coordinate messaging, design, and timelines.",
        },
        {
          title: "Do you provide post-launch growth support?",
          answer: "Yes! From paid media to conversion optimization and content strategy, we support ongoing scaling and optimization.",
        },
      ],
    },
  },
  {
    id: "ai-brand-identity-styling",
    title: "Brand Identity & Styling",
    seoTitle: "Brand Identity & Styling Solutions | Logo Design, UI Kits & Brand Guidelines",
    seoDescription: "Transform your brand through expert identity design, from logo systems to digital styling and user interface kits. Ideal for startups and growing enterprises.",
    seoKeywords: "brand identity design, logo design services, UI design systems, brand guidelines development, typography and color styling, visual branding agency, AI branding tools, CLAPIT SOLUTIONS",
    seoImage: IMAGES.BrandIdentity,
    image: IMAGES.BrandIdentity,
    href: "/services/ai-brand-identity-styling",
    category: "marketing",
    description: "Elevate your brand with distinctive visual identity that communicates essence and creates lasting impressions.",
    icon: <FaPalette className="text-white" size={26} />,
    technologyTitle: "Visually Distinct, Strategically Aligned Brand Systems",
    technologyDescription: "We create cohesive and memorable brand identities that extend beyond logos. Our styling services ensure consistency across every customer touchpoint—from digital to print, packaging to platforms.",
    technologies: [
      {
        title: "Visual Identity Systems",
        description: "Create comprehensive brand systems with logos, typography, colors, and icons that work collectively to build recognition.",
        icon: <FaPalette className="text-dark" />,
      },
      {
        title: "Design Components & UI Kits",
        description: "Build reusable design assets that ensure consistency across all digital interfaces and platforms.",
        icon: <FaPuzzlePiece className="text-dark" />,
      },
      {
        title: "Typography & Color Methodology",
        description: "Select fonts and colors that reflect brand personality while maintaining readability and visual appeal.",
        icon: <FaFont className="text-dark" />,
      },
      {
        title: "Brand Guidelines",
        description: "Receive clear documentation that demonstrates proper usage of brand assets across all applications.",
        icon: <FaBookOpen className="text-dark" />,
      },
      {
        title: "Packaging & Print Design",
        description: "Design attractive packaging and print materials that convey brand narrative in physical environments.",
        icon: <FaBoxOpen className="text-dark" />,
      },
      {
        title: "Illustration & Icon Systems",
        description: "Create custom illustrations and icons that align with brand's unique style and character.",
        icon: <FaDrawPolygon className="text-dark" />,
      },
      {
        title: "Web & Social Styling",
        description: "Style website, social graphics, and advertisements to appear cohesive and professional across all platforms.",
        icon: <FaLaptopCode className="text-dark" />,
      },
    ],
    subServices: {
      heading: "Develop Brand Identity That Commands Attention",
      description: "Our identity and styling services bridge creativity with consistency. From logo marks to comprehensive UI kits, we ensure your brand creates enduring visual impact across every medium.",
      items: [
        {
          id: 1,
          title: "Brand Discovery & Mood Boarding",
          description: "Explore values, market context, and competitors to shape brand's visual direction and personality.",
          icon: <FaSearch className="text-dark" />,
        },
        {
          id: 2,
          title: "Logo Design & Wordmarks",
          description: "Create timeless and adaptable logo systems that appear excellent everywhere—from business cards to billboards.",
          icon: <FaTrademark className="text-dark" />,
        },
        {
          id: 3,
          title: "Color Palettes & Typography",
          description: "Develop color schemes and font combinations that capture brand essence and appeal to target audience.",
          icon: <FaSwatchbook className="text-dark" />,
        },
        {
          id: 4,
          title: "UI Styling & Design Systems",
          description: "Build scalable design libraries that assist your team in creating consistent digital experiences.",
          icon: <FaLayerGroup className="text-dark" />,
        },
        {
          id: 5,
          title: "Brand Guidelines",
          description: "Create easily followed rules for utilizing logo, colors, fonts, and tone across all communications.",
          icon: <FaClipboardCheck className="text-dark" />,
        },
        {
          id: 6,
          title: "Packaging & Merchandise",
          description: "Design packaging, labels, and merchandise that bring brand to life in physical world.",
          icon: <FaShoppingBag className="text-mediumDark" />,
        },
        {
          id: 7,
          title: "Iconography & Illustration",
          description: "Develop custom icons and illustrations that make brand immediately recognizable.",
          icon: <FaPencilRuler className="text-dark" />,
        },
        {
          id: 8,
          title: "Digital Styling for Social & Advertising",
          description: "Create branded templates for social media, advertisements, and web banners that maintain consistency.",
          icon: <FaImages className="text-dark" />,
        },
      ],
    },
    techCapabilities: {
      heading: "Design Tools & Systems That Power Iconic Brands",
      items: [
        {
          id: 1,
          title: "Design & Prototyping",
          icon: <FaDraftingCompass className="text-dark" />,
          technologies: [
            { name: "Figma", icon: <FigmaIcon color="#f84b07" /> },
            { name: "Adobe Illustrator", icon: <AdobeIllustratorIcon color="#f84b07" /> },
            { name: "Photoshop", icon: <AdobePhotoshopIcon color="#f84b07" /> },
            { name: "Zeplin", icon: <ZeplinIcon color="#f84b07" /> },
          ],
        },
        {
          id: 2,
          title: "Design Systems & Handoff",
          icon: <FaCode className="text-dark" />,
          technologies: [
            { name: "Storybook", icon: <StorybookIcon color="#f84b07" /> },
            { name: "LottieFiles", icon: <LottieFilesIcon color="#f84b07" /> },
            { name: "Sketch", icon: <SketchIcon color="#f84b07" /> },
          ],
        },
        {
          id: 3,
          title: "Web & Content Styling",
          icon: <FaGlobe className="text-dark" />,
          technologies: [
            { name: "Canva", icon: <CanvaIcon color="#f84b07" /> },
            { name: "Crello", icon: <CrelloIcon color="#f84b07" /> },
            { name: "Webflow", icon: <WebflowIcon color="#f84b07" /> },
          ],
        },
      ],
    },
    industry: {
      heading: "Assisting Brands Across Industries in Creating Memorable Identities",
      paragraph: "Whether in healthcare, retail, technology, or hospitality, our brand strategy solutions are tailored to meet industry-specific demands. We build strategies that foster trust, inspire loyalty, and drive recognition.",
      industries: [
        {
          icon: <FaHamburger className="text-dark" />,
          title: "Food & Beverage",
          href: "/industries/marketing/food-beverage-digital-marketing-using-ai",
          description: "Design appealing brand visuals—from packaging and menus to online delivery assets and social content.",
        },
        {
          icon: <FaTshirt className="text-dark" />,
          title: "Fashion & Apparel",
          href: "/industries/marketing/fashion-digital-marketing-using-ai",
          description: "Build trend-forward identities with seasonal kits, product lookbooks, and digital fashion systems.",
        },
        {
          icon: <FaPaintRoller className="text-dark" />,
          title: "Industrial Products",
          href: "/industries/marketing/paint-chemical-digital-marketing-using-ai",
          description: "Visual systems that balance precision, safety, and sustainability through clean brand design.",
        },
        {
          icon: <FaWrench className="text-dark" />,
          title: "Construction Services",
          href: "/industries/marketing/construction-digital-marketing-using-ai",
          description: "Showcase capabilities with branded templates, signage, and project documentation styles.",
        },
        {
          icon: <FaHome className="text-dark" />,
          title: "Real Estate Services",
          href: "/industries/marketing/real-estate-digital-marketing-using-ai",
          description: "Build identities that elevate property listings, marketing kits, and realtor brands with sophistication and consistency.",
        },
        {
          icon: <FaCouch className="text-dark" />,
          title: "Home Furnishings",
          href: "/industries/marketing/furniture-digital-marketing-using-ai",
          description: "Align product styling with lifestyle aesthetics through mood boards, renders, and UI styling.",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Common inquiries about brand identity and styling addressed.",
      faqs: [
        {
          title: "Do you exclusively design logos?",
          answer: "Not at all! We create complete brand systems that include typography, color theory, user interface design, packaging, and additional elements—everything required for cohesive brand presence.",
        },
        {
          title: "Can you reposition existing company brands?",
          answer: "Absolutely. We specialize in brand evolution—refreshing or completely reimagining identities while preserving brand equity.",
        },
        {
          title: "What file formats do you deliver assets in?",
          answer: "You receive all necessary formats in SVG, PNG, PDF, and editable design files, plus comprehensive brand guidelines for consistent application.",
        },
        {
          title: "What is the typical timeline for identity development?",
          answer: "Most brand identity projects require 3–6 weeks from initial research to final delivery, depending on project scope.",
        },
      ],
    },
  },
  {
    id: "generative-ai-development",
    title: "AI Innovation | Generative Intelligence",
    seoTitle: "Generative AI Development | Intelligent Chatbots, Content Engines & Custom GPT Solutions",
    seoDescription:
      "Unlock creativity and automation through Generative AI — from custom-trained GPT models and smart chatbots to advanced content generation and visual creation systems.",
    seoKeywords:
      "Generative AI development, custom GPT, AI chatbot development, AI-powered content generation, language model training, AI automation, diffusion models, voice AI tools, CLAPIT SOLUTIONS AI",
    seoImage: IMAGES.Genativeai,
    technologyTitle: "Building the Future with Generative Intelligence",
    technologyDescription:
      "We design intelligent systems capable of producing content, visuals, conversations, and insights autonomously. Our work harnesses language models, diffusion networks, and multimodal architectures to create tools that write, design, converse, and ideate — just like humans, only faster.",
    icon: <FaRobot className="text-white" size={26} />,
    image: IMAGES.Genativeai,
    href: "/services/generative-ai-development",
    description:
      "CLAPIT SOLUTIONS’s Generative AI development empowers your business to innovate, scale, and create — transforming raw ideas into interactive AI tools, voice assistants, and autonomous creators.",
    category: "development",
  
    technologies: [
      {
        title: "Large Language Models",
        description:
          "Deploy high-performance LLMs that comprehend, reason, and generate text for complex business workflows.",
        icon: <FaBrain className="text-dark" />
      },
      {
        title: "Conversational AI Systems",
        description:
          "Craft human-like chatbots and assistants that guide customers, automate conversations, and enhance engagement.",
        icon: <FaComments className="text-dark" />
      },
      {
        title: "AI Content Automation",
        description:
          "Generate blogs, reports, SEO content, and summaries aligned with your brand tone and objectives.",
        icon: <FaPenFancy className="text-dark" />
      },
      {
        title: "Generative Visual & Media AI",
        description:
          "Produce lifelike images, animations, and marketing visuals through diffusion and GAN-based technologies.",
        icon: <FaImages className="text-dark" />
      },
      {
        title: "Voice & Audio Intelligence",
        description:
          "Build voice cloning, text-to-speech, and natural dialogue systems for immersive user interactions.",
        icon: <FaMicrophone className="text-dark" />
      },
      {
        title: "Multimodal AI Systems",
        description:
          "Integrate text, images, audio, and video into cohesive AI workflows for smart automation and insights.",
        icon: <FaRobot className="text-dark" />
      },
      {
        title: "Custom GPT & Enterprise AI",
        description:
          "Develop proprietary GPT models fine-tuned to your company data, ensuring precision and context awareness.",
        icon: <FaCode className="text-dark" />
      }
    ],
  
    subServices: {
      heading: "AI That Creates, Not Just Predicts",
      description:
        "From creative automation to intelligent chat systems — our generative AI expertise transforms imagination into interactive tools and digital creators.",
      items: [
        {
          id: 1,
          title: "Custom Model Engineering",
          description:
            "Develop and fine-tune LLMs or domain-specific GPTs tailored to your internal data and business language.",
          icon: <FaBrain className="text-dark" />
        },
        {
          id: 2,
          title: "AI Writing & Marketing Tools",
          description:
            "Launch AI apps for generating articles, scripts, campaigns, and automated brand communication.",
          icon: <FaPenFancy className="text-dark" />
        },
        {
          id: 3,
          title: "Conversational & Voice Agents",
          description:
            "Design natural chat interfaces, multi-turn dialogue systems, and real-time voice assistants for support and sales.",
          icon: <FaComments className="text-dark" />
        },
        {
          id: 4,
          title: "AI Image & Video Synthesis",
          description:
            "Create personalized visuals, ads, or explainer videos with generative image and diffusion AI technology.",
          icon: <FaImages className="text-dark" />
        },
        {
          id: 5,
          title: "Real-Time Voice & Interaction AI",
          description:
            "Integrate voice-based communication systems powered by neural speech synthesis and intent detection.",
          icon: <FaMicrophone className="text-dark" />
        },
        {
          id: 6,
          title: "AI Agents & Copilot Systems",
          description:
            "Build in-app copilots that automate workflows, suggest actions, and assist teams in real time.",
          icon: <FaRobot className="text-dark" />
        },
        {
          id: 7,
          title: "Developer Tools with AI",
          description:
            "Integrate AI-driven code completion, debugging helpers, and automation modules into your dev tools.",
          icon: <FaCode className="text-dark" />
        },
        {
          id: 8,
          title: "API Integration & AI Infrastructure",
          description:
            "Connect leading AI APIs and manage model lifecycles through reliable MLOps pipelines and scalable hosting.",
          icon: <FaPlug className="text-dark" />
        }
      ]
    },
  
    techCapabilities: {
      heading: "Generative AI Platforms & Frameworks",
      items: [
        {
          id: 1,
          title: "Language & NLP Ecosystems",
          icon: <BackendIcon />,
          technologies: [
            { name: "OpenAI GPT & Chat Completions", icon: <OpenAIIcon color={"#f84b07"} /> },
            { name: "OpenAI Assistant API", icon: <OpenAIIcon color={"#f84b07"} /> },
            { name: "Anthropic Claude", icon: <HuggingFaceIcon color={"#f84b07"} /> },
            { name: "Cohere", icon: <CohereIcon color={"#f84b07"} /> },
            { name: "Vapi Voice AI", icon: <DockerIcon color={"#f84b07"} /> }
          ]
        },
        {
          id: 2,
          title: "Vision, Audio & Creative AI",
          icon: <FrontendIcon />,
          technologies: [
            { name: "Midjourney", icon: <TensorFlowIcon color={"#f84b07"} /> },
            { name: "Stable Diffusion", icon: <DockerIcon color={"#f84b07"} /> },
            { name: "Runway ML", icon: <MLflowIcon color={"#f84b07"} /> },
            { name: "ElevenLabs", icon: <MLflowIcon color={"#f84b07"} /> },
            { name: "Whisper Speech-to-Text", icon: <PyTorchIcon color={"#f84b07"} /> }
          ]
        },
        {
          id: 3,
          title: "AI-Powered Development Tools",
          icon: <MobileIcon />,
          technologies: [
            { name: "GPT for Developers", icon: <OpenAIIcon color={"#f84b07"} /> },
            { name: "Windsurf IDE", icon: <DockerIcon color={"#f84b07"} /> },
            { name: "Cursor AI", icon: <MLflowIcon color={"#f84b07"} /> }
          ]
        },
        {
          id: 4,
          title: "AI Operations & Agent Frameworks",
          icon: <MobileIcon />,
          technologies: [
            { name: "LangChain", icon: <DockerIcon color={"#f84b07"} /> },
            { name: "LlamaIndex", icon: <MLflowIcon color={"#f84b07"} /> },
            { name: "AWS Bedrock", icon: <AWSSageMakerIcon color={"#f84b07"} /> },
            { name: "Google Vertex AI", icon: <GCPVertexAIIcon color={"#f84b07"} /> }
          ]
        }
      ]
    },
  
    industry: {
      heading: "Industries Transformed by Generative AI",
      paragraph:
        "From creative media to enterprise operations, our Generative AI solutions reshape industries with automation, personalization, and scalable intelligence. Here’s how we drive impact across sectors:",
      industries: [
        {
          icon: <FaMoneyBill className="text-mediumDark" />,
          title: "Fintech",
          description:
            "Enhance financial decision-making, generate analytics, and automate reporting with tailored AI assistants.",
          href: "/industries/development/fintech-app-development-using-ai"
        },
        {
          icon: <FaHospital className="text-mediumDark" />,
          title: "Healthcare",
          description:
            "Summarize patient data, automate diagnostics, and enable AI-driven medical support for professionals.",
          href: "/industries/development/healthcare-app-development-using-ai"
        },
        {
          icon: <FaTruck className="text-mediumDark" />,
          title: "Logistics",
          description:
            "Generate smart route optimizations, real-time shipment reports, and automated communication tools.",
          href: "/industries/development/logistics-app-development-using-ai"
        },
        {
          icon: <FaShoppingBag className="text-mediumDark" />,
          title: "E-commerce",
          description:
            "Automate product descriptions, visuals, and recommendations through adaptive generative AI tools.",
          href: "/industries/development/ecommerce-app-development-using-ai"
        },
        {
          icon: <FaBolt className="text-mediumDark" />,
          title: "On-Demand & Service Platforms",
          description:
            "Utilize AI to power scheduling, personalized offers, and real-time conversational interfaces.",
          href: "/industries/development/on-demand-app-development-using-ai"
        },
        {
          icon: <FaFootballBall className="text-mediumDark" />,
          title: "Fantasy Sports",
          description:
            "Bring matches to life with AI-driven commentary, content summaries, and live engagement tools.",
          href: "/industries/development/fantasy-sports-app-development-using-ai"
        },
        {
          icon: <FaBalanceScale className="text-mediumDark" />,
          title: "Regulatory Tech",
          description:
            "Summarize compliance frameworks, auto-generate documentation, and power regulatory assistants.",
          href: "/industries/development/regtech-app-development-using-ai"
        },
        {
          icon: <FaPlaneDeparture className="text-mediumDark" />,
          title: "Travel & Hospitality",
          description:
            "Build itinerary creators, travel planners, and multilingual content tools that enhance guest experience.",
          href: "/industries/development/travel-app-development-using-ai"
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Common inquiries about Generative AI development addressed.",
      faqs: [
        {
          title: "What is Generative AI and how does it differ from traditional AI?",
          answer: "Generative AI creates new content—text, images, code, or audio—rather than just analyzing existing data. Unlike traditional AI that classifies or predicts, generative models produce original outputs based on learned patterns from training data.",
        },
        {
          title: "What types of Generative AI solutions can you build?",
          answer: "We develop custom GPT models, chatbots, content generators, image/video synthesis tools, voice assistants, code copilots, and multimodal AI systems tailored to your business needs.",
        },
        {
          title: "How long does it take to develop a Generative AI solution?",
          answer: "Timeline varies by complexity: simple chatbots (2-4 weeks), custom GPT models (6-12 weeks), and enterprise AI systems (3-6 months). We provide detailed timelines during project planning.",
        },
        {
          title: "Do you provide ongoing support and model updates?",
          answer: "Yes, we offer maintenance, fine-tuning, and model updates to keep your AI solutions current with the latest advancements and your evolving business requirements.",
        },
        {
          title: "Can Generative AI integrate with our existing systems?",
          answer: "Absolutely. We design solutions that integrate seamlessly with your current infrastructure, APIs, databases, and workflows through secure, scalable integrations.",
        },
        {
          title: "What data privacy and security measures do you implement?",
          answer: "We follow enterprise-grade security practices, including data encryption, access controls, compliance with GDPR/CCPA, and secure model hosting to protect your sensitive information.",
        },
      ],
    }
  },
    {
      id: "ai-web-app-development",
      title: "AI-Powered Web Application Development",
      seoTitle: "Custom Web Development Services | AI-Powered Websites & Scalable Platforms by CLAPIT SOLUTIONS",
      seoDescription:
        "CLAPIT SOLUTIONS builds fast, secure, and intelligent web applications using AI insights and modern frameworks. From enterprise dashboards to ecommerce platforms, we deliver solutions that grow with your business.",
      seoKeywords:
        "AI web development, custom website development, scalable web apps, responsive design, progressive web apps, ecommerce websites, API integrations, SEO-friendly websites, CLAPIT SOLUTIONS web solutions",
      seoImage: IMAGES.WebAi,
      technologyTitle: "Intelligent, Secure, and Future-Ready Web Solutions",
      technologyDescription:
        "We create digital experiences that merge performance, scalability, and intelligence. Our approach ensures every website and web platform we build aligns with your business strategy while leveraging the latest technologies and AI capabilities.",
      image: IMAGES.WebAi,
      href: "/services/ai-web-app-development",
      icon: <FaCode className="text-white" size={26} />,
      description:
        "Design, develop, and scale intelligent web solutions that deliver superior user experiences and measurable business outcomes.",
      category: "development",
      technologies: [
        {
          title: "Responsive Web Design",
          description:
            "Deliver seamless user experiences across all devices with adaptive, mobile-first layouts.",
          icon: <FaMobileAlt className="text-mediumDark" />,
        },
        {
          title: "Progressive Web Applications",
          description:
            "Create web apps with offline access, fast performance, and app-like functionality.",
          icon: <FaRocket className="text-dark" />,
        },
        {
          title: "Headless CMS Development",
          description:
            "Empower dynamic content delivery with flexible headless architecture and fast frontends.",
          icon: <FaPenNib className="text-dark" />,
        },
        {
          title: "Ecommerce Web Platforms",
          description:
            "Develop fast, secure, and conversion-optimized ecommerce systems that scale easily.",
          icon: <FaShoppingCart className="text-dark" />,
        },
        {
          title: "API & Backend Integrations",
          description:
            "Integrate third-party APIs or custom backends for automation, analytics, and data flow.",
          icon: <FaPlug className="text-dark" />,
        },
        {
          title: "Performance & Security",
          description:
            "Enhance site security and speed with modern optimization techniques and protection layers.",
          icon: <FaLock className="text-dark" />,
        },
        {
          title: "Accessibility & SEO Optimization",
          description:
            "Build inclusive, accessible websites that rank well on search engines and meet global standards.",
          icon: <FaSearch className="text-dark" />,
        },
      ],
      subServices: {
        heading: "End-to-End Web Solutions, Built for Growth",
        description:
          "From concept to deployment, CLAPIT SOLUTIONS delivers modern, scalable web experiences that combine AI-driven insights with world-class engineering.",
        items: [
          {
            id: 1,
            title: "Architecture & Strategy",
            description:
              "Define technology stack, architecture, and roadmap to ensure long-term scalability and stability.",
            icon: <FaProjectDiagram className="text-dark" />,
          },
          {
            id: 2,
            title: "Frontend Development",
            description:
              "Craft responsive, high-performing interfaces using React, Vue, and other modern frameworks.",
            icon: <FaLaptopCode className="text-dark" />,
          },
          {
            id: 3,
            title: "Backend & API Development",
            description:
              "Build efficient, secure server-side systems and REST or GraphQL APIs that power your app.",
            icon: <FaServer className="text-dark" />,
          },
          {
            id: 4,
            title: "Content Management Systems",
            description:
              "Integrate and customize headless or traditional CMS solutions for flexible content workflows.",
            icon: <FaCogs className="text-dark" />,
          },
          {
            id: 5,
            title: "Ecommerce Store Development",
            description:
              "Launch feature-rich online stores with streamlined shopping experiences and secure checkout.",
            icon: <FaShoppingCart className="text-dark" />,
          },
          {
            id: 6,
            title: "Custom Web Applications",
            description:
              "Develop business-grade applications with real-time data, dashboards, and advanced user control.",
            icon: <FaDatabase className="text-dark" />,
          },
          {
            id: 7,
            title: "Optimization & Analytics",
            description:
              "Fine-tune your website for performance, SEO visibility, and user engagement tracking.",
            icon: <FaSearch className="text-dark" />,
          },
          {
            id: 8,
            title: "Maintenance & Scalability",
            description:
              "Ensure your platform remains updated, secure, and optimized for future expansion.",
            icon: <FaRocket className="text-dark" />,
          },
        ],
      },
      techCapabilities: {
        heading: "Our Web Development Stack",
        items: [
          {
            id: 1,
            title: "Frontend Frameworks",
            icon: <FrontendIcon />,
            technologies: [
              { name: "HTML", icon: <HTMLIcon color={"#f84b07"} /> },
              { name: "CSS", icon: <CSSIcon color={"#f84b07"} /> },
              { name: "JavaScript", icon: <JSIcon color={"#f84b07"} /> },
              { name: "React", icon: <ReactIcon color={"#f84b07"} /> },
              { name: "Vue.js", icon: <VueIcon color={"#f84b07"} /> },
              { name: "Next.js", icon: <NextjsIcon color={"#f84b07"} /> },
            ],
          },
          {
            id: 2,
            title: "Backend Technologies",
            icon: <BackendIcon />,
            technologies: [
              { name: "Node.js", icon: <NodejsIcon color={"#f84b07"} /> },
              { name: "Python", icon: <PythonIcon color={"#f84b07"} /> },
              { name: "Django", icon: <PythonIcon color={"#f84b07"} /> },
              { name: "FastAPI", icon: <PythonIcon color={"#f84b07"} /> },
            ],
          },
          {
            id: 3,
            title: "Databases & CMS Platforms",
            icon: <MobileIcon />,
            technologies: [
              { name: "WordPress", icon: <AndroidIcon color={"#f84b07"} /> },
              { name: "Sanity", icon: <FlutterIcon color={"#f84b07"} /> },
              { name: "Strapi", icon: <PWAIcon color={"#f84b07"} /> },
              { name: "MySQL", icon: <MySQLIcon color={"#f84b07"} /> },
              { name: "PostgreSQL", icon: <PostgreSQLIcon color={"#f84b07"} /> },
              { name: "MongoDB", icon: <MongoDBIcon color={"#f84b07"} /> },
            ],
          },
        ],
      },
      industry: {
        heading: "Industries We Build For",
        paragraph:
          "CLAPIT SOLUTIONS delivers web solutions tailored to your industry’s goals — combining technology, design, and intelligence for measurable growth.",
        industries: [
          {
            icon: <FaMoneyBill className="text-mediumDark" />,
            title: "Fintech",
            description:
              "High-performance financial dashboards, payment systems, and analytics tools.",
            href: "/industries/development/fintech-app-development-using-ai",
          },
          {
            icon: <FaHospital className="text-mediumDark" />,
            title: "Healthcare",
            description:
              "Patient portals, secure record management, and appointment systems for digital health.",
            href: "/industries/development/healthcare-app-development-using-ai",
          },
          {
            icon: <FaTruck className="text-mediumDark" />,
            title: "Logistics",
            description:
              "Supply chain dashboards, fleet tracking, and warehouse management interfaces.",
            href: "/industries/development/logistics-app-development-using-ai",
          },
          {
            icon: <FaShoppingBag className="text-mediumDark" />,
            title: "Ecommerce",
            description:
              "Custom storefronts and product management systems optimized for conversion.",
            href: "/industries/development/ecommerce-app-development-using-ai",
          },
          {
            icon: <FaBolt className="text-mediumDark" />,
            title: "On-Demand Services",
            description:
              "Booking, scheduling, and service management platforms built for flexibility.",
            href: "/industries/development/on-demand-app-development-using-ai",
          },
          {
            icon: <FaFootballBall className="text-mediumDark" />,
            title: "Fantasy Sports",
            description:
              "Leaderboards, live stats, and gamified sports engagement platforms.",
            href: "/industries/development/fantasy-sports-app-development-using-ai",
          },
          {
            icon: <FaBalanceScale className="text-mediumDark" />,
            title: "Regulatory Tech",
            description:
              "Compliance tracking and reporting portals designed for transparency.",
            href: "/industries/development/regtech-app-development-using-ai",
          },
          {
            icon: <FaPlaneDeparture className="text-mediumDark" />,
            title: "Travel",
            description:
              "Itinerary planners, booking engines, and digital travel assistants.",
            href: "/industries/development/travel-app-development-using-ai",
          },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Answers to common questions about our web development process.",
        faqs: [
          {
            title: "Do you build fully custom websites?",
            answer:
              "Yes, all our solutions are developed from scratch to match your brand and technical needs. We can also integrate existing systems when required.",
          },
          {
            title: "Can you refresh or redesign our current website?",
            answer:
              "Definitely. We modernize legacy websites for better performance, design consistency, and technical scalability.",
          },
          {
            title: "Which frameworks do you use?",
            answer:
              "We work with React, Next.js, Vue.js, Django, Node.js, and FastAPI, choosing the stack that best fits each project.",
          },
          {
            title: "Will my site be mobile-friendly?",
            answer:
              "Every CLAPIT SOLUTIONS website is fully responsive and optimized for seamless performance on any device.",
          },
        ],
      },
    },
    {
      id: "ai-mobile-development",
      title: "Mobile App Development",
      seoTitle: "Mobile Application Development | iOS, Android & Cross-Platform Solutions by CLAPIT SOLUTIONS",
      seoDescription:
        "CLAPIT SOLUTIONS creates high-performance mobile applications that combine great design, robust engineering, and business scalability. We build iOS, Android, and cross-platform apps that deliver value and growth.",
      seoKeywords:
        "mobile app development, iOS app, Android app, Flutter development, React Native apps, custom mobile solutions, mobile UI/UX, CLAPIT SOLUTIONS mobile apps",
      seoImage: IMAGES.MobileApp,
      technologyTitle: "Powerful Mobile Apps Built for Every Platform",
      technologyDescription:
        "We transform mobile ideas into intuitive, feature-rich apps that work flawlessly across devices. Whether native or cross-platform, every app is engineered for speed, performance, and user satisfaction.",
      image: IMAGES.MobileApp,
      href: "/services/ai-mobile-development",
      description:
        "End-to-end mobile development services — from strategy and design to scalable deployment and ongoing optimization.",
      icon: <FaMobileAlt className="text-white" size={26} />,
      category: "development",
      technologies: [
        {
          title: "Native Development",
          description:
            "Leverage Swift and Kotlin to build responsive apps with deep platform integration.",
          icon: <FaMobileAlt className="text-mediumDark" />,
        },
        {
          title: "Cross-Platform Frameworks",
          description:
            "Develop apps for both Android and iOS simultaneously using React Native or Flutter.",
          icon: <FaSync className="text-dark" />,
        },
        {
          title: "Wearable & IoT Apps",
          description:
            "Extend app experiences to smart devices, sensors, and connected environments.",
          icon: <FaClock className="text-dark" />,
        },
        {
          title: "User Engagement & Push Notifications",
          description:
            "Keep users engaged with intelligent push campaigns, in-app notifications, and personalized communication.",
          icon: <FaBell className="text-dark" />,
        },
        {
          title: "App Store Optimization",
          description:
            "Improve discoverability and ranking through data-driven ASO strategies and visuals.",
          icon: <FaChartLine className="text-dark" />,
        },
        {
          title: "Backend Development & APIs",
          description:
            "Develop secure APIs and cloud backends to support real-time features and scalability.",
          icon: <FaServer className="text-dark" />,
        },
        {
          title: "Testing & Quality Assurance",
          description:
            "Conduct performance, security, and compatibility testing for flawless app releases.",
          icon: <FaFlask className="text-dark" />,
        },
      ],
      subServices: {
        heading: "Comprehensive Mobile Development, From Idea to Launch",
        description:
          "CLAPIT SOLUTIONS’s mobile development services cover the full lifecycle — design, build, deploy, and grow. We craft applications that captivate users and drive measurable results.",
        items: [
          {
            id: 1,
            title: "iOS Development",
            description:
              "Create high-quality applications for iPhone, iPad, and Apple Watch using Swift and UIKit.",
            icon: <FaApple className="text-dark" />,
          },
          {
            id: 2,
            title: "Android Development",
            description:
              "Deliver Android applications that perform seamlessly across all devices and OS versions.",
            icon: <FaAndroid className="text-dark" />,
          },
          {
            id: 3,
            title: "Cross-Platform Apps",
            description:
              "Use Flutter and React Native to deploy unified apps quickly without compromising performance.",
            icon: <FaSync className="text-dark" />,
          },
          {
            id: 4,
            title: "Mobile UI/UX Design",
            description:
              "Design immersive, conversion-oriented interfaces that combine usability and aesthetics.",
            icon: <FaPalette className="text-dark" />,
          },
          {
            id: 5,
            title: "Testing & QA",
            description:
              "Validate stability and speed across devices through automated and manual QA processes.",
            icon: <FaFlask className="text-dark" />,
          },
          {
            id: 6,
            title: "API & Integration Services",
            description:
              "Connect your app to third-party tools, databases, and services with custom API development.",
            icon: <FaTools className="text-dark" />,
          },
          {
            id: 7,
            title: "Deployment & App Store Support",
            description:
              "Manage publishing, store optimization, and post-launch updates with CLAPIT SOLUTIONS’s deployment experts.",
            icon: <FaStore className="text-dark" />,
          },
          {
            id: 8,
            title: "Post-Launch Maintenance",
            description:
              "Keep your app running smoothly with ongoing optimization, upgrades, and performance tracking.",
            icon: <FaCloudUploadAlt className="text-dark" />,
          },
        ],
      },
      techCapabilities: {
        heading: "Mobile App Tech Stack",
        items: [
          {
            id: 1,
            title: "Frameworks & Languages",
            icon: <FrontendIcon />,
            technologies: [
              { name: "Flutter", icon: <FlutterIcon color={"#f84b07"} /> },
              { name: "React Native", icon: <ReactNativeIcon color={"#f84b07"} /> },
              { name: "Swift", icon: <SwiftIcon color={"#f84b07"} /> },
              { name: "Kotlin", icon: <KotlinIcon color={"#f84b07"} /> },
              { name: "Java", icon: <JavaIcon color={"#f84b07"} /> },
            ],
          },
          {
            id: 2,
            title: "Backend & Database",
            icon: <BackendIcon />,
            technologies: [
              { name: "Firebase", icon: <FirebaseIcon color={"#f84b07"} /> },
              { name: "MongoDB", icon: <MongoDBIcon color={"#f84b07"} /> },
              { name: "Django", icon: <PythonIcon color={"#f84b07"} /> },
              { name: "Express.js", icon: <ExpressIcon color={"#f84b07"} /> },
              { name: "GraphQL", icon: <PostgreSQLIcon color={"#f84b07"} /> },
            ],
          },
          {
            id: 3,
            title: "DevOps & Testing Tools",
            icon: <MobileIcon />,
            technologies: [
              { name: "Bitrise", icon: <BitriseIcon color={"#f84b07"} /> },
              { name: "Appium", icon: <AppiumIcon color={"#f84b07"} /> },
              { name: "BrowserStack", icon: <BrowserStackIcon color={"#f84b07"} /> },
              { name: "Jest", icon: <JestIcon color={"#f84b07"} /> },
            ],
          },
        ],
      },
      industry: {
        heading: "Industries We Build Mobile Solutions For",
        paragraph:
          "From startups to enterprises, CLAPIT SOLUTIONS creates mobile apps that elevate customer engagement and accelerate growth across multiple industries.",
        industries: [
          {
            icon: <FaMoneyBill className="text-mediumDark" />,
            title: "Fintech",
            description:
              "Secure, user-friendly apps for digital banking, investing, and personal finance.",
            href: "/industries/development/fintech-app-development-using-ai",
          },
          {
            icon: <FaHospital className="text-mediumDark" />,
            title: "Healthcare",
            description:
              "Mobile health tracking, telemedicine, and appointment scheduling apps built for compliance.",
            href: "/industries/development/healthcare-app-development-using-ai",
          },
          {
            icon: <FaTruck className="text-mediumDark" />,
            title: "Logistics",
            description:
              "Track fleets, manage deliveries, and streamline logistics workflows through mobile platforms.",
            href: "/industries/development/logistics-app-development-using-ai",
          },
          {
            icon: <FaShoppingBag className="text-mediumDark" />,
            title: "Ecommerce",
            description:
              "Shopping apps with personalized recommendations, secure checkout, and push marketing.",
            href: "/industries/development/ecommerce-app-development-using-ai",
          },
          {
            icon: <FaBolt className="text-mediumDark" />,
            title: "On-Demand",
            description:
              "Real-time mobile apps for delivery, ride-hailing, and home service businesses.",
            href: "/industries/development/on-demand-app-development-using-ai",
          },
          {
            icon: <FaFootballBall className="text-mediumDark" />,
            title: "Fantasy Sports",
            description:
              "Engaging mobile platforms with live match tracking, leaderboards, and in-app wallets.",
            href: "/industries/development/fantasy-sports-app-development-using-ai",
          },
          {
            icon: <FaBalanceScale className="text-mediumDark" />,
            title: "RegTech",
            description:
              "Mobile apps for compliance tracking, audits, and secure document verification.",
            href: "/industries/development/regtech-app-development-using-ai",
          },
          {
            icon: <FaPlaneDeparture className="text-mediumDark" />,
            title: "Travel",
            description:
              "Travel planning and booking apps with real-time updates and geolocation support.",
            href: "/industries/development/travel-app-development-using-ai",
          },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about our mobile development process.",
        faqs: [
          {
            title: "Do you support both iOS and Android?",
            answer:
              "Yes, we build both native and cross-platform applications to deliver optimal reach and performance.",
          },
          {
            title: "What’s the usual development timeline?",
            answer:
              "Most apps take between 6–12 weeks, depending on features, complexity, and integrations.",
          },
          {
            title: "Can you help with publishing on app stores?",
            answer:
              "Absolutely. CLAPIT SOLUTIONS handles app store submission, ASO, and version updates.",
          },
          {
            title: "Do you provide ongoing maintenance?",
            answer:
              "Yes, we offer flexible maintenance plans for updates, performance monitoring, and feature expansion.",
          },
        ],
      },
    },
    {
      id: "ai-custom-product-development",
      title: "Custom Product Engineering",
      seoTitle:
        "Product Development & Engineering Services | Build Custom Software Products with CLAPIT SOLUTIONS",
      seoDescription:
        "Turn ideas into intelligent digital products with CLAPIT SOLUTIONS. From concept to launch, we design and build scalable, secure, and innovative products for global businesses.",
      seoKeywords:
        "custom product development, AI-powered products, product engineering, software product design, digital innovation, CLAPIT SOLUTIONS engineering, custom app development",
      seoImage: IMAGES.CustomProduct,
      technologyTitle: "Engineering the Next Generation of Digital Products",
      technologyDescription:
        "We combine emerging technologies like AI, AR/VR, and IoT with robust software engineering to create smart, scalable products that drive business innovation.",
      image: IMAGES.CustomProduct,
      href: "/services/ai-custom-product-development",
      description:
        "From discovery to delivery — CLAPIT SOLUTIONS builds high-impact products that are user-driven, secure, and future-ready.",
      icon: <FaCog className="text-white" size={26} />,
      category: "development",
      technologies: [
        {
          title: "Artificial Intelligence",
          description:
            "Add intelligence to your products through automation, personalization, and data insights.",
          icon: <FaRobot className="text-dark" />,
        },
        {
          title: "AR/VR Solutions",
          description:
            "Develop immersive digital environments that blend reality and interaction.",
          icon: <FaVrCardboard className="text-dark" />,
        },
        {
          title: "Blockchain Integration",
          description:
            "Leverage decentralized technologies to enhance transparency and data trust.",
          icon: <FaLink className="text-dark" />,
        },
        {
          title: "Internet of Things",
          description:
            "Connect and manage devices securely through intelligent IoT ecosystems.",
          icon: <FaGlobe className="text-dark" />,
        },
        {
          title: "Cloud Infrastructure",
          description:
            "Deploy cloud-native systems with reliability, flexibility, and global scalability.",
          icon: <FaCloud className="text-mediumDark" />,
        },
        {
          title: "Machine Learning",
          description:
            "Automate complex decision-making and enable adaptive systems powered by ML models.",
          icon: <FaBrain className="text-dark" />,
        },
        {
          title: "Data Analytics",
          description:
            "Transform raw data into actionable insights through advanced analytics pipelines.",
          icon: <FaChartBar className="text-mediumDark" />,
        },
      ],
      subServices: {
        heading: "Full-Cycle Product Development",
        description:
          "CLAPIT SOLUTIONS offers complete product engineering services — from planning to scaling — combining innovation, usability, and technical precision.",
        items: [
          {
            id: 1,
            title: "Product Strategy",
            description:
              "Align goals, scope, and market fit through in-depth discovery and planning sessions.",
            icon: <FaBullseye className="text-dark" />,
          },
          {
            id: 2,
            title: "Engineering & Development",
            description:
              "Design and build software products using agile practices and modern technologies.",
            icon: <FaCogs className="text-dark" />,
          },
          {
            id: 3,
            title: "Digital Product Creation",
            description:
              "Build MVPs, prototypes, or full-scale solutions ready for real-world performance.",
            icon: <FaLaptopCode className="text-dark" />,
          },
          {
            id: 4,
            title: "UI/UX Design",
            description:
              "Deliver engaging interfaces designed for maximum user satisfaction and clarity.",
            icon: <FaPalette className="text-dark" />,
          },
          {
            id: 5,
            title: "API Integration",
            description:
              "Enable seamless interoperability between systems using secure and well-structured APIs.",
            icon: <FaPlug className="text-dark" />,
          },
          {
            id: 6,
            title: "Security & Compliance",
            description:
              "Ensure privacy, compliance, and data integrity with enterprise-grade standards.",
            icon: <FaShieldAlt className="text-dark" />,
          },
          {
            id: 7,
            title: "Continuous Optimization",
            description:
              "Analyze performance metrics and refine product features for ongoing improvement.",
            icon: <FaSync className="text-dark" />,
          },
          {
            id: 8,
            title: "System Integration",
            description:
              "Connect your new product to existing software and hardware infrastructure seamlessly.",
            icon: <FaProjectDiagram className="text-dark" />,
          },
        ],
      },
      industry: {
        heading: "Industries We Serve with Custom Solutions",
        paragraph:
          "We engineer industry-specific products that enable smarter operations, efficiency, and growth across sectors.",
        industries: [
          {
            icon: <FaMoneyBill className="text-mediumDark" />,
            title: "Fintech",
            description:
              "Build secure finance management tools, analytics dashboards, and trading apps.",
            href: "/industries/development/fintech-app-development-using-ai",
          },
          {
            icon: <FaHospital className="text-mediumDark" />,
            title: "Healthcare",
            description:
              "Develop HIPAA-compliant health tech, data visualization, and EHR software.",
            href: "/industries/development/healthcare-app-development-using-ai",
          },
          {
            icon: <FaTruck className="text-mediumDark" />,
            title: "Logistics",
            description:
              "Design logistics management and tracking products that optimize delivery performance.",
            href: "/industries/development/logistics-app-development-using-ai",
          },
          {
            icon: <FaShoppingBag className="text-mediumDark" />,
            title: "Ecommerce",
            description:
              "Create innovative digital commerce products and platforms to increase engagement.",
            href: "/industries/development/ecommerce-app-development-using-ai",
          },
          {
            icon: <FaBolt className="text-mediumDark" />,
            title: "On-Demand Services",
            description:
              "Real-time service booking and management products built for scalability.",
            href: "/industries/development/on-demand-app-development-using-ai",
          },
          {
            icon: <FaFootballBall className="text-mediumDark" />,
            title: "Fantasy Sports",
            description:
              "Interactive platforms with team creation, match analysis, and live engagement tools.",
            href: "/industries/development/fantasy-sports-app-development-using-ai",
          },
          {
            icon: <FaBalanceScale className="text-mediumDark" />,
            title: "RegTech",
            description:
              "Automate audits, compliance processes, and reporting through AI-enabled tools.",
            href: "/industries/development/regtech-app-development-using-ai",
          },
          {
            icon: <FaPlaneDeparture className="text-mediumDark" />,
            title: "Travel",
            description:
              "Smart itinerary planning and AI-driven travel discovery solutions.",
            href: "/industries/development/travel-app-development-using-ai",
          },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Get clarity on our product development process.",
        faqs: [
          {
            title: "Do you provide full-stack development?",
            answer:
              "Yes. CLAPIT SOLUTIONS offers frontend, backend, and infrastructure development under one roof for cohesive product delivery.",
          },
          {
            title: "How do you ensure scalability?",
            answer:
              "Our architecture is modular and cloud-native, designed to scale easily as your product grows.",
          },
          {
            title: "Do you support post-launch improvements?",
            answer:
              "Absolutely. We provide continuous monitoring, iteration, and optimization services.",
          },
          {
            title: "Can startups work with you?",
            answer:
              "Yes, we partner with startups and enterprises alike, offering tailored engagement models for every stage.",
          },
        ],
      },
    },
    {
      id: "ai-mvp-development",
      title: "MVP Development",
      seoTitle: "MVP Development Services | Build & Validate Your Idea Faster",
      seoDescription:
        "Accelerate your startup journey with CLAPIT SOLUTIONS’s MVP development services. We design, build, and deploy scalable Minimum Viable Products that help validate ideas and attract investors with speed and precision.",
      seoKeywords:
        "MVP development, startup MVP, minimum viable product, MVP software development, lean product launch, MVP web app, MVP mobile app, product prototyping, CLAPIT SOLUTIONS MVP solutions",
      seoImage: IMAGES.MVP,
      technologyTitle: "Launch Smart, Scale Fast — MVPs Engineered for Growth",
      technologyDescription:
        "CLAPIT SOLUTIONS helps startups and established businesses turn ideas into functional MVPs that validate concepts quickly. Our approach focuses on essential features, fast iteration, and scalability to prepare for full product development.",
      image: IMAGES.MVP,
      href: "/services/ai-mvp-development",
      description:
        "From idea to reality — CLAPIT SOLUTIONS develops MVPs that test your vision in real markets, gain early adopters, and lay the foundation for future growth.",
      icon: <FaRocket className='text-white' size={26} />,
      category: "development",
  
      technologies: [
        {
          title: "Rapid Prototyping",
          description:
            "Translate concepts into clickable prototypes and mockups for faster validation and team alignment.",
          icon: <FaDraftingCompass className='text-dark' />,
        },
        {
          title: "Lean Architecture",
          description:
            "Develop modular, lightweight MVPs with clean architecture that can evolve into full-scale systems.",
          icon: <FaProjectDiagram className='text-dark' />,
        },
        {
          title: "Agile Development Cycle",
          description:
            "Work in agile sprints to deliver core functionality first, followed by data-driven iterations.",
          icon: <FaSync className='text-dark' />,
        },
        {
          title: "Cost-Optimized Stack",
          description:
            "Use modern frameworks and cloud platforms to reduce expenses without sacrificing scalability.",
          icon: <FaMoneyBillWave className='text-dark' />,
        },
        {
          title: "Cross-Platform Deployment",
          description:
            "Ensure your MVP performs seamlessly across devices, from web browsers to mobile platforms.",
          icon: <FaGlobe className='text-dark' />,
        },
        {
          title: "Scalability by Design",
          description:
            "Build a strong foundation that supports future feature expansion and user growth.",
          icon: <FaChartLine className='text-dark' />,
        },
        {
          title: "Feedback & Analytics Integration",
          description:
            "Embed tracking tools to collect early user insights and guide next-phase improvements.",
          icon: <FaBrain className='text-dark' />,
        },
      ],
  
      subServices: {
        heading: "Build. Test. Adapt. Grow.",
        description:
          "Our MVP process focuses on building essential features that deliver value from day one. We help you test market fit, refine your product, and move confidently toward scaling.",
        items: [
          {
            id: 1,
            title: "MVP Strategy & Roadmap",
            description:
              "Collaborate on defining vision, key features, and a lean delivery plan for a faster market launch.",
            icon: <FaRoad className='text-dark' />,
          },
          {
            id: 2,
            title: "Wireframing & UX Design",
            description:
              "Design intuitive flows and user journeys that highlight the product’s main value propositions.",
            icon: <FaPencilRuler className='text-dark' />,
          },
          {
            id: 3,
            title: "MVP Development (Web & Mobile)",
            description:
              "Build functional MVPs for web, mobile, or hybrid platforms with robust backend and responsive UI.",
            icon: <FaMobileAlt className='text-mediumDark' />,
          },
          {
            id: 4,
            title: "Essential Integrations",
            description:
              "Integrate core tools like payment gateways, analytics, or authentication systems for a smooth launch.",
            icon: <FaPlug className='text-dark' />,
          },
          {
            id: 5,
            title: "User Testing & Insights",
            description:
              "Collect feedback through built-in surveys and analytics to validate assumptions and enhance usability.",
            icon: <FaPoll className='text-dark' />,
          },
          {
            id: 6,
            title: "Cloud Hosting & Launch",
            description:
              "Deploy your MVP securely on scalable cloud infrastructure with CI/CD pipelines.",
            icon: <FaServer className='text-dark' />,
          },
          {
            id: 7,
            title: "Quality Assurance",
            description:
              "Perform functional, UI, and usability testing to ensure stability before real-world release.",
            icon: <FaBug className='text-dark' />,
          },
          {
            id: 8,
            title: "Post-Launch Growth Support",
            description:
              "Monitor user engagement, track performance, and plan for scaling or full-product transition.",
            icon: <FaLifeRing className='text-dark' />,
          },
        ],
      },
  
      techCapabilities: {
        heading: "Technology Stack for Rapid MVP Delivery",
        items: [
          {
            id: 1,
            title: "Frontend Frameworks",
            icon: <FrontendIcon />,
            technologies: [
              { name: "React", icon: <ReactIcon color={'#f84b07'} /> },
              { name: "Next.js", icon: <NextjsIcon color={'#f84b07'} /> },
              { name: "Vue.js", icon: <VueIcon color={'#f84b07'} /> },
              { name: "Flutter", icon: <FlutterIcon color={'#f84b07'} /> },
            ],
          },
          {
            id: 2,
            title: "Backend & Databases",
            icon: <BackendIcon />,
            technologies: [
              { name: "Firebase", icon: <FirebaseIcon color={'#f84b07'} /> },
              { name: "Supabase", icon: <SupabaseIcon color={'#f84b07'} /> },
              { name: "Express.js", icon: <ExpressIcon color={'#f84b07'} /> },
              { name: "Django", icon: <PythonIcon color={'#f84b07'} /> },
            ],
          },
          {
            id: 3,
            title: "DevOps & Integrations",
            icon: <MobileIcon />,
            technologies: [
              { name: "Stripe", icon: <StripeIcon color={'#f84b07'} /> },
              { name: "Vercel", icon: <VercelIcon color={'#f84b07'} /> },
              { name: "AWS", icon: <AWSSageMakerIcon color={'#f84b07'} /> },
              { name: "Heroku", icon: <HerokuIcon color={'#f84b07'} /> },
            ],
          },
        ],
      },
  
      industry: {
        heading: "Industries Using Our MVP Expertise",
        paragraph:
          "We help startups and enterprises across industries rapidly prototype and validate ideas before scaling into full products.",
        industries: [
          {
            icon: <FaMoneyBill className='text-mediumDark' />,
            title: "Fintech",
            description:
              "Launch finance-related MVPs like budgeting apps, digital wallets, and investment dashboards.",
            href: "/industries/development/fintech-app-development-using-ai",
          },
          {
            icon: <FaHospital className='text-mediumDark' />,
            title: "Healthcare",
            description:
              "Build health tracking, telemedicine, or appointment MVPs for faster validation and compliance.",
            href: "/industries/development/healthcare-app-development-using-ai",
          },
          {
            icon: <FaTruck className='text-mediumDark' />,
            title: "Logistics",
            description:
              "Test logistics automation ideas with MVP dashboards for route, fleet, or delivery tracking.",
            href: "/industries/development/logistics-app-development-using-ai",
          },
          {
            icon: <FaShoppingBag className='text-mediumDark' />,
            title: "Ecommerce",
            description:
              "Quickly launch a basic online store to validate audience demand and sales strategy.",
            href: "/industries/development/ecommerce-app-development-using-ai",
          },
          {
            icon: <FaBolt className='text-mediumDark' />,
            title: "On-Demand Services",
            description:
              "Create MVPs for delivery, ride-hailing, or service scheduling platforms in weeks.",
            href: "/industries/development/on-demand-app-development-using-ai",
          },
          {
            icon: <FaFootballBall className='text-mediumDark' />,
            title: "Fantasy Sports",
            description:
              "Develop lightweight MVPs for contests, leaderboards, and real-time score updates.",
            href: "/industries/development/fantasy-sports-app-development-using-ai",
          },
          {
            icon: <FaBalanceScale className='text-mediumDark' />,
            title: "RegTech",
            description:
              "Build compliance-tracking MVPs and document automation tools to test enterprise adoption.",
            href: "/industries/development/regtech-app-development-using-ai",
          },
          {
            icon: <FaPlaneDeparture className='text-mediumDark' />,
            title: "Travel",
            description:
              "Prototype trip planners, travel recommendation apps, or booking tools for early validation.",
            href: "/industries/development/travel-app-development-using-ai",
          },
        ],
      },
  
      faq: {
        title: "Frequently Asked Questions",
        subtitle:
          "Everything you need to know about launching your MVP with CLAPIT SOLUTIONS.",
        faqs: [
          {
            title: "How long does it take to develop an MVP?",
            answer:
              "Depending on complexity, most MVPs take between 4–8 weeks from planning to deployment.",
          },
          {
            title: "Can you help define the MVP scope?",
            answer:
              "Yes, we assist in identifying essential features to reduce costs and focus on the fastest path to validation.",
          },
          {
            title: "Is the MVP scalable for future phases?",
            answer:
              "Absolutely. Our MVPs are built with modular architecture, making expansion easy when scaling.",
          },
          {
            title: "Do you handle post-launch support?",
            answer:
              "Yes, we provide maintenance, analytics tracking, and feature rollout assistance after launch.",
          },
        ],
      },
    },
    {
      id: "ai-ecommerce-development",
      title: "Ecommerce Development",
      seoTitle:
        "Ecommerce Development Services | Build Online Stores & Marketplaces with CLAPIT SOLUTIONS",
      seoDescription:
        "CLAPIT SOLUTIONS builds scalable, secure, and conversion-focused ecommerce platforms for startups and enterprises. From custom storefronts to multi-vendor marketplaces — we help brands sell smarter online.",
      seoKeywords:
        "ecommerce website, online store development, headless ecommerce, custom ecommerce app, marketplace development, shopify, woocommerce, magento, ecommerce optimization, CLAPIT SOLUTIONS ecommerce services",
      seoImage: IMAGES.Ecommerce,
      technologyTitle: "Smart Ecommerce Platforms for Modern Businesses",
      technologyDescription:
        "Our ecommerce development services help businesses create seamless digital shopping experiences — combining advanced design, secure payments, and AI-driven personalization to boost conversion rates.",
      image: IMAGES.Ecommerce,
      href: "/services/ai-ecommerce-development",
      description:
        "From design to deployment, CLAPIT SOLUTIONS delivers ecommerce solutions that transform browsing into buying — tailored to your brand and customers.",
      icon: <FaShoppingCart className='text-white' size={26} />,
      category: "development",
  
      technologies: [
        {
          title: "Custom Store Development",
          description:
            "Build tailor-made ecommerce stores or enhance existing platforms to fit your brand and growth goals.",
          icon: <FaTools className='text-dark' />,
        },
        {
          title: "Headless Ecommerce",
          description:
            "Implement decoupled architectures that deliver faster, more flexible, and SEO-friendly storefronts.",
          icon: <FaBolt className='text-mediumDark' />,
        },
        {
          title: "Payment Gateway Integration",
          description:
            "Connect secure, reliable, and multi-currency payment systems for a frictionless checkout process.",
          icon: <FaCreditCard className='text-dark' />,
        },
        {
          title: "Marketplace Solutions",
          description:
            "Create multi-vendor ecosystems where sellers can manage listings, orders, and payouts seamlessly.",
          icon: <FaStore className='text-dark' />,
        },
        {
          title: "Subscription Commerce",
          description:
            "Enable recurring revenue streams with automated billing and subscriber management tools.",
          icon: <FaRedoAlt className='text-dark' />,
        },
        {
          title: "AI-Powered Recommendations",
          description:
            "Use AI to deliver personalized product suggestions, increasing engagement and sales.",
          icon: <FaChartLine className='text-dark' />,
        },
        {
          title: "Performance Optimization",
          description:
            "Improve site loading times, UX, and conversion metrics through advanced analytics and testing.",
          icon: <FaChartBar className='text-mediumDark' />,
        },
      ],
  
      subServices: {
        heading: "Complete Ecommerce Development Under One Roof",
        description:
          "CLAPIT SOLUTIONS offers full-spectrum ecommerce solutions — strategy, design, development, and optimization — empowering your business to sell more effectively online.",
        items: [
          {
            id: 1,
            title: "Ecommerce Strategy & Architecture",
            description:
              "Plan the right tech stack and system design aligned with business goals and scalability needs.",
            icon: <FaBrain className='text-dark' />,
          },
          {
            id: 2,
            title: "Storefront UI/UX Design",
            description:
              "Create visually appealing, conversion-optimized interfaces that keep shoppers engaged.",
            icon: <FaShoppingBag className='text-mediumDark' />,
          },
          {
            id: 3,
            title: "Custom Frontend Development",
            description:
              "Develop responsive, high-speed interfaces using React, Next.js, or Vue frameworks.",
            icon: <FaPaintBrush className='text-dark' />,
          },
          {
            id: 4,
            title: "Inventory & Catalog Management",
            description:
              "Organize product categories, variants, and stock tracking for smooth store operations.",
            icon: <FaBoxes className='text-dark' />,
          },
          {
            id: 5,
            title: "Checkout & Payment Experience",
            description:
              "Build simplified checkout processes with saved carts, discounts, and secure gateways.",
            icon: <FaCreditCard className='text-dark' />,
          },
          {
            id: 6,
            title: "Email & CRM Integration",
            description:
              "Integrate marketing tools for retargeting, customer retention, and loyalty programs.",
            icon: <FaEnvelopeOpenText className='text-dark' />,
          },
          {
            id: 7,
            title: "SEO & Conversion Optimization",
            description:
              "Enhance visibility and conversion with structured data, faster load speeds, and analytics insights.",
            icon: <FaRocket className='text-dark' />,
          },
          {
            id: 8,
            title: "Support & Maintenance",
            description:
              "Keep your store updated, secure, and optimized through ongoing technical support.",
            icon: <FaWrench className='text-dark' />,
          },
        ],
      },
  
      techCapabilities: {
        heading: "Ecommerce Technology Expertise",
        items: [
          {
            id: 1,
            title: "Ecommerce Platforms",
            icon: <FrontendIcon />,
            technologies: [
              { name: "Shopify", icon: <ShopifyIcon color={'#f84b07'} /> },
              { name: "WooCommerce", icon: <WooCommerceIcon color={'#f84b07'} /> },
              { name: "Magento", icon: <MagentoIcon color={'#f84b07'} /> },
              { name: "BigCommerce", icon: <BigCommerceIcon color={'#f84b07'} /> },
            ],
          },
          {
            id: 2,
            title: "Frontend & Backend Frameworks",
            icon: <BackendIcon />,
            technologies: [
              { name: "Next.js", icon: <NextjsIcon color={'#f84b07'} /> },
              { name: "Vue.js", icon: <VueIcon color={'#f84b07'} /> },
              { name: "Node.js", icon: <NodejsIcon color={'#f84b07'} /> },
            ],
          },
          {
            id: 3,
            title: "Integrations & Analytics Tools",
            icon: <MobileIcon />,
            technologies: [
              { name: "PayPal", icon: <PayPalIcon color={'#f84b07'} /> },
              { name: "Google Analytics", icon: <GoogleAnalyticsIcon color={'#f84b07'} /> },
              { name: "Klaviyo", icon: <KlaviyoIcon color={'#f84b07'} /> },
            ],
          },
        ],
      },
  
      industry: {
        heading: "Industries We Serve with Ecommerce Expertise",
        paragraph:
          "CLAPIT SOLUTIONS develops ecommerce platforms tailored to different industries — helping businesses deliver exceptional online shopping experiences.",
        industries: [
          {
            icon: <FaHospital className='text-mediumDark' />,
            title: "Healthcare",
            description:
              "Build online stores for health products, supplements, and equipment suppliers.",
            href: "/industries/development/healthcare-app-development-using-ai",
          },
          {
            icon: <FaMoneyBill className='text-mediumDark' />,
            title: "Finance",
            description:
              "Develop ecommerce solutions for financial services, subscriptions, and fintech tools.",
            href: "/industries/development/fintech-app-development-using-ai",
          },
          {
            icon: <FaShoppingCart className='text-dark' />,
            title: "Retail & Ecommerce",
            description:
              "Launch high-performance online stores for B2B and B2C retail businesses.",
            href: "/industries/development/ecommerce-app-development-using-ai",
          },
          {
            icon: <FaFootballBall className='text-mediumDark' />,
            title: "Sports & Entertainment",
            description:
              "Sell merchandise, memberships, and event passes through ecommerce portals.",
            href: "/industries/development/fantasy-sports-app-development-using-ai",
          },
          {
            icon: <FaDumbbell className='text-mediumDark' />,
            title: "Fitness & Wellness",
            description:
              "Develop online stores for fitness gear, gyms, and nutrition brands.",
            href: "/industries/development/healthcare-app-development-using-ai",
          },
          {
            icon: <FaCloud className='text-mediumDark' />,
            title: "SaaS & Digital Products",
            description:
              "Implement billing and ecommerce infrastructure for SaaS subscriptions and digital tools.",
            href: "/industries/development/saas-app-development-using-ai",
          },
          {
            icon: <FaMobileAlt className='text-mediumDark' />,
            title: "Mobile Apps & Startups",
            description:
              "Enable in-app shopping and mobile-first ecommerce for growing digital brands.",
            href: "/industries/development/mobile-development-using-ai",
          },
          {
            icon: <FaChartBar className='text-mediumDark' />,
            title: "CRM & Business Tools",
            description:
              "Extend CRM platforms with ecommerce modules to streamline product and deal management.",
            href: "/industries/development/crm-app-development-using-ai",
          },
        ],
      },
  
      faq: {
        title: "Frequently Asked Questions",
        subtitle:
          "Your ecommerce development questions — answered by CLAPIT SOLUTIONS experts.",
        faqs: [
          {
            title: "Do you offer fully custom ecommerce development?",
            answer:
              "Yes, we build both from scratch and on leading platforms like Shopify, WooCommerce, or Magento — depending on your business needs.",
          },
          {
            title: "Can I sell subscriptions and digital goods?",
            answer:
              "Absolutely! We support digital products, memberships, and recurring billing models for subscription-based sales.",
          },
          {
            title: "Do you handle logistics and payment setup?",
            answer:
              "Yes, we integrate global payment systems, shipping solutions, and tax automation for smooth operations.",
          },
          {
            title: "Will my store be SEO-optimized?",
            answer:
              "Definitely. We follow ecommerce SEO best practices — including schema markup, meta structure, and page speed improvements.",
          },
        ],
      },
    },
];

export const categories = [
  { id: "development", label: "Development" },
  { id: "marketing", label: "Marketing" },
];

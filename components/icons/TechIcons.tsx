import {
  // Frontend Icons
  SiCss3 as CSSIcon,
  SiHtml5 as HTMLIcon,
  SiAngular as AngularIcon,
  SiJavascript as JSIcon,
  SiReact as ReactIcon,
  SiVuedotjs as VueIcon,
  SiMeteor as MeteorIcon,
  SiNextdotjs as NextjsIcon,
  SiEmberdotjs as EmberIcon,
  // Mobile Development
  SiSwift as SwiftIcon,
  SiKotlin as KotlinIcon,
  SiFirebase as FirebaseIcon,
  SiExpress as ExpressIcon,
  SiBitrise as BitriseIcon,
  SiAppium as AppiumIcon,
  SiTorbrowser as BrowserStackIcon,
  SiJest as JestIcon,
  // Backend & Database
  SiSupabase as SupabaseIcon,
  SiDotnet as DotNetIcon,
  SiOpenjdk as JavaIcon,
  SiPython as PythonIcon,
  SiPhp as PHPIcon,
  SiNodedotjs as NodejsIcon,
  SiGo as GoIcon,
  SiAndroid as AndroidIcon,
  SiFlutter as FlutterIcon,
  SiApachecordova as CordovaIcon,
  SiApple as iOSIcon,
  // Integrations & DevOps
  SiStripe as StripeIcon,
  SiVercel as VercelIcon,
  SiAwslambda as AWSIcon,
  SiHeroku as HerokuIcon,
  // AWS Icons
  SiAmazon as KinesisIcon,
  SiRabbitmq as RabbitMQIcon,
  // Database Icons
  SiMysql as MySQLIcon,
  SiPostgresql as PostgreSQLIcon,
  SiOracle as OracleIcon,
  SiApachecassandra as CassandraIcon,
  SiMongodb as MongoDBIcon,
  // Cloud Icons
  SiGooglecloud as DatastoreIcon,
  SiApache,
  SiAmazondynamodb,
  // Design Tool Icons
  SiFigma as FigmaIcon,
  SiAdobeillustrator as AdobeIllustratorIcon,
  SiAdobephotoshop as AdobePhotoshopIcon,
  SiCanva as CanvaIcon,
  SiZebpay as ZeplinIcon,
  SiStorybook as StorybookIcon,
  SiSketch as SketchIcon,
  // Marketing & CRM Icons
  SiHubspot as HubSpotIcon,
  SiMailchimp as MailchimpIcon,
  SiTicktick as ActiveIcon,
  // Analytics & Ad Platforms
  SiGoogleanalytics as GoogleAnalyticsIcon,
  SiGoogleads as GoogleAdsIcon,
  SiMeta as MetaAdsIcon,
  SiTiktok as TikTokAdsIcon,
  SiLinkedin as LinkedInAdsIcon,
  SiSemrush as SemrushIcon,
  SiTidal as AhrefsIcon,
  SiHotjar as HotjarIcon,
  SiMixpanel as MixpanelIcon,
  // Launch & Campaign Tools
  SiNotion as NotionIcon,
  SiClickup as ClickFunnelsIcon,
  SiWebflow as WebflowIcon,
  // Automation Tools
  SiKlarna as KlaviyoIcon,
  SiZapier as ZapierIcon,
  // Big Data & Stream Processing Icons
  SiApachekafka as KafkaIcon,
  SiApachespark as SparkIcon,
  SiApacheflink as FlinkIcon,
  SiApachehbase as HBaseIcon,
  SiApachenifi as NifiIcon,
  SiApachehive as HiveIcon,
  SiHuggingface,
  SiOpenai,
  SiDocker,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
  // E-commerce Platform Icons
  SiShopify as ShopifyIcon,
  SiWoo as WooCommerceIcon,
  SiMagento as MagentoIcon,
  SiBigcommerce as BigCommerceIcon,
  SiPaypal as PayPalIcon,
} from "react-icons/si";

import {
  FaCode as FrontendIcon,
  FaServer as BackendIcon,
  FaMobile as MobileIcon,
  FaDatabase as DatabaseIcon,
  FaCloud as CloudDBIcon,
  FaChartBar as BigDataIcon,
  FaCloud,
  FaDatabase,
  // Social Media & Monitoring Icons
  FaSearchDollar as MeltwaterIcon,
  FaChartLine as BrandwatchIcon,
  FaNewspaper as CisionIcon,
  FaChartPie as BuzzSumoIcon,
  FaUserFriends as UpfluenceIcon,
  FaUsers as HeepsyIcon,
  FaCrown as CreatorIQIcon,
  FaShareSquare as SproutSocialIcon,
  FaStream as HootsuiteIcon,
  FaBrain,
} from "react-icons/fa";

// Reuse React icon for React Native
const ReactNativeIcon = ReactIcon;

// Reuse AWS icon for some services
const ElastiCacheIcon = KinesisIcon;
const BlobStorageIcon = FaCloud;
const DataLakeIcon = FaCloud;
const SQLDatabaseIcon = FaDatabase;
const SynapseIcon = KinesisIcon;
const RDSIcon = KinesisIcon;
const RedshiftIcon = KinesisIcon;
const CosmosDBIcon = FaCloud;
const CloudSQLIcon = DatastoreIcon;
const DynamoDBIcon = SiAmazondynamodb;

// Reuse Azure icon (using cloud icon) for Azure services
const EventHubsIcon = FaCloud;
const StreamAnalyticsIcon = FaCloud;

// Reuse Apache icon for some services
const StormIcon = SiApache;

// Reuse .NET icon for Xamarin
const XamarinIcon = DotNetIcon;

// Reuse PWA icon for PWA
const PWAIcon = MobileIcon;

// Reuse Ionic icon for Ionic
const IonicIcon = CordovaIcon;

// Using generic database icon for SQL Server
const SQLServerIcon = FaDatabase;

// Using FaBrain icon for XGBoost since there's no official icon
const XGBoostIcon = FaBrain;

export {
  // Section Icons
  FrontendIcon,
  BackendIcon,
  MobileIcon,
  DatabaseIcon,
  CloudDBIcon,
  BigDataIcon,
  // Mobile Development
  SwiftIcon,
  KotlinIcon,
  FirebaseIcon,
  ExpressIcon,
  BitriseIcon,
  AppiumIcon,
  BrowserStackIcon,
  JestIcon,
  // Backend & Database
  SupabaseIcon,
  DotNetIcon,
  JavaIcon,
  PythonIcon,
  PHPIcon,
  NodejsIcon,
  GoIcon,
  AndroidIcon,
  FlutterIcon,
  CordovaIcon,
  iOSIcon,
  XamarinIcon,
  PWAIcon,
  IonicIcon,
  ReactNativeIcon,
  KinesisIcon,
  StormIcon,
  EventHubsIcon,
  KafkaIcon,
  SparkIcon,
  StreamAnalyticsIcon,
  FlinkIcon,
  RabbitMQIcon,
  SQLServerIcon,
  MySQLIcon,
  PostgreSQLIcon,
  OracleIcon,
  HBaseIcon,
  NifiIcon,
  CassandraIcon,
  HiveIcon,
  MongoDBIcon,
  DynamoDBIcon,
  RDSIcon,
  RedshiftIcon,
  ElastiCacheIcon,
  CosmosDBIcon,
  BlobStorageIcon,
  DataLakeIcon,
  SQLDatabaseIcon,
  SynapseIcon,
  DatastoreIcon,
  CloudSQLIcon,
  // Integrations & DevOps
  StripeIcon,
  VercelIcon,
  AWSIcon,
  HerokuIcon,
  // E-commerce Platform Icons
  ShopifyIcon,
  WooCommerceIcon,
  MagentoIcon,
  BigCommerceIcon,
  PayPalIcon,
  // Design Tool Icons
  FigmaIcon,
  AdobeIllustratorIcon,
  AdobePhotoshopIcon,
  CanvaIcon,
  ZeplinIcon,
  StorybookIcon,
  SketchIcon,
  // Marketing & CRM Icons
  HubSpotIcon,
  MailchimpIcon,
  ActiveIcon,
  // Analytics & Ad Platforms
  GoogleAnalyticsIcon,
  GoogleAdsIcon,
  MetaAdsIcon,
  TikTokAdsIcon,
  LinkedInAdsIcon,
  SemrushIcon,
  AhrefsIcon,
  HotjarIcon,
  MixpanelIcon,
  // Launch & Campaign Tools
  NotionIcon,
  ClickFunnelsIcon,
  WebflowIcon,
  // Automation Tools
  KlaviyoIcon,
  ZapierIcon,
  // AI & ML Tools
  SiTensorflow as TensorFlowIcon,
  SiPytorch as PyTorchIcon,
  SiScikitlearn as ScikitLearnIcon,
  SiOpenai as OpenAIIcon,
  SiHuggingface as HuggingFaceIcon,
  SiDocker as DockerIcon,
  // Social Media & Monitoring Icons
  MeltwaterIcon,
  BrandwatchIcon,
  CisionIcon,
  BuzzSumoIcon,
  UpfluenceIcon,
  HeepsyIcon,
  CreatorIQIcon,
  SproutSocialIcon,
  HootsuiteIcon,
  CSSIcon,
  HTMLIcon,
  AngularIcon,
  JSIcon,
  ReactIcon,
  VueIcon,
  MeteorIcon,
  NextjsIcon,
  EmberIcon,
  XGBoostIcon,
};

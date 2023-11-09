// local imports
import prestigeIcon from "./assets/images/medal_prestige.png";
import warrantyIcon from "./assets/images/security.png";
import paymentIcon from "./assets/images/payment_diversity.svg";
import Fleur from "./assets/images/Fleur-big.jpg";
import Eden from "./assets/images/Eden-medium.jpg";
import MitiOne from "./assets/images/MitiOne-sail.jpg";
import suporticon from "./assets/images/payment_diversity.svg"
import { FaSquareWhatsapp, FaFacebookF, FaSquareYoutube } from "react-icons/fa6";
export const heroTitle = "Bring Serenity to Your Place With Interior Plants";
export const heroSubtitle =
  "find your dream plant for your home decoration with us, and we will make it happen.";

export const services = [
  {
    title: "Pretige",
    subtitle: "We have years of prestige in the field",
    icon: prestigeIcon,
  },
  {
    title: "Payments",
    subtitle: "You have different payment methods available, including cryptos",
    icon: paymentIcon,
  },
  {
    title: "Security",
    subtitle:
      "At all times we are monitoring the navigation location of our fleet.",
    icon: warrantyIcon,
  },
];

export const productsTitle = "Best Selling Products";
export const productsBtnText = "See All";

export const products = [
  {
    id: 1,
    img: Fleur,
    title: "Fleur",
    description:
      "The first yacht in Sunseeker's 116 Series to come onto the charter market, 'FLEUR' combines comfort and style throughout. Smartly designed in a contemporary, bold style, the interior and  exterior living spaces have been carefully maximised to offer  unparalleled comfort and luxury.",
    li_1: "5",
    li_2: "12",
    li_3: "7",
  },
  {
    id: 2,
    img: Eden,
    title: "Eden",
    description:
      'Winner of the "REVELATION OF THE YEAR" award at the famous World Yachts Trophies in Cannes in 2019, the MAIORA 30 WALKAROUND has an overall length of 30.50 metres but is still registered as a boat within 24 metres. The innovative "walk-around" solution connects everything on a single level from the flybridge to the bow without stairs.',
    li_1: "5 ",
    li_2: "10",
    li_3: "5",
  },
  {
    id: 3,
    img: MitiOne,
    title: "Miti One",
    description:
      "Designed and engineered by a multi-national team according to the requirements of a 40 years sailing experienced Owner “Miti One” offers an impressive volume of 198GT and can accommodate up to 11 guests in one master, 3 double cabins including one with pullman bed and one twin cabin, each with ensuite bathrooms.",
    li_1: "5",
    li_2: "11",
    li_3: "6",
  },
];

export const footerLinks = [
  {
    title: "Support",
    links: ["About Us", "Terms of service", "Privacy Policy"],
  },
 
];

export const socialIcons = [
   {
    title: "Our Social Networks",
    links: suporticon,
  },
]

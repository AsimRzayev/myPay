import aboutImg from "../../assets/paymentImages/about.png";
import adminImg from "../../assets/paymentImages/adminpay.png";
import bankImg from "../../assets/paymentImages/bankk.png";
import funImg from "../../assets/paymentImages/game.png";
import InternetImg from "../../assets/paymentImages/internet.png";
import kommunImg from "../../assets/paymentImages/kommunal.png";
import mobilOpImg from "../../assets/paymentImages/mobilOp.png";
import phoneImg from "../../assets/paymentImages/phone.png";
import TvImg from "../../assets/paymentImages/tv.png";

export const PAYMENT_BUTTONS = [
  {
    id: 1,
    icon: mobilOpImg,
    heading: "Mobil Operatorlar",
    url: "../Payment/MobileOperators/MobileOperator.jsx",
    iconBg: "rgba(55, 191, 254, 0.1)",
  },
  {
    id: 2,
    icon: InternetImg,
    heading: "İnternet",
    url: "/internet",
    iconBg: "rgba(255, 54, 131, 0.1)",
  },
  {
    id: 3,
    icon: kommunImg,
    heading: "Komunal xidmətlər",
    url: "/kommunal",
    iconBg: "rgba(254, 144, 1, 0.1)",
  },
  {
    id: 4,
    icon: phoneImg,
    heading: "Telefon",
    url: "/phone",
    iconBg: "rgba(55, 191, 254, 0.1)",
  },
  {
    id: 5,
    icon: TvImg,
    heading: "TV",
    url: "/tv",
    iconBg: "rgba(139, 97, 244, 0.1)",
  },
  {
    id: 6,
    icon: adminImg,
    heading: "İnzibati cərimə ödənişləri",
    url: "/adminpay",
    iconBg: "rgba(66, 218, 94, 0.1)",
  },
  {
    id: 7,
    icon: funImg,
    heading: "Əyləncə",
    url: "/fun",
    iconBg: "rgba(139, 97, 244, 0.1)",
  },
  {
    id: 8,
    icon: bankImg,
    heading: "Bank xidmәtlәri, Sığorta",
    url: "/bank",
    iconBg: "rgba(61, 184, 104, 0.1)",
  },
  {
    id: 9,
    icon: aboutImg,
    heading: "Digər",
    url: "/about",
    iconBg: "rgba(55, 191, 254, 0.1)",
  },
];

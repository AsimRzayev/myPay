import React from "react";

import DefaultPage from "./DefaultPage";
import MobileOperator from "./MobileOperator";
import Tv from "./Tv";

export default function PaymentType({ type }) {
  switch (type) {
    case "mobile":
      return <MobileOperator />;
      break;
    case "internet":
      return <MobileOperator />;
      break;
    case "tv":
      return <Tv />;
      break;
    default:
      return <DefaultPage />;
  }
}
